import React from "react";


export const NavBar = ({ tabs, children, selectedTab }) => {
    return <div>
        <ul>
            {tabs.map(tab => {
                <li onClick={selectedTab()}>
                    {tab}
                </li>
            }
            )}
        </ul>
        {children}
    </div>
}
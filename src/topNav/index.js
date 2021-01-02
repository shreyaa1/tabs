import React, { useState } from "react";

import "./topNav.css";

export const MainTab = () => {

    const list = () => {
        const tabs = [
            {
                name: 'Home',
                component: <div>home comp</div>
            },
            {
                name: 'News',
                component: <div>news</div>
            },
            {
                name: 'About',
                component: <div>about</div>
            },
            {
                name: 'tab 1',
                component: <div>home comp</div>
            },
            {
                name: 'tab 2',
                component: <div>news</div>
            },
            {
                name: 'tab 3',
                component: <div>about</div>
            },
            {
                name: 'tab 4',
                component: <div>home comp</div>
            },
            {
                name: 'tab 5',
                component: <div>news</div>
            },
            {
                name: 'tab 6',
                component: <div>about</div>
            },
        ]
        return tabs
    }

    const [selectedItem, handleSelectedItem] = useState(0)

    const renderChild = (index) => {
        handleSelectedItem(index)
    }

    return <div className='wrapper'>
        <ul className='tab-list'>
            <div>left</div>
            {list().map((tab, index) => {
                return <>
                    <li key={tab} onClick={() => renderChild(index)}>
                        {tab.name}
                    </li>
                </>
            }
            )}
                <div>right</div>
        </ul>

        <div>

            {list().map((tab, index) => {
                return <>
                    {selectedItem === index ? <> {tab.component}</>
                        : null}
                </>
            }
            )}
        </div>


    </div>
} 








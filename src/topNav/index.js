import React, { useState } from "react";


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
        ]
        return tabs
    }

    const [selectedItem, handleSelectedItem] = useState(0)

    const renderChild = (index) => {
        handleSelectedItem(index)
    }

    return <div>
        <ul>
            {list().map((tab, index) => {
                return <>
                    <li key={tab} onClick={() => renderChild(index)}>
                        {tab.name}
                    </li>
                </>
            }
            )}
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
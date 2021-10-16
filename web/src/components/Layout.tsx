import React from 'react'
import SidebarContainer from './common/sidebar/SidebarContainer'
import { SiteNav } from './SiteNav'

export const Layout = (props) => {
    return (
        <div>
            <SiteNav />
            <div className="layout">
                <main id="main">
                    {props.children}
                </main>
            </div>
        </div>
    )   
}
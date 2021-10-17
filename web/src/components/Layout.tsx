import React from 'react'
import SiteNav from './SiteNav'

const Layout = (props: { children: any }) => {

    const { children } = props

    return (
        <div>
            <SiteNav />
            <div className="layout">
                <main id="main">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout

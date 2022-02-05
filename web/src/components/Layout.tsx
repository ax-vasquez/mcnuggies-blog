import React from 'react'
import SiteNav from './SiteNav'
import * as styles from './Layout.module.scss'

const Layout = (props: { children: any }) => {

    const { children } = props

    return (
        <div className={styles.container}>
            <SiteNav />
            <div>
                <main id="main">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout

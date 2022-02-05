import React from 'react'
import * as styles from './Sidebar.module.scss'

const SidebarBody = (props: { children: any }) => {

    const { children } = props

    return (
        <div className={styles.sidebarBody}>
            {children}
        </div>
    )
}

export default SidebarBody

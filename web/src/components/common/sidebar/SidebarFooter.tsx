import React from 'react'
import * as styles from './Sidebar.module.scss'

const SidebarFooter = () => {

    return (
        <div className={styles.footer}>
            <p style={{
                textAlign: `center`,
                fontSize: `12px`,
            }}
            >
                ©
                {new Date().getFullYear()}
            </p>
        </div>
    )
}

export default SidebarFooter

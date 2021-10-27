import { Link } from 'gatsby'
import React from 'react'

const FOOTER_ITEMS = [
    'privacy',
    'contact'
]

const SidebarFooter = () => {
    return (
        <div className="sidebar-footer">
            <div style={{
                textAlign: 'center'
            }}>
                {FOOTER_ITEMS.map(item => (
                    <div style={{
                        display: 'inline-block',
                        marginLeft: '0.5em',
                        marginRight: '0.5em'
                    }}>
                        <Link to={'#'} >{item}</Link>
                    </div>
                ))}
            </div>
            <p style={{
                textAlign: 'center',
                fontSize: '12px',
            }}>©{new Date().getFullYear()}</p>
        </div>
    )
}

export default SidebarFooter

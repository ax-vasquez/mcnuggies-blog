import React from 'react'

const SidebarBody = (props: { children: any }) => {

    const { children } = props

    return (
        <div className="sidebar-body">
            {children}
        </div>
    )
}

export default SidebarBody

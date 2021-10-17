import { Link } from 'gatsby'
import React from 'react'
import { BiRightArrow } from '@react-icons/all-files/bi/BiRightArrow'
import { SidebarMenuOptions } from '../../../../types'

const SidebarBodyList = ({
    options,
}: {
    options: SidebarMenuOptions
}) => {
    return (
        <div>
            {Object.keys(options).map((key) => {
                const { url, label } = options[key]
                return (
                    <Link key={key} to={url} className="sidebar-menu-option" data-cy={`sidebar-menu-option-${label.toLowerCase().replace(' ', '-')}`}>
                        <div className="sidebar-menu-option-icon">
                            <BiRightArrow />
                        </div>
                        <div className="sidebar-menu-option-label">{label}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default SidebarBodyList

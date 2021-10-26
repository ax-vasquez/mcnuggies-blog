import { Link } from 'gatsby'
import React from 'react'
import { BiRightArrow } from '@react-icons/all-files/bi/BiRightArrow'
import { SidebarMenuOptions } from '../../../../types'
import { Location, LocationContext } from '@reach/router';

const SidebarBodyList = ({
    options,
}: {
    options: SidebarMenuOptions
}) => {

    const isActiveItem = (label: string, locationProps: LocationContext) => {
        const { location } = locationProps
        switch(label) {
            case 'Home': {
                return location.pathname === '/'
            }
            case 'About':
            case 'Blog': {
                return location.pathname.includes(label.toLowerCase())
            }
        }
        
    }

    return (
        <Location>
            {locationProps => (
                <div>
                    {Object.keys(options).map((key) => {
                        const { url, label } = options[key]
                        const shouldBounce = isActiveItem(label, locationProps)
                        return (
                            <Link key={key} to={url} className="sidebar-menu-option" data-cy={`sidebar-menu-option-${label.toLowerCase().replace(' ', '-')}`}>
                                <div className="sidebar-menu-option-icon">
                                    <BiRightArrow className={ shouldBounce ? 'root-menu-item-icon-active' : null }/>
                                </div>
                                <div className="sidebar-menu-option-label">{label}</div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </Location>
    )
}

export default SidebarBodyList

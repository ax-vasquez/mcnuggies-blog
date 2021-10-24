import React, { useState } from 'react'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import SidebarContainer from './common/sidebar/SidebarContainer'

type NavOptionData = {
    [key: string]: {
        label: string
        url: string
    }
}

const OPTIONS = {
    home: {
        label: 'Home',
        url: '/',
    },
    blog: {
        label: 'Blog',
        url: '/blog',
    },
    about: {
        label: 'About',
        url: '/about',
    },
} as NavOptionData

/**
 * Defines the site navigation layout, which consists of the top navbar as well as the sidebar.
 *
 * @returns
 */
const SiteNav = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpenSidebar = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <div id="nav" className="nav">
                <BiMenu data-cy="sidebar-btn" size={40} className="sidebar-menu-btn" onClick={toggleOpenSidebar} />
            </div>
            <SidebarContainer options={OPTIONS} isOpen={isOpen} />
        </>
    )
}

export default SiteNav

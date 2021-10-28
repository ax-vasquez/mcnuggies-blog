import React, { useState } from 'react'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import SidebarContainer from './common/sidebar/SidebarContainer'
import { ModalData } from '../types/modal'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowSidebar } from '../slices/siteNavSlice'

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

    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state: any) => state.nav.showSidebar)
    const modal = useSelector((state: any) => state.nav.modal)

    return (
        <>
            <div id="nav" className="nav">
                <BiMenu data-cy="sidebar-btn" size={40} className="sidebar-menu-btn" onClick={() => dispatch(toggleShowSidebar(null))} />
            </div>
            <SidebarContainer options={OPTIONS} isOpen={isSidebarOpen} />
            {/* TODO: Privacy and contact modals */}
            {!!modal ? <div>MODAL</div> : null}
        </>
    )
}

export default SiteNav

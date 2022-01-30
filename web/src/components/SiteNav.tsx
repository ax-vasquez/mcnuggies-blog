import React, { useRef } from 'react'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { useDispatch, useSelector } from 'react-redux'
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from "gatsby"
import SidebarContainer from './common/sidebar/SidebarContainer'
import { toggleShowSidebar } from '../slices/siteNavSlice'
import * as styles from './SiteNav.module.scss'

type NavOptionData = {
    [key: string]: {
        label: string
        url: string
    }
}

const OPTIONS = {
    home: {
        label: `Home`,
        url: `/`,
    },
    blog: {
        label: `Blog`,
        url: `/blog`,
    },
    projects: {
        label: `Projects`,
        url: `/projects`,
    },
    about: {
        label: `About`,
        url: `/about`,
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
    const parentNavRef = useRef(null)

    return (
        <>
            <div className={styles.navContainer} id="nav" ref={parentNavRef}>
                <BiMenu className={styles.menuButton} id="sidebar-btn" data-cy="sidebar-btn" size={40} onClick={() => dispatch(toggleShowSidebar())} />
                <div className={styles.appIcon}>
                    <StaticImage src="../images/mcnuggies.png" alt="app-icon" height={40} width={40} onClick={() => navigate(`/`)} />
                </div>
            </div>
            <SidebarContainer options={OPTIONS} isOpen={isSidebarOpen} />
            <div className={`${styles.sidebarBackgroundOverlay} ${isSidebarOpen ? styles.active : styles.inactive}`} />
        </>
    )
}

export default SiteNav

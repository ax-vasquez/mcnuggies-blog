import React, { useRef } from 'react'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import SidebarContainer from './common/sidebar/SidebarContainer'
import { toggleShowSidebar } from '../slices/siteNavSlice'
import { THEME } from '../style/colors'

const StyledSidebarMenuButton = styled(BiMenu)`
    margin-left: 0.5rem;
    border-radius: 3px;
    color: ${THEME.light.font.nav};
    &:hover {
        background-color: ${THEME.light.background.navHovered};
    }
`

const StyledNavDiv = styled.div`
    top: 0px;
    height: 3rem;
    background-color: ${THEME.light.background.nav};
    position: sticky;
    width: 100%;
    z-index: 30;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    font-size: 1.125rem;
    line-height: 1.75rem;
    display: flex;
    align-items: center;
`

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
    projects: {
        label: 'Projects',
        url: '/projects',
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
    const parentNavRef = useRef(null)

    return (
        <>
            <StyledNavDiv id="nav" ref={parentNavRef}>
                <StyledSidebarMenuButton id="sidebar-btn" data-cy="sidebar-btn" size={40} onClick={() => dispatch(toggleShowSidebar())} />
            </StyledNavDiv>
            <SidebarContainer options={OPTIONS} isOpen={isSidebarOpen} />
        </>
    )
}

export default SiteNav

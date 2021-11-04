import React from 'react'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import SidebarContainer from './common/sidebar/SidebarContainer'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowSidebar } from '../slices/siteNavSlice'
import styled from "styled-components"
import { BG_COLORS, FONT_COLORS } from '../style/colors'

const StyledSidebarMenuButton = styled(BiMenu)`
    padding-left: 0.5rem;
    color: ${FONT_COLORS.nav.light};
    &:hover {
        color: ${FONT_COLORS.nav.lightHovered};
    }
`

const StyledNavDiv = styled.div`
    top: 0px;
    height: 3rem;
    background-color: ${BG_COLORS.nav.light};
    position: sticky;
    width: 100%;
    z-index: 20;
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

    return (
        <>
            <StyledNavDiv id="nav">
                <StyledSidebarMenuButton data-cy="sidebar-btn" size={40} onClick={() => dispatch(toggleShowSidebar(null))} />
            </StyledNavDiv>
            <SidebarContainer options={OPTIONS} isOpen={isSidebarOpen} />
        </>
    )
}

export default SiteNav

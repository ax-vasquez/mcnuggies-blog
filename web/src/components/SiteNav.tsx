import React, { useRef } from 'react'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from "gatsby"
import SidebarContainer from './common/sidebar/SidebarContainer'
import { toggleShowSidebar } from '../slices/siteNavSlice'
import { THEME } from '../style/colors'

const StyledSidebarMenuButton = styled(BiMenu)`
    margin-left: 0.5rem;
    border-radius: 3px;
    z-index: 45;
    color: ${THEME.light.font.nav};
    &:hover {
        background-color: ${THEME.light.background.navHovered};
    }
`

const StyledNavDiv = styled.div`
    top: 0px;
    height: auto;
    background-color: ${THEME.light.background.nav};
    position: sticky;
    width: 100%;
    z-index: 40;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    font-size: 1.125rem;
    line-height: 1.75rem;
    display: flex;
    align-items: center;
`

const StyledSidebarBackground = styled(`div`)<{ isOpen: boolean }>`
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    background-color: #000000;
    opacity: 0;
    visibility: hidden;
    position: fixed;
    z-index: 15;
    width: 100%;
    height: 100%;
    ${(props) => props.isOpen && `
        visibility: visible;
        transition: opacity 150ms;
        opacity: 0.5;
    `}
`

const StyledAppIcon = styled.div`
    margin-left: auto;
    margin-right: .5rem;
    right: 0;
    margin-top: .5rem;
    margin-bottom: .5rem;
`

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
            <StyledNavDiv id="nav" ref={parentNavRef}>
                <StyledSidebarMenuButton id="sidebar-btn" data-cy="sidebar-btn" size={40} onClick={() => dispatch(toggleShowSidebar())} />
                <StyledAppIcon>
                    <StaticImage src="../images/mcnuggies.png" alt="app-icon" height={40} width={40} onClick={() => navigate(`/`)} />
                </StyledAppIcon>
            </StyledNavDiv>
            <SidebarContainer options={OPTIONS} isOpen={isSidebarOpen} />
            <StyledSidebarBackground isOpen={isSidebarOpen} />
        </>
    )
}

export default SiteNav

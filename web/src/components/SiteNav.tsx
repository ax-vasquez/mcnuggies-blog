import React from 'react'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import SidebarContainer from './common/sidebar/SidebarContainer'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowSidebar } from '../slices/siteNavSlice'
import styled from "styled-components"
import tw from "twin.macro"

const StyledSidebarMenuButton = styled(BiMenu).attrs({
    className: 'text-white pl-2'
})`
    ${tw`hover:text-gray-300`}
`

const StyledNavDiv = styled.div.attrs({
    className: 'bg-gray-800 h-12 top-0'
})`
    ${tw`sticky`}
    ${tw`w-full`}
    ${tw`z-20`}
    ${tw`shadow`}
    ${tw`text-lg`}
    ${tw`flex items-center`}
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
    const showModal = useSelector((state: any) => state.nav.showModal)

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

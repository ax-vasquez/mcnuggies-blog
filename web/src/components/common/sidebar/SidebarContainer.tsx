import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarMenuOptions } from '../../../types/sidebar'
import SidebarBodyList from './SidebarBodyList'
import SidebarBodyText from './SidebarBodyText'
import SidebarBody from './SidebarBody'
import SidebarFooter from './SidebarFooter'
import { THEME } from '../../../style/colors'
import { toggleShowSidebar } from '../../../slices/siteNavSlice'
import { device } from '../../../style/devices'

const StyledSidebar = styled('div')<{ isOpen: boolean }>`
    --translate-x: -100%;
    padding-top: 4rem;
    height: 100%;
    position: fixed;
    z-index: 10;
    top: 0px;
    left: 0px;
    overflow: hidden;
    text-overflow: clip;
    background-color: ${THEME.light.background.sidebar};
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: translateX(var(--translate-x));
    z-index: 20;
    ${(props) => props.isOpen && `
        --translate-x: 0px;
    `}
    @media ${device.mobileS} {
        width: 50%;
    }
    @media ${device.tablet} {
        width: 20rem;
    }
`

/**
 * Container component for the sidebar
 */
const SidebarContainer = ({
    options,
    isOpen,
}: {
    options: SidebarMenuOptions
    isOpen: boolean
}) => {

    const dispatch = useDispatch()
    const navRef = useRef(null)
    const isSidebarOpen = useSelector((state: any) => state.nav.showSidebar)

    useEffect(() => {
        function handleClickOutside(event) {
            const excludedIds = [
                'nav',
                'sidebar-btn',
            ]
            if (navRef.current && !navRef.current.contains(event.target) && !excludedIds.includes(event.target.id)) {
                if (isSidebarOpen) {
                    dispatch(toggleShowSidebar())
                }
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [navRef, isSidebarOpen])

    return (
        <StyledSidebar
          isOpen={isOpen}
          id="sidebar"
          data-cy="sidebar"
          ref={navRef}
        >
            <SidebarBody>
                <SidebarBodyText />
                <SidebarBodyList options={options} />
                <SidebarFooter />
            </SidebarBody>
        </StyledSidebar>
    )
}

export default SidebarContainer

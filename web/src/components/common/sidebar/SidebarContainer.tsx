import React from 'react'
import { SidebarMenuOptions } from '../../../types/sidebar'
import SidebarBodyList from './SidebarBodyList'
import SidebarBodyText from './SidebarBodyText'
import SidebarBody from './SidebarBody'
import SidebarFooter from './SidebarFooter'
import styled from 'styled-components'
import { BG_COLORS } from '../../../style/colors'

const StyledSidebar = styled('div')<{ isOpen: boolean }>`
    --translate-x: -100%;
    padding-top: 4rem;
    height: 100%;
    width: 20rem;
    position: fixed;
    z-index: 10;
    top: 0px;
    left: 0px;
    overflow: hidden;
    text-overflow: clip;
    background-color: ${BG_COLORS.sidebar.light};
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: translateX(var(--translate-x));
    ${(props) => props.isOpen && `
        --translate-x: 0px;
    `}
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

    return (
        <StyledSidebar
            isOpen={isOpen}
          id="sidebar"
          data-cy="sidebar"
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

import React from 'react'
import { SidebarMenuOptions } from '../../../types/sidebar'
import SidebarBodyList from './SidebarBodyList'
import SidebarBodyText from './SidebarBodyText'
import SidebarBody from './SidebarBody'
import SidebarFooter from './SidebarFooter'

/**
 * Container component for the sidebar
 *
 */
const SidebarContainer = ({
    options,
    isOpen,
}: {
    options: SidebarMenuOptions
    isOpen: boolean
}) => {

    return (
        <div
          className={`sidebar ${(isOpen ? 'transform translate-x-0' : 'transform -translate-x-full')}`}
          id="sidebar"
          data-cy="sidebar"
        >
            <SidebarBody>
                <SidebarBodyText />
                <SidebarBodyList options={options} />
                <SidebarFooter />
            </SidebarBody>
        </div>
    )
}

export default SidebarContainer

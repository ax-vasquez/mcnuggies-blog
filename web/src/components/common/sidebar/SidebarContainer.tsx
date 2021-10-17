import React from 'react'
import { SidebarMenuOptions } from '../../../types'
import SidebarBodyList from './body/SidebarBodyList'
import SidebarBodyText from './body/SidebarBodyText'
import SidebarBody from './SidebarBody'

/**
 * Container component for the sidebar
 *
 */
const SidebarContainer = ({
    options,
}: {
    options: SidebarMenuOptions
}) => {

    return (
        <div className="sidebar" id="sidebar" data-cy="sidebar">
            <SidebarBody>
                <SidebarBodyText />
                <SidebarBodyList options={options} />
            </SidebarBody>
        </div>
    )
}

export default SidebarContainer

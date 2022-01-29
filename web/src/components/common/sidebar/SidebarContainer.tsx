import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarMenuOptions } from '../../../types/sidebar'
import SidebarBodyList from './SidebarBodyList'
import SidebarBody from './SidebarBody'
import SidebarFooter from './SidebarFooter'
import { toggleShowSidebar } from '../../../slices/siteNavSlice'
import * as styles from './Sidebar.module.scss'

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
                `nav`,
                `sidebar-btn`,
            ]
            if (navRef.current && !navRef.current.contains(event.target) && !excludedIds.includes(event.target.id)) {
                if (isSidebarOpen) {
                    dispatch(toggleShowSidebar())
                }
            }
        }

        // Bind the event listener
        document.addEventListener(`mousedown`, handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener(`mousedown`, handleClickOutside)
        }
    }, [navRef, isSidebarOpen])

    return (
        <div
          className={`${styles.container} ${isOpen ? styles.open : styles.closed}`}
          id="sidebar"
          data-cy="sidebar"
          ref={navRef}
        >
            <SidebarBody>
                <SidebarBodyList options={options} />
                <SidebarFooter />
            </SidebarBody>
        </div>
    )
}

export default SidebarContainer

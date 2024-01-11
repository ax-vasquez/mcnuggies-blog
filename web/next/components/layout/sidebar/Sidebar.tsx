import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import kebabCase from '../../../util/kebabCase'
import { toggleShowSidebar } from "../../../redux/sidebarSlice"
import styles from './Sidebar.module.scss'
import SidebarOption, { SidebarOptionConfig } from './SidebarOption'

interface SidebarProps {
    options: SidebarOptionConfig[]
}

const SIDEBAR_OPTIONS = [
    {
        option: {
            label: `Home`,
            to: `/`
        }
    },
    {
        option: {
            label: `Blog`,
            to: `/blog-feed`
        }
    },
    {
        option: {
            label: `About`,
            to: `/about`
        }
    }
] as SidebarOptionConfig[]

const Sidebar: FunctionComponent<SidebarProps> = () => {

    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state: any) => state.nav.showSidebar)

    /**
     * Handler to close the sidebar when the user clicks outside of it
     * 
     */
    function outerClickHandler(e) {
        const sidebarElement = document.getElementById(`sidebar`)
        const sidebarButton = document.getElementById(`sidebar-menu-button`)
        if (sidebarElement && sidebarButton) {
            if (!sidebarElement.contains(e.target as Node) && !sidebarButton.contains(e.target as Node)) {
                dispatch(toggleShowSidebar())
            }
        }
    }

    useEffect(() => {
        if (isSidebarOpen) {
            window.addEventListener(`click`, outerClickHandler)
        }
        // Must remove the event listener on cleanup
        return () => {
            window.removeEventListener(`click`, outerClickHandler)
        }
    }, [isSidebarOpen])



    return (
      <div id='sidebar' className={`${styles.sidebarContainer} ${isSidebarOpen ? undefined : styles.closed}`}>
        {SIDEBAR_OPTIONS.map(option => {
                const key = kebabCase(option.option.label)
                return (
                  <SidebarOption
                        key={`option-${key}`}
                        option={option.option}
                    />
                )
            })}
      </div>
    )
}

export default Sidebar

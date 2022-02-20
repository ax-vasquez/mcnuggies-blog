import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
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
            label: `Components Demo`,
            to: `/demo/component-demo`
        }
    }
] as SidebarOptionConfig[]

const Sidebar: FunctionComponent<SidebarProps> = ({
    options
}) => {

    const isSidebarOpen = useSelector((state: any) => state.nav.showSidebar)

    return (
        <div className={`${styles.sidebarContainer} ${isSidebarOpen ? undefined : styles.closed}`}>
            {SIDEBAR_OPTIONS.map(option => {
                return (
                    <SidebarOption
                        option={option.option}
                    />
                )
            })}
        </div>
    )
}

export default Sidebar

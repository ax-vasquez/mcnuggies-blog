import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import kebabCase from '../../../util/kebabCase'
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

    const isSidebarOpen = useSelector((state: any) => state.nav.showSidebar)

    return (
      <div className={`${styles.sidebarContainer} ${isSidebarOpen ? undefined : styles.closed}`}>
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

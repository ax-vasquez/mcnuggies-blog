import Link from 'next/link'
import React, { FunctionComponent } from 'react'

interface OptionConfig {
    label: string
    to?: string
    href?: string
}

export interface SidebarOptionConfig {
    option: OptionConfig
    children?: {
        [child: number]: OptionConfig
    }
}

const SidebarOption: FunctionComponent<SidebarOptionConfig> = ({
    option
}) => {
    return (
      <div className='sidebar-option-row' id="sidebar-option">
        <Link href={option.to!} passHref>
          <div className='sidebar-option-row-content'>
            <span>
              {option.label}
            </span>
          </div>
        </Link>
      </div>
    )
}

export default SidebarOption

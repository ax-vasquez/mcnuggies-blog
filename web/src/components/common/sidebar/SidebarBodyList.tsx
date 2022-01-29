// @reach/router comes from Gatsby and is not an actual dependency of this site (will result in linting error)
// eslint-disable-next-line import/no-unresolved
import { Location, LocationContext } from '@reach/router'
import { Link } from 'gatsby'
import React from 'react'
import { BiRightArrow } from '@react-icons/all-files/bi/BiRightArrow'
import { SidebarMenuOptions } from '../../../types/sidebar'
import * as styles from './Sidebar.module.scss'

const SidebarBodyList = ({
    options,
}: {
    options: SidebarMenuOptions
}) => {

    const isActiveItem = (label: string, locationProps: LocationContext) => {
        const { location } = locationProps
        switch (label) {
            case `Home`: {
                return location.pathname === `/`
            }
            case `About`:
            case `Projects`:
            case `Blog`: {
                return location.pathname.includes(label.toLowerCase())
            }
            default: return false
        }

    }

    return (
        <Location>
            {(locationProps) => (
                <div>
                    {Object.keys(options).map((key) => {
                        const { url, label } = options[key]
                        const shouldBounce = isActiveItem(label, locationProps)
                        return (
                            <Link className={styles.menuLink} key={key} to={url} data-cy={`sidebar-menu-option-${label.toLowerCase().replace(` `, `-`)}`}>
                                <div className={styles.menuLinkIconHolder}>
                                    <BiRightArrow className={`${styles.icon} ${shouldBounce ? styles.bounce : undefined}`} />
                                </div>
                                <div className={styles.menuLinkLabelHolder}>{label}</div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </Location>
    )
}

export default SidebarBodyList

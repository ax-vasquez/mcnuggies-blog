import React from "react"
import CustomIcon from "../../shared/CustomIcon"
import styles from './BrowserTable.module.scss'
import { RANKED_PERMISSIONS } from "./permissions"
import {
    BRAVE,
    CHROME,
    DUCKDUCKGO,
    FIREFOX,
    OPERA,
    SAFARI
} from '../browserTable/browsers'
import { BrowserData } from "../browserTable/browsers/types"

const BROWSERS = [
    BRAVE,
    CHROME,
    DUCKDUCKGO,
    FIREFOX,
    OPERA,
    SAFARI
] as BrowserData[]

const formatBrowserName = (browser: string) => {
    switch(browser) {
        case `DUCKDUCKGO`: {
            return `DuckDuckGo`
        }
        default: {
            return browser.charAt(0).toUpperCase() + browser.slice(1).toLowerCase()
        }
    }
}

const BrowserTable: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.permissionContainer} />
                {Object.keys(RANKED_PERMISSIONS).map(rank => {
                    const index = parseInt(rank)
                    return (
                        <div className={styles.permissionContainer} key={index}>
                            <CustomIcon 
                                fileName={RANKED_PERMISSIONS[index].icon}
                                height={32}
                                width={32}
                            />
                            <div className={styles.permissionName} >
                                {RANKED_PERMISSIONS[index].name}
                            </div>
                        </div>
                    )
                })}
            </div>
            {BROWSERS.map(browser => {
                return (
                    <div>
                        <h3>
                            {formatBrowserName(browser.browser)}
                        </h3>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default BrowserTable

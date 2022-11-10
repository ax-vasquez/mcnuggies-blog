import React, { useEffect } from "react"
import useUserAgent from "../../hooks/useUserAgent"
import BrowserTable from "./browserTable"
import {
    BRAVE,
    CHROME,
    DUCKDUCKGO,
    FIREFOX,
    OPERA,
    SAFARI
} from './browserTable/browsers'
import { BrowserData } from "./browserTable/browsers/types"
import styles from "./ChromeBad.module.scss"

type ChromeBadProps = {
    Shim?: React.ElementType
}

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

const collectAllPermissions = (browsers: BrowserData[]) => {
    const permissionsObj = {}

    browsers.forEach(browser => {
        browser.permissions.forEach(permission => permissionsObj[`${permission.name}`] = 0)
    })

    return Object.keys(permissionsObj)
}

export const ChromeBad: React.FC<ChromeBadProps> = ({ children, Shim }) => {
    const userAgent = useUserAgent()
    const isChrome = userAgent.includes('Chrome')

    const permissions = collectAllPermissions(BROWSERS)
    console.log(`PERMISSIONS: `, permissions)

    const getChromeBadInfoMessage = () => {
        return (
            <div className={styles.chromeBadInfo}>
                <main>
                    <div>
                        <h1>🚫 GOOGLE CHROME DETECTED 🚫</h1>
                        <div className={styles.haiku}>
                            <p>
                                Google is evil,
                            </p>
                            <p>
                                they're selling all your data.
                            </p>
                            <p>
                                Are you good with that?
                            </p>
                        </div>
                        <div className={styles.message}>
                            <p>
                                Google is an advertising technology company. They are not interested in creating a browser for the sake of helping users get online; they are mainly
                                interested in delivering a comfortable experience that draws as many people in as possible so they can scrape and sell as much data as possible.
                            </p>
                            <p>
                                Companies need to make money. However, Google is taking advantage of the fact that most people either can't or won't read Terms and Conditions, 
                                let alone the changes to them that can happen at any moment's notice.
                            </p>
                            <p>
                                They know full well that by burying the shadier aspects of how their platform works in technical and legal jargon, most people will never learn about it. At 
                                the same time, they get to claim they were transparent on the matter since it was "clearly-stated" in the Terms and Conditions and/or patch notes.
                            </p>
                        </div>
                        {/* https://developer.apple.com/app-store/app-privacy-details/ */}
                        <BrowserTable />
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div>
            {isChrome ? 
                (!!Shim ? 
                        <Shim>
                            {getChromeBadInfoMessage()}
                        </Shim>
                    : 
                    getChromeBadInfoMessage()
                )
            :
            <div>
                {children}
            </div>
        }
        </div>
    )
}

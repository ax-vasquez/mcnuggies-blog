import React from "react"
import useUserAgent from "../../hooks/useUserAgent"
import BrowserTable from "./browserTable"
import styles from "./ChromeBad.module.scss"

type ChromeBadProps = {
    Shim?: React.ElementType
}

export const ChromeBad: React.FC<ChromeBadProps> = ({ children, Shim }) => {
    const userAgent = useUserAgent()
    const isChrome = userAgent.includes('Chrome')


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
                        <div className={styles.evidence}>
                            <h2>Browser Comparison</h2>
                            <p>
                                In order to simplify the comparison, this chart uses the Apple iOS App store listing for each browser. The reason for this is that Apple has strict requirements
                                on how the app's on their store disclose their permissions. This is certainly not perfect, but does serve as a good "top-down" view for how the various browsers
                                compare.
                            </p>
                            <p>
                                Even though these apps list their permissions on their respective App Store pages, it's not entirely clear what these permissions are granting from the limited
                                information on the listing page. For more information on what the App Store permissions mean, see the <a href="https://developer.apple.com/app-store/app-privacy-details/" target="_blank">App Privacy Details</a> page.
                            </p>
                            <div className={styles.corroboratingLinks}>
                                
                            </div>
                        </div>
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

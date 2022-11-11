import { IOS_APP_PERMISSION_NAME } from "../permissions/types"

type BROWSER = |
    'BRAVE' |
    'CHROME' |
    'DUCKDUCKGO' |
    'FIREFOX' |
    'OPERA' | 
    'SAFARI'

export type BrowserData = {
    /**
     * The name of the browser
     */
    browser: BROWSER
    /**
     * URL for the iOS App listing (where the permissions lists were obtained from)
     */
    iosListing: String
    /**
     * The parent company of the browser (e.g., who benefits from the data collection practices, if any)
     */
    owner: String
    /**
     * List of permissions the browser requires access for
     */
    permissions: IOS_APP_PERMISSION_NAME[]
}

type BROWSER = |
    'BRAVE' |
    'CHROME' |
    'DUCKDUCKGO' |
    'FIREFOX' |
    'OPERA' | 
    'SAFARI'

type Permission = {
    name: String
    linkedToYou: boolean
    description: {
        /**
         * Apple-provided definition for what the permission is for
         */
        definition: String
        /**
         * Quick explanation as to why this permission is requested
         */
        rationale: String
        /**
         * Optional section warning the reader about why the permission is risky. Not necessary for permissions that are generally reasonable.
         */
        warning?: String
    }
    /**
     * The list of things this permissions grants the parent browser app access to
     */
    releases: String[]
    
}

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
    permissions: Permission[]
}

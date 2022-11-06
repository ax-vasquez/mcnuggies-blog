
export type IOS_APP_PERMISSION_NAME = |
    'Other Data' |
    'Browsing History' |
    'Usage Data' |
    'Identifiers' |
    'Financial Info' |
    'Contact Info' | 
    'Contacts' |
    'User Content' |
    'Location' |
    'Search History' |
    'Diagnostics'

export type IOSAppPermission = {
    name: IOS_APP_PERMISSION_NAME
    /**
     * A quick description of the kind of data this permission releases
     */
    description: string
    /**
     * A developer's reasoning behind why this permission may be requested
     */
    rationale: string
    /**
     * The items released by this permission based on Apple's App Privacy Details breakdown
     * 
     * @see https://developer.apple.com/app-store/app-privacy-details/
     */
    itemsReleased: string[]
    risk: {
        /**
         * If true, this permission poses a potential financial impact. This is expected for applications
         * that access the user's Wallet.
         */
        potentialFincialImpact: boolean
        /**
         * Whether or not the permission grants access to ambiguously-defined data, such as "any other user-generated content", which
         * is part of the items released for the User Content permission.
         * 
         * Ambiguous is never good - in this case, it means you're granting permissions to things not clearly
         * stated in the listing. In other words, you can't know what you're agreeing to.
         */
        isAmbiguous: boolean
        /**
         * Whether or not the data released by this permission has use outside of the context of the application it was collected from
         */
        hasExternalImpact: boolean
    }
}

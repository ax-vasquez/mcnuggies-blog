import { BrowserData } from "./types";

export const CHROME: BrowserData = {
    browser: 'CHROME',
    owner: 'Google',
    iosListing: 'https://apps.apple.com/us/app/google-chrome/id535886823',
    permissions: [
        {
            name: 'Financial Info',
            linkedToYou: true,
            description: {
                definition: 'This app accesses identity information from your Wallet',
                rationale: 'Likely to enable Apple Pay functionality',
                warning: 'Google is certainly scraping the kinds of transactions you make to deliver you more-targeted advertisements based on your purchase history - this is their "bread and butter"'
            },
            releases: [
                'Wallet'
            ]
        },
        {
            name: 'Contact Info',
            linkedToYou: true,
            description: {
                definition: 'Your contact information',
                rationale: 'Likely a convenience feature mainly used when auto-filling forms',
                warning: 'While this does have some use, it\'s safer to use a password manager to handle form filling. Google is likely using this data for advertising purposes (such as location-based ads).'
            },
            releases: [
                'Name',
                'Email Address',
                'Phone Number',
                'Physical Address',
                'Other User Contact Info'
            ]
        },
        {
            name: 'Contacts',
            linkedToYou: true,
            description: {
                definition: 'Request permission from the user to read, create, and modify their Contacts entries',
                rationale: 'Facilitates operations like saving or updating new contact records from within the app (such as when using an email website)',
                warning: 'This permission is likely not necessary since none of the other browsers require it despite having similar functionality. Google is likely scraping this data for advertising purposes'
            },
            releases: [
                'Contacts',
            ]
        },
        {
            name: 'User Content',
            linkedToYou: true,
            description: {
                definition: 'Wide-ranging access to a lot of different data on your device',
                rationale: 'Likely to collect data on how you are sharing content to various platforms within Chrome',
                warning: 'This is far-too wide ranging - it basically grants access to anything on your device that you create'
            },
            releases: [
                'Email',
                'Text Messages',
                'Photos',
                'Videos',
                'Gameplay Content',
                'Customer Support data',
                'Any other user-generated content'
            ]
        },
        {
            name: 'Browsing History',
            linkedToYou: true,
            description: {
                definition: 'Information about content the user has viewed that is not part of the app, such as websites',
                rationale: 'Enables Chrome to sync its history with the browser history on your device',
                warning: 'This allows Chrome to observe your web browsing habits on your device OUTSIDE OF Chrome - if you\'ve ever wondered how Google seemed to know about searches done in Safari, this is likely how'
            },
            releases: [
                'Browsing History (that is NOT part of the app)',
            ]
        },
        {
            name: 'Usage Data',
            linkedToYou: true,
            description: {
                definition: 'Information about how you use the application',
                rationale: 'Aids developers in improving on and/or debugging the application',
            },
            releases: [
                'Product Interaction (app only)',
                'Advertising Data (app only)',
                'Other Usage Data (app only)',
            ]
        },
        {
            name: 'Other Data',
            linkedToYou: true,
            description: {
                definition: 'Any other data types not mentioned',
                rationale: 'Presumably allows the collection of data that is not explicitly-protected',
                warning: 'This is a catch-all intended to allow Chrome to scrape for anything iOS doesn\'t explicitly-protect against. This may imply Google is aware of (and possibly using) a data collection avenue not-yet guarded by iOS permissions.'
            },
            releases: [
                'Other Data Types (dangerously ambiguous)',
            ]
        },
        {
            name: 'Location',
            linkedToYou: true,
            description: {
                definition: 'Device location data',
                rationale: 'Enables the use of location-based services such as finding nearby stores and restaurants',
            },
            releases: [
                'Precise Location',
                'Coarse Location'
            ]
        },
        {
            name: 'Search History',
            linkedToYou: true,
            description: {
                definition: 'Information about searches performed in the app',
                rationale: 'Google collects searches to optimize search results for a variety of reasons, primarily advertising. Searches done outside of the app are not collected.',
            },
            releases: [
                'Search History (app only)',
            ]
        },
        {
            name: 'Identifiers',
            linkedToYou: true,
            description: {
                definition: 'Unique identifiers that can be used to determine your Apple User and your device',
                rationale: 'Google links searches to users in a variety of ways including your Apple ID and personal device',
                warning: 'Because Chrome links this data to you, it allows Google to link searches performed by you across applications, even outside of Chrome, provided you\'re searching on your mobile device.'
            },
            releases: [
                'User ID',
                'Device ID'
            ]
        },
        {
            name: 'Diagnostics',
            linkedToYou: true,
            description: {
                definition: 'Diagnostics about the app\'s performance',
                rationale: 'Aids developers in improving on and/or debugging the application',
            },
            releases: [
                'Crash Data',
                'Performance Data',
                'Other Diagnostic Data'
            ]
        }
    ]
}

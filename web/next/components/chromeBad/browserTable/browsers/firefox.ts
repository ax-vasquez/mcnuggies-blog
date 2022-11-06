import { BrowserData } from "./types";

export const FIREFOX: BrowserData = { 
    browser: 'FIREFOX',
    owner: 'Mozilla',
    iosListing: 'https://apps.apple.com/us/app/firefox-private-safe-browser/id989804926',
    permissions: [
        {
            name: 'Contact Info',
            linkedToYou: true,
            description: {
                definition: 'Your contact information',
                rationale: 'Likely a convenience feature mainly used when auto-filling forms',
                warning: 'While this does have some use, it\'s safer to use a password manager to handle form filling. Mozilla does not have advertising interests like Google, so this is likely less-risky than it is within Chrome.'
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
            name: 'Location',
            linkedToYou: false,
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
            name: 'Diagnostics',
            linkedToYou: false,
            description: {
                definition: 'Diagnostics about the app\'s performance',
                rationale: 'Aids developers in improving on and/or debugging the application',
            },
            releases: [
                'Crash Data',
                'Performance Data',
                'Other Diagnostic Data'
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
            name: 'Identifiers',
            linkedToYou: true,
            description: {
                definition: 'Unique identifiers that can be used to link requests made from a specific device; it\'s used to link activity from the same user/device',
                rationale: 'Aids developers in debugging by helping them track and debug bug reports from specific devices.',
                warning: 'This app DOES link your device ID to your personal identity, unlike most other privacy-oriented apps. However, this is likely necessary in order to facilitate the Firefox Sync service. Just keep this in mind.'
            },
            releases: [
                'User ID',
                'Device ID'
            ]
        },
    ]
}
import { BrowserData } from "./types";

export const OPERA: BrowserData = { 
    browser: 'OPERA',
    owner: 'Brave',
    iosListing: 'https://apps.apple.com/us/app/opera-browser-fast-private/id1411869974',
    permissions: [
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
            linkedToYou: false,
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
            linkedToYou: false,
            description: {
                definition: 'Unique identifiers that can be used to link requests made from a specific device; it\'s used to link activity from the same user/device',
                rationale: 'Aids developers in debugging by helping them track and debug bug reports from specific devices. This app does not link Identifiers to your personal identity, meaning they are only used for debugging purposes.',
            },
            releases: [
                'User ID',
                'Device ID'
            ]
        },
    ]
}
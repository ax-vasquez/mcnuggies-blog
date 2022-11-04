import { BrowserData } from "./types";

export const SAFARI: BrowserData = { 
    browser: 'SAFARI',
    owner: 'Apple',
    iosListing: 'https://apps.apple.com/us/app/safari/id1146562112',
    permissions: [
        {
            name: 'User Content',
            linkedToYou: true,
            description: {
                definition: 'Wide-ranging access to a lot of different data on your device',
                rationale: 'Likely to collect data on how you are sharing content to various platforms within Safari',
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
            linkedToYou: true,
            description: {
                definition: 'Unique identifiers that can be used to link requests made from a specific device; it\'s used to link activity from the same user/device',
                rationale: 'Aids developers in debugging by helping them track and debug bug reports from specific devices. This app does not link Identifiers to your personal identity, meaning they are only used for debugging purposes.',
                warning: 'Because Safari links this data to you, it allows Apple to link activity performed by you across applications, even outside of Safari, provided you\'re searching on your mobile device.'
            },
            releases: [
                'User ID',
                'Device ID'
            ]
        },
        {
            name: 'Browsing History',
            linkedToYou: false,
            description: {
                definition: 'Information about content the user has viewed that is not part of the app, such as websites',
                rationale: 'Enables Safari to sync its history with the browser history on your device, but since it\'s not linked to you personally, it\'s most likely only ever used as a convenience feature (and not for tracking purposes).',
            },
            releases: [
                'Browsing History (that is NOT part of the app)',
            ]
        },
    ]
}
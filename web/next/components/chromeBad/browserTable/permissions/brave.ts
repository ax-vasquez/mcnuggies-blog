import { BrowserData } from "./types";

export const BRAVE: BrowserData = { 
    browser: 'BRAVE',
    owner: 'Brave',
    iosListing: 'https://apps.apple.com/us/app/brave-private-web-browser/id1052879175',
    permissions: [
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
                definition: 'Unique identifiers that can be used to link requests made from a specific device; is used to link traffic from the same user/device',
                rationale: 'Aids developers in debugging by helping them track and debug bug reports from specific devices. This app does not link Identifiers to your personal identity, meaning they are only used for debugging purposes.',
            },
            releases: [
                'User ID',
                'Device ID'
            ]
        },
    ]
}
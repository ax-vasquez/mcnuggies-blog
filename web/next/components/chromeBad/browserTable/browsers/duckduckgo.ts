import { BrowserData } from "./types";

export const DUCKDUCKGO: BrowserData = { 
    browser: 'DUCKDUCKGO',
    owner: 'DuckDuckGo',
    iosListing: 'https://apps.apple.com/us/app/duckduckgo-privacy-browser/id663592361',
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
    ]
}
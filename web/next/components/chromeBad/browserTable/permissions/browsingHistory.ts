import { IOSAppPermission } from "./types";

export const BrowsingHistory: IOSAppPermission = {
    name: "Browsing History",
    description: "Information about content the user has viewed that is not part of the app, such as websites",
    rationale: "Allows the app to view all of browsing history that is NOT part of the app; you are allowing the app to see activity OUTSIDE of the application itself.",
    itemsReleased: [
        'Browsing History (ENTIRE DEVICE)',
    ],
    icon: 'bootstrap-phone',
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: false,
        hasExternalImpact: true
    }
}

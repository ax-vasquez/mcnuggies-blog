import { IOSAppPermission } from "./types";

export const SearchHistory: IOSAppPermission = {
    name: "Search History",
    description: "Information about searches performed in the app.",
    rationale: "This is most-likely primarily used for advertising purposes by adjusting the search algorithm to deliver results more-likely to generate ad revenue. It's unlikely to be used in a manner that can abuse your privacy.",
    itemsReleased: [
        'Search History (app only)',
    ],
    icon: 'bootstrap-search',
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: false,
        hasExternalImpact: false
    }
}

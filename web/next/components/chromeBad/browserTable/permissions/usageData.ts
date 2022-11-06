import { IOSAppPermission } from "./types";

export const UsageData: IOSAppPermission = {
    name: "Usage Data",
    description: "Information about how you use the application",
    rationale: "Assists the developers in improving on and/or debugging the application",
    itemsReleased: [
        'Product Interaction (app only)',
        'Advertising Data (app only)',
        'Other Usage Data (app only)',
    ],
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: false,
        hasExternalImpact: false
    }
}

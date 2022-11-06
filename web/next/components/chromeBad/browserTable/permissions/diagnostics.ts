import { IOSAppPermission } from "./types";

export const Diagnostics: IOSAppPermission = {
    name: "Diagnostics",
    description: "Diagnostics about the app's performance",
    rationale: "Assists the developers in improving on and/or debugging the application",
    itemsReleased: [
        'Crash Data',
        'Performance Data',
        'Other Diagnostic Data'
    ],
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: false,
        hasExternalImpact: false
    }
}

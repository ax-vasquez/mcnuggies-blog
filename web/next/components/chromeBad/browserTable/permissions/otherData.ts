import { IOSAppPermission } from "./types";

export const OtherData: IOSAppPermission = {
    name: "Other Data",
    description: "Any data not specifically mentioned by any other permissions",
    rationale: "This appears to be a catch-all permission. I would avoid any app that collects this kind of data as you can't know what you're releasing.",
    itemsReleased: [
        'Other data types',
    ],
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: true,
        hasExternalImpact: true
    }
}

import { IOSAppPermission } from "./types";

export const Identifiers: IOSAppPermission = {
    name: "Identifiers",
    description: "Identifiers linked to you, your device, or both",
    rationale: "Can be useful for developers when debugging, but has immense privacy implications since it allows a company to track your activity outside of the application using your device ID, which is unique to your device and unchangeable.",
    itemsReleased: [
        'User ID',
        'Device ID'
    ],
    icon: 'bootstrap-card-text',
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: false,
        hasExternalImpact: true
    }
}

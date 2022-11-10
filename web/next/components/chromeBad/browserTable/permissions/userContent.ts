import { IOSAppPermission } from "./types";

export const UserContent: IOSAppPermission = {
    name: "User Content",
    description: "Wide-ranging access to a lot of different data on your device",
    rationale: "Possibly for file-sharing purposes, but most browsers seem able to support this functionality without seeking this permission. This is ideal data that advertising companies want; they can use it to tailor their strategies by targeting their efforts on what most people seem to be interested in.",
    itemsReleased: [
        'Email',
        'Text Messages',
        'Photos',
        'Videos',
        'Gameplay Content',
        'Customer Support data',
        'Any other user-generated content'
    ],
    icon: 'bootstrap-card-image',
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: true,
        hasExternalImpact: true
    }
}

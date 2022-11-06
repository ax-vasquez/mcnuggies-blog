import { IOSAppPermission } from "./types";

export const Contacts: IOSAppPermission = {
    name: "Contacts",
    description: "Grants access to Contacts on the device",
    rationale: "Enables the app to read, create, and modify Contacts on the user's device (such as when saving or updating a contact from an email).",
    itemsReleased: [
        'Contacts',
    ],
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: false,
        hasExternalImpact: false
    }
}

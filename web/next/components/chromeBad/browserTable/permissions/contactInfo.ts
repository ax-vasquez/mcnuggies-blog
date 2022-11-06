import { IOSAppPermission } from "./types";

export const ContactInfo: IOSAppPermission = {
    name: "Contact Info",
    description: "Your contact information",
    rationale: "Enables convenience features such as form auto-filling",
    itemsReleased: [
        'Name',
        'Email Address',
        'Phone Number',
        'Physical Address',
        'Other User Contact Info'
    ],
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: false,
        hasExternalImpact: false
    }
}

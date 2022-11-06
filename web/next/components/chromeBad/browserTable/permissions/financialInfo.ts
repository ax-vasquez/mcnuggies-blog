import { IOSAppPermission } from "./types";

export const FinancialInfo: IOSAppPermission = {
    name: "Financial Info",
    description: "Financial information stored on the device",
    rationale: "Possibly to support Apple Pay, but most of the data released by this permission has serious financial impact, and most browsers don't request this permission.",
    itemsReleased: [
        'Payment Info',
        'Credit Info',
        'Other Financial Info'
    ],
    risk: {
        potentialFincialImpact: true,
        isAmbiguous: true,
        hasExternalImpact: true
    }
}

import { IOSAppPermission } from "./types";

export const Location: IOSAppPermission = {
    name: "Location",
    description: "The location of the user's device",
    rationale: "Enables the use of location-based services, such as navigation. Generally a safe permission, so long as it's only enabled while using the application. However, assume that your location history will persist for the foreseeable future.",
    itemsReleased: [
        'Precise Location',
        'Coarse Location'
    ],
    icon: 'bootstrap-cursor-fill',
    risk: {
        potentialFincialImpact: false,
        isAmbiguous: false,
        hasExternalImpact: false
    }
}

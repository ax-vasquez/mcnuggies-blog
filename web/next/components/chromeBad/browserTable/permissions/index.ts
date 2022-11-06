import { BrowsingHistory } from "./browsingHistory";
import { ContactInfo } from "./contactInfo";
import { Contacts } from "./contacts";
import { Diagnostics } from "./diagnostics";
import { FinancialInfo } from "./financialInfo";
import { Identifiers } from "./identifiers";
import { Location } from "./location";
import { OtherData } from "./otherData";
import { SearchHistory } from "./searchHistory";
import { UsageData } from "./usageData";
import { UserContent } from "./userContent";

export const RANKED_PERMISSIONS = {
    0: FinancialInfo,
    1: BrowsingHistory,
    2: ContactInfo,
    3: UserContent,
    4: Identifiers,
    5: OtherData,
    6: Location,
    7: Contacts,
    8: SearchHistory,
    9: UsageData,
    10: Diagnostics
}

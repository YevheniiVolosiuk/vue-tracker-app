import {HOURS_IN_DAY, NAV_ITEMS, MIDNIGHT_HOUR} from "@/constants";

export function isTimelineItemValid({hour}) {
    return typeof hour === "number" && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY;
}

export function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page);
}

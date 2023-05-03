import {PAGE_TIMELINE, HOURS_IN_DAY,MIDNIGHT_HOUR} from "@/constants";
import { isPageValid } from "@/validators";

export function getActiveHashPage() {
    const page = window.location.hash.slice(1);
    if (isPageValid(page)) {
        return page;
    }

    window.location.hash = PAGE_TIMELINE;

    return PAGE_TIMELINE;
}

export function genereteTimelineItems() {
    const timelineItems = [];
    for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push( {hour});
    }
    return timelineItems;
}

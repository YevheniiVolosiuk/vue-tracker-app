import {PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE, HOURS_IN_DAY} from "./constants";

export function getActiveHashPage() {
    const hash = window.location.hash.slice(1);
    if (Object.keys([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE]).includes(hash)) {
        return hash;
    }

    window.location.hash = PAGE_TIMELINE;

    return PAGE_TIMELINE;
}

export function genereteTimelineItems() {
    const timelineItems = [];
    for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push({hour});
    }
    return timelineItems;
}

import {isPageValid} from "@/validators";
import {PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR, SECONDS_IN_HOUR} from "@/constants";

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
        timelineItems.push({hour});
    }

    return timelineItems;
}

export function generateActivities() {
    return [
        {
            id: id(),
            name: "Coding",
            secondsToComplete: 1 * SECONDS_IN_HOUR,
        },
        {
            id: id(),
            name: "Trennig",
            secondsToComplete: 2 * SECONDS_IN_HOUR,
        },
        {
            id: id(),
            name: "Plaing",
            secondsToComplete: 3 * SECONDS_IN_HOUR,
        },
    ];
}

export function genereteActivitySelectOptions(activities) {
    return activities.map((activity) => ({value: activity.id, label: activity.name}));
}

export function id() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

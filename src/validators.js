import { HOURS_IN_DAY, NAV_ITEMS, MIDNIGHT_HOUR, BUTTON_TYPES } from "@/constants";


//---------------------------------------------------------------- Pages In App
export function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page);
}

//---------------------------------------------------------------- Timeline
export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isTimelineItemValid);
}

export function isTimelineItemValid({hour}) {
    return isHourValid(hour);
}

//---------------------------------------------------------------- Activitiy
export function validateActivities(activities) {
    return activities.every(isActivityValid);
}

export function isActivityValid({name,secondsToComplete}) {
    return isNotEmptyString(name) && isNumber(secondsToComplete);
}

//---------------------------------------------------------------- Helpers
export function isUndefinedOrNull(value) {
    return isUndefined(value) || isNull(value);
}

export function isNumberOrNull(value) {
    return isNumber(value) || isNull(value);
}

export function isHourValid(hour) {
    return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1);
}

//---------------------------------------------------------------- Ui
export function isButtonTypeValid(type) {
    return BUTTON_TYPES.includes(type);
}

export function validateSelectOptions(options) {
    return options.every(isSelectOptionValid);
}

//---------------------------------------------------------------- Private functions
function isSelectOptionValid({value, label}) {
    return isNumber(value) && isNotEmptyString(label);
}

function isNotEmptyString(activity) {
    return isString(activity) && activity.length > 0;
}

function isBetween(value, start, end) {
    return value >= start && value <= end;
}

export function isUndefined(value) {
    return typeof value === "undefined";
}

function isNull(value) {
    return value === null;
}

export function isNumber(value) {
    return typeof value === "number";
}

function isString(value) {
    return typeof value === "string";
}

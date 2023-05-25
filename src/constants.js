import {ClockIcon, ListBulletIcon, ChartBarIcon} from "@heroicons/vue/24/outline";
//import {generateActivities} from "@/function";
//---------------------------------------------------------------- Time Constants
export const HOURS_IN_DAY = 24;
export const SECONDS_IN_HOUR = 3600;
export const MIDNIGHT_HOUR = 0;

//---------------------------------------------------------------- Activity Constants
//export const ACTIVITIES = generateActivities();

export const PERIOD_SELECT_OPTIONS = [
    {value: 15, label: "0:15"},
    {value: 30, label: "0:30"},
    {value: 45, label: "0:45"},
];

//---------------------------------------------------------------- Timeline Constsns
export const PAGE_TIMELINE = "timeline";
export const PAGE_ACTIVITIES = "activities";
export const PAGE_PROGRESS = "progress";

export const NAV_ITEMS = {
    [PAGE_TIMELINE]: ClockIcon,
    [PAGE_ACTIVITIES]: ListBulletIcon,
    [PAGE_PROGRESS]: ChartBarIcon,
};

//---------------------------------------------------------------- Ui Constants
export const BUTTON_TYPE_PRIMARY = "primary";
export const BUTTON_TYPE_NEUTRAL = "neutral";
export const BUTTON_TYPE_DANGER = "danger";

export const BUTTON_TYPES = [BUTTON_TYPE_PRIMARY, BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_DANGER];

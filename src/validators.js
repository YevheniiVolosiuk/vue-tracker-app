import { HOURS_IN_DAY, NAV_ITEMS } from '@/constants';

export  function isTimelineItemValid({ hour }) {
    return typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY
}

export  function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page);
}
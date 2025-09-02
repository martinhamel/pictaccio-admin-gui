import { DateTime } from 'luxon';
import { store } from '@pictaccio/admin-gui/src/store';

export type DatePart =
    'full' |
    'date' |
    'time';

export function formatDateForUser(date: Date, part: DatePart = 'full', allowRelative = true): string {
    let format: string;

    switch (part) {
        case 'full':
            format = `${store.getters['UserPreference/dateFormat']} ${store.getters['UserPreference/timeFormat']}`;
            break;

        case 'date':
            format = store.getters['UserPreference/dateFormat'];
            break;

        case 'time':
            format = store.getters['UserPreference/timeFormat'];
            break;
    }

    return allowRelative && store.getters['UserPreference/useRelativeTime']
        ? utcDate(date)
            .setZone(store.getters['UserPreference/timezone'])
            .toRelative({
                locale: store.getters['Config/userLang']
            })
        : utcDate(date)
            .setZone(store.getters['UserPreference/timezone'])
            .toFormat(format);
}

export function jsDateForUser(date: Date): Date {
    return utcDate(date)
        .setZone(store.getters['UserPreference/timezone'])
        .toJSDate();
}

export function jsDateForServer(date: Date): Date {
    return DateTime
        .fromJSDate(date, { zone: store.getters['UserPreference/timezone'] })
        .setZone('utc')
        .toJSDate();
}

export function jsDateFromUserInput(date: string): Date {
    return DateTime
        .fromISO(date)
        .setZone(store.getters['UserPreference/timezone'])
        .toJSDate();
}

export function jsDateToUserInput(date: Date): string {
    return utcDate(date)
        .toISODate();
}

function utcDate(date: Date): DateTime {
    return DateTime.fromMillis(Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ));
}

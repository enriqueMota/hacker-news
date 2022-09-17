import days from 'dayjs';


import * as relativeTime from 'dayjs/plugin/relativeTime';

days.extend(relativeTime as any);


export const timeAgo = (date: string) => days().to(days(date));
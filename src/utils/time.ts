import days from "dayjs";

import plugin from "dayjs/plugin/relativeTime";

// @ts-ignore
days?.extend(plugin as any);

export const timeAgo = (date: string) => days().to(days(date));

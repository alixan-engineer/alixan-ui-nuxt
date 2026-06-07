type Translate = (key: string) => string;

export const calendarPageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.day'), href: '#day' },
	{ label: t('docsSections.range'), href: '#range' },
] as const;

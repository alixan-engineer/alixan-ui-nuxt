type Translate = (key: string) => string;

export const tabsPageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.fullWidth'), href: '#full-width' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

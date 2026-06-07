type Translate = (key: string) => string;

export const searchPageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.debounce'), href: '#debounce' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

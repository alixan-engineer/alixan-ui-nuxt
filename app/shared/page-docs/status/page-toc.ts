type Translate = (key: string) => string;

export const statusPageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.size'), href: '#size' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

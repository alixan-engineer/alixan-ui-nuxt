type Translate = (key: string) => string;

export const accordionPageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.multiple'), href: '#multiple' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

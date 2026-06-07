type Translate = (key: string) => string;

export const emptyPageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.withMedia'), href: '#with-media' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

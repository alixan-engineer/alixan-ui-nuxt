type Translate = (key: string) => string;

export const otpPageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.length'), href: '#length' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

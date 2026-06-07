type Translate = (key: string) => string;

export const buttonPageToc = (t: Translate) =>
	[
		{ label: t('docsSections.installation'), href: '#installation' },
		{ label: t('docsSections.usage'), href: '#usage' },
		{ label: t('docsSections.size'), href: '#size' },
		{ label: t('docsSections.navigation'), href: '#navigation' },
		{ label: t('docsSections.withIcon'), href: '#with-icon' },
		{ label: t('docsSections.loading'), href: '#loading' },
		{ label: t('docsSections.disabled'), href: '#disable' },
		{ label: t('docsSections.apiReference'), href: '#api-reference' },
	] as const;

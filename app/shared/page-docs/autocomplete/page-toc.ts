type Translate = (key: string) => string;

export const autocompletePageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.validation'), href: '#validation' },
	{ label: t('docsSections.withChips'), href: '#with-chips' },
] as const;

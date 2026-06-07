type Translate = (key: string) => string;

export const inputPageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.state'), href: '#state' },
	{ label: t('docsSections.validation'), href: '#validation' },
	{ label: t('docsSections.length'), href: '#length' },
	{ label: t('docsSections.withIcon'), href: '#with-icon' },
	{ label: t('docsSections.variants'), href: '#variants' },
	{ label: 'Email', href: '#variant-email', child: true },
	{ label: 'Password', href: '#variant-password', child: true },
	{ label: 'Phone', href: '#variant-phone', child: true },
	{ label: 'Username', href: '#variant-username', child: true },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

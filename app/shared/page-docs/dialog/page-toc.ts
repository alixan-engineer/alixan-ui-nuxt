type Translate = (key: string) => string;

export const dialogPageToc = (t: Translate) => [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.host'), href: '#host', child: true },
	{ label: t('docsSections.openDialog'), href: '#open-dialog', child: true },
	{
		label: t('docsSections.dialogContent'),
		href: '#dialog-content',
		child: true,
	},
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

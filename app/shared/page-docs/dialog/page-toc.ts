import type { IPageTocLink } from '~/interfaces/page-toc/page-toc.interface';

export const dialogPageToc: IPageTocLink[] = [
	{ label: 'docsSections.installation', href: '#installation' },
	{ label: 'docsSections.usage', href: '#usage' },
	{ label: 'docsSections.host', href: '#host', child: true },
	{ label: 'docsSections.openDialog', href: '#open-dialog', child: true },
	{
		label: 'docsSections.dialogContent',
		href: '#dialog-content',
		child: true,
	},
	{ label: 'docsSections.apiReference', href: '#api-reference' },
];

import type { IPageTocLink } from '~/interfaces/page-toc/page-toc.interface';

export const emptyPageToc: IPageTocLink[] = [
	{ label: 'docsSections.installation', href: '#installation' },
	{ label: 'docsSections.usage', href: '#usage' },
	{ label: 'docsSections.withMedia', href: '#with-media' },
	{ label: 'docsSections.apiReference', href: '#api-reference' },
];

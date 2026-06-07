import type { IPageTocLink } from '~/interfaces/page-toc/page-toc.interface';

export const inputPageToc: IPageTocLink[] = [
	{ label: 'docsSections.installation', href: '#installation' },
	{ label: 'docsSections.usage', href: '#usage' },
	{ label: 'docsSections.state', href: '#state' },
	{ label: 'docsSections.validation', href: '#validation' },
	{ label: 'docsSections.length', href: '#length' },
	{ label: 'docsSections.withIcon', href: '#with-icon' },
	{ label: 'docsSections.variants', href: '#variants' },
	{ label: 'Email', href: '#variant-email', child: true },
	{ label: 'Password', href: '#variant-password', child: true },
	{ label: 'Phone', href: '#variant-phone', child: true },
	{ label: 'Username', href: '#variant-username', child: true },
	{ label: 'docsSections.apiReference', href: '#api-reference' },
];

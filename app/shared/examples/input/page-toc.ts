import type { IPageToc } from '~/interfaces/page-toc/page-toc.interface';

export const inputPageToc: IPageToc[] = [
	{ label: 'docsSections.installation', href: '#installation' },
	{ label: 'docsSections.usage', href: '#usage' },
	{ label: 'docsSections.state', href: '#state' },
	{ label: 'docsSections.validation', href: '#validation' },
	{ label: 'docsSections.length', href: '#length' },
	{ label: 'docsSections.withIcon', href: '#with-icon' },
	{ label: 'docsSections.variants', href: '#variants' },
	{ label: 'docsSections.email', href: '#variant-email', child: true },
	{ label: 'docsSections.password', href: '#variant-password', child: true },
	{ label: 'docsSections.phone', href: '#variant-phone', child: true },
	{ label: 'docsSections.username', href: '#variant-username', child: true },
	{ label: 'docsSections.apiReference', href: '#api-reference' },
];

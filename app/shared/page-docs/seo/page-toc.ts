type Translate = (key: string) => string;

export const seoPageToc = (t: Translate) => [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Sitemap', href: '#sitemap' },
	{ label: 'Site Config', href: '#site-config' },
	{ label: 'Page Meta', href: '#page-meta' },
	{ label: 'Initial Head', href: '#initial-head' },
	{ label: 'Robots', href: '#robots' },
] as const;

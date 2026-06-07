type Translate = (key: string) => string;

export const i18nPageToc = (t: Translate) => [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Messages', href: '#messages' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'Page Meta', href: '#page-meta' },
] as const;

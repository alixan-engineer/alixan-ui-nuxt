type Translate = (key: string) => string;

export const fontsPageToc = (t: Translate) => [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Configuration', href: '#configuration' },
	{ label: 'Tailwind', href: '#tailwind' },
] as const;

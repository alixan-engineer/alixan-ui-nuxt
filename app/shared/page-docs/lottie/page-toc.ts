type Translate = (key: string) => string;

export const lottiePageToc = (t: Translate) => [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Configuration', href: '#configuration' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'With Empty', href: '#with-empty' },
] as const;

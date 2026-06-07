type Translate = (key: string) => string;

export const themePageToc = (t: Translate) => [
	{ label: 'Color Mode', href: '#color-mode' },
	{ label: 'Tailwind Variant', href: '#tailwind-variant' },
	{ label: 'Usage', href: '#usage' },
] as const;

type Translate = (key: string) => string;

export const iconsPageToc = (t: Translate) => [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Lucide Icons', href: '#lucide-icons' },
	{ label: 'Other Libraries', href: '#other-libraries' },
] as const;

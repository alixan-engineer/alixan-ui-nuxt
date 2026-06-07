export const iconButtonApiRows = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Required accessible label for screen readers.',
	},
	{
		name: 'variant',
		type: "'filled' | 'outlined' | 'ghost'",
		default: "'ghost'",
		description: 'Visual style of the icon button. Ghost is used by default.',
	},
	{
		name: 'color',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'default'",
		description: 'Color intent.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls square size and icon size.',
	},
	{
		name: 'to',
		type: 'RouteLocationRaw',
		default: '-',
		description: 'Renders the icon button as a NuxtLink when provided.',
	},
	{
		name: 'href',
		type: 'string',
		default: '-',
		description: 'Renders the icon button as a native anchor when provided.',
	},
	{
		name: 'target',
		type: "'_blank' | '_self' | '_parent' | '_top'",
		default: '-',
		description: 'Anchor target. Works with href links.',
	},
];

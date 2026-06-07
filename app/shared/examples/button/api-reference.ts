export const buttonApiRows = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Fallback text when the default slot is not used.',
	},
	{
		name: 'variant',
		type: "'filled' | 'outlined' | 'ghost'",
		default: "'filled'",
		description:
			'Surface style. Filled is used by default. Combine it with color for intent.',
	},
	{
		name: 'color',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'default'",
		description: 'Semantic intent. Works with every variant.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls height, padding and text size.',
	},
	{
		name: 'to',
		type: 'RouteLocationRaw',
		default: '-',
		description: 'Renders the button as a NuxtLink when provided.',
	},
	{
		name: 'href',
		type: 'string',
		default: '-',
		description: 'Renders the button as a native anchor when provided.',
	},
	{
		name: 'target',
		type: "'_blank' | '_self' | '_parent' | '_top'",
		default: '-',
		description: 'Anchor target. Works with href links.',
	},
];

export const statusProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Fallback text when the default slot is not used.',
	},
	{
		name: 'type',
		type: "'success' | 'warning' | 'info' | 'error'",
		default: "'info'",
		description: 'Semantic status tone.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls height, padding and gap.',
	},
];

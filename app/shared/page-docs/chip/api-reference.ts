export const chipProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Fallback text when the default slot is not used.',
	},
	{
		name: 'type',
		type: "'default' | 'select' | 'remove'",
		default: "'default'",
		description: 'Adds the select chevron or remove icon.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls height, radius, padding and icon size.',
	},
	{
		name: 'selected',
		type: 'boolean',
		default: 'false',
		description: 'Switches the chip into the active primary state.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables interaction and reduces opacity.',
	},
];

export const chipProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.fallbackSlotText',
	},
	{
		name: 'type',
		type: "'default' | 'select' | 'remove'",
		default: "'default'",
		description: 'apiReferenceDescriptions.chipType',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'apiReferenceDescriptions.chipSize',
	},
	{
		name: 'selected',
		type: 'boolean',
		default: 'false',
		description: 'apiReferenceDescriptions.chipSelected',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'apiReferenceDescriptions.disabledOpacity',
	},
];

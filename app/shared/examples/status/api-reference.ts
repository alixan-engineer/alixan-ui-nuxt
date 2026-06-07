export const statusProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.fallbackSlotText',
	},
	{
		name: 'type',
		type: "'success' | 'warning' | 'info' | 'error'",
		default: "'info'",
		description: 'apiReferenceDescriptions.statusTone',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'apiReferenceDescriptions.statusSize',
	},
];

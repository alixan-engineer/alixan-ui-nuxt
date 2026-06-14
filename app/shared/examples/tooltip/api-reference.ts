export const tooltipProps = [
	{
		name: 'text',
		type: 'string',
		default: "''",
		description: 'apiReferenceDescriptions.tooltipText',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'apiReferenceDescriptions.disabledOpacity',
	},
	{
		name: 'delay',
		type: 'number',
		default: '100',
		description: 'apiReferenceDescriptions.tooltipDelay',
	},
];

export const tooltipSlots = [
	{
		name: 'default',
		type: 'slot',
		default: '-',
		description: 'apiReferenceDescriptions.tooltipTriggerSlot',
	},
	{
		name: 'content',
		type: 'slot',
		default: '-',
		description: 'apiReferenceDescriptions.tooltipContentSlot',
	},
];

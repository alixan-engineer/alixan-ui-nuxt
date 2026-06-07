export const apiRows = [
	{
		prop: 'items',
		type: 'AccordionItem[]',
		default: '[]',
		description: 'Accordion sections rendered by the component.',
	},
	{
		prop: 'modelValue',
		type: 'string | number | Array<string | number> | null',
		default: 'null',
		description: 'Controlled open item value. Use an array with multiple mode.',
	},
	{
		prop: 'multiple',
		type: 'boolean',
		default: 'false',
		description: 'Allows more than one item to stay open.',
	},
	{
		prop: 'collapsible',
		type: 'boolean',
		default: 'true',
		description: 'Allows the active single item to be closed.',
	},
];

export const emptyProps = [
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'Main empty state heading.',
	},
	{
		name: 'description',
		type: 'string',
		default: '-',
		description: 'Optional supporting text.',
	},
	{
		name: 'button',
		type: 'string',
		default: '-',
		description: 'Optional action button label.',
	},
	{
		name: 'buttonColor',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'Optional action button color.',
	},
];
export const emptySlots = [
	{
		name: 'default',
		description: 'Optional media rendered above the title.',
	},
];

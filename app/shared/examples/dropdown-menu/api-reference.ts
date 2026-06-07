export const dropdownProps = [
	{
		name: 'open',
		type: 'boolean',
		default: 'false',
		description: 'Controlled open state via v-model:open.',
	},
	{
		name: 'width',
		type: 'string',
		default: "'320px'",
		description: 'Popover width.',
	},
	{
		name: 'height',
		type: 'string',
		default: "'auto'",
		description: 'Popover max-height.',
	},
	{
		name: 'position',
		type: "'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft'",
		default: "'bottomLeft'",
		description:
			'Preferred popover placement. It flips automatically when there is not enough space.',
	},
];

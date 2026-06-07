export const dialogServiceApi = [
	{
		name: 'component',
		type: 'Component',
		default: '-',
		description: 'Vue component rendered inside DialogHost.',
	},
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'Passed to DialogHeader.',
	},
	{
		name: 'width',
		type: 'string',
		default: "'500px'",
		description: 'Passed to Dialog as max-width.',
	},
	{
		name: 'height',
		type: 'string',
		default: "'auto'",
		description: 'Passed to Dialog as max-height.',
	},
	{
		name: 'data',
		type: 'Record<string, unknown>',
		default: '{}',
		description: 'Data passed to the dynamic component.',
	},
];

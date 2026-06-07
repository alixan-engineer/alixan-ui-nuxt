export const dialogServiceApi = [
	{
		name: 'component',
		type: 'Component',
		default: '-',
		description: 'apiReferenceDescriptions.dialogHostComponent',
	},
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.dialogHeaderTitle',
	},
	{
		name: 'width',
		type: 'string',
		default: "'500px'",
		description: 'apiReferenceDescriptions.dialogMaxWidth',
	},
	{
		name: 'height',
		type: 'string',
		default: "'auto'",
		description: 'apiReferenceDescriptions.dialogMaxHeight',
	},
	{
		name: 'data',
		type: 'Record<string, unknown>',
		default: '{}',
		description: 'apiReferenceDescriptions.dynamicComponentData',
	},
];

export const drawerServiceApi = [
	{
		name: 'component',
		type: 'Component',
		default: '-',
		description: 'apiReferenceDescriptions.drawerHostComponent',
	},
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.drawerHeaderTitle',
	},
	{
		name: 'width',
		type: 'string',
		default: "'420px'",
		description: 'apiReferenceDescriptions.drawerMaxWidth',
	},
	{
		name: 'height',
		type: 'string',
		default: "'420px'",
		description: 'apiReferenceDescriptions.drawerMaxHeight',
	},
	{
		name: 'position',
		type: "'top' | 'right' | 'bottom' | 'left'",
		default: "'bottom'",
		description: 'apiReferenceDescriptions.drawerPlacement',
	},
	{
		name: 'data',
		type: 'Record<string, unknown>',
		default: '{}',
		description: 'apiReferenceDescriptions.dynamicComponentData',
	},
];

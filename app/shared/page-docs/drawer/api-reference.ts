export const drawerServiceApi = [
	{
		name: 'component',
		type: 'Component',
		default: '-',
		description: 'Vue component rendered inside DrawerHost.',
	},
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'Passed to DrawerHeader.',
	},
	{
		name: 'width',
		type: 'string',
		default: "'420px'",
		description: 'Drawer max-width.',
	},
	{
		name: 'height',
		type: 'string',
		default: "'420px'",
		description: 'Drawer max-height for top and bottom positions.',
	},
	{
		name: 'position',
		type: "'top' | 'right' | 'bottom' | 'left'",
		default: "'bottom'",
		description: 'Drawer placement.',
	},
	{
		name: 'data',
		type: 'Record<string, unknown>',
		default: '{}',
		description: 'Data passed to the dynamic component.',
	},
];

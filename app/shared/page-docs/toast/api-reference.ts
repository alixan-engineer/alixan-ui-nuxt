export const toastApi = [
	{
		name: 'message',
		type: 'string',
		default: '-',
		description: 'Toast text.',
	},
	{
		name: 'type',
		type: "'success' | 'warning' | 'error' | 'info'",
		default: "'info'",
		description: 'Semantic toast tone.',
	},
	{
		name: 'duration',
		type: 'number',
		default: '4000',
		description: 'Auto-close timeout in milliseconds.',
	},
];

export const toastApi = [
	{
		name: 'message',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.toastMessage',
	},
	{
		name: 'type',
		type: "'success' | 'warning' | 'error' | 'info'",
		default: "'info'",
		description: 'apiReferenceDescriptions.toastTone',
	},
	{
		name: 'duration',
		type: 'number',
		default: '4000',
		description: 'apiReferenceDescriptions.toastDuration',
	},
];

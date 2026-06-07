export const alertDialogProps = [
	{
		name: 'data.title',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.dialogTitle',
	},
	{
		name: 'data.description',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.dialogDescription',
	},
	{
		name: 'data.buttonLabel',
		type: 'string',
		default: "'OK'",
		description: 'apiReferenceDescriptions.primaryActionLabel',
	},
	{
		name: 'data.buttonColor',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'apiReferenceDescriptions.primaryActionColor',
	},
	{
		name: 'data.mediaComponent',
		type: 'Component | string',
		default: '-',
		description: 'apiReferenceDescriptions.optionalMediaComponent',
	},
	{
		name: 'data.mediaProps',
		type: 'Record<string, unknown>',
		default: '-',
		description: 'apiReferenceDescriptions.mediaProps',
	},
	{
		name: 'data.onAction',
		type: '() => void',
		default: '-',
		description: 'apiReferenceDescriptions.closeCallback',
	},
];

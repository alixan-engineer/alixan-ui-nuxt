export const confirmDialogProps = [
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
		name: 'data.cancelLabel',
		type: 'string',
		default: "'Cancel'",
		description: 'apiReferenceDescriptions.cancelActionLabel',
	},
	{
		name: 'data.submitLabel',
		type: 'string',
		default: "'Confirm'",
		description: 'apiReferenceDescriptions.submitActionLabel',
	},
	{
		name: 'data.submitColor',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'apiReferenceDescriptions.submitActionColor',
	},
	{
		name: 'data.onCancel',
		type: '() => void',
		default: '-',
		description: 'apiReferenceDescriptions.cancelCallback',
	},
	{
		name: 'data.onSubmit',
		type: '() => void',
		default: '-',
		description: 'apiReferenceDescriptions.submitCallback',
	},
];

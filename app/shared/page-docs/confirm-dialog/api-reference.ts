export const confirmDialogProps = [
	{
		name: 'data.title',
		type: 'string',
		default: '-',
		description: 'Dialog title.',
	},
	{
		name: 'data.description',
		type: 'string',
		default: '-',
		description: 'Short explanation shown under the title.',
	},
	{
		name: 'data.cancelLabel',
		type: 'string',
		default: "'Cancel'",
		description: 'Cancel action label.',
	},
	{
		name: 'data.submitLabel',
		type: 'string',
		default: "'Confirm'",
		description: 'Submit action label.',
	},
	{
		name: 'data.submitColor',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'Submit action button color.',
	},
	{
		name: 'data.onCancel',
		type: '() => void',
		default: '-',
		description: 'Callback called before closing from cancel.',
	},
	{
		name: 'data.onSubmit',
		type: '() => void',
		default: '-',
		description: 'Callback called before closing from submit.',
	},
];

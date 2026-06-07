export const alertDialogProps = [
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
		name: 'data.buttonLabel',
		type: 'string',
		default: "'OK'",
		description: 'Primary action label.',
	},
	{
		name: 'data.buttonColor',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'Primary action button color.',
	},
	{
		name: 'data.mediaComponent',
		type: 'Component | string',
		default: '-',
		description:
			'Optional media component, for example Lottie, img, or an icon component.',
	},
	{
		name: 'data.mediaProps',
		type: 'Record<string, unknown>',
		default: '-',
		description: 'Props passed to the media component.',
	},
	{
		name: 'data.onAction',
		type: '() => void',
		default: '-',
		description: 'Callback called before closing the dialog.',
	},
];

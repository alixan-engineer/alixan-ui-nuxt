export const loaderApi = [
	{
		name: 'show',
		type: '(options?: { label?: string }) => void',
		default: '-',
		description: 'Opens the full-screen loader.',
	},
	{
		name: 'hide',
		type: '() => void',
		default: '-',
		description: 'Closes the loader.',
	},
	{
		name: 'label',
		type: 'string',
		default: "''",
		description: 'Optional label displayed below the spinner.',
	},
];

export const loaderApi = [
	{
		name: 'show',
		type: '(options?: { label?: string }) => void',
		default: '-',
		description: 'apiReferenceDescriptions.loaderShow',
	},
	{
		name: 'hide',
		type: '() => void',
		default: '-',
		description: 'apiReferenceDescriptions.loaderHide',
	},
	{
		name: 'label',
		type: 'string',
		default: "''",
		description: 'apiReferenceDescriptions.loaderLabel',
	},
];

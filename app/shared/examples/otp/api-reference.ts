export const otpProps = [
	{
		name: 'modelValue',
		type: 'string',
		default: "''",
		description: 'apiReferenceDescriptions.otpModelValue',
	},
	{
		name: 'length',
		type: '4 | 5 | 6 | 7 | 8',
		default: '6',
		description: 'apiReferenceDescriptions.otpLength',
	},
];
export const otpEvents = [
	{
		name: 'change',
		type: '(value: string) => void',
		description: 'apiReferenceDescriptions.otpChange',
	},
	{
		name: 'submit',
		type: '(value: string) => void',
		description: 'apiReferenceDescriptions.otpSubmit',
	},
];

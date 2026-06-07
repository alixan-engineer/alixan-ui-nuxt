export const otpProps = [
	{
		name: 'modelValue',
		type: 'string',
		default: "''",
		description: 'OTP value used by v-model.',
	},
	{
		name: 'length',
		type: '4 | 5 | 6 | 7 | 8',
		default: '6',
		description: 'Number of OTP digits. Values are clamped between 4 and 8.',
	},
];
export const otpEvents = [
	{
		name: 'change',
		type: '(value: string) => void',
		description: 'Emitted on every OTP value change.',
	},
	{
		name: 'submit',
		type: '(value: string) => void',
		description: 'Emitted when the OTP value reaches the selected length.',
	},
];

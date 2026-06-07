export const checkboxProps = [
	{
		name: 'modelValue',
		type: 'boolean | string | number | Array<string | number> | null',
		default: 'false',
		description: 'Selected state used by v-model.',
	},
	{
		name: 'mode',
		type: "'single' | 'multiple'",
		default: "'single'",
		description:
			'Single stores a boolean or one value. Multiple stores an array.',
	},
	{
		name: 'value',
		type: 'string | number',
		default: '-',
		description: 'Value used for single value mode or multiple array mode.',
	},
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Optional label rendered next to the circular control.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables checkbox interaction.',
	},
];

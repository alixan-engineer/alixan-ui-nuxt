export const inputProps = [
	{
		name: 'modelValue',
		type: 'string | number | null',
		default: "''",
		description: 'Input value used by v-model.',
	},
	{
		name: 'id',
		type: 'string',
		default: '-',
		description: 'Custom id. Generated automatically when omitted.',
	},
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Floating label text.',
	},
	{
		name: 'type',
		type: "'text' | 'email' | 'password' | 'tel' | 'url' | 'number'",
		default: "'text'",
		description: 'Native input type.',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: '-',
		description: 'Native placeholder text.',
	},
	{
		name: 'autocomplete',
		type: "'on' | 'off'",
		default: '-',
		description: 'Controls the native browser autocomplete behavior.',
	},
	{
		name: 'autofocus',
		type: 'boolean',
		default: 'false',
		description: 'Focuses the input on mount.',
	},
	{
		name: 'required',
		type: 'boolean',
		default: 'false',
		description:
			'Shows a localized required message after blur when the value is empty.',
	},
	{
		name: 'min',
		type: 'number',
		default: '-',
		description: 'Minimum text length validation shown after blur.',
	},
	{
		name: 'max',
		type: 'number',
		default: '-',
		description: 'Maximum text length validation shown after blur.',
	},
	{
		name: 'pattern',
		type: 'string',
		default: '-',
		description:
			'Native pattern string. The value must match the whole pattern after blur.',
	},
	{
		name: 'patternMessage',
		type: 'string',
		default: "'Некорректный формат'",
		description: 'Validation message shown when pattern does not match.',
	},
	{
		name: 'mask',
		type: 'string',
		default: '-',
		description:
			'Digit mask where # is a digit. When mask is set, the floating label is hidden.',
	},
	{
		name: 'hint',
		type: 'string',
		default: '-',
		description: 'Helper text shown below the input.',
	},
	{
		name: 'error',
		type: 'string',
		default: '-',
		description:
			'Error message. Also switches the input into destructive state.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables input interaction.',
	},
	{
		name: 'readonly',
		type: 'boolean',
		default: 'false',
		description: 'Makes the input readable but not editable.',
	},
	{
		name: 'hasClearButton',
		type: 'boolean',
		default: 'true',
		description:
			'Shows a clear button when the input has a value and no trailing slot.',
	},
];

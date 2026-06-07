export const checkboxProps = [
	{
		name: 'modelValue',
		type: 'boolean | string | number | Array<string | number> | null',
		default: 'false',
		description: 'apiReferenceDescriptions.selectedStateModel',
	},
	{
		name: 'mode',
		type: "'single' | 'multiple'",
		default: "'single'",
		description: 'apiReferenceDescriptions.checkboxMode',
	},
	{
		name: 'value',
		type: 'string | number',
		default: '-',
		description: 'apiReferenceDescriptions.checkboxValue',
	},
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.checkboxLabel',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'apiReferenceDescriptions.checkboxDisabled',
	},
];

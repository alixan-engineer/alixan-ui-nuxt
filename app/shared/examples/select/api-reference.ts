export const selectProps = [
	{
		name: 'modelValue',
		type: 'string | number | null',
		default: 'null',
		description: 'apiReferenceDescriptions.selectModelValue',
	},
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.floatingLabel',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: "'Select option'",
		description: 'apiReferenceDescriptions.selectPlaceholder',
	},
	{
		name: 'options',
		type: 'SelectOption[]',
		default: '[]',
		description: 'apiReferenceDescriptions.selectOptions',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'apiReferenceDescriptions.selectDisabled',
	},
	{
		name: 'teleport',
		type: 'boolean',
		default: 'true',
		description: 'apiReferenceDescriptions.selectTeleport',
	},
];

export const selectProps = [
	{
		name: 'modelValue',
		type: 'string | number | null',
		default: 'null',
		description: 'Selected option value used by v-model.',
	},
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Floating label text.',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: "'Select option'",
		description: 'Text shown when no option is selected.',
	},
	{
		name: 'options',
		type: 'SelectOption[]',
		default: '[]',
		description: 'Options list with label, value and optional disabled.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables select interaction.',
	},
	{
		name: 'teleport',
		type: 'boolean',
		default: 'true',
		description:
			'Teleports menu to body. Keep true for nested popovers; set false only when the menu must stay inside the local layout.',
	},
];

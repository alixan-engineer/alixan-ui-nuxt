export const searchProps = [
	{
		name: 'modelValue',
		type: 'string',
		default: "''",
		description: 'Search input value used by v-model.',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: "'Search'",
		description: 'Placeholder text inside the search field.',
	},
	{
		name: 'debounce',
		type: 'number',
		default: '300',
		description: 'Delay in milliseconds before emitting the search event.',
	},
	{
		name: 'autofocus',
		type: 'boolean',
		default: 'false',
		description: 'Focuses the input when it is mounted.',
	},
	{
		name: 'readonly',
		type: 'boolean',
		default: 'false',
		description: 'Makes the field readable but not editable.',
	},
];
export const searchEvents = [
	{
		name: 'search',
		payload: 'string',
		description: 'Emitted with a trimmed value after debounce.',
	},
	{
		name: 'clear',
		payload: '-',
		description: 'Emitted when the clear button is clicked.',
	},
];

export const searchProps = [
	{
		name: 'modelValue',
		type: 'string',
		default: "''",
		description: 'apiReferenceDescriptions.searchModelValue',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: "'Search'",
		description: 'apiReferenceDescriptions.searchPlaceholder',
	},
	{
		name: 'debounce',
		type: 'number',
		default: '300',
		description: 'apiReferenceDescriptions.searchDebounce',
	},
	{
		name: 'autofocus',
		type: 'boolean',
		default: 'false',
		description: 'apiReferenceDescriptions.searchAutofocus',
	},
	{
		name: 'readonly',
		type: 'boolean',
		default: 'false',
		description: 'apiReferenceDescriptions.searchReadonly',
	},
];
export const searchEvents = [
	{
		name: 'search',
		payload: 'string',
		description: 'apiReferenceDescriptions.searchEvent',
	},
	{
		name: 'clear',
		payload: '-',
		description: 'apiReferenceDescriptions.clearEvent',
	},
];

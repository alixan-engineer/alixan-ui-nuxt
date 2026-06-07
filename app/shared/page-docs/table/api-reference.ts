export const tableApiRows = [
	{
		name: 'columns',
		type: 'TableColumn[]',
		default: '-',
		description: 'Column definitions with labels and explicit value mappers.',
	},
	{
		name: 'rows',
		type: 'Record<string, unknown>[]',
		default: '-',
		description: 'Data rows rendered by the table.',
	},
	{
		name: 'columns[].value',
		type: '(row, rowIndex) => unknown',
		default: 'required',
		description: 'Arrow function that returns the cell value from a row object.',
	},
	{
		name: 'minWidth',
		type: 'string',
		default: '-',
		description: 'Optional Tailwind class for horizontal overflow control.',
	},
];

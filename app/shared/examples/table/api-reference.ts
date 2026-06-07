export const tableApiRows = [
	{
		name: 'columns',
		type: 'TableColumn[]',
		default: '-',
		description: 'apiReferenceDescriptions.tableColumns',
	},
	{
		name: 'rows',
		type: 'Record<string, unknown>[]',
		default: '-',
		description: 'apiReferenceDescriptions.tableRows',
	},
	{
		name: 'columns[].getValue',
		type: '(row, rowIndex) => unknown',
		default: 'required',
		description: 'apiReferenceDescriptions.tableColumnValue',
	},
	{
		name: 'minWidth',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.tableMinWidth',
	},
];

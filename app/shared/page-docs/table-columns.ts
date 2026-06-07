export const propsTableColumns = [
	{ label: 'docsTable.prop', getValue: (row: any) => row.name ?? row.prop },
	{ label: 'docsTable.type', getValue: (row: any) => row.type },
	{ label: 'docsTable.default', getValue: (row: any) => row.default },
	{
		label: 'docsTable.description',
		getValue: (row: any) => row.description,
	},
];

export const argumentTableColumns = [
	{ label: 'docsTable.argument', getValue: (row: any) => row.name },
	{ label: 'docsTable.type', getValue: (row: any) => row.type },
	{ label: 'docsTable.default', getValue: (row: any) => row.default },
	{
		label: 'docsTable.description',
		getValue: (row: any) => row.description,
	},
];

export const eventTableColumns = [
	{ label: 'docsTable.event', getValue: (row: any) => `@${row.name}` },
	{ label: 'docsTable.type', getValue: (row: any) => row.type },
	{
		label: 'docsTable.description',
		getValue: (row: any) => row.description,
	},
];

export const eventPayloadTableColumns = [
	{ label: 'docsTable.event', getValue: (row: any) => `@${row.name}` },
	{ label: 'docsTable.payload', getValue: (row: any) => row.payload },
	{
		label: 'docsTable.description',
		getValue: (row: any) => row.description,
	},
];

export const slotTableColumns = [
	{ label: 'docsTable.prop', getValue: (row: any) => row.name },
	{
		label: 'docsTable.description',
		getValue: (row: any) => row.description,
	},
];

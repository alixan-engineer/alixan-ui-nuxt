export const propsTableColumns = [
	{ label: 'docsTable.prop', getValue: row => row.name ?? row.prop },
	{ label: 'docsTable.type', getValue: row => row.type },
	{ label: 'docsTable.default', getValue: row => row.default },
	{
		label: 'docsTable.description',
		getValue: row => row.description,
	},
];

export const argumentTableColumns = [
	{ label: 'docsTable.argument', getValue: row => row.name },
	{ label: 'docsTable.type', getValue: row => row.type },
	{ label: 'docsTable.default', getValue: row => row.default },
	{
		label: 'docsTable.description',
		getValue: row => row.description,
	},
];

export const eventTableColumns = [
	{ label: 'docsTable.event', getValue: row => `@${row.name}` },
	{ label: 'docsTable.type', getValue: row => row.type },
	{
		label: 'docsTable.description',
		getValue: row => row.description,
	},
];

export const eventPayloadTableColumns = [
	{ label: 'docsTable.event', getValue: row => `@${row.name}` },
	{ label: 'docsTable.payload', getValue: row => row.payload },
	{
		label: 'docsTable.description',
		getValue: row => row.description,
	},
];

export const slotTableColumns = [
	{ label: 'docsTable.prop', getValue: row => row.name },
	{
		label: 'docsTable.description',
		getValue: row => row.description,
	},
];

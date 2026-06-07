type Translate = (key: string) => string;
type TableRow = Record<string, unknown>;

export const propsTableColumns = (t: Translate) => [
	{ label: t('docsTable.prop'), value: (row: TableRow) => row.name },
	{ label: t('docsTable.type'), value: (row: TableRow) => row.type },
	{ label: t('docsTable.default'), value: (row: TableRow) => row.default },
	{
		label: t('docsTable.description'),
		value: (row: TableRow) => row.description,
	},
];

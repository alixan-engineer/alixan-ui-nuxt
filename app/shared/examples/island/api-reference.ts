export const islandProps = [
	{ name: 'title', type: 'string', default: '-', description: 'apiReferenceDescriptions.islandTitle' },
	{ name: 'subtitle', type: 'string', default: '-', description: 'apiReferenceDescriptions.islandSubtitle' },
	{ name: 'description', type: 'string', default: '-', description: 'apiReferenceDescriptions.islandDesc' },
	{
		name: 'headerPosition',
		type: "'inside' | 'outside'",
		default: "'outside'",
		description: 'apiReferenceDescriptions.islandHeaderPosition',
	},
	{
		name: 'contentClass',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.islandContentClass',
	},
	{ name: 'default', type: 'slot', default: '-', description: 'apiReferenceDescriptions.islandContent' },
];

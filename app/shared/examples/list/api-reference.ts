export const listProps = [
	{ name: 'divider', type: "'inset' | 'block'", default: "'inset'", description: 'apiReferenceDescriptions.listDivider' },
];
export const listTileProps = [
	{ name: 'title', type: 'string', default: '-', description: 'apiReferenceDescriptions.listTitle' },
	{ name: 'description', type: 'string', default: '-', description: 'apiReferenceDescriptions.listDescription' },
	{ name: '@click', type: '(event: MouseEvent) => void', default: '-', description: 'apiReferenceDescriptions.listClick' },
];
export const listTileSlots = [
	{ name: 'leading', type: 'slot', default: '-', description: 'apiReferenceDescriptions.listLeading' },
	{ name: 'title', type: 'slot', default: '-', description: 'apiReferenceDescriptions.listTitleSlot' },
	{ name: 'description', type: 'slot', default: '-', description: 'apiReferenceDescriptions.listDescriptionSlot' },
	{ name: 'trailing', type: 'slot', default: '-', description: 'apiReferenceDescriptions.listTrailing' },
];

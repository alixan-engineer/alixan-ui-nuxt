export const virtualScrollerApiRows = [
	{ name: 'items', type: 'T[]', default: '-', description: 'apiReferenceDescriptions.virtualScrollerItems' },
	{ name: 'itemKey', type: 'keyof T | (item, index) => string | number', default: '-', description: 'apiReferenceDescriptions.virtualScrollerItemKey' },
	{ name: 'rowHeight', type: 'number', default: '312', description: 'apiReferenceDescriptions.virtualScrollerRowHeight' },
	{ name: 'minColumnWidth', type: 'number', default: '240', description: 'apiReferenceDescriptions.virtualScrollerMinColumnWidth' },
	{ name: 'gap', type: 'number', default: '12', description: 'apiReferenceDescriptions.virtualScrollerGap' },
	{ name: 'overscanRows', type: 'number', default: '3', description: 'apiReferenceDescriptions.virtualScrollerOverscan' },
	{ name: 'gridClass', type: 'string', default: 'responsive grid', description: 'apiReferenceDescriptions.virtualScrollerGridClass' },
];

export const virtualScrollerSlotRows = [
	{ name: 'default', type: '{ item: T; index: number }', default: '-', description: 'apiReferenceDescriptions.virtualScrollerDefaultSlot' },
	{ name: 'header', type: '-', default: '-', description: 'apiReferenceDescriptions.virtualScrollerHeaderSlot' },
];

export const appBarProps = [
	{ name: 'title', type: 'string', default: '-', description: 'apiReferenceDescriptions.appBarTitle' },
	{ name: 'variant', type: "'compact' | 'silver'", default: "'compact'", description: 'apiReferenceDescriptions.appBarVariant' },
	{ name: 'sticky', type: 'boolean', default: 'true', description: 'apiReferenceDescriptions.appBarSticky' },
	{ name: 'showDividerOnScroll', type: 'boolean', default: 'true', description: 'apiReferenceDescriptions.appBarDivider' },
	{ name: 'titleAlign', type: "'responsive' | 'start' | 'center'", default: "'responsive'", description: 'apiReferenceDescriptions.appBarTitleAlign' },
	{ name: 'scrollTarget', type: 'HTMLElement | string | null', default: 'null', description: 'apiReferenceDescriptions.appBarScrollTarget' },
];

export const appBarSlots = [
	{ name: 'leading', type: 'slot', default: '-', description: 'apiReferenceDescriptions.appBarLeading' },
	{ name: 'trailing', type: 'slot', default: '-', description: 'apiReferenceDescriptions.appBarTrailing' },
	{ name: 'title', type: 'slot', default: '-', description: 'apiReferenceDescriptions.appBarTitleSlot' },
	{ name: 'largeTitle', type: 'slot', default: '-', description: 'apiReferenceDescriptions.appBarLargeTitleSlot' },
	{ name: 'default', type: 'slot', default: '-', description: 'apiReferenceDescriptions.appBarContent' },
];

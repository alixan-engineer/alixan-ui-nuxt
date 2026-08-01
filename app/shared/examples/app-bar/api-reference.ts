export const appBarProps = [
	{ name: 'title', type: 'string', default: '-', description: 'apiReferenceDescriptions.appBarTitle' },
	{ name: 'variant', type: "'compact' | 'silver'", default: "'compact'", description: 'apiReferenceDescriptions.appBarVariant' },
	{ name: 'sticky', type: 'boolean', default: 'true', description: 'apiReferenceDescriptions.appBarSticky' },
	{ name: 'showDividerOnScroll', type: 'boolean', default: 'true', description: 'apiReferenceDescriptions.appBarDivider' },
	{
		name: 'titleAlign',
		type: "'responsive' | 'start' | 'center'",
		default: "'responsive'",
		description: 'apiReferenceDescriptions.appBarTitleAlign',
	},
	{
		name: 'scrollTarget',
		type: 'HTMLElement | string | null',
		default: 'null',
		description: 'apiReferenceDescriptions.appBarScrollTarget',
	},
];

export const appBarSlots = [
	{ name: 'leading', description: 'apiReferenceDescriptions.appBarLeading' },
	{ name: 'trailing', description: 'apiReferenceDescriptions.appBarTrailing' },
	{ name: 'title', description: 'apiReferenceDescriptions.appBarTitleSlot' },
	{ name: 'largeTitle', description: 'apiReferenceDescriptions.appBarLargeTitleSlot' },
	{ name: 'default', description: 'apiReferenceDescriptions.appBarContent' },
];

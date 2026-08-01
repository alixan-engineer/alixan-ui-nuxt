export const appBarProps = [
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.appBarTitle',
	},
	{
		name: 'titleAlign',
		type: "'responsive' | 'start' | 'center'",
		default: "'responsive'",
		description: 'apiReferenceDescriptions.appBarTitleAlign',
	},
];

export const appBarSlots = [
	{
		name: 'leading',
		appBar: '✓',
		silverAppBar: '✓',
		description: 'apiReferenceDescriptions.appBarLeading',
	},
	{
		name: 'trailing',
		appBar: '✓',
		silverAppBar: '✓',
		description: 'apiReferenceDescriptions.appBarTrailing',
	},
	{
		name: 'observer',
		appBar: '-',
		silverAppBar: '✓',
		description: 'apiReferenceDescriptions.silverAppBarObserver',
	},
];

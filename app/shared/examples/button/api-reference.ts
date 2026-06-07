export const buttonApiRows = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.fallbackSlotText',
	},
	{
		name: 'variant',
		type: "'filled' | 'outlined' | 'ghost'",
		default: "'filled'",
		description: 'apiReferenceDescriptions.buttonSurfaceStyle',
	},
	{
		name: 'color',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'default'",
		description: 'apiReferenceDescriptions.semanticIntent',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'apiReferenceDescriptions.heightPaddingText',
	},
	{
		name: 'to',
		type: 'RouteLocationRaw',
		default: '-',
		description: 'apiReferenceDescriptions.buttonNuxtLink',
	},
	{
		name: 'href',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.buttonNativeAnchor',
	},
	{
		name: 'target',
		type: "'_blank' | '_self' | '_parent' | '_top'",
		default: '-',
		description: 'apiReferenceDescriptions.anchorTarget',
	},
];

export const iconButtonApiRows = [
	{
		name: 'variant',
		type: "'filled' | 'outlined' | 'ghost'",
		default: "'ghost'",
		description: 'apiReferenceDescriptions.iconButtonVariant',
	},
	{
		name: 'color',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'default'",
		description: 'apiReferenceDescriptions.colorIntent',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'apiReferenceDescriptions.iconButtonSize',
	},
	{
		name: 'to',
		type: 'RouteLocationRaw',
		default: '-',
		description: 'apiReferenceDescriptions.iconButtonNuxtLink',
	},
	{
		name: 'href',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.iconButtonNativeAnchor',
	},
	{
		name: 'target',
		type: "'_blank' | '_self' | '_parent' | '_top'",
		default: '-',
		description: 'apiReferenceDescriptions.anchorTarget',
	},
	{
		name: 'tooltip',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.tooltipText',
	},
];

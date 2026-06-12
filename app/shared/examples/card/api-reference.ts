export const cardProps = [
	{
		name: 'image',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.cardImage',
	},
	{
		name: 'imageAlt',
		type: 'string',
		default: "''",
		description: 'apiReferenceDescriptions.cardImageAlt',
	},
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.cardTitle',
	},
	{
		name: 'description',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.optionalSupportingText',
	},
	{
		name: 'price',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.cardPrice',
	},
	{
		name: 'button',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.optionalActionLabel',
	},
	{
		name: '@on-tap',
		type: '() => void',
		default: '-',
		description: 'apiReferenceDescriptions.cardButtonEvent',
	},
];

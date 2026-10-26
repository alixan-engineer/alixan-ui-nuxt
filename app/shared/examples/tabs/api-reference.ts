export const tabsProps = [
	{
		name: 'modelValue',
		type: 'number',
		default: '0',
		description: 'apiReferenceDescriptions.tabsModelValue',
	},
	{
		name: 'tabs',
		type: 'string[]',
		default: '[]',
		description: 'apiReferenceDescriptions.tabsList',
	},
	{
		name: 'design',
		type: "'material' | 'cupertino'",
		default: "'cupertino'",
		description: 'apiReferenceDescriptions.tabsDesign',
	},
	{
		name: 'full',
		type: 'boolean',
		default: 'false',
		description: 'apiReferenceDescriptions.tabsFull',
	},
];

export const tabsSwiperProps = [
	...tabsProps.filter(prop => prop.name !== 'full'),
	{
		name: 'counts',
		type: 'number[]',
		default: 'undefined',
		description: 'apiReferenceDescriptions.tabsSwiperCounts',
	},
];

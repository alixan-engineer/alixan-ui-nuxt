export const tabsProps = [
	{
		name: 'modelValue',
		type: 'number',
		default: '0',
		description: 'Selected tab index used by v-model.',
	},
	{
		name: 'tabs',
		type: 'string[]',
		default: '[]',
		description: 'List of tab labels.',
	},
	{
		name: 'design',
		type: "'material' | 'cupertino'",
		default: "'cupertino'",
		description: 'Visual style of the tabs.',
	},
	{
		name: 'full',
		type: 'boolean',
		default: 'false',
		description:
			'Makes the tabs container and every tab use full available width.',
	},
];

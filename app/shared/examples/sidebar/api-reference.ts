export const sidebarApiRows = [
	{
		name: 'sections',
		type: 'SidebarSection[]',
		default: '-',
		description: 'apiReferenceDescriptions.sidebarSections',
	},
	{
		name: 'selected',
		type: 'string',
		default: '-',
		description: 'apiReferenceDescriptions.sidebarSelected',
	},
	{
		name: '@select',
		type: '(id: string) => void',
		default: '-',
		description: 'apiReferenceDescriptions.sidebarSelect',
	},
];

export const sidebarSlots = [
	{
		name: 'logo',
		description: 'apiReferenceDescriptions.sidebarLogo',
	},
	{
		name: 'sidebarFooter',
		description: 'apiReferenceDescriptions.sidebarFooter',
	},
];

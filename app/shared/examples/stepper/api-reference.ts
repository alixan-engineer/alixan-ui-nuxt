export const stepperProps = [
	{
		name: 'steps',
		type: '{ id: string | number; label: string }[]',
		default: '[]',
		description: 'apiReferenceDescriptions.stepperSteps',
	},
	{
		name: 'selected',
		type: '{ id: string | number; label: string }',
		default: 'undefined',
		description: 'apiReferenceDescriptions.stepperSelected',
	},
	{
		name: 'direction',
		type: "'horizontal' | 'vertical'",
		default: "'horizontal'",
		description: 'apiReferenceDescriptions.stepperDirection',
	},
];

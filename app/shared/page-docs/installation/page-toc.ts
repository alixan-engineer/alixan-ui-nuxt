type Translate = (key: string) => string;

export const installationPageToc = (t: Translate) => [
	{ label: t('installationPage.createProject.title'), href: '#create-project' },
	{ label: t('installationPage.addTailwind.title'), href: '#add-tailwind-css' },
	{
		label: t('installationPage.installComponent.title'),
		href: '#install-component',
	},
	{ label: t('installationPage.useComponent.title'), href: '#use-component' },
] as const;

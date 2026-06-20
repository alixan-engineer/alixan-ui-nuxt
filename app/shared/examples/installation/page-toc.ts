import type { IPageToc } from '~/interfaces/page-toc/page-toc.interface';

export const installationPageToc: IPageToc[] = [
	{ label: 'installationPage.createProject.title', href: '#create-project' },
	{ label: 'installationPage.addTailwind.title', href: '#add-tailwind-css' },
	{ label: 'installationPage.addI18n.title', href: '#add-i18n' },
	{
		label: 'installationPage.i18nConfiguration.title',
		href: '#i18n-configuration',
	},
	{
		label: 'installationPage.installComponent.title',
		href: '#install-component',
	},
	{ label: 'installationPage.useComponent.title', href: '#use-component' },
];

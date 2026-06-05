import type { IMenuSection } from '~/interfaces/sidebar/sidebar.interface';

export const menuSections: IMenuSection[] = [
	{
		labelKey: 'sidebar.sections',
		items: [
			{ labelKey: 'sidebar.introduction', to: '/' },
			{ labelKey: 'sidebar.installation', to: '/installation' },
		],
	},
	{
		labelKey: 'sidebar.guides',
		items: [
			{ labelKey: 'component.icons', to: '/icons' },
			{ labelKey: 'guide.fonts', to: '/fonts' },
			{ labelKey: 'guide.i18n', to: '/i18n' },
			{ labelKey: 'guide.seo', to: '/seo' },
		],
	},
	{
		labelKey: 'sidebar.components',
		items: [
			{ labelKey: 'component.button', to: '/button' },
			{ labelKey: 'component.iconButton', to: '/icon-button' },
			{ labelKey: 'component.textLink', to: '/text-link' },
			{ labelKey: 'component.chip', to: '/chip' },
			{ labelKey: 'component.accordion', to: '/accordion' },
			{ labelKey: 'component.tabs', to: '/tabs' },
			{ labelKey: 'component.switch', to: '/switch' },
			{ labelKey: 'component.status', to: '/status' },
		],
	},
	{
		labelKey: 'sidebar.forms',
		items: [
			{ labelKey: 'component.input', to: '/input' },
			{ labelKey: 'component.otp', to: '/otp' },
			{ labelKey: 'component.select', to: '/select' },
			{ labelKey: 'component.search', to: '/search' },
			{ labelKey: 'component.autocomplete', to: '/autocomplete' },
			{ labelKey: 'component.calendar', to: '/calendar' },
		],
	},
	{
		labelKey: 'sidebar.overlays',
		items: [
			{ labelKey: 'component.dialog', to: '/dialog' },
			{ labelKey: 'component.alertDialog', to: '/alert-dialog' },
			{ labelKey: 'component.confirmDialog', to: '/confirm-dialog' },
			{ labelKey: 'component.drawer', to: '/drawer' },
			{ labelKey: 'component.dropdownMenu', to: '/dropdown-menu' },
			{ labelKey: 'component.globalLoader', to: '/global-loader' },
			{ labelKey: 'component.toast', to: '/toast' },
		],
	},
];

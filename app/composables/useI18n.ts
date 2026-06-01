export type Locale = 'en' | 'ru' | 'kk';

export type MessageKey =
	| 'app.back'
	| 'app.github'
	| 'app.settings'
	| 'settings.language'
	| 'settings.theme'
	| 'settings.accent'
	| 'sidebar.sections'
	| 'sidebar.introduction'
	| 'sidebar.installation'
	| 'sidebar.guides'
	| 'sidebar.components'
	| 'sidebar.overlays'
	| 'component.button'
	| 'component.iconButton'
	| 'component.icons'
	| 'component.input'
	| 'component.otp'
	| 'component.chip'
	| 'component.search'
	| 'component.tabs'
	| 'component.switch'
	| 'component.status'
	| 'component.dialog'
	| 'component.alertDialog'
	| 'component.drawer'
	| 'component.globalLoader'
	| 'component.toast'
	| 'component.select'
	| 'component.dropdownMenu';

const messages: Record<Locale, Record<MessageKey, string>> = {
	en: {
		'app.back': 'Back to Alixan',
		'app.github': 'Open GitHub',
		'app.settings': 'Open settings',
		'settings.language': 'Language',
		'settings.theme': 'Theme',
		'settings.accent': 'Theme',
		'sidebar.sections': 'Sections',
		'sidebar.introduction': 'Introduction',
		'sidebar.installation': 'Installation',
		'sidebar.guides': 'Guides',
		'sidebar.components': 'Components',
		'sidebar.overlays': 'Overlays',
		'component.button': 'Button',
		'component.iconButton': 'Icon Button',
		'component.icons': 'Icons',
		'component.input': 'Input',
		'component.otp': 'OTP Input',
		'component.chip': 'Chip',
		'component.search': 'Search',
		'component.tabs': 'Tabs',
		'component.switch': 'Switch',
		'component.status': 'Status',
		'component.dialog': 'Dialog',
		'component.alertDialog': 'Alert Dialog',
		'component.drawer': 'Drawer',
		'component.globalLoader': 'Global Loader',
		'component.toast': 'Toast',
		'component.select': 'Select',
		'component.dropdownMenu': 'Dropdown Menu',
	},
	ru: {
		'app.back': 'Назад в Alixan',
		'app.github': 'Открыть GitHub',
		'app.settings': 'Открыть настройки',
		'settings.language': 'Язык',
		'settings.theme': 'Тема',
		'settings.accent': 'Theme',
		'sidebar.sections': 'Разделы',
		'sidebar.introduction': 'Введение',
		'sidebar.installation': 'Установка',
		'sidebar.guides': 'Гайды',
		'sidebar.components': 'Компоненты',
		'sidebar.overlays': 'Оверлеи',
		'component.button': 'Кнопка',
		'component.iconButton': 'Иконка-кнопка',
		'component.icons': 'Иконки',
		'component.input': 'Поле ввода',
		'component.otp': 'OTP Input',
		'component.chip': 'Чип',
		'component.search': 'Поиск',
		'component.tabs': 'Табы',
		'component.switch': 'Переключатель',
		'component.status': 'Статус',
		'component.dialog': 'Диалог',
		'component.alertDialog': 'Alert Dialog',
		'component.drawer': 'Панель',
		'component.globalLoader': 'Глобальный лоадер',
		'component.toast': 'Toast',
		'component.select': 'Селект',
		'component.dropdownMenu': 'Выпадающее меню',
	},
	kk: {
		'app.back': 'Alixan-ға оралу',
		'app.github': 'GitHub ашу',
		'app.settings': 'Баптауларды ашу',
		'settings.language': 'Тіл',
		'settings.theme': 'Тақырып',
		'settings.accent': 'Theme',
		'sidebar.sections': 'Бөлімдер',
		'sidebar.introduction': 'Кіріспе',
		'sidebar.installation': 'Орнату',
		'sidebar.guides': 'Гайдтар',
		'sidebar.components': 'Компоненттер',
		'sidebar.overlays': 'Оверлейлер',
		'component.button': 'Button',
		'component.iconButton': 'Icon Button',
		'component.icons': 'Icons',
		'component.input': 'Input',
		'component.otp': 'OTP Input',
		'component.chip': 'Chip',
		'component.search': 'Search',
		'component.tabs': 'Tabs',
		'component.switch': 'Switch',
		'component.status': 'Status',
		'component.dialog': 'Dialog',
		'component.alertDialog': 'Alert Dialog',
		'component.drawer': 'Drawer',
		'component.globalLoader': 'Global Loader',
		'component.toast': 'Toast',
		'component.select': 'Select',
		'component.dropdownMenu': 'Dropdown Menu',
	},
};

const locale = ref<Locale>('en');

export const useI18n = () => {
	const setLocale = (value: Locale): void => {
		locale.value = value;

		if (import.meta.client) {
			localStorage.setItem('alixan-ui-locale', value);
			document.documentElement.lang = value;
		}
	};

	const toggleLocale = (): void => {
		const nextLocale: Record<Locale, Locale> = {
			en: 'ru',
			ru: 'kk',
			kk: 'en',
		};

		setLocale(nextLocale[locale.value]);
	};

	const t = (key: MessageKey): string => {
		return messages[locale.value][key] ?? messages.en[key];
	};

	if (import.meta.client) {
		const storedLocale = localStorage.getItem('alixan-ui-locale');

		if (storedLocale === 'en' || storedLocale === 'ru' || storedLocale === 'kk') {
			locale.value = storedLocale;
		}

		document.documentElement.lang = locale.value;
	}

	return {
		locale: readonly(locale),
		setLocale,
		t,
		toggleLocale,
	};
};

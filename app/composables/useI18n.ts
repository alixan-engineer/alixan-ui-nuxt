type Locale = 'en' | 'ru';

export type MessageKey =
	| 'app.back'
	| 'app.theme'
	| 'app.language'
	| 'sidebar.sections'
	| 'sidebar.introduction'
	| 'sidebar.installation'
	| 'sidebar.components'
	| 'sidebar.overlays'
	| 'component.button'
	| 'component.iconButton'
	| 'component.input'
	| 'component.chip'
	| 'component.search'
	| 'component.tabs'
	| 'component.switch'
	| 'component.status'
	| 'component.dialog'
	| 'component.drawer'
	| 'component.select'
	| 'component.dropdownMenu';

const messages: Record<Locale, Record<MessageKey, string>> = {
	en: {
		'app.back': 'Back to Alixan',
		'app.theme': 'Toggle theme',
		'app.language': 'Switch language',
		'sidebar.sections': 'Sections',
		'sidebar.introduction': 'Introduction',
		'sidebar.installation': 'Installation',
		'sidebar.components': 'Components',
		'sidebar.overlays': 'Overlays',
		'component.button': 'Button',
		'component.iconButton': 'Icon Button',
		'component.input': 'Input',
		'component.chip': 'Chip',
		'component.search': 'Search',
		'component.tabs': 'Tabs',
		'component.switch': 'Switch',
		'component.status': 'Status',
		'component.dialog': 'Dialog',
		'component.drawer': 'Drawer',
		'component.select': 'Select',
		'component.dropdownMenu': 'Dropdown Menu',
	},
	ru: {
		'app.back': 'Назад в Alixan',
		'app.theme': 'Переключить тему',
		'app.language': 'Сменить язык',
		'sidebar.sections': 'Разделы',
		'sidebar.introduction': 'Введение',
		'sidebar.installation': 'Установка',
		'sidebar.components': 'Компоненты',
		'sidebar.overlays': 'Оверлеи',
		'component.button': 'Кнопка',
		'component.iconButton': 'Иконка-кнопка',
		'component.input': 'Поле ввода',
		'component.chip': 'Чип',
		'component.search': 'Поиск',
		'component.tabs': 'Табы',
		'component.switch': 'Переключатель',
		'component.status': 'Статус',
		'component.dialog': 'Диалог',
		'component.drawer': 'Панель',
		'component.select': 'Селект',
		'component.dropdownMenu': 'Выпадающее меню',
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
		setLocale(locale.value === 'en' ? 'ru' : 'en');
	};

	const t = (key: MessageKey): string => {
		return messages[locale.value][key] ?? messages.en[key];
	};

	if (import.meta.client) {
		const storedLocale = localStorage.getItem('alixan-ui-locale');

		if (storedLocale === 'en' || storedLocale === 'ru') {
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

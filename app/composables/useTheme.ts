import { accentColors, type AccentTheme } from '~/shared/theme/theme';

const applyAccentTheme = (value: AccentTheme): void => {
	const color = accentColors[value];
	const isDarkTheme = document.documentElement.classList.contains('dark');
	const primary =
		isDarkTheme && color.darkPrimary ? color.darkPrimary : color.primary;
	const primaryForeground =
		isDarkTheme && color.darkPrimaryForeground
			? color.darkPrimaryForeground
			: color.primaryForeground;

	document.documentElement.style.setProperty('--primary', primary);
	document.documentElement.style.setProperty(
		'--primary-foreground',
		primaryForeground,
	);
	document.documentElement.style.setProperty('--sidebar-primary', primary);
	document.documentElement.style.setProperty(
		'--sidebar-primary-foreground',
		primaryForeground,
	);
};

export const useTheme = () => {
	const colorMode = useColorMode();
	const accentTheme = useCookie<AccentTheme>('alixan-ui-accent-theme', {
		default: () => 'default',
		path: '/',
		sameSite: 'lax',
	});

	const setAccentTheme = (value: AccentTheme): void => {
		accentTheme.value = value;
		applyAccentTheme(value);
	};

	onMounted(() => applyAccentTheme(accentTheme.value));

	watch(
		() => colorMode.value,
		() => applyAccentTheme(accentTheme.value),
	);

	return {
		accentColors,
		accentTheme: readonly(accentTheme),
		setAccentTheme,
	};
};

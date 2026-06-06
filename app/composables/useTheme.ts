import type { AccentThemeType } from '~/interfaces/theme/theme.interface';
import { accentColors } from '~/shared/theme/colors';
import { tailwindCss } from '~/shared/theme/tailwind';

export const useTheme = () => {
	const colorMode = useColorMode();
	const accentTheme = useCookie<AccentThemeType>('alixan-ui-accent-theme', {
		default: () => 'default',
		path: '/',
		sameSite: 'lax',
	});

	const setAccentTheme = (value: AccentThemeType): void => {
		accentTheme.value = value;
		applyAccentTheme();
	};

	watch(
		() => colorMode.value,
		() => applyAccentTheme(),
	);

	const escapeRegExp = (value: string): string =>
		value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	const replaceCssVariable = (
		css: string,
		selector: string,
		variable: string,
		value: string,
	): string => {
		const pattern = new RegExp(
			`(${escapeRegExp(selector)}\\s*\\{[\\s\\S]*?${escapeRegExp(variable)}:\\s*)[^;]+(;[\\s\\S]*?\\})`,
		);
		return css.replace(pattern, `$1${value}$2`);
	};

	const createThemeCss = (colors: ThemeCssColors): string => {
		const darkPrimary = colors.darkPrimary ?? colors.primary;
		const darkPrimaryForeground =
			colors.darkPrimaryForeground ?? colors.primaryForeground;
		const replacements: CssVariableReplacement[] = [
			[':root', '--primary', colors.primary],
			[':root', '--primary-foreground', colors.primaryForeground],
			[':root', '--sidebar-primary', colors.primary],
			[':root', '--sidebar-primary-foreground', colors.primaryForeground],
			['.dark', '--primary', darkPrimary],
			['.dark', '--primary-foreground', darkPrimaryForeground],
			['.dark', '--sidebar-primary', darkPrimary],
			['.dark', '--sidebar-primary-foreground', darkPrimaryForeground],
		];
		return replacements.reduce(
			(currentCss, [selector, variable, value]) =>
				replaceCssVariable(currentCss, selector, variable, value),
			tailwindCss,
		);
	};

	const applyAccentTheme = () => {
		const color = accentColors[accentTheme.value];
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

	return {
		accentColors,
		accentTheme,
		applyAccentTheme,
		setAccentTheme,
		createThemeCss,
	};
};

interface ThemeCssColors {
	primary: string;
	primaryForeground: string;
	darkPrimary?: string;
	darkPrimaryForeground?: string;
}

type CssVariableReplacement = [
	selector: string,
	variable: string,
	value: string,
];

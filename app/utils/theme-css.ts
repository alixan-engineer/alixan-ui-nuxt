interface ThemeCssColors {
	primary: string;
	primaryForeground: string;
	darkPrimary?: string;
	darkPrimaryForeground?: string;
}

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

export const createThemeCss = (
	css: string,
	colors: ThemeCssColors,
): string => {
	const darkPrimary = colors.darkPrimary ?? colors.primary;
	const darkPrimaryForeground =
		colors.darkPrimaryForeground ?? colors.primaryForeground;

	return [
		[':root', '--primary', colors.primary],
		[':root', '--primary-foreground', colors.primaryForeground],
		[':root', '--sidebar-primary', colors.primary],
		[':root', '--sidebar-primary-foreground', colors.primaryForeground],
		['.dark', '--primary', darkPrimary],
		['.dark', '--primary-foreground', darkPrimaryForeground],
		['.dark', '--sidebar-primary', darkPrimary],
		['.dark', '--sidebar-primary-foreground', darkPrimaryForeground],
	].reduce(
		(currentCss, [selector, variable, value]) =>
			replaceCssVariable(currentCss, selector, variable, value),
		css,
	);
};

import type { AccentThemeType } from '~/interfaces/theme/theme.interface';

export const accentColors: Record<
	AccentThemeType,
	{
		primary: string;
		primaryForeground: string;
		darkPrimary?: string;
		darkPrimaryForeground?: string;
	}
> = {
	default: {
		primary: 'oklch(0.141 0.005 285.823)',
		primaryForeground: 'oklch(0.985 0 0)',
		darkPrimary: 'oklch(0.985 0 0)',
		darkPrimaryForeground: 'oklch(0.141 0.005 285.823)',
	},
	blue: {
		primary: 'oklch(0.488 0.243 264.376)',
		primaryForeground: 'oklch(0.97 0.014 254.604)',
	},
	green: {
		primary: 'oklch(0.723 0.219 142.18)',
		primaryForeground: 'oklch(0.982 0.018 155.826)',
	},
	yellow: {
		primary: 'oklch(0.879 0.169 91.605)',
		primaryForeground: 'oklch(0.21 0.006 285.885)',
	},
	orange: {
		primary: 'oklch(0.705 0.213 47.604)',
		primaryForeground: 'oklch(0.21 0.006 285.885)',
	},
	red: {
		primary: 'oklch(0.637 0.237 25.331)',
		primaryForeground: 'oklch(0.971 0.013 17.38)',
	},
	purple: {
		primary: 'oklch(0.558 0.288 302.321)',
		primaryForeground: 'oklch(0.977 0.014 308.299)',
	},
	pink: {
		primary: 'oklch(0.656 0.241 354.308)',
		primaryForeground: 'oklch(0.971 0.014 343.198)',
	},
	brown: {
		primary: 'oklch(0.47 0.118 66.05)',
		primaryForeground: 'oklch(0.98 0.016 73.684)',
	},
	aqua: {
		primary: 'oklch(0.695 0.149 182.503)',
		primaryForeground: 'oklch(0.985 0 0)',
	},
};

export const accentColorsList = Object.keys(accentColors) as AccentThemeType[];

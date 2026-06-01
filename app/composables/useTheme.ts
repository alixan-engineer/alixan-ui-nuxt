export type Theme = 'light' | 'dark';
export type AccentTheme = 'default' | 'blue' | 'green' | 'yellow' | 'orange' | 'red';

const theme = ref<Theme>('light');
const accentTheme = ref<AccentTheme>('default');

const accentColors: Record<
	AccentTheme,
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
};

const applyTheme = (value: Theme): void => {
	if (!import.meta.client) {
		return;
	}

	document.documentElement.classList.toggle('dark', value === 'dark');
	localStorage.setItem('alixan-ui-theme', value);
	applyAccentTheme(accentTheme.value);
};

const applyAccentTheme = (value: AccentTheme): void => {
	if (!import.meta.client) {
		return;
	}

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
	localStorage.setItem('alixan-ui-accent-theme', value);
};

export const useTheme = () => {
	const setTheme = (value: Theme): void => {
		theme.value = value;
		applyTheme(value);
	};

	const setAccentTheme = (value: AccentTheme): void => {
		accentTheme.value = value;
		applyAccentTheme(value);
	};

	const toggleTheme = (): void => {
		setTheme(theme.value === 'dark' ? 'light' : 'dark');
	};

	if (import.meta.client) {
		const storedTheme = localStorage.getItem('alixan-ui-theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		theme.value =
			storedTheme === 'dark' || storedTheme === 'light'
				? storedTheme
				: prefersDark
					? 'dark'
					: 'light';

		applyTheme(theme.value);

		const storedAccentTheme = localStorage.getItem('alixan-ui-accent-theme');

		if (
			storedAccentTheme === 'default' ||
			storedAccentTheme === 'blue' ||
			storedAccentTheme === 'green' ||
			storedAccentTheme === 'yellow' ||
			storedAccentTheme === 'orange' ||
			storedAccentTheme === 'red'
		) {
			accentTheme.value = storedAccentTheme;
		}

		applyAccentTheme(accentTheme.value);
	}

	return {
		accentColors,
		accentTheme: readonly(accentTheme),
		theme: readonly(theme),
		setAccentTheme,
		setTheme,
		toggleTheme,
	};
};

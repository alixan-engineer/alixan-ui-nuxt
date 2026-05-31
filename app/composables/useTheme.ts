type Theme = 'light' | 'dark';

const theme = ref<Theme>('light');

function applyTheme(value: Theme): void {
	if (!import.meta.client) {
		return;
	}

	document.documentElement.classList.toggle('dark', value === 'dark');
	localStorage.setItem('alixan-ui-theme', value);
}

export function useTheme() {
	function setTheme(value: Theme): void {
		theme.value = value;
		applyTheme(value);
	}

	function toggleTheme(): void {
		setTheme(theme.value === 'dark' ? 'light' : 'dark');
	}

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
	}

	return {
		theme: readonly(theme),
		setTheme,
		toggleTheme,
	};
}

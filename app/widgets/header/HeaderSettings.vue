<script setup lang="ts">
import { Settings } from '@lucide/vue';
import ThemeCodeDialog from '~/widgets/theme-code-dialog/ThemeCodeDialog.vue';
import type { AccentThemeType } from '~/interfaces/theme/theme.interface';

type Locale = 'en' | 'ru' | 'kk';
type ColorModePreference = 'system' | 'light' | 'dark';

const { locale, setLocale } = useI18n();
const colorMode = useColorMode();
const { accentColors, accentTheme, setAccentTheme, createThemeCss } =
	useTheme();
const dialog = useDialog();

const isOpen = ref(false);

const languageOptions: Array<{ label: string; value: Locale }> = [
	{ label: 'English', value: 'en' },
	{ label: 'Русский', value: 'ru' },
	{ label: 'Қазақша', value: 'kk' },
];

const themeOptions: Array<{ label: string; value: ColorModePreference }> = [
	{ label: 'System', value: 'system' },
	{ label: 'Light', value: 'light' },
	{ label: 'Dark', value: 'dark' },
];

const accentOptions: Array<{ label: string; value: AccentThemeType }> = [
	{ label: 'Default', value: 'default' },
	{ label: 'Blue', value: 'blue' },
	{ label: 'Green', value: 'green' },
	{ label: 'Yellow', value: 'yellow' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Red', value: 'red' },
	{ label: 'Purple', value: 'purple' },
	{ label: 'Pink', value: 'pink' },
	{ label: 'Brown', value: 'brown' },
	{ label: 'Aqua', value: 'aqua' },
];

const getAccentPreviewColor = (value: AccentThemeType): string => {
	const color = accentColors[value];
	if (value === 'default' && colorMode.value === 'dark' && color.darkPrimary) {
		return color.darkPrimary;
	}
	return color.primary;
};

const themeCode = computed(() => {
	return createThemeCss(accentColors[accentTheme.value]);
});

const changeLocale = async (value: Locale) => {
	useHead({
		htmlAttrs: { lang: value },
	});
	await setLocale(value);
};

const setTheme = (value: ColorModePreference): void => {
	colorMode.preference = value;
};

const openThemeCode = (): void => {
	isOpen.value = false;
	dialog.open(ThemeCodeDialog, {
		title: 'Theme CSS',
		width: '760px',
		height: '620px',
		data: {
			code: themeCode.value,
		},
	});
};
</script>

<template>
	<DropdownMenu
		v-model:open="isOpen"
		width="320px"
		height="580px"
		position="bottomRight"
	>
		<template #trigger>
			<IconButton variant="ghost" color="default" :label="$t('app.settings')">
				<Settings />
			</IconButton>
		</template>

		<div class="space-y-5 px-3 py-5">
			<div class="space-y-2">
				<p class="px-1 text-sm font-medium text-muted-foreground">
					{{ $t('settings.language') }}
				</p>
				<Select
					:model-value="locale"
					:options="languageOptions"
					@change="changeLocale($event.value as Locale)"
				/>
			</div>

			<div class="space-y-2">
				<p class="px-1 text-sm font-medium text-muted-foreground">
					{{ $t('settings.theme') }}
				</p>
				<Select
					:model-value="colorMode.preference"
					:options="themeOptions"
					@change="setTheme($event.value as ColorModePreference)"
				/>
			</div>

			<div class="space-y-2">
				<p class="px-1 text-sm font-medium text-muted-foreground">
					{{ $t('settings.accent') }}
				</p>
				<div class="grid grid-cols-2 gap-2">
					<Button
						v-for="item in accentOptions"
						:key="item.value"
						:label="item.label"
						class="justify-start"
						:variant="accentTheme === item.value ? 'filled' : 'ghost'"
						:color="accentTheme === item.value ? 'secondary' : 'default'"
						@click="setAccentTheme(item.value)"
					>
						<template #leading>
							<span
								class="size-4 rounded-full border"
								:style="{ backgroundColor: getAccentPreviewColor(item.value) }"
							/>
						</template>
					</Button>
				</div>
			</div>

			<Button class="w-full" size="sm" color="primary" @click="openThemeCode">
				Copy style
			</Button>
		</div>
	</DropdownMenu>
</template>

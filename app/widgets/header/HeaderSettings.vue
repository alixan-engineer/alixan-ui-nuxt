<script setup lang="ts">
import { Settings } from '@lucide/vue';
import type { AccentThemeType } from '~/interfaces/theme/theme.interface';
import { accentColorsList } from '~/shared/theme/colors';
import ThemeCodeDialog from '~/widgets/theme-code-dialog/ThemeCodeDialog.vue';

type Locale = 'en' | 'ru' | 'kk';
type ColorModePreference = 'system' | 'light' | 'dark';

const dialog = useDialog();
const colorMode = useColorMode();
const { locale, setLocale } = useI18n();
const { accentColors, accentTheme, setAccentTheme, createThemeCss } =
	useTheme();

const isOpen = ref<boolean>(false);

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

const getAccentPreviewColor = (value: AccentThemeType): string => {
	const color = accentColors[value];
	if (value === 'default' && colorMode.value === 'dark' && color.darkPrimary) {
		return color.darkPrimary;
	}
	return color.primary;
};

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
			code: createThemeCss(accentColors[accentTheme.value]),
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
						v-for="item in accentColorsList"
						:key="item"
						:label="item"
						class="justify-start"
						:variant="accentTheme === item ? 'filled' : 'ghost'"
						:color="accentTheme === item ? 'secondary' : 'default'"
						@click="setAccentTheme(item)"
					>
						<template #leading>
							<span
								class="size-4 rounded-full border"
								:style="{ backgroundColor: getAccentPreviewColor(item) }"
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

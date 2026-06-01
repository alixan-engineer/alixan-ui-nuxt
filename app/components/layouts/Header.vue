<script setup lang="ts">
import { ArrowLeft, Check, ExternalLink, Settings } from '@lucide/vue';
import type { AccentTheme, Theme } from '~/composables/useTheme';
import type { Locale } from '~/composables/useI18n';

const { locale, setLocale, t } = useI18n();
const { accentColors, accentTheme, setAccentTheme, setTheme, theme } = useTheme();

const isSettingsOpen = ref(false);

const languageOptions: Array<{ label: string; value: Locale }> = [
	{ label: 'English', value: 'en' },
	{ label: 'Русский', value: 'ru' },
	{ label: 'Қазақша', value: 'kk' },
];

const themeOptions: Array<{ label: string; value: Theme }> = [
	{ label: 'Light', value: 'light' },
	{ label: 'Dark', value: 'dark' },
];

const accentOptions: Array<{ label: string; value: AccentTheme }> = [
	{ label: 'Default', value: 'default' },
	{ label: 'Blue', value: 'blue' },
	{ label: 'Green', value: 'green' },
	{ label: 'Yellow', value: 'yellow' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Red', value: 'red' },
];
</script>

<template>
	<header class="sticky top-0 z-30 bg-background">
		<div
			class="w-full max-w-container min-h-14 mx-auto px-4 flex items-center gap-4"
		>
			<IconButton
				variant="ghost"
				color="default"
				href="https://ui.alixan.kz/"
				:label="t('app.back')"
			>
				<ArrowLeft />
			</IconButton>
			<div class="flex items-center gap-2">
				<Logo />
				<Status label="Beta" size="sm" type="warning" />
			</div>
			<div class="flex-1" />
			<IconButton
				variant="ghost"
				color="default"
				href="https://github.com/xalidevxx/alixan-ui-nuxt"
				target="_blank"
				:label="t('app.github')"
			>
				<ExternalLink />
			</IconButton>
			<DropdownMenu
				v-model:open="isSettingsOpen"
				width="320px"
				height="420px"
				position="bottomRight"
			>
				<template #trigger>
					<IconButton variant="ghost" color="default" :label="t('app.settings')">
						<Settings />
					</IconButton>
				</template>

				<div class="space-y-5 p-3">
					<div class="space-y-2">
						<p class="px-1 text-sm font-medium text-muted-foreground">
							{{ t('settings.language') }}
						</p>
						<Select
							:model-value="locale"
							:options="languageOptions"
							@change="setLocale($event.value as Locale)"
						/>
					</div>

					<div class="space-y-2">
						<p class="px-1 text-sm font-medium text-muted-foreground">
							{{ t('settings.theme') }}
						</p>
						<Select
							:model-value="theme"
							:options="themeOptions"
							@change="setTheme($event.value as Theme)"
						/>
					</div>

					<div class="space-y-2">
						<p class="px-1 text-sm font-medium text-muted-foreground">
							{{ t('settings.accent') }}
						</p>
						<div class="grid grid-cols-2 gap-2">
							<button
								v-for="item in accentOptions"
								:key="item.value"
								type="button"
								class="flex h-10 items-center gap-2 rounded-xl px-3 text-left text-sm font-medium hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
								@click="setAccentTheme(item.value)"
							>
								<span
									class="size-4 rounded-full border"
									:style="{ backgroundColor: accentColors[item.value].primary }"
								/>
								<span class="flex-1">{{ item.label }}</span>
								<Check v-if="accentTheme === item.value" class="size-4" />
							</button>
						</div>
					</div>
				</div>
			</DropdownMenu>
		</div>
	</header>
</template>

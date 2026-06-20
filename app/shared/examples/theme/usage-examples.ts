export const installCode = `npx nuxt module add color-mode`;
export const colorModeConfigCode = `export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
		preference: 'system',
		fallback: 'light',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '',
		storage: 'cookie',
		storageKey: 'nuxt-color-mode',
	},
})`;
export const tailwindCode = `@import 'tailwindcss';

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
}`;
export const usageCode = `<script setup lang="ts">
type ColorModePreference = 'system' | 'light' | 'dark'

const colorMode = useColorMode()

const themeOptions: Array<{ label: string; value: ColorModePreference }> = [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
]

const setTheme = (value: ColorModePreference): void => {
  colorMode.preference = value
}
<\/script>

<template>
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
</template>`;

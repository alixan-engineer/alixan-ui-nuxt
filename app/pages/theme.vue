<script setup lang="ts">
import { themePageToc } from '~/shared/page-docs/theme/page-toc';
usePageMeta({
	title: 'Theme - Alixan UI',
});

const tocLinks = themePageToc(t);

usePageTocLinks(tocLinks);

const installCode = `npx nuxt module add color-mode`;

const colorModeConfigCode = `export default defineNuxtConfig({
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

const tailwindCode = `@import 'tailwindcss';

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
}`;

const usageCode = `<script setup lang="ts">
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

type ColorModePreference = 'system' | 'light' | 'dark';

const colorMode = useColorMode();

const themeOptions: Array<{ label: string; value: ColorModePreference }> = [
	{ label: 'System', value: 'system' },
	{ label: 'Light', value: 'light' },
	{ label: 'Dark', value: 'dark' },
];

const setTheme = (value: ColorModePreference): void => {
	colorMode.preference = value;
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Theme</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Configure dark mode with Nuxt Color Mode and CSS variables used by Alixan
			UI components.
		</p>
		<Info>
			For more detailed information, visit the
			<TextLink href="https://color-mode.nuxtjs.org/" target="_blank">
				Nuxt Color Mode documentation.
			</TextLink>
		</Info>
	</header>

	<section id="color-mode" class="space-y-5">
		<h2 class="text-2xl font-semibold">Color Mode</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Install Nuxt Color Mode when you want system, light and dark theme
				preferences to be handled by a module.
			</div>
		</ExampleBlock>
		<ExampleBlock :code="colorModeConfigCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Use <code>classSuffix: ''</code> so dark mode toggles the
				<code>dark</code> class expected by Tailwind utilities.
			</div>
		</ExampleBlock>
	</section>

	<section id="tailwind-variant" class="space-y-5">
		<h2 class="text-2xl font-semibold">Tailwind Variant</h2>
		<ExampleBlock :code="tailwindCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Map light and dark values to CSS variables, then expose them through
				Tailwind tokens such as <code>bg-background</code> and
				<code>text-foreground</code>.
			</div>
		</ExampleBlock>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="usageCode">
			<div class="w-full max-w-sm space-y-2">
				<p class="px-1 text-sm font-medium text-muted-foreground">
					{{ $t('settings.theme') }}
				</p>
				<Select
					:model-value="colorMode.preference"
					:options="themeOptions"
					@change="setTheme($event.value as ColorModePreference)"
				/>
			</div>
		</ExampleBlock>
	</section>
</template>

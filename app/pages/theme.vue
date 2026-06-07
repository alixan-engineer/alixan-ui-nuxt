<script setup lang="ts">
import { themePageToc } from '~/shared/examples/theme/page-toc';
import {
	colorModeConfigCode,
	installCode,
	tailwindCode,
	usageCode,
} from '~/shared/examples/theme/usage-examples';

usePageMeta({
	title: 'Theme - Alixan UI',
});

const { setToc } = usePageToc();
const colorMode = useColorMode();

onMounted(() => setToc(themePageToc));

type ColorModePreference = 'system' | 'light' | 'dark';

const themeOptions: Array<{ label: string; value: ColorModePreference }> = [
	{ label: 'System', value: 'system' },
	{ label: 'Light', value: 'light' },
	{ label: 'Dark', value: 'dark' },
];

const setTheme = (value: ColorModePreference) => {
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

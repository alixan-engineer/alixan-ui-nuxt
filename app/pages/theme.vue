<script setup lang="ts">
import { themePageToc } from '~/shared/examples/theme/page-toc';
import {
	colorModeConfigCode,
	installCode,
	tailwindCode,
	usageCode,
} from '~/shared/examples/theme/usage-examples';

usePageMeta({
	title: 'themePage.metaTitle',
});

const { setToc } = usePageToc();
const colorMode = useColorMode();

onMounted(() => setToc(themePageToc));

type ColorModePreference = 'system' | 'light' | 'dark';

const themeOptions: Array<{ label: string; value: ColorModePreference }> = [
	{ label: 'themePage.system', value: 'system' },
	{ label: 'themePage.light', value: 'light' },
	{ label: 'themePage.dark', value: 'dark' },
];

const setTheme = (value: ColorModePreference) => {
	colorMode.preference = value;
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('themePage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('themePage.description') }}
		</p>
		<Info>
			{{ $tn('themePage.infoPrefix') }}
			<TextLink href="https://color-mode.nuxtjs.org/" target="_blank">
				{{ $tn('themePage.infoLink') }}
			</TextLink>
		</Info>
	</header>

	<section id="color-mode" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('themePage.colorModeTitle') }}
		</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('themePage.colorModeDescription') }}
			</div>
		</ExampleBlock>
		<ExampleBlock :code="colorModeConfigCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('themePage.colorModeConfigStart') }}
				<code>classSuffix: ''</code>
				{{ $tn('themePage.colorModeConfigEnd') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="tailwind-variant" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('themePage.tailwindVariantTitle') }}
		</h2>
		<ExampleBlock :code="tailwindCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('themePage.tailwindDescriptionStart') }}
				<code>bg-background</code>
				{{ $tn('themePage.tailwindDescriptionEnd') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('themePage.usageTitle') }}</h2>
		<ExampleBlock :code="usageCode">
			<div class="w-full max-w-sm space-y-2">
				<p class="px-1 text-sm font-medium text-muted-foreground">
					{{ $tn('settings.theme') }}
				</p>
				<Select
					:model-value="colorMode.preference"
					:options="
						themeOptions.map(option => ({
							...option,
							label: $tn(option.label),
						}))
					"
					@change="setTheme($event.value as ColorModePreference)"
				/>
			</div>
		</ExampleBlock>
	</section>
</template>

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
		<h1 class="text-4xl font-semibold">{{ $t('themePage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('themePage.description') }}
		</p>
		<Info>
			{{ $t('app.infoPrefix') }}
			<TextLink href="https://color-mode.nuxtjs.org/" target="_blank">
				{{ $t('themePage.infoLink') }}
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('themePage.installationTitle') }}
		</h2>
		<ExampleBlock :code="installCode" :preview="false" />
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('themePage.configurationTitle') }}
		</h2>
		<ExampleBlock
			path="nuxt.config.ts"
			:code="colorModeConfigCode"
			:preview="false"
		/>
	</section>

	<section id="tailwind-variant" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('themePage.tailwindVariantTitle') }}
		</h2>
		<ExampleBlock
			path="app/assets/css/tailwind.css"
			:code="tailwindCode"
			:preview="false"
		/>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('themePage.usageTitle') }}</h2>
		<ExampleBlock :code="usageCode">
			<div class="w-full max-w-sm space-y-2">
				<p class="px-1 text-sm font-medium text-muted-foreground">
					{{ $t('settings.theme') }}
				</p>
				<Select
					:model-value="colorMode.preference"
					:options="
						themeOptions.map(option => ({
							...option,
							label: $t(option.label),
						}))
					"
					@change="setTheme($event.value as ColorModePreference)"
				/>
			</div>
		</ExampleBlock>
	</section>
</template>

<script setup lang="ts">
import { svgLoaderPageToc } from '~/shared/examples/svg-loader/page-toc';
import {
	configCode,
	installCode,
	usageCode,
} from '~/shared/examples/svg-loader/usage-examples';

usePageMeta({
	title: 'svgLoaderPage.metaTitle',
	description: 'svgLoaderPage.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(svgLoaderPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('svgLoaderPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('svgLoaderPage.description') }}
		</p>

		<Info>
			{{ $t('app.infoPrefix') }}
			<TextLink
				href="https://nuxt.com/modules/nuxt-svgo-loader"
				target="_blank"
			>
				{{ $t('svgLoaderPage.infoLink') }}
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('svgLoaderPage.installationTitle') }}
		</h2>
		<ExampleBlock :code="installCode" :preview="false" />
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('svgLoaderPage.configurationTitle') }}
		</h2>
		<ExampleBlock path="nuxt.config.ts" :code="configCode" :preview="false" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('svgLoaderPage.usageTitle') }}
		</h2>
		<ExampleBlock path="Example.vue" :code="usageCode" :preview="false" />
	</section>
</template>

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
		<h1 class="text-4xl font-semibold">{{ $tn('svgLoaderPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('svgLoaderPage.description') }}
		</p>

		<Info>
			{{ $tn('svgLoaderPage.infoPrefix') }}
			<TextLink
				href="https://nuxt.com/modules/nuxt-svgo-loader"
				target="_blank"
			>
				{{ $tn('svgLoaderPage.infoLink') }}
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('svgLoaderPage.installationTitle') }}
		</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('svgLoaderPage.installationDescription') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('svgLoaderPage.configurationTitle') }}
		</h2>
		<ExampleBlock :code="configCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('svgLoaderPage.configurationDescription') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('svgLoaderPage.usageTitle') }}
		</h2>
		<ExampleBlock :code="usageCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('svgLoaderPage.usageDescription') }}
			</div>
		</ExampleBlock>
	</section>
</template>

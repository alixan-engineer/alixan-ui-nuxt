<script setup lang="ts">
import { fontsPageToc } from '~/shared/examples/fonts/page-toc';
import {
	configCode,
	installCode,
	tailwindCode,
} from '~/shared/examples/fonts/usage-examples';

usePageMeta({
	title: 'fontsPage.metaTitle',
});

const { setToc } = usePageToc();

onMounted(() => setToc(fontsPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('fontsPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('fontsPage.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('fontsPage.installationTitle') }}
		</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('fontsPage.installationDescription') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('fontsPage.configurationTitle') }}
		</h2>
		<ExampleBlock :code="configCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('fontsPage.configurationDescriptionStart') }}
				<code>nuxt.config.ts</code>
				{{ $tn('fontsPage.configurationDescriptionEnd') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="tailwind" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('fontsPage.tailwindTitle') }}</h2>
		<ExampleBlock :code="tailwindCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('fontsPage.tailwindDescriptionStart') }}
				<code>--font-sans</code>,
				{{ $tn('fontsPage.tailwindDescriptionEnd') }}
			</div>
		</ExampleBlock>
	</section>
</template>

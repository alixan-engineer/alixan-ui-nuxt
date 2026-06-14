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
		<Info>
			{{ $tn('app.infoPrefix') }}
			<TextLink
				href="https://google-fonts.nuxtjs.org/getting-started/setup"
				target="_blank"
			>
				{{ $tn('fontsPage.infoLink') }}
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('fontsPage.installationTitle') }}
		</h2>
		<ExampleBlock :code="installCode" :preview="false" />
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('fontsPage.configurationTitle') }}
		</h2>
		<ExampleBlock path="nuxt.config.ts" :code="configCode" :preview="false" />
	</section>

	<section id="tailwind" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('fontsPage.tailwindTitle') }}</h2>
		<ExampleBlock
			path="app/assets/css/tailwind.css"
			:code="tailwindCode"
			:preview="false"
		/>
	</section>
</template>

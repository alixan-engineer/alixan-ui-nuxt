<script setup lang="ts">
import { fontsPageToc } from '~/shared/examples/fonts/page-toc';
import {
	configCode,
	installCode,
	tailwindCode,
} from '~/shared/examples/fonts/usage-examples';

usePageMeta({
	title: 'Fonts - Alixan UI',
});

const { setToc } = usePageToc();

onMounted(() => setToc(fontsPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Fonts</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Alixan UI uses Geist for documentation, but components do not require a
			specific font. You can install any font and map it to Tailwind tokens.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Install the Nuxt Google Fonts module when you want fonts to be loaded
				through Nuxt.
			</div>
		</ExampleBlock>
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">Configuration</h2>
		<ExampleBlock :code="configCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Add the module to <code>nuxt.config.ts</code> and choose the family you
				want to use in your UI.
			</div>
		</ExampleBlock>
	</section>

	<section id="tailwind" class="space-y-5">
		<h2 class="text-2xl font-semibold">Tailwind</h2>
		<ExampleBlock :code="tailwindCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Map the selected font to <code>--font-sans</code>, then use Tailwind's
				<code>font-sans</code> token across the system.
			</div>
		</ExampleBlock>
	</section>
</template>

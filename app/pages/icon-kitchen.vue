<script setup lang="ts">
import { iconKitchenPageToc } from '~/shared/examples/icon-kitchen/page-toc';
import { siteManifestCode } from '~/shared/examples/icon-kitchen/usage-examples';

usePageMeta({
	title: 'iconKitchenPage.metaTitle',
	description: 'iconKitchenPage.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(iconKitchenPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">
			{{ $tn('iconKitchenPage.title') }}
		</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('iconKitchenPage.description') }}
		</p>
	</header>

	<section id="generate" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('iconKitchenPage.generate.title') }}
		</h2>
		<Info>
			{{ $tn('iconKitchenPage.generate.infoPrefix') }}
			<TextLink
				href="https://icon.kitchen/i/H4sIAAAAAAAAA6tWKkvMKU0tVrKqVkpLd87PyS9SslJSTgMDJR2lJISYWaJxSqqFUq2OUm5-SmkOSE-0UmJeSlF-ZgpQZWZ-MZAsT01Siq0FAI3686NWAAAA"
				target="_blank"
			>
				{{ $tn('iconKitchenPage.generate.infoLink') }}
			</TextLink>
			{{ $tn('iconKitchenPage.generate.infoSuffix') }}
		</Info>
		<p class="text-muted-foreground leading-7">
			{{ $tn('iconKitchenPage.generate.descriptionPrefix') }}
			<code>web</code>
			{{ $tn('iconKitchenPage.generate.descriptionMiddle') }}
			<code>public</code>
			{{ $tn('iconKitchenPage.generate.descriptionSuffix') }}
			<code>icons</code>
			{{ $tn('iconKitchenPage.generate.descriptionEnd') }}
		</p>
	</section>

	<section id="manifest" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('iconKitchenPage.manifest.title') }}
		</h2>
		<ExampleBlock
			path="public/site.webmanifest"
			:code="siteManifestCode"
			:preview="false"
		/>
	</section>
</template>

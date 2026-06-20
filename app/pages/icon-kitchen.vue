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
			{{ $t('iconKitchenPage.title') }}
		</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('iconKitchenPage.description') }}
		</p>
	</header>

	<section id="generate" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('iconKitchenPage.generate.title') }}
		</h2>
		<Info>
			{{ $t('iconKitchenPage.generate.infoPrefix') }}
			<TextLink
				href="https://icon.kitchen/i/H4sIAAAAAAAAA6tWKkvMKU0tVrKqVkpLd87PyS9SslJSTgMDJR2lJISYWaJxSqqFUq2OUm5-SmkOSE-0UmJeSlF-ZgpQZWZ-MZAsT01Siq0FAI3686NWAAAA"
				target="_blank"
			>
				{{ $t('iconKitchenPage.generate.infoLink') }}
			</TextLink>
			{{ $t('iconKitchenPage.generate.infoSuffix') }}
		</Info>
		<p class="text-muted-foreground leading-7">
			{{ $t('iconKitchenPage.generate.descriptionPrefix') }}
			<code>web</code>
			{{ $t('iconKitchenPage.generate.descriptionMiddle') }}
			<code>public</code>
			{{ $t('iconKitchenPage.generate.descriptionSuffix') }}
			<code>icons</code>
			{{ $t('iconKitchenPage.generate.descriptionEnd') }}
		</p>
	</section>

	<section id="manifest" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('iconKitchenPage.manifest.title') }}
		</h2>
		<ExampleBlock
			path="public/site.webmanifest"
			:code="siteManifestCode"
			:preview="false"
		/>
	</section>
</template>

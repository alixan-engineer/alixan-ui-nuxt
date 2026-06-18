<script setup lang="ts">
import { seoPageToc } from '~/shared/examples/seo/page-toc';
import {
	appInitCode,
	faviconCode,
	nuxtConfigCode,
	pageUsageCode,
	robotsCode,
	siteConfigCode,
	sitemapInstallCode,
	usePageMetaCode,
} from '~/shared/examples/seo/usage-examples';

usePageMeta({
	title: 'seoPage.metaTitle',
	description: 'seoPage.metaDescription',
});

const { setToc } = usePageToc();
const localePath = useLocalePath();

onMounted(() => setToc(seoPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('seoPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('seoPage.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('seoPage.installation.title') }}
		</h2>
		<InstallCommandBlock component="seo" />
		<div
			class="rounded-2xl border bg-secondary/50 p-4 text-sm leading-7 text-muted-foreground"
		>
			{{ $tn('seoPage.installation.descriptionStart') }}
			<code>app/config/site/site.ts</code>,
			<code>app/config/site/favicon.ts</code> and
			<code>app/composables/usePageMeta.ts</code>.
			{{ $tn('seoPage.installation.seoCommandDescription') }}
			{{ $tn('seoPage.installation.tnPluginDescription') }}
		</div>
	</section>

	<section id="sitemap" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('seoPage.sitemap.title') }}
		</h2>
		<p class="text-muted-foreground leading-7">
			{{ $tn('seoPage.installation.sitemapDescription') }}
		</p>
		<ExampleBlock :code="sitemapInstallCode" :preview="false" />
		<p class="text-muted-foreground leading-7">
			{{ $tn('seoPage.sitemap.description') }}
			{{ $tn('seoPage.sitemap.verify') }}
		</p>
		<Info>
			{{ $tn('app.infoPrefix') }}
			<TextLink
				href="https://nuxtseo.com/docs/sitemap/getting-started/installation"
				target="_blank"
			>
				{{ $tn('seoPage.sitemap.infoLink') }}
			</TextLink>
		</Info>
	</section>

	<section id="site-config" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('seoPage.siteConfig.title') }}
		</h2>
		<ExampleBlock
			path="app/config/site/site.ts"
			:code="siteConfigCode"
			:preview="false"
		/>
		<ExampleBlock
			path="nuxt.config.ts"
			:code="nuxtConfigCode"
			:preview="false"
		/>
	</section>

	<section id="initial-head" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('seoPage.initialHead.title') }}
		</h2>
		<Info>
			{{ $tn('seoPage.iconKitchenRef.prefix') }}
			<TextLink :href="localePath('/icon-kitchen')">
				{{ $tn('seoPage.iconKitchenRef.link') }}
			</TextLink>
			{{ $tn('seoPage.iconKitchenRef.suffix') }}
		</Info>
		<ExampleBlock
			path="app/config/site/favicon.ts"
			:code="faviconCode"
			:preview="false"
		/>
		<ExampleBlock path="app.vue" :code="appInitCode" :preview="false" />
	</section>

	<section id="page-meta" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('seoPage.pageMeta.title') }}
		</h2>
		<ExampleBlock path="app/composables/usePageMeta.ts" :code="usePageMetaCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				<code>usePageMeta</code>
				{{ $tn('seoPage.pageMeta.description') }}
				{{ $tn('seoPage.pageMeta.translationHelper') }}
			</div>
		</ExampleBlock>
		<ExampleBlock path="pages/button.vue" :code="pageUsageCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('seoPage.pageMeta.usagePrefix') }}
				<code>usePageMeta</code>
				{{ $tn('seoPage.pageMeta.usageMiddle') }}
				<code>siteConfig</code>
				{{ $tn('seoPage.pageMeta.usageSuffix') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="robots" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('seoPage.robots.title') }}
		</h2>
		<p class="text-muted-foreground leading-7">
			{{ $tn('seoPage.robots.descriptionPrefix') }}
			<code>public/robots.txt</code>
			{{ $tn('seoPage.robots.descriptionSuffix') }}
		</p>
		<ExampleBlock
			path="public/robots.txt"
			:code="robotsCode"
			:preview="false"
		/>
	</section>
</template>

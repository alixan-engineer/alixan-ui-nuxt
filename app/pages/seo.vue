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
		<ExampleBlock :code="sitemapInstallCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('seoPage.installation.sitemapDescription') }}
			</div>
		</ExampleBlock>
		<p class="text-muted-foreground leading-7">
			{{ $tn('seoPage.sitemap.description') }}
			{{ $tn('seoPage.sitemap.verify') }}
		</p>
		<Info>
			{{ $tn('seoPage.sitemap.infoPrefix') }}
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
		<ExampleBlock :code="siteConfigCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('seoPage.siteConfig.description') }}
			</div>
		</ExampleBlock>
		<ExampleBlock :code="nuxtConfigCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('seoPage.siteConfig.nuxtConfigPrefix') }}
				<code>siteConfig</code>
				{{ $tn('seoPage.siteConfig.nuxtConfigMiddle') }}
				<code>nuxt.config.ts</code>
				{{ $tn('seoPage.siteConfig.nuxtConfigSuffix') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="initial-head" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('seoPage.initialHead.title') }}
		</h2>
		<ExampleBlock :code="faviconCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('seoPage.initialHead.faviconPrefix') }}
				<code>public/icons</code>,
				{{ $tn('seoPage.initialHead.faviconMiddle') }}
				<code>favicon.ico</code> and
				<code>favicon.svg</code>
				{{ $tn('seoPage.initialHead.faviconSuffix') }}
			</div>
		</ExampleBlock>
		<ExampleBlock :code="appInitCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('seoPage.initialHead.appInit') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="page-meta" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('seoPage.pageMeta.title') }}
		</h2>
		<ExampleBlock :code="usePageMetaCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				<code>usePageMeta</code>
				{{ $tn('seoPage.pageMeta.description') }}
				{{ $tn('seoPage.pageMeta.translationHelper') }}
			</div>
		</ExampleBlock>
		<ExampleBlock :code="pageUsageCode">
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
		<ExampleBlock :code="robotsCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('seoPage.robots.descriptionPrefix') }}
				<code>public/robots.txt</code>
				{{ $tn('seoPage.robots.descriptionSuffix') }}
			</div>
		</ExampleBlock>
	</section>
</template>

<script setup lang="ts">
import { seoPageToc } from '~/shared/page-docs/seo/page-toc';
import {
	appInitCode,
	faviconCode,
	nuxtConfigCode,
	pageUsageCode,
	robotsCode,
	siteConfigCode,
	sitemapInstallCode,
	usePageMetaCode,
} from '~/shared/page-docs/seo/usage-examples';

usePageMeta({
	title: 'seoPage.metaTitle',
	description: 'seoPage.metaDescription',
});

const { setToc } = usePageToc();

onMounted(() => setToc(seoPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('seoPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('seoPage.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('seoPage.installation.title') }}
		</h2>
		<InstallCommandBlock component="seo" />
		<div
			class="rounded-2xl border bg-secondary/50 p-4 text-sm leading-7 text-muted-foreground"
		>
			{{ $t('seoPage.installation.descriptionStart') }}
			<code>app/config/site/site.ts</code>,
			<code>app/config/site/favicon.ts</code> and
			<code>app/composables/usePageMeta.ts</code>.
			{{ $t('seoPage.installation.seoCommandDescription') }}
		</div>
	</section>

	<section id="sitemap" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('seoPage.sitemap.title') }}
		</h2>
		<ExampleBlock :code="sitemapInstallCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $t('seoPage.installation.sitemapDescription') }}
			</div>
		</ExampleBlock>
		<p class="text-muted-foreground leading-7">
			{{ $t('seoPage.sitemap.description') }}
			{{ $t('seoPage.sitemap.verify') }}
		</p>
		<Info>
			{{ $t('seoPage.sitemap.infoPrefix') }}
			<TextLink
				href="https://nuxtseo.com/docs/sitemap/getting-started/installation"
				target="_blank"
			>
				{{ $t('seoPage.sitemap.infoLink') }}
			</TextLink>
		</Info>
	</section>

	<section id="site-config" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('seoPage.siteConfig.title') }}
		</h2>
		<ExampleBlock :code="siteConfigCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $t('seoPage.siteConfig.description') }}
			</div>
		</ExampleBlock>
		<ExampleBlock :code="nuxtConfigCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $t('seoPage.siteConfig.nuxtConfigPrefix') }}
				<code>siteConfig</code>
				{{ $t('seoPage.siteConfig.nuxtConfigMiddle') }}
				<code>nuxt.config.ts</code>
				{{ $t('seoPage.siteConfig.nuxtConfigSuffix') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="page-meta" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('seoPage.pageMeta.title') }}
		</h2>
		<ExampleBlock :code="usePageMetaCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				<code>usePageMeta</code>
				{{ $t('seoPage.pageMeta.description') }}
			</div>
		</ExampleBlock>
		<ExampleBlock :code="pageUsageCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $t('seoPage.pageMeta.usagePrefix') }}
				<code>usePageMeta</code>
				{{ $t('seoPage.pageMeta.usageMiddle') }}
				<code>siteConfig</code>
				{{ $t('seoPage.pageMeta.usageSuffix') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="initial-head" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('seoPage.initialHead.title') }}
		</h2>
		<ExampleBlock :code="faviconCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $t('seoPage.initialHead.faviconPrefix') }}
				<code>public/icons</code>,
				{{ $t('seoPage.initialHead.faviconMiddle') }}
				<code>favicon.ico</code> and
				<code>favicon.svg</code>
				{{ $t('seoPage.initialHead.faviconSuffix') }}
			</div>
		</ExampleBlock>
		<ExampleBlock :code="appInitCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $t('seoPage.initialHead.appInit') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="robots" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('seoPage.robots.title') }}
		</h2>
		<ExampleBlock :code="robotsCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $t('seoPage.robots.descriptionPrefix') }}
				<code>public/robots.txt</code>
				{{ $t('seoPage.robots.descriptionSuffix') }}
			</div>
		</ExampleBlock>
	</section>
</template>

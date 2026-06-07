<script setup lang="ts">
import { seoPageToc } from '~/shared/page-docs/seo/page-toc';
const { t } = useI18n();

usePageMeta({
	title: t('seoPage.metaTitle'),
	description: t('seoPage.metaDescription'),
});

const tocLinks = seoPageToc(t);

usePageTocLinks(tocLinks);

const siteConfigCode = `// app/config/site/site.ts
export const siteConfig = {
  // Replace with your production domain.
  url: 'https://nuxt.ui.alixan.kz',
  // Replace with your project name.
  name: 'Alixan UI',
  // Replace with your default page title.
  title: 'Alixan UI - Nuxt UI Components',
  // Replace with your default SEO description.
  description:
    'Modern, minimal and production-ready UI components for Nuxt 4, Vue 3 and TypeScript.',
  // Replace with your default Open Graph image.
  ogImage: 'https://nuxt.ui.alixan.kz/og-image.png',
}`;

const nuxtConfigCode = `// nuxt.config.ts
import { siteConfig } from './app/config/site/site'

export default defineNuxtConfig({
  site: {
    url: siteConfig.url,
    name: siteConfig.name,
  },
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    autoLastmod: true,
  },
})`;

const usePageMetaCode = `// app/composables/usePageMeta.ts
import { siteConfig } from '~/config/site/site'

interface PageMetaOptions {
  title?: string
  description?: string
  img?: string
}

export const usePageMeta = (payload?: PageMetaOptions): void => {
  const route = useRoute()
  const metaTitle = payload?.title || siteConfig.title
  const metaDescription = payload?.description || siteConfig.description
  const metaImage = payload?.img || siteConfig.ogImage

  useSeoMeta({
    title: metaTitle,
    description: metaDescription,
    ogType: 'website',
    ogSiteName: siteConfig.name,
    ogTitle: metaTitle,
    ogDescription: metaDescription,
    ogUrl: siteConfig.url + route.path,
    ogImage: metaImage,
    twitterCard: 'summary_large_image',
    twitterTitle: metaTitle,
    twitterDescription: metaDescription,
    twitterImage: metaImage,
  })
}`;

const pageUsageCode = `// pages/button.vue
<script setup lang="ts">
usePageMeta({
  title: 'Button - Alixan UI',
  description: 'Button component documentation for Nuxt.',
})
<\/script>`;

const faviconCode = `// app/config/site/favicon.ts
export const favicon = [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/favicon.svg',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/icons/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/icons/favicon-32x32.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/icons/apple-touch-icon.png',
  },
  {
    rel: 'manifest',
    href: '/site.webmanifest',
  },
]`;

const appInitCode = `// app.vue
<script setup lang="ts">
import { favicon } from './config/site/favicon'

const { locale } = useI18n()

usePageMeta() // initialize default SEO meta

useHead({
  htmlAttrs: { lang: locale.value },
  link: favicon,
})
<\/script>`;

const robotsCode = `User-Agent: *
Disallow:

# Replace this domain with your own.
Sitemap: https://nuxt.ui.alixan.kz/sitemap_index.xml`;

const sitemapInstallCode = `npx nuxt module add @nuxtjs/sitemap`;
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

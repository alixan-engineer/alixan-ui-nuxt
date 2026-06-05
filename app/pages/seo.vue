<script setup lang="ts">
usePageMeta({
	title: 'SEO - Alixan UI',
});

const tocLinks = [
	{ label: 'Site Config', href: '#site-config' },
	{ label: 'Page Meta', href: '#page-meta' },
	{ label: 'Initial Head', href: '#initial-head' },
	{ label: 'Robots', href: '#robots' },
	{ label: 'Sitemap', href: '#sitemap' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const siteConfigCode = `// app/config/site/site.ts
export const siteConfig = {
  url: 'https://nuxt.ui.alixan.kz',
  name: 'Alixan UI',
  title: 'Alixan UI - Nuxt UI Components',
  description:
    'Modern, minimal and production-ready UI components for Nuxt 4, Vue 3 and TypeScript.',
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

const pageUsageCode = `<script setup lang="ts">
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

const appInitCode = `<script setup lang="ts">
import { favicon } from './config/site/favicon'

const { locale } = useI18n()

usePageMeta()

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
		<h1 class="text-4xl font-semibold">SEO</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Configure shared site metadata, page-level SEO tags, favicon links,
			robots.txt and sitemap generation for a Nuxt project.
		</p>
	</header>

	<section id="site-config" class="space-y-5">
		<h2 class="text-2xl font-semibold">Site Config</h2>
		<ExampleBlock :code="siteConfigCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Keep domain, site name, default title, description and OG image in one
				config file so Nuxt config and runtime composables use the same values.
			</div>
		</ExampleBlock>
		<ExampleBlock :code="nuxtConfigCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Use <code>siteConfig</code> in <code>nuxt.config.ts</code> for Nuxt SEO
				modules such as sitemap.
			</div>
		</ExampleBlock>
	</section>

	<section id="page-meta" class="space-y-5">
		<h2 class="text-2xl font-semibold">Page Meta</h2>
		<ExampleBlock :code="usePageMetaCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				<code>usePageMeta</code> centralizes title, description, Open Graph and
				Twitter tags. Pages only pass values that differ from defaults.
			</div>
		</ExampleBlock>
		<ExampleBlock :code="pageUsageCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Call <code>usePageMeta</code> in each page. If a field is omitted, the
				default from <code>siteConfig</code> is used.
			</div>
		</ExampleBlock>
	</section>

	<section id="initial-head" class="space-y-5">
		<h2 class="text-2xl font-semibold">Initial Head</h2>
		<ExampleBlock :code="faviconCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Keep favicon links in a dedicated config file. PNG icons live in
				<code>public/icons</code>, while <code>favicon.ico</code> and
				<code>favicon.svg</code> can stay at the public root.
			</div>
		</ExampleBlock>
		<ExampleBlock :code="appInitCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Initialize default page meta, document language and favicon links once
				near the app root.
			</div>
		</ExampleBlock>
	</section>

	<section id="robots" class="space-y-5">
		<h2 class="text-2xl font-semibold">Robots</h2>
		<ExampleBlock :code="robotsCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Add <code>public/robots.txt</code> so crawlers can discover your
				sitemap. Replace the example domain with your production domain.
			</div>
		</ExampleBlock>
	</section>

	<section id="sitemap" class="space-y-5">
		<h2 class="text-2xl font-semibold">Sitemap</h2>
		<ExampleBlock :code="sitemapInstallCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Sitemap helps search robots find available routes and understand which
				pages should be crawled.
			</div>
		</ExampleBlock>
		<Info>
			For more detailed information, visit the
			<TextLink
				href="https://nuxtseo.com/docs/sitemap/getting-started/installation"
				target="_blank"
			>
				Nuxt Sitemap documentation.
			</TextLink>
		</Info>
	</section>
</template>

export const siteConfigCode = `export const siteConfig = {
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

export const nuxtConfigCode = `import { siteConfig } from './app/config/site/site'

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

export const usePageMetaCode = `import { siteConfig } from '~/config/site/site'

interface PageMetaOptions {
  title?: string
  description?: string
  img?: string
}

export const usePageMeta = (payload?: PageMetaOptions): void => {
  const { t } = useI18n()
  const route = useRoute()
  const metaTitle = t(payload?.title || siteConfig.title)
  const metaDescription = t(payload?.description || siteConfig.description)
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

export const pageUsageCode = `<script setup lang="ts">
usePageMeta({
  title: 'componentDocs.button.metaTitle',
  description: 'componentDocs.button.description',
})
<\/script>`;

export const faviconCode = `export const favicon = [
	{
		rel: 'icon',
		href: '/favicon.ico',
		sizes: 'any',
	},
	{
		rel: 'apple-touch-icon',
		href: '/icons/apple-touch-icon.png',
	},
	{
		rel: 'manifest',
		href: '/site.webmanifest',
	},
]`;

export const appInitCode = `<script setup lang="ts">
import { favicon } from './config/site/favicon'

const { locale } = useI18n()

usePageMeta() // initialize default SEO meta

useHead({
  htmlAttrs: { lang: locale.value }, // initialize lang attr for html
  link: favicon, // initialize favicon
})
<\/script>`;

export const robotsCode = `User-Agent: *
Disallow:

# Replace this domain with your own.
Sitemap: https://nuxt.ui.alixan.kz/sitemap_index.xml`;

export const sitemapInstallCode = `npx nuxt module add @nuxtjs/sitemap`;

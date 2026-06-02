<script setup lang="ts">
useSeoMeta({
	title: 'Sitemap - Alixan UI',
	ogTitle: 'Sitemap - Alixan UI',
	twitterTitle: 'Sitemap - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Configuration', href: '#configuration' },
	{ label: 'Verify', href: '#verify' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const installCode = `npx nuxt module add @nuxtjs/sitemap`;

const configCode = `export default defineNuxtConfig({
  site: {
    // Replace with your production domain.
    url: 'https://ui.alixan.kz',
    // Replace with your project name.
    name: 'Alixan UI',
  },
  sitemap: {
    autoLastmod: true,
  },
})`;

const dynamicUrlsCode = `export default defineEventHandler(async () => {
  return [
    {
      loc: '/button',
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/input',
      lastmod: new Date().toISOString(),
    },
  ]
})`;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Sitemap</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Configure sitemap generation for Nuxt so crawlers can discover your
			documentation and component pages.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Install the official Nuxt Sitemap module. The module adds itself to
				<code>nuxt.config.ts</code>.
			</div>
		</ExampleBlock>
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">Configuration</h2>
		<ExampleBlock :code="configCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Set the production URL in <code>site.url</code>. This keeps generated
				links correct outside localhost.
			</div>
		</ExampleBlock>

		<ExampleBlock :code="dynamicUrlsCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				For dynamic routes, expose URLs from an API source and connect it in
				the sitemap module when your project needs it.
			</div>
		</ExampleBlock>
	</section>

	<section id="verify" class="space-y-5">
		<h2 class="text-2xl font-semibold">Verify</h2>
		<div class="rounded-2xl border bg-secondary/50 p-4 text-sm leading-7 text-muted-foreground">
			Run your Nuxt app and open
			<span class="font-medium text-foreground">/sitemap.xml</span>. In
			development the URLs can point to localhost; after deployment they should
			use the value from <span class="font-medium text-foreground">site.url</span>.
		</div>
	</section>
</template>

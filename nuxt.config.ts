import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	app: {
		rootId: 'root',
		head: {
			title: 'Alixan UI - Nuxt UI Components',
			titleTemplate: '%s',
			meta: [
				{
					name: 'description',
					content:
						'Modern, minimal and production-ready UI components for Nuxt 4, Vue 3 and TypeScript.',
				},
				{ property: 'og:type', content: 'website' },
				{ property: 'og:site_name', content: 'Alixan UI' },
				{ property: 'og:title', content: 'Alixan UI - Nuxt UI Components' },
				{
					property: 'og:description',
					content:
						'Modern, minimal and production-ready UI components for Nuxt 4, Vue 3 and TypeScript.',
				},
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'Alixan UI - Nuxt UI Components' },
				{
					name: 'twitter:description',
					content:
						'Modern, minimal and production-ready UI components for Nuxt 4, Vue 3 and TypeScript.',
				},
			],
		},
	},
	devServer: {
		port: 9002,
	},
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	css: ['~/assets/css/tailwind.css'],
	modules: [['@nuxtjs/google-fonts', { families: { Geist: true } }]],
	vite: {
		plugins: [tailwindcss()],
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
});

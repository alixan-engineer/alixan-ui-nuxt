import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './app/config/site/site';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devServer: {
		port: 9002,
	},
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	site: {
		url: siteConfig.url,
		name: siteConfig.name,
	},
	app: {
		rootId: 'root',
	},
	css: ['~/assets/css/tailwind.css'],
	features: {
		inlineStyles: true,
	},
	modules: [
		'@nuxtjs/sitemap',
		['@nuxtjs/google-fonts', { families: { Geist: true } }],
		[
			'@nuxtjs/i18n',
			{
				defaultLocale: 'en',
				strategy: 'prefix_except_default',
				detectBrowserLanguage: false,
				locales: [
					{ code: 'en', name: 'English', file: 'en.json' },
					{ code: 'ru', name: 'Русский', file: 'ru.json' },
					{ code: 'kk', name: 'Қазақша', file: 'kk.json' },
				],
			},
		],
	],
	sitemap: {
		autoLastmod: true,
	},
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: ['@vue/devtools-core', '@vue/devtools-kit', '@lucide/vue'],
		},
	},
	components: [{ path: '~/components', pathPrefix: false }],
});

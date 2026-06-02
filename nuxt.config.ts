import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	site: {
		url: 'https://ui.alixan.kz',
		name: 'Alixan UI',
	},
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
			script: [
				{
					innerHTML: `(function(){try{var theme=localStorage.getItem('alixan-ui-theme');var accent=localStorage.getItem('alixan-ui-accent-theme');var locale=localStorage.getItem('alixan-ui-locale');var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var isDark=theme?theme==='dark':prefersDark;var root=document.documentElement;root.classList.toggle('dark',isDark);if(locale){root.lang=locale;}var colors={default:{light:['oklch(0.141 0.005 285.823)','oklch(0.985 0 0)'],dark:['oklch(0.985 0 0)','oklch(0.141 0.005 285.823)']},blue:['oklch(0.488 0.243 264.376)','oklch(0.97 0.014 254.604)'],green:['oklch(0.723 0.219 142.18)','oklch(0.982 0.018 155.826)'],yellow:['oklch(0.879 0.169 91.605)','oklch(0.21 0.006 285.885)'],orange:['oklch(0.705 0.213 47.604)','oklch(0.21 0.006 285.885)'],red:['oklch(0.637 0.237 25.331)','oklch(0.971 0.013 17.38)'],purple:['oklch(0.558 0.288 302.321)','oklch(0.977 0.014 308.299)'],pink:['oklch(0.656 0.241 354.308)','oklch(0.971 0.014 343.198)'],brown:['oklch(0.47 0.118 66.05)','oklch(0.98 0.016 73.684)'],aqua:['oklch(0.695 0.149 182.503)','oklch(0.985 0 0)']};var key=accent||'default';var color=colors[key]||colors.default;var pair=key==='default'?(isDark?color.dark:color.light):color;root.style.setProperty('--primary',pair[0]);root.style.setProperty('--primary-foreground',pair[1]);root.style.setProperty('--sidebar-primary',pair[0]);root.style.setProperty('--sidebar-primary-foreground',pair[1]);}catch(e){}})();`,
					tagPosition: 'head',
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
	modules: [
		[
			'@nuxtjs/i18n',
			{
				defaultLocale: 'en',
				strategy: 'no_prefix',
				locales: [
					{ code: 'en', name: 'English' },
					{ code: 'ru', name: 'Русский' },
					{ code: 'kk', name: 'Қазақша' },
				],
				detectBrowserLanguage: {
					useCookie: true,
					cookieKey: 'alixan-ui-locale',
					redirectOn: 'root',
				},
				vueI18n: 'i18n.config.ts',
			},
		],
		'@nuxtjs/sitemap',
		['@nuxtjs/google-fonts', { families: { Geist: true } }],
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
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
});

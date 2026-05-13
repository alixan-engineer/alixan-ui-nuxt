import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	app: {
		rootId: 'root',
	},
	devServer: {
		port: 9000,
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

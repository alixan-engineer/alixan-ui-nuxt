export const installCode = `npm install @nuxtjs/google-fonts`;
export const configCode = `export default defineNuxtConfig({
  modules: [
  	// You can change Geist to your preferred font
    ['@nuxtjs/google-fonts', { families: { Geist: { wght: '200..900' } } }],
  ],
})`;
export const tailwindCode = `@theme {
  /* You can change Geist to your preferred font */
  --font-sans: 'Geist', ui-sans-serif, system-ui, sans-serif;
}`;

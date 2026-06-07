export const installCode = `npm install @nuxtjs/google-fonts`;
export const configCode = `export default defineNuxtConfig({
  modules: [
  	// Change to your font
    ['@nuxtjs/google-fonts', { families: { Geist: true } }],
  ],
})`;
export const tailwindCode = `@theme {
  /* Change to your font */
  --font-sans: 'Geist', ui-sans-serif, system-ui, sans-serif;
}`;

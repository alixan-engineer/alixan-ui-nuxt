export const installCode = `npm install @nuxtjs/google-fonts`;
export const configCode = `export default defineNuxtConfig({
  modules: [
    // You can change Inter to your preferred font
    ['@nuxtjs/google-fonts', {
      families: { Inter: { wght: '200..900' } },
      display: 'swap',
      preload: false,
    }],
  ],
})`;
export const tailwindCode = `@theme {
  /* You can change Inter to your preferred font */
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
}`;

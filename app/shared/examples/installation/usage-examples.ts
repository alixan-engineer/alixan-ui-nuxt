export const commands = {
	createProject: 'npx nuxi@latest init my-app',
	addTailwind: 'npm install tailwindcss @tailwindcss/vite -D',
	addI18n: 'npm install @nuxtjs/i18n',
};
export const rootIdConfig = `export default defineNuxtConfig({
  app: {
    rootId: 'root', // Change appId to root.
  },
})`;
export const nuxtConfig = `import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  features: {
    inlineStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})`;
export const i18nConfig = `export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/i18n',
      {
        missingWarn: false,
        fallbackWarn: false,
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
})`;
export const usageCode = `<template>
  <Button color="primary">
    Save changes
  </Button>
</template>`;

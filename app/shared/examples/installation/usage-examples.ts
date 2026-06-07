export const commands = {
	createProject: 'npx nuxi@latest init my-app',
	addTailwind: 'npm install tailwindcss @tailwindcss/vite -D',
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
export const usageCode = `<template>
  <Button color="primary">
    Save changes
  </Button>
</template>`;

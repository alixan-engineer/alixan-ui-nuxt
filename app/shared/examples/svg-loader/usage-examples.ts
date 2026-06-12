export const installCode = `npx nuxi module add nuxt-svgo-loader`;

export const configCode = `export default defineNuxtConfig({
  modules: ['nuxt-svgo-loader'],
  svgoLoader: {
    // Options here will be passed to \`vite-svg-loader\`
  },
})`;

export const usageCode = `<template>
  <SvgoIcon name="nuxt" width="92" height="92" fill="#00DC82" />
</template>`;

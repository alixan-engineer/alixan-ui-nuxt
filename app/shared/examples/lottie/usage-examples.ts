export const installCode = `npx nuxi module add lottie`;
export const configCode = `export default defineNuxtConfig({
  modules: ['nuxt-lottie'],
  lottie: {
    componentName: 'Lottie',
    lottieFolder: '/assets/lottie',
    autoFolderCreation: true,
  },
})`;
export const folderCode = `app/
  assets/
    lottie/
      error.json
      success.json`;
export const usageCode = `<template>
  <Lottie name="error" :loop="false" width="160px" height="140px" />
</template>`;
export const emptyCode = `<template>
  <Empty
    title="Page not found"
    description="The page you are looking for does not exist or has been moved."
    button="Go home"
    @action="navigateTo('/')"
  >
    <div
      class="flex size-28 items-center justify-center rounded-4xl bg-secondary text-primary"
    >
      <Lottie name="error" :loop="false" width="140px" height="140px" />
    </div>
  </Empty>
</template>`;

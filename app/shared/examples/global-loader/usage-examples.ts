export const appCode = `// app.vue
// Add GlobalLoaderHost once near the root of your app.
<template>
  <NuxtPage />
  <GlobalLoaderHost />
</template>`;
export const usageCode = `// example.vue
<script setup lang="ts">
const loader = useGlobalLoader()

const load = () => {
  loader.show()

  window.setTimeout(() => {
    loader.hide()
  }, 3000)
}
<\/script>

<template>
  <Button @click="load">Show loader</Button>
</template>`;

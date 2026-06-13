export const appCode = `<template>
  <NuxtPage />
  <GlobalLoaderHost /> <!-- Add GlobalLoaderHost once near the root of your app. -->
</template>`;

export const usageCode = `<script setup lang="ts">
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

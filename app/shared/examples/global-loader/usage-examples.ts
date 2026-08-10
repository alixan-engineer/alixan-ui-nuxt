export const appCode = `<script setup lang="ts">
import GlobalLoaderHost from '@/components/ui/global-loader/GlobalLoaderHost.vue'
<\/script>

<template>
  <NuxtPage />
  <GlobalLoaderHost /> <!-- Add GlobalLoaderHost once near the root of your app. -->
</template>`;

export const usageCode = `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'

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

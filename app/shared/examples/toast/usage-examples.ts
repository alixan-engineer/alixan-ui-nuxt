export const appCode = `<template>
  <NuxtPage />
  <ToastHost /> <!-- Add ToastHost once near the root of your app. -->
</template>`;

export const exampleCode = `<script setup lang="ts">
const toast = useToast()

const showToast = () => {
  toast.open('Project saved successfully', 'success')
}
<\/script>

<template>
  <Button @click="showToast">Show toast</Button>
</template>`;

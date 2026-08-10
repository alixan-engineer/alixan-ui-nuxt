export const appCode = `<script setup lang="ts">
import ToastHost from '@/components/ui/toast/ToastHost.vue'
<\/script>

<template>
  <NuxtPage />
  <ToastHost /> <!-- Add ToastHost once near the root. It renders only on the client. -->
</template>`;

export const exampleCode = `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'

const toast = useToast()

const showToast = () => {
  toast.open('Project saved successfully', 'success')
}
<\/script>

<template>
  <Button @click="showToast">Show toast</Button>
</template>`;

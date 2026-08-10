export const examples = {
	usage: `<script setup lang="ts">
import Switch from '@/components/ui/switch/Switch.vue'

const checked = ref(false)
<\/script>

<template>
  <Switch v-model="checked" label="Airplane Mode" />
  <Switch v-model="disabledChecked" label="Disabled" disabled />
</template>`,
};

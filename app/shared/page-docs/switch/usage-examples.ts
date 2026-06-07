export const examples = {
	usage: `<script setup lang="ts">
const checked = ref(false)
<\/script>

<template>
  <Switch v-model="checked" label="Airplane Mode" />
  <Switch v-model="disabledChecked" label="Disabled" disabled />
</template>`,
};

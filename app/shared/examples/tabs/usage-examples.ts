export const examples = {
	usage: `<script setup lang="ts">
const tabs = ['Account', 'Password']
const selected = ref(0)
<\/script>

<template>
  <div class="grid gap-4">
    <Tabs v-model="selected" :tabs="tabs" design="cupertino" />
    <Tabs v-model="selected" :tabs="tabs" design="material" />
  </div>
</template>`,
	full: `<template>
  <Tabs v-model="selected" :tabs="tabs" full />
</template>`,
};

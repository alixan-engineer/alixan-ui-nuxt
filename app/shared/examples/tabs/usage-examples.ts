export const examples = {
	usage: `<script setup lang="ts">
import Tabs from '@/components/ui/tabs/Tabs.vue'

const tabs = ['Account', 'Password']
const selected = ref(0)
<\/script>

<template>
  <div class="grid gap-4">
    <Tabs v-model="selected" :tabs="tabs" design="cupertino" />
    <Tabs v-model="selected" :tabs="tabs" design="material" />
  </div>
</template>`,
	full: `<script setup lang="ts">
import Tabs from '@/components/ui/tabs/Tabs.vue'
<\/script>

<template>
  <Tabs v-model="selected" :tabs="tabs" full />
</template>`,
};

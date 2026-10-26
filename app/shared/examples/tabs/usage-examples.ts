export const examples = {
	swipeInstall: `npm install swiper@^12.2.0`,
	swipe: `<script setup lang="ts">
import TabsSwiper from '@/components/ui/tabs/TabsSwiper.vue'

const tabs = [
  'componentDocs.tabs.demo.all',
  'componentDocs.tabs.demo.active',
  'componentDocs.tabs.demo.paused',
  'componentDocs.tabs.demo.problems',
  'componentDocs.tabs.demo.belowMinimum',
  'componentDocs.tabs.demo.atMinimum',
  'componentDocs.tabs.demo.favorites',
]
const counts = [128, 84, 16, 9, 7, 12, 18]
const selected = ref(0)
<\/script>

<template>
  <TabsSwiper v-model="selected" :tabs="tabs" :counts="counts" design="material" />
  <p>{{ $t(tabs[selected]) }}</p>
</template>`,
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

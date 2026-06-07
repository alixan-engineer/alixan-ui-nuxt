export const usageCode = `<script setup lang="ts">
const activeItem = ref('item-1')

const items = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. The trigger uses a native button.',
  },
  {
    value: 'item-2',
    title: 'Is it styled?',
    content: 'Yes. It follows Alixan UI visual language.',
  },
]
<\/script>

<template>
  <Accordion v-model="activeItem" :items="items" />
</template>`;
export const multipleCode = `<script setup lang="ts">
const activeItems = ref(['item-1'])
<\/script>

<template>
  <Accordion
    v-model="activeItems"
    :items="items"
    multiple
  />
</template>`;

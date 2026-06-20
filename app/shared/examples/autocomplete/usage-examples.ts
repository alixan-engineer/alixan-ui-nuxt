export const examples = {
	usage: `<script setup lang="ts">
const city = ref(null)
const options = [
  { label: 'Almaty', value: 'almaty' },
  { label: 'Astana', value: 'astana' },
]
<\/script>

<template>
  <Autocomplete v-model="city" label="City" :options="options" />
</template>`,
	validation: `<script setup lang="ts">
const city = ref(null)
const error = computed(() => !city.value ? 'City is required' : '')
<\/script>

<template>
  <Autocomplete
    v-model="city"
    label="City"
    :options="options"
    :error="error"
  />
</template>`,
};

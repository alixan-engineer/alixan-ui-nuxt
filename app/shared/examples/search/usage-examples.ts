export const examples = {
	usage: `<script setup lang="ts">
const value = ref('')
const debouncedValue = ref('')
<\/script>

<template>
  <Search
    v-model="value"
    placeholder="Search services"
    @search="debouncedValue = $event"
  />
</template>`,
	debounce: `<script setup lang="ts">
const value = ref('')
const debouncedValue = ref('')
<\/script>

<template>
  <Search
    v-model="value"
    :debounce="150"
    placeholder="Fast search"
    @search="debouncedValue = $event"
  />
</template>`,
};

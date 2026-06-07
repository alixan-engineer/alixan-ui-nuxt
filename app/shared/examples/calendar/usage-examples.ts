export const examples = {
	day: `<script setup lang="ts">
const date = ref(null)
const { locale } = useI18n()
<\/script>

<template>
  <Calendar v-model="date" label="Date" :locale="locale" />
</template>`,
	range: `<script setup lang="ts">
const range = ref(null)
const { locale } = useI18n()
<\/script>

<template>
  <Calendar v-model="range" label="Period" mode="range" :locale="locale" />
</template>`,
};

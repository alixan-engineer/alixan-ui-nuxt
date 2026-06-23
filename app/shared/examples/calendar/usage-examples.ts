export const examples = {
	day: `<script setup lang="ts">
const date = ref(null)
const { locale } = useI18n()
<\/script>

<template>
  <Calendar v-model="date" :label="$t('calendarLabels.date')" :locale="locale" date-format="dd.mm.yyyy" />
</template>`,
	range: `<script setup lang="ts">
const range = ref(null)
const { locale } = useI18n()
<\/script>

<template>
  <Calendar v-model="range" :label="$t('calendarLabels.period')" mode="range" :locale="locale" />
</template>`,
};

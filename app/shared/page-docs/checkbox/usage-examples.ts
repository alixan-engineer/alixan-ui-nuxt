export const examples = {
	usage: `<script setup lang="ts">
const accepted = ref(false)
const selectedPeriod = ref('7d')
const selectedOptions = ref(['email'])
<\/script>

<template>
  <Checkbox v-model="accepted" label="Accept terms" />

  <Checkbox v-model="selectedPeriod" value="7d" label="7 d" />
  <Checkbox v-model="selectedPeriod" value="30d" label="30 d" />

  <Checkbox v-model="selectedOptions" mode="multiple" value="email" label="Email" />
  <Checkbox v-model="selectedOptions" mode="multiple" value="sms" label="SMS" />
</template>`,
};

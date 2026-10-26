const setup = `<script setup lang="ts">
import Stepper from '@/components/ui/stepper/Stepper.vue'

const steps = [
  { id: 1, label: 'componentDocs.stepper.demo.details' },
  { id: 2, label: 'componentDocs.stepper.demo.payment' },
  { id: 3, label: 'componentDocs.stepper.demo.confirmation' },
]
const selected = ref(steps[1])
<\/script>`;

export const examples = {
	usage: `${setup}

<template>
  <Stepper :steps="steps" :selected="selected" />
</template>`,
	vertical: `${setup}

<template>
  <Stepper :steps="steps" :selected="selected" direction="vertical" />
</template>`,
};

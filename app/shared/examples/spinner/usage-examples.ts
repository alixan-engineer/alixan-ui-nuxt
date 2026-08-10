export const examples = {
	usage: `<script setup lang="ts">
import Spinner from '@/components/ui/spinner/Spinner.vue'
<\/script>

<template>
  <Spinner />
</template>`,
	size: `<script setup lang="ts">
import Spinner from '@/components/ui/spinner/Spinner.vue'
<\/script>

<template>
  <div class="w-full grid grid-cols-3 justify-around">
    <Spinner size="sm" />
    <Spinner />
    <Spinner size="lg" />
  </div>
</template>`,
};

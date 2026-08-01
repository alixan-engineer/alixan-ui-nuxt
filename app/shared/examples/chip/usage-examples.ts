export const examples = {
	usage: `<script setup lang="ts">
import Chip from '@/components/ui/chip/Chip.vue';
</script>

<template>
	<div class="flex flex-wrap items-center gap-2">
		<Chip label="Default" />
		<Chip label="Selected" selected />
		<Chip label="Design" type="select" />
		<Chip label="Nuxt" type="remove" />
	</div>
</template>`,
	size: `<script setup lang="ts">
import Chip from '@/components/ui/chip/Chip.vue';
</script>

<template>
	<div class="flex flex-wrap items-center gap-2">
		<Chip label="Small" size="sm" />
		<Chip label="Medium" />
		<Chip label="Large" size="lg" />
	</div>
</template>`,
};

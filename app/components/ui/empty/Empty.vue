<script setup lang="ts">
interface EmptyProps {
	title: string;
	description?: string;
	button?: string;
}

defineProps<EmptyProps>();

const emit = defineEmits<{
	action: [];
}>();
</script>

<template>
	<div
		class="size-full flex flex-col items-center justify-center gap-6 text-center"
	>
		<slot />
		<h1 class="text-3xl font-semibold">{{ title }}</h1>
		<p v-if="description" class="text-xl text-muted-foreground">
			{{ description }}
		</p>
		<Button v-if="button" color="primary" @click="emit('action')">
			{{ button }}
		</Button>
	</div>
</template>

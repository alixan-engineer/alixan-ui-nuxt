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
	<div class="w-full min-h-80 flex items-center justify-center px-6 py-12">
		<div class="w-full max-w-md text-center space-y-5">
			<slot />
			<div class="space-y-2">
				<h1 class="text-3xl font-semibold">{{ title }}</h1>
				<p v-if="description" class="text-muted-foreground leading-7">
					{{ description }}
				</p>
			</div>
			<Button v-if="button" color="primary" @click="emit('action')">
				{{ button }}
			</Button>
		</div>
	</div>
</template>

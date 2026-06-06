<script setup lang="ts">
type ButtonColor = 'default' | 'primary' | 'secondary' | 'destructive';

interface EmptyProps {
	title: string;
	description?: string;
	button?: string;
	buttonColor?: ButtonColor;
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
			<Button
				v-if="button"
				:color="buttonColor ?? 'primary'"
				@click="emit('action')"
			>
				{{ button }}
			</Button>
		</div>
	</div>
</template>

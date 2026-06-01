<script setup lang="ts">
interface GlobalLoaderProps {
	label?: string;
}

withDefaults(defineProps<GlobalLoaderProps>(), {
	label: '',
});
</script>

<template>
	<div
		class="min-w-28 rounded-3xl border bg-background/95 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl dark:bg-background/90"
	>
		<div class="flex flex-col items-center gap-4">
			<div
				class="size-11 rounded-full border-4 border-secondary border-t-primary animate-spin"
				aria-hidden="true"
			/>
			<p v-if="label" class="text-sm font-medium text-muted-foreground">
				{{ label }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	close: () => void;
}>();
</script>

<template>
	<div class="min-h-18 flex flex-col items-center gap-3 px-4 pb-4 pt-1.5">
		<div class="w-12 h-1.5 rounded-full bg-muted-foreground/30" />
		<h2
			class="flex-1 flex items-center justify-center text-lg font-semibold leading-6"
		>
			{{ $tn(title) }}
		</h2>
	</div>
</template>

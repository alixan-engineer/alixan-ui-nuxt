<script setup lang="ts">
import { X } from '@lucide/vue';

interface DialogHeaderProps {
	title: string;
	close: () => void;
}

defineProps<DialogHeaderProps>();
</script>

<template>
	<div class="h-14 px-4 flex items-center justify-between">
		<h2 class="text-lg font-semibold">
			{{ $t(title) }}
		</h2>
		<IconButton variant="ghost" color="default" @click="close">
			<X />
		</IconButton>
	</div>
</template>

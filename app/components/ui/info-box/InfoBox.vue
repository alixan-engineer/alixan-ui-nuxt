<script setup lang="ts">
import type { Component } from 'vue';

interface InfoBoxProps {
	icon?: Component | null;
}

withDefaults(defineProps<InfoBoxProps>(), {
	icon: null,
});
</script>

<template>
	<div class="island flex-row items-center gap-3 p-4">
		<span
			v-if="icon"
			class="flex size-9 shrink-0 items-center justify-center rounded-full bg-card text-card-foreground"
		>
			<component :is="icon" class="size-5" />
		</span>
		<p class="min-w-0 text-base leading-7">
			<slot />
		</p>
	</div>
</template>

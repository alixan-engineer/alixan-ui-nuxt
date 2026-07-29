<script setup lang="ts">
import { cn } from '~/utils/cn';

interface IslandProps {
	title?: string;
	subtitle?: string;
	description?: string;
}

withDefaults(defineProps<IslandProps>(), {
	title: undefined,
	subtitle: undefined,
	description: undefined,
});
</script>

<template>
	<header v-if="title || subtitle || description" class="space-y-2">
		<h2
			v-if="subtitle"
			:class="
				cn(
					'text-xl font-semibold leading-7',
					title ? 'text-muted-foreground' : 'text-foreground',
				)
			"
		>
			{{ $t(subtitle) }}
		</h2>
		<h1 v-if="title" class="text-2xl font-semibold leading-8 tracking-tight md:text-3xl md:leading-9">
			{{ $t(title) }}
		</h1>
		<p v-if="description" class="text-base leading-6 text-muted-foreground md:text-xm">
			{{ $t(description) }}
		</p>
	</header>
</template>

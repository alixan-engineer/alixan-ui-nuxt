<script setup lang="ts">
import { computed, useAttrs } from 'vue';

import { cn } from '~~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

interface TabsProps {
	tabs?: string[];
	full?: boolean;
}

const props = withDefaults(defineProps<TabsProps>(), {
	tabs: () => [],
	full: false,
});

const selected = defineModel<number>({ default: 0 });
const attrs = useAttrs();

const rootClass = computed(() =>
	cn(props.full ? 'w-full' : 'w-fit max-w-full', attrs.class),
);

const tabButtonClass = computed(() => (props.full ? 'flex-1' : 'shrink-0'));
</script>

<template>
	<div v-if="tabs.length" :class="rootClass">
		<nav class="w-full h-11 p-1 flex items-center rounded-xl bg-secondary">
			<button
				type="button"
				v-for="(tab, i) in tabs"
				:key="i"
				:class="
					cn(
						'flex-1 h-full px-3 rounded-xl',
						tabButtonClass,
						selected === i
							? 'bg-background text-foreground'
							: 'text-foreground',
					)
				"
				@click="selected = i"
			>
				{{ tab }}
			</button>
		</nav>
	</div>
</template>

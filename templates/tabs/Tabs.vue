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

const safeSelected = computed(() => {
	if (!props.tabs.length) {
		return 0;
	}

	return Math.min(Math.max(selected.value, 0), props.tabs.length - 1);
});

const rootClass = computed(() =>
	cn(props.full ? 'w-full' : 'w-fit max-w-full', attrs.class),
);

const tabButtonClass = computed(() =>
	props.full ? 'flex-1' : 'shrink-0',
);

function selectTab(index: number): void {
	selected.value = index;
}
</script>

<template>
	<div v-if="tabs.length" :class="rootClass">
		<nav
			class="flex h-9 w-full items-center overflow-x-auto rounded-2xl bg-secondary/70 p-1"
			aria-label="Tabs"
		>
			<button
				v-for="(tab, index) in tabs"
				:key="`${tab}-${index}`"
				type="button"
				:aria-selected="safeSelected === index"
				:class="
					cn(
						'h-full rounded-xl px-3.5 text-center text-base transition-all duration-200 focus-visible:outline-none',
						tabButtonClass,
						safeSelected === index
							? 'bg-background text-foreground shadow-[0_2px_8px_rgba(15,23,42,0.14)]'
							: 'text-foreground hover:bg-background/40 focus-visible:bg-background/40',
					)
				"
				@click="selectTab(index)"
			>
				{{ tab }}
			</button>
		</nav>
	</div>
</template>

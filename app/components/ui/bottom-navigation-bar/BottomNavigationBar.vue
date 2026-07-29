<script setup lang="ts">
import { computed, resolveComponent, useAttrs } from 'vue';
import type { Component } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import { cn } from '~/utils/cn';

defineOptions({ inheritAttrs: false });

interface BottomNavigationItem {
	label: string;
	icon: Component;
	to?: RouteLocationRaw;
	disabled?: boolean;
}

interface BottomNavigationBarProps {
	items?: BottomNavigationItem[];
}

const props = withDefaults(defineProps<BottomNavigationBarProps>(), {
	items: () => [],
});

const selected = defineModel<number>({ default: 0 });
const attrs = useAttrs();
const NuxtLink = resolveComponent('NuxtLink');
const safeSelected = computed(() => Math.min(Math.max(selected.value, 0), Math.max(props.items.length - 1, 0)));

const select = (index: number, disabled?: boolean): void => {
	if (!disabled) selected.value = index;
};
</script>

<template>
	<nav :class="cn('flex h-12.5 w-full shrink-0 items-center justify-center border-t bg-background', attrs.class)" v-bind="{ ...attrs, class: undefined }">
		<component
			:is="item.to ? NuxtLink : 'button'"
			v-for="(item, index) in items"
			:key="`${item.label}-${index}`"
			:to="item.to"
			:type="item.to ? undefined : 'button'"
			:aria-current="safeSelected === index ? 'page' : undefined"
			:aria-disabled="item.disabled || undefined"
			:class="cn('flex h-12.5 min-w-0 flex-1 flex-col items-center justify-center focus-visible:outline-none focus-visible:bg-secondary', safeSelected === index ? 'text-foreground' : 'text-muted-foreground', item.disabled ? 'pointer-events-none opacity-40' : '')"
			@click="select(index, item.disabled)"
		>
			<span class="flex size-8.5 shrink-0 items-center justify-center [&_svg]:size-6">
				<component :is="item.icon" />
			</span>
			<span :class="cn('max-w-full truncate text-xs leading-4', safeSelected === index ? 'font-semibold' : 'font-normal')">
				{{ $t(item.label) }}
			</span>
		</component>
	</nav>
</template>

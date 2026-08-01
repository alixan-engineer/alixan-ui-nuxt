<script setup lang="ts">
import type { Component } from 'vue';

import { cn } from '~/utils/cn';

interface BottomNavigationItem {
	id: string;
	label: string;
	icon?: Component;
	disabled?: boolean;
}

interface BottomNavigationBarProps {
	items: BottomNavigationItem[];
}

defineProps<BottomNavigationBarProps>();

const selected = defineModel<string>();

const selectItem = (item: BottomNavigationItem) => {
	if (item.disabled) return;
	selected.value = item.id;
};
</script>

<template>
	<nav class="w-full h-12.5 flex items-center border-t bg-background">
		<button
			v-for="item in items"
			:key="item.id"
			type="button"
			:disabled="item.disabled"
			:class="
				cn(
					'flex-1 h-full',
					'flex flex-col items-center justify-center',
					'transition-all',
					'disabled:pointer-events-none disabled:opacity-50',
					selected === item.id ? 'text-primary' : 'text-muted-foreground',
				)
			"
			@click="selectItem(item)"
		>
			<component v-if="item.icon" :is="item.icon" class="size-6" />
			<span
				:class="
					cn('text-xs', selected === item.id ? 'font-semibold' : 'font-medium')
				"
			>
				{{ $t(item.label) }}
			</span>
		</button>
	</nav>
</template>

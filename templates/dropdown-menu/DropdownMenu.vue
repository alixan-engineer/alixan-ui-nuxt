<script setup lang="ts">
import { ChevronDown } from '@lucide/vue';
import { computed, nextTick, ref } from 'vue';

import { cn } from '~~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type DropdownAlign = 'left' | 'right' | 'center';

interface DropdownMenuItem {
	label: string;
	value?: string | number;
	disabled?: boolean;
	destructive?: boolean;
}

interface DropdownMenuProps {
	items?: DropdownMenuItem[];
	label?: string;
	align?: DropdownAlign;
}

const props = withDefaults(defineProps<DropdownMenuProps>(), {
	items: () => [],
	label: 'Options',
	align: 'right',
});

const emit = defineEmits<{
	select: [item: DropdownMenuItem];
}>();

const triggerRef = ref<HTMLElement | null>(null);
const open = ref(false);
const menuStyle = ref<Record<string, string>>({});

const placementClass = computed(() => {
	if (props.align === 'left') {
		return 'left';
	}

	if (props.align === 'center') {
		return 'center';
	}

	return 'right';
});

function updateMenuPosition(): void {
	const trigger = triggerRef.value;

	if (!trigger || !import.meta.client) {
		return;
	}

	const rect = trigger.getBoundingClientRect();
	const width = Math.max(rect.width, 160);
	const offset = 4;
	let left = rect.right - width;

	if (placementClass.value === 'left') {
		left = rect.left;
	}

	if (placementClass.value === 'center') {
		left = rect.left + rect.width / 2 - width / 2;
	}

	left = Math.max(8, Math.min(left, window.innerWidth - width - 8));

	menuStyle.value = {
		top: `${rect.bottom + offset}px`,
		left: `${left}px`,
		minWidth: `${width}px`,
	};
}

async function openMenu(): Promise<void> {
	open.value = true;
	await nextTick();
	updateMenuPosition();
	window.addEventListener('resize', closeMenu);
	window.addEventListener('scroll', closeMenu, true);
}

function closeMenu(): void {
	open.value = false;
	window.removeEventListener('resize', closeMenu);
	window.removeEventListener('scroll', closeMenu, true);
}

function toggleMenu(): void {
	if (open.value) {
		closeMenu();
		return;
	}

	openMenu();
}

function selectItem(item: DropdownMenuItem): void {
	if (item.disabled) {
		return;
	}

	emit('select', item);
	closeMenu();
}

onBeforeUnmount(closeMenu);
</script>

<template>
	<div ref="triggerRef" :class="cn('inline-flex', $attrs.class)">
		<slot name="trigger" :open="open" :toggle="toggleMenu">
			<Button variant="outlined" color="default" size="md" @click="toggleMenu">
				{{ label }}
				<ChevronDown
					:class="
						cn(
							'size-4 transition-transform',
							open ? 'rotate-180' : '',
						)
					"
				/>
			</Button>
		</slot>

		<Teleport to="body">
			<div
				v-if="open"
				class="fixed inset-0 z-[9998]"
				@mousedown.stop="closeMenu"
				@click.stop
			/>
			<div
				v-if="open"
				class="fixed z-[9999] max-h-80 overflow-auto rounded-lg border bg-popover p-1 shadow-md"
				:style="menuStyle"
				@mousedown.stop
			>
				<button
					v-for="item in items"
					:key="item.value ?? item.label"
					type="button"
					:disabled="item.disabled"
					:class="
						cn(
							'flex min-h-9 w-full cursor-pointer items-center rounded-md px-3 text-left text-md transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
							item.destructive ? 'text-destructive hover:bg-destructive/10 focus-visible:bg-destructive/10' : '',
						)
					"
					@click="selectItem(item)"
				>
					<span class="truncate">{{ item.label }}</span>
				</button>
			</div>
		</Teleport>
	</div>
</template>

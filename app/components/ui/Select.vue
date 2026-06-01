<script setup lang="ts">
import { Check, ChevronDown } from '@lucide/vue';
import { computed, nextTick, ref } from 'vue';

import { cn } from '~~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type SelectValue = string | number;

interface SelectOption {
	label: string;
	value: SelectValue;
	disabled?: boolean;
}

interface SelectProps {
	label?: string;
	placeholder?: string;
	options?: SelectOption[];
	disabled?: boolean;
}

const props = withDefaults(defineProps<SelectProps>(), {
	label: '',
	placeholder: 'Select option',
	options: () => [],
	disabled: false,
});

const emit = defineEmits<{
	change: [option: SelectOption];
}>();

const model = defineModel<SelectValue | null>({ default: null });

const triggerRef = ref<HTMLElement | null>(null);
const open = ref(false);
const menuStyle = ref<Record<string, string>>({});

const selectedOption = computed(
	() => props.options.find(option => option.value === model.value) ?? null,
);

const hasSelectedValue = computed(() => selectedOption.value !== null);
const isFocused = computed(() => open.value || hasSelectedValue.value);

const selectedLabel = computed(
	() => selectedOption.value?.label ?? props.placeholder,
);

const updateMenuPosition = (): void => {
	const trigger = triggerRef.value;

	if (!trigger || !import.meta.client) {
		return;
	}

	const rect = trigger.getBoundingClientRect();
	const width = rect.width;
	const offset = 4;

	menuStyle.value = {
		top: `${rect.bottom + offset}px`,
		left: `${rect.left}px`,
		minWidth: `${width}px`,
		maxWidth: `${Math.min(width, window.innerWidth - 16)}px`,
	};
};

const openSelect = async (): Promise<void> => {
	if (props.disabled) {
		return;
	}

	open.value = true;
	await nextTick();
	updateMenuPosition();
	window.addEventListener('resize', closeSelect);
	window.addEventListener('scroll', closeSelect, true);
};

const closeSelect = (): void => {
	open.value = false;
	window.removeEventListener('resize', closeSelect);
	window.removeEventListener('scroll', closeSelect, true);
};

const toggleSelect = (): void => {
	if (open.value) {
		closeSelect();
		return;
	}

	openSelect();
};

const selectOption = (option: SelectOption): void => {
	if (option.disabled) {
		return;
	}

	model.value = option.value;
	emit('change', option);
	closeSelect();
};

onBeforeUnmount(closeSelect);
</script>

<template>
	<div :class="cn('relative w-full', label ? 'min-h-14' : '', $attrs.class)">
		<label
			v-if="label"
			:class="
				cn(
					'pointer-events-none absolute left-3 z-10 px-1 text-base font-normal transition-all duration-200 text-muted-foreground',
					isFocused ? 'top-1.5 text-xs' : 'top-4',
					disabled ? 'text-muted-foreground/50' : '',
				)
			"
		>
			{{ label }}
		</label>

		<button
			ref="triggerRef"
			type="button"
			:disabled="disabled"
			:class="
				cn(
					'flex w-full items-center justify-between gap-2 border bg-background px-4 text-left hover:bg-secondary/40 focus-visible:bg-secondary/40 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
					label ? 'h-14 rounded-2xl pt-2' : 'h-11 rounded-xl',
					open ? 'border-primary' : 'border-border',
				)
			"
			@click="toggleSelect"
		>
			<span
				:class="
					cn(
						'truncate text-base',
						label && !hasSelectedValue ? 'text-transparent' : '',
						!hasSelectedValue && !label ? 'text-muted-foreground' : '',
					)
				"
			>
				{{ selectedLabel }}
			</span>
			<ChevronDown
				:class="
					cn(
						'size-6 text-muted-foreground transition-transform',
						open ? 'rotate-180' : '',
					)
				"
			/>
		</button>

		<Teleport to="body">
			<div
				v-if="open"
				class="fixed inset-0 z-9998"
				@mousedown.stop="closeSelect"
				@click.stop
			/>
			<div
				v-if="open"
				class="fixed z-9999 max-h-72 overflow-auto rounded-lg border bg-popover p-1 shadow-md"
				:style="menuStyle"
				@mousedown.stop
			>
				<button
					v-for="option in options"
					:key="option.value"
					type="button"
					:disabled="option.disabled"
					:class="
						cn(
							'flex min-h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left text-md hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
							model === option.value ? 'bg-secondary' : '',
						)
					"
					@click="selectOption(option)"
				>
					<span class="min-w-0 flex-1 truncate">{{ option.label }}</span>
					<Check v-if="model === option.value" class="size-4" />
				</button>
			</div>
		</Teleport>
	</div>
</template>

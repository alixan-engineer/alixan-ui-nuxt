<script setup lang="ts">
import { Check, ChevronDown, X } from '@lucide/vue';
import { computed, nextTick, ref, watch } from 'vue';

import { cn } from '~/utils/cn';

type AutocompleteValue = string | number;

interface AutocompleteOption {
	label: string;
	value: AutocompleteValue;
	disabled?: boolean;
}

interface AutocompleteProps {
	label?: string;
	options?: AutocompleteOption[];
	autofocus?: boolean;
	error?: string;
}

const props = withDefaults(defineProps<AutocompleteProps>(), {
	label: 'Search',
	options: () => [],
	autofocus: false,
	error: '',
});

const emit = defineEmits<{
	change: [option: AutocompleteOption];
}>();

const model = defineModel<AutocompleteValue | null>({ default: null });
const query = ref('');
const open = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const inputKey = ref(0);
const shouldFocusInput = ref(false);
const menuStyle = ref<Record<string, string>>({});

const selectedOption = computed(
	() => props.options.find(option => option.value === model.value) ?? null,
);
const filteredOptions = computed(() => {
	const value = query.value.trim().toLowerCase();

	if (!value) {
		return props.options;
	}

	return props.options.filter(option =>
		option.label.toLowerCase().includes(value),
	);
});

const updateMenuPosition = (): void => {
	const trigger = triggerRef.value;

	if (!trigger || !import.meta.client) {
		return;
	}

	const rect = trigger.getBoundingClientRect();

	menuStyle.value = {
		top: `${rect.bottom + 2}px`,
		left: `${rect.left}px`,
		minWidth: `${rect.width}px`,
		maxWidth: `${Math.min(rect.width, window.innerWidth - 16)}px`,
	};
};

const openMenu = async (): Promise<void> => {
	open.value = true;
	await nextTick();
	updateMenuPosition();
	window.addEventListener('resize', closeMenu);
	window.addEventListener('scroll', closeMenu, true);
};

const closeMenu = (): void => {
	open.value = false;
	window.removeEventListener('resize', closeMenu);
	window.removeEventListener('scroll', closeMenu, true);
};

const selectOption = (option: AutocompleteOption): void => {
	if (option.disabled) {
		return;
	}

	model.value = option.value;
	query.value = option.label;
	emit('change', option);
	closeMenu();
};

const clearSelection = async (): Promise<void> => {
	model.value = null;
	query.value = '';
	shouldFocusInput.value = true;
	inputKey.value += 1;
	await nextTick();
	await openMenu();
	shouldFocusInput.value = false;
};

watch(selectedOption, value => {
	query.value = value?.label ?? '';
}, { immediate: true });

onBeforeUnmount(closeMenu);
</script>

<template>
	<div ref="triggerRef" class="relative w-full">
		<Input
			:key="inputKey"
			v-model="query"
			:label="label"
			:error="error"
			:autofocus="autofocus || shouldFocusInput"
			autocomplete="off"
			@focus="openMenu"
			@input="openMenu"
		>
			<template #trailing>
				<button
					v-if="selectedOption"
					type="button"
					class="rounded-lg p-1 hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
					aria-label="Clear autocomplete"
					@mousedown.prevent
					@click.stop="clearSelection"
				>
					<X class="size-5 text-muted-foreground" />
				</button>
				<ChevronDown
					v-else
					:class="cn('size-5 text-muted-foreground', open ? 'rotate-180' : '')"
				/>
			</template>
		</Input>

		<Teleport to="body">
			<div
				v-if="open"
				class="fixed inset-0 z-9998"
				@mousedown.stop="closeMenu"
				@click.stop
			/>
			<div
				v-if="open"
				class="fixed z-9999 max-h-72 overflow-auto rounded-xl border bg-popover p-1 shadow-md"
				:style="menuStyle"
				@mousedown.stop
			>
				<button
					v-for="option in filteredOptions"
					:key="option.value"
					type="button"
					:disabled="option.disabled"
					:class="
						cn(
							'flex min-h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-md hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
							model === option.value ? 'bg-secondary' : '',
						)
					"
					@click="selectOption(option)"
				>
					<span class="min-w-0 flex-1 truncate">{{ option.label }}</span>
					<Check v-if="model === option.value" class="size-4" />
				</button>
				<p
					v-if="!filteredOptions.length"
					class="px-3 py-2 text-sm text-muted-foreground"
				>
					No results
				</p>
			</div>
		</Teleport>
	</div>
</template>

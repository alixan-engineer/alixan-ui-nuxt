<script setup lang="ts">
import { X } from '@lucide/vue';

type AutocompleteValue = string | number;

interface AutocompleteOption {
	label: string;
	value: AutocompleteValue;
	disabled?: boolean;
}

interface AutocompleteChipsProps {
	label?: string;
	placeholder?: string;
	options?: AutocompleteOption[];
	error?: string;
}

const props = withDefaults(defineProps<AutocompleteChipsProps>(), {
	label: 'Search',
	placeholder: 'Add item...',
	options: () => [],
	error: '',
});

const model = defineModel<AutocompleteValue[]>({ default: () => [] });

const query = ref('');
const open = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);
const menuStyle = ref<Record<string, string>>({});

const selectedOptions = computed(() =>
	props.options.filter(option => model.value.includes(option.value)),
);

const availableOptions = computed(() => {
	const value = query.value.trim().toLowerCase();
	const options = props.options.filter(option => !model.value.includes(option.value));

	if (!value) {
		return options;
	}

	return options.filter(option => option.label.toLowerCase().includes(value));
});

const hasValue = computed(() => selectedOptions.value.length > 0 || query.value.length > 0);

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

const focusInput = async (): Promise<void> => {
	await openMenu();
	inputRef.value?.focus();
};

const addOption = (option: AutocompleteOption): void => {
	if (option.disabled || model.value.includes(option.value)) {
		return;
	}

	model.value = [...model.value, option.value];
	query.value = '';
	inputRef.value?.focus();
};

const removeOption = (value: AutocompleteValue): void => {
	model.value = model.value.filter(item => item !== value);
	inputRef.value?.focus();
};

onBeforeUnmount(closeMenu);
</script>

<template>
	<div class="w-full space-y-2">
		<div
			ref="triggerRef"
			class="relative min-h-16 rounded-3xl border bg-background px-4 py-2"
			:class="error ? 'border-destructive' : 'focus-within:border-primary'"
			@click="focusInput"
		>
			<label
				class="pointer-events-none absolute left-4 text-muted-foreground"
				:class="hasValue ? 'top-2 text-xs' : 'top-1/2 -translate-y-1/2 text-md'"
			>
				{{ label }}
			</label>

			<div class="flex min-h-11 flex-wrap items-center gap-2 pt-5">
				<span
					v-for="option in selectedOptions"
					:key="option.value"
					class="inline-flex h-8 items-center gap-2 rounded-full border bg-background px-3 text-sm font-medium"
				>
					{{ option.label }}
					<button
						type="button"
						class="rounded-full p-0.5 hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
						aria-label="Remove item"
						@mousedown.prevent
						@click.stop="removeOption(option.value)"
					>
						<X class="size-4" />
					</button>
				</span>

				<input
					ref="inputRef"
					v-model="query"
					type="text"
					autocomplete="off"
					class="min-w-24 flex-1 bg-transparent text-md outline-none placeholder:text-muted-foreground"
					:placeholder="selectedOptions.length ? placeholder : ''"
					@focus="openMenu"
					@input="openMenu"
				>
			</div>
		</div>

		<p v-if="error" class="px-1 text-sm text-destructive">
			{{ error }}
		</p>

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
					v-for="option in availableOptions"
					:key="option.value"
					type="button"
					:disabled="option.disabled"
					class="flex min-h-10 w-full items-center rounded-lg px-3 text-left text-md hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
					@click="addOption(option)"
				>
					<span class="min-w-0 flex-1 truncate">{{ option.label }}</span>
				</button>
				<p
					v-if="!availableOptions.length"
					class="px-3 py-2 text-sm text-muted-foreground"
				>
					No results
				</p>
			</div>
		</Teleport>
	</div>
</template>

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
}

const props = withDefaults(defineProps<AutocompleteChipsProps>(), {
	label: 'Search',
	placeholder: 'Add item...',
	options: () => [],
});

const model = defineModel<AutocompleteValue[]>({ default: () => [] });

const availableOptions = computed(() =>
	props.options.filter(option => !model.value.includes(option.value)),
);
const selectedOptions = computed(() =>
	props.options.filter(option => model.value.includes(option.value)),
);

const addOption = (option: AutocompleteOption): void => {
	if (!model.value.includes(option.value)) {
		model.value = [...model.value, option.value];
	}
};

const removeOption = (value: AutocompleteValue): void => {
	model.value = model.value.filter(item => item !== value);
};
</script>

<template>
	<div class="space-y-3">
		<div v-if="selectedOptions.length" class="flex flex-wrap gap-2">
			<span
				v-for="option in selectedOptions"
				:key="option.value"
				class="inline-flex h-9 items-center gap-2 rounded-full border bg-background px-3 text-sm font-medium"
			>
				{{ option.label }}
				<button
					type="button"
					class="rounded-full p-0.5 hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
					aria-label="Remove item"
					@click="removeOption(option.value)"
				>
					<X class="size-4" />
				</button>
			</span>
		</div>

	<Autocomplete
		:label="label"
		:options="availableOptions"
		@change="addOption"
	/>
	</div>
</template>

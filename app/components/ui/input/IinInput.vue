<script setup lang="ts">
import type { XControl } from '~/composables/useXControl';

interface IinInputProps {
	control: XControl<string | number | null>;
	label?: string;
	autofocus?: boolean;
	required?: boolean;
}

const props = withDefaults(defineProps<IinInputProps>(), {
	label: 'inputLabels.iin',
	autofocus: false,
	required: false,
});

const iinError = computed(() => {
	const value = String(props.control.value ?? '');
	const digits = value.replace(/\D/g, '');

	if (!value || digits.length === 12) {
		return '';
	}

	return 'validation.iinPattern';
});
</script>

<template>
	<Input
		:control="props.control"
		type="text"
		:label="props.label"
		:autofocus="props.autofocus"
		:required="props.required"
		:error="iinError"
		mask="##-##-##-##-##-##"
		inputmode="numeric"
		autocomplete="off"
		maxlength="17"
	/>
</template>

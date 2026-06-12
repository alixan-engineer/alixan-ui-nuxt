<script setup lang="ts">
interface IinInputProps {
	label?: string;
	autofocus?: boolean;
	required?: boolean;
}

const props = withDefaults(defineProps<IinInputProps>(), {
	label: 'inputLabels.iin',
	autofocus: false,
	required: false,
});

const model = defineModel<string | number | null>({ default: '' });

const iinError = computed(() => {
	const value = String(model.value ?? '');
	const digits = value.replace(/\D/g, '');

	if (!value || digits.length === 12) {
		return '';
	}

	return 'validation.iinPattern';
});
</script>

<template>
	<Input
		v-model="model"
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

<script setup lang="ts">
interface EmailInputProps {
	label?: string;
	autofocus?: boolean;
	required?: boolean;
}

const props = withDefaults(defineProps<EmailInputProps>(), {
	label: 'Email',
	autofocus: false,
	required: false,
});

const model = defineModel<string | number | null>({ default: '' });
const emailError = computed(() => {
	const value = String(model.value ?? '');

	if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
		return '';
	}

	return 'Введите корректный email';
});
</script>

<template>
	<Input
		v-model="model"
		type="email"
		:label="props.label"
		:autofocus="props.autofocus"
		:required="props.required"
		:error="emailError"
	/>
</template>

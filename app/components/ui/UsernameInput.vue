<script setup lang="ts">
interface UsernameInputProps {
	label?: string;
	autofocus?: boolean;
	min?: number;
	max?: number;
	required?: boolean;
}

withDefaults(defineProps<UsernameInputProps>(), {
	label: 'Username',
	autofocus: false,
	min: 3,
	max: 20,
	required: true,
});

const model = defineModel<string | number | null>({ default: '' });
</script>

<template>
	<Input
		v-model="model"
		:label="label"
		:autofocus="autofocus"
		:min="min"
		:max="max"
		:required="required"
	/>
</template>

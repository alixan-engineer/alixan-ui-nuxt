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

const { t } = useI18n();
const model = defineModel<string | number | null>({ default: '' });
</script>

<template>
	<Input
		v-model="model"
		:label="label"
		:autofocus="autofocus"
		:min="min"
		:max="max"
		pattern="[A-Za-z0-9]+"
		:pattern-message="t('validation.usernamePattern')"
		:required="required"
	/>
</template>

<script setup lang="ts">
import type { XControl } from '~/composables/useXControl';

interface UsernameInputProps {
	control: XControl<string | number | null>;
	label?: string;
	autofocus?: boolean;
	min?: number;
	max?: number;
	required?: boolean;
}

const props = withDefaults(defineProps<UsernameInputProps>(), {
	label: 'Username',
	autofocus: false,
	min: 3,
	max: 20,
	required: true,
});

</script>

<template>
	<Input
		:control="props.control"
		:label="label"
		:autofocus="autofocus"
		:min="min"
		:max="max"
		pattern="[A-Za-z0-9]+"
		:pattern-message="'validation.usernamePattern'"
		:required="required"
	/>
</template>

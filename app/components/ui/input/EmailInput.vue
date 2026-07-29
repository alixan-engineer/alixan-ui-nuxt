<script setup lang="ts">
import type { XControl } from '~/composables/useXControl';

interface EmailInputProps {
	control: XControl<string | number | null>;
	label?: string;
	autofocus?: boolean;
	required?: boolean;
}

const props = withDefaults(defineProps<EmailInputProps>(), {
	label: 'Email',
	autofocus: false,
	required: false,
});

const emailError = computed(() => {
	const value = String(props.control.value ?? '');

	if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
		return '';
	}

	return 'validation.email';
});
</script>

<template>
	<Input
		:control="props.control"
		type="email"
		:label="props.label"
		:autofocus="props.autofocus"
		:required="props.required"
		:error="emailError"
	>
		<template v-if="$slots.leading" #leading>
			<slot name="leading" />
		</template>
		<template v-if="$slots.trailing" #trailing>
			<slot name="trailing" />
		</template>
	</Input>
</template>

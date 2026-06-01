<script setup lang="ts">
import { X } from '@lucide/vue';
import { computed, ref, useAttrs, useId, useSlots } from 'vue';

import { cn } from '~~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
type InputAutocomplete = 'on' | 'off';

interface InputProps {
	id?: string;
	label?: string;
	type?: InputType;
	placeholder?: string;
	autocomplete?: InputAutocomplete;
	hint?: string;
	error?: string;
	disabled?: boolean;
	readonly?: boolean;
	hasClearButton?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
	id: undefined,
	label: undefined,
	type: 'text',
	placeholder: undefined,
	autocomplete: undefined,
	hint: undefined,
	error: undefined,
	disabled: false,
	readonly: false,
	hasClearButton: true,
});

const emit = defineEmits<{
	focus: [event: FocusEvent];
	blur: [event: FocusEvent];
	input: [event: Event];
}>();

const model = defineModel<string | number | null>({ default: '' });

const attrs = useAttrs();
const slots = useSlots();
const generatedId = useId();
const isFocused = ref(false);

const inputId = computed(() => props.id ?? generatedId);
const messageId = computed(() => `${inputId.value}-message`);
const hasLeading = computed(() => Boolean(slots.leading));
const hasTrailing = computed(() => Boolean(slots.trailing));
const hasValue = computed(
	() => model.value !== null && model.value !== undefined && model.value !== '',
);
const hasClearButton = computed(
	() =>
		props.hasClearButton &&
		!hasTrailing.value &&
		hasValue.value &&
		!props.disabled &&
		!props.readonly,
);
const hasTrailingAction = computed(() => hasTrailing.value || hasClearButton.value);
const isLabelMoved = computed(() => isFocused.value || hasValue.value);
const hasMessage = computed(() => Boolean(props.error || props.hint));

const inputAttrs = computed(() => {
	const { class: _class, ...rest } = attrs;

	return rest;
});

const inputBaseClass = 'h-14 rounded-2xl px-4 text-base';
const labelBaseClass = 'left-3';
const labelTopClass = 'top-4';
const leadingLabelClass = 'left-9';
const leadingPaddingClass = 'pl-10';
const trailingPaddingClass = 'pr-10';
const iconPositionClass = 'top-1/2 -translate-y-1/2';

const rootClass = computed(() => cn('relative w-full space-y-1', attrs.class));

const inputClass = computed(() =>
	cn(
		'w-full border border-border bg-background text-foreground placeholder:text-muted-foreground/70 hover:border-foreground/20 focus:outline-none focus:border-primary',
		inputBaseClass,
		props.label ? 'pt-2' : '',
		hasLeading.value ? leadingPaddingClass : '',
		hasTrailingAction.value ? trailingPaddingClass : '',
		props.error
			? 'border-destructive text-destructive hover:border-destructive focus:border-destructive!'
			: '',
		props.disabled
			? 'cursor-not-allowed bg-secondary text-muted-foreground opacity-70'
			: '',
		props.readonly ? 'cursor-default bg-secondary/60' : '',
	),
);

const labelClass = computed(() =>
	cn(
		'pointer-events-none absolute z-10 px-1 text-base font-normal text-muted-foreground transition-all duration-200',
		labelTopClass,
		hasLeading.value ? leadingLabelClass : labelBaseClass,
		isLabelMoved.value ? '-translate-y-2.5 text-[11px] font-medium' : '',
		props.error ? 'text-destructive!' : isFocused.value ? 'text-primary' : '',
		props.disabled ? 'text-muted-foreground/60' : '',
	),
);

const leadingSlotClass = computed(() =>
	cn(
		'absolute left-3 z-10 text-muted-foreground',
		iconPositionClass,
	),
);

const trailingSlotClass = computed(() =>
	cn(
		'absolute right-3 z-10 text-muted-foreground',
		iconPositionClass,
	),
);

const handleFocus = (event: FocusEvent): void => {
	isFocused.value = true;
	emit('focus', event);
};

const handleBlur = (event: FocusEvent): void => {
	isFocused.value = false;
	emit('blur', event);
};

const handleInput = (event: Event): void => {
	emit('input', event);
};

const clearValue = (): void => {
	if (props.disabled || props.readonly) {
		return;
	}

	model.value = '';
};
</script>

<template>
	<div :class="rootClass">
		<label v-if="label" :for="inputId" :class="labelClass">
			{{ label }}
		</label>

		<span v-if="$slots.leading" :class="leadingSlotClass" aria-hidden="true">
			<slot name="leading" />
		</span>

		<input
			:id="inputId"
			v-bind="inputAttrs"
			v-model="model"
			:type="type"
			:placeholder="placeholder"
			:autocomplete="autocomplete"
			:disabled="disabled"
			:readonly="readonly"
			:aria-invalid="error ? true : undefined"
			:aria-describedby="hasMessage ? messageId : undefined"
			:class="inputClass"
			@focus="handleFocus"
			@blur="handleBlur"
			@input="handleInput"
		/>

		<span v-if="$slots.trailing" :class="trailingSlotClass">
			<slot name="trailing" />
		</span>

		<button
			v-else-if="hasClearButton"
			type="button"
			:class="trailingSlotClass"
			class="rounded-lg p-1 hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
			aria-label="Clear input"
			@mousedown.prevent
			@click="clearValue"
		>
			<X class="size-5" />
		</button>

		<p
			v-if="hasMessage"
			:id="messageId"
			:class="
				cn(
					'px-3 text-sm font-medium',
					error ? 'text-destructive' : 'text-muted-foreground',
				)
			"
		>
			{{ error || hint }}
		</p>
	</div>
</template>

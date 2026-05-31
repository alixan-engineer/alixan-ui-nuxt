<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue';

import { cn } from '~~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type ButtonVariant = 'filled' | 'outlined' | 'ghost';
type ButtonColor = 'default' | 'primary' | 'secondary' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
	label?: string;
	type?: 'button' | 'submit' | 'reset';
	variant?: ButtonVariant;
	color?: ButtonColor;
	size?: ButtonSize;
}

const props = withDefaults(defineProps<ButtonProps>(), {
	type: 'button',
	variant: 'filled',
	color: 'primary',
	size: 'md',
	label: undefined,
});

const attrs = useAttrs();
const slots = useSlots();

const sizeClasses: Record<ButtonSize, string> = {
	sm: 'h-9 rounded-sm px-3 text-md',
	md: 'h-11 rounded-lg px-4 text-base',
	lg: 'h-12 rounded-2xl px-5 text-base',
};

const toneClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
	filled: {
		default: 'border-foreground bg-foreground text-background',
		primary: 'border-primary bg-primary text-primary-foreground',
		secondary: 'border-secondary bg-secondary text-secondary-foreground',
		destructive:
			'border-destructive bg-destructive text-destructive-foreground',
	},
	outlined: {
		default:
			'border-border bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground',
		primary:
			'border-primary/25 bg-transparent text-primary hover:bg-primary/10',
		secondary:
			'border-border bg-secondary/70 text-secondary-foreground hover:bg-secondary',
		destructive:
			'border-destructive/25 bg-transparent text-destructive hover:bg-destructive/10',
	},
	ghost: {
		default:
			'border-transparent bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground',
		primary:
			'border-transparent bg-transparent text-primary hover:bg-primary/10',
		secondary:
			'border-transparent bg-transparent text-secondary-foreground hover:bg-secondary',
		destructive:
			'border-transparent bg-transparent text-destructive hover:bg-destructive/10',
	},
};

const hasDefaultSlot = computed(() => Boolean(slots.default));

const buttonClass = computed(() =>
	cn(
		'inline-flex items-center justify-center gap-2 border font-medium whitespace-nowrap transition-colors',
		sizeClasses[props.size],
		toneClasses[props.variant][props.color],
		attrs.class,
	),
);
</script>

<template>
	<button
		v-bind="{ ...attrs, class: undefined }"
		:type="type"
		:class="buttonClass"
	>
		<span
			v-if="$slots.leading"
			class="flex items-center justify-center"
			aria-hidden="true"
		>
			<slot name="leading" />
		</span>

		<span v-if="hasDefaultSlot || label" class="truncate">
			<slot>
				{{ label }}
			</slot>
		</span>

		<span
			v-if="$slots.trailing"
			class="flex items-center justify-center"
			aria-hidden="true"
		>
			<slot name="trailing" />
		</span>
	</button>
</template>

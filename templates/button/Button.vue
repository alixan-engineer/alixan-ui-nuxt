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
	disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
	type: 'button',
	variant: 'filled',
	color: 'primary',
	size: 'md',
	disabled: false,
	label: undefined,
});

const attrs = useAttrs();
const slots = useSlots();

const sizeClasses: Record<ButtonSize, string> = {
	sm: 'h-9 px-3.5 text-sm',
	md: 'h-11 px-4 text-sm',
	lg: 'h-12 px-5 text-base',
};

const toneClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
	filled: {
		default:
			'border-foreground bg-foreground text-background hover:opacity-95 active:opacity-100',
		primary:
			'border-primary bg-primary text-primary-foreground hover:opacity-95 active:opacity-100',
		secondary:
			'border-secondary bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground',
		destructive:
			'border-destructive bg-destructive text-destructive-foreground hover:opacity-95 active:opacity-100',
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
		'group inline-flex shrink-0 items-center justify-center gap-2 rounded-[calc(var(--radius)+0.25rem)] border text-sm font-medium whitespace-nowrap align-middle select-none',
		'transition-[transform,background-color,border-color,color,box-shadow,opacity] duration-200 ease-out',
		'shadow-[0_1px_2px_rgba(15,23,42,0.04)]',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
		'disabled:pointer-events-none disabled:opacity-50',
		'active:translate-y-px',
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
		:disabled="disabled"
		:class="buttonClass"
	>
		<span
			v-if="$slots.leading"
			class="flex items-center justify-center text-current/80 transition-transform duration-200 group-hover:scale-[1.03]"
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
			class="flex items-center justify-center text-current/70 transition-transform duration-200 group-hover:translate-x-0.5"
			aria-hidden="true"
		>
			<slot name="trailing" />
		</span>
	</button>
</template>

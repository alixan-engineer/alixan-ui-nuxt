<script setup lang="ts">
import { computed, useAttrs } from 'vue';

import { cn } from '~~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type IconButtonVariant = 'filled' | 'outlined' | 'ghost';
type IconButtonColor = 'default' | 'primary' | 'secondary' | 'destructive';
type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps {
	label: string;
	type?: 'button' | 'submit' | 'reset';
	variant?: IconButtonVariant;
	color?: IconButtonColor;
	size?: IconButtonSize;
	disabled?: boolean;
}

const props = withDefaults(defineProps<IconButtonProps>(), {
	type: 'button',
	variant: 'filled',
	color: 'primary',
	size: 'md',
	disabled: false,
});

const attrs = useAttrs();

const sizeClasses: Record<IconButtonSize, string> = {
	sm: 'size-9 rounded-sm [&_svg]:size-4',
	md: 'size-11 rounded-lg [&_svg]:size-4',
	lg: 'size-12 rounded-2xl [&_svg]:size-5',
};

const toneClasses: Record<IconButtonVariant, Record<IconButtonColor, string>> = {
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

const iconButtonClass = computed(() =>
	cn(
		'inline-flex shrink-0 items-center justify-center border font-medium transition-colors',
		'disabled:pointer-events-none disabled:opacity-50',
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
		:aria-label="label"
		:class="iconButtonClass"
	>
		<slot />
	</button>
</template>

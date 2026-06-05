<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';

import { cn } from '~/utils/cn';

type OtpLength = 4 | 5 | 6 | 7 | 8;

interface OtpInputProps {
	length?: OtpLength;
}

const props = withDefaults(defineProps<OtpInputProps>(), {
	length: 6,
});

const emit = defineEmits<{
	change: [value: string];
	submit: [value: string];
}>();

const model = defineModel<string>({ default: '' });
const inputRefs = ref<HTMLInputElement[]>([]);
const values = ref<string[]>([]);

const safeLength = computed(() => Math.min(8, Math.max(4, props.length)));
const indexes = computed(() =>
	Array.from({ length: safeLength.value }, (_, index) => index),
);
const code = computed(() => values.value.join(''));
const hasSeparatorAfter = (index: number): boolean => {
	if (safeLength.value === 6) {
		return index === 2;
	}

	if (safeLength.value === 8) {
		return index === 1 || index === 3 || index === 5;
	}

	return false;
};

const syncFromModel = (): void => {
	values.value = indexes.value.map(index => model.value[index] ?? '');
};

const focusInput = async (index: number): Promise<void> => {
	await nextTick();
	inputRefs.value[index]?.focus();
	inputRefs.value[index]?.select();
};

const updateModel = (): void => {
	const value = code.value;

	model.value = value;
	emit('change', value);

	if (value.length === safeLength.value) {
		emit('submit', value);
	}
};

const setValue = (index: number, value: string): void => {
	values.value[index] = value.replace(/\D/g, '').slice(-1);
	updateModel();
};

const setInputRef = (element: Element | null, index: number): void => {
	if (element instanceof HTMLInputElement) {
		inputRefs.value[index] = element;
	}
};

const handleInput = (event: Event, index: number): void => {
	const target = event.target as HTMLInputElement;

	setValue(index, target.value);

	if (values.value[index] && index < safeLength.value - 1) {
		focusInput(index + 1);
	}
};

const handleKeydown = (event: KeyboardEvent, index: number): void => {
	if (event.key !== 'Backspace' || values.value[index]) {
		return;
	}
	if (index > 0) {
		focusInput(index - 1);
	}
};

const handlePaste = (event: ClipboardEvent): void => {
	event.preventDefault();

	const pastedValue = event.clipboardData
		?.getData('text')
		.replace(/\D/g, '')
		.slice(0, safeLength.value);

	if (!pastedValue) {
		return;
	}

	values.value = indexes.value.map(index => pastedValue[index] ?? '');
	updateModel();
	focusInput(Math.min(pastedValue.length, safeLength.value - 1));
};

watch(() => [model.value, safeLength.value], syncFromModel, {
	immediate: true,
});
</script>

<template>
	<div>
		<div class="flex items-center gap-2">
			<template v-for="index in indexes" :key="index">
				<input
					:ref="element => setInputRef(element as Element | null, index)"
					:value="values[index]"
					type="text"
					inputmode="numeric"
					autocomplete="one-time-code"
					maxlength="1"
					aria-label="OTP digit"
					:class="
						cn(
							'size-12 rounded-2xl border text-center text-lg font-semibold text-foreground hover:border-foreground/20 focus:border-primary focus:outline-none',
							values[index] ? 'border-primary/50' : 'border-border',
						)
					"
					@input="handleInput($event, index)"
					@keydown="handleKeydown($event, index)"
					@paste="handlePaste"
				/>
				<span
					v-if="hasSeparatorAfter(index)"
					class="h-px w-3 rounded-full bg-border"
					aria-hidden="true"
				/>
			</template>
		</div>
	</div>
</template>

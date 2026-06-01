import type { Component } from 'vue';
import { shallowRef } from 'vue';

export interface DialogOpenOptions {
	width?: string;
	height?: string;
	title?: string;
	data?: Record<string, unknown>;
}

interface DialogState {
	component: Component;
	options: DialogOpenOptions;
}

const dialogState = shallowRef<DialogState | null>(null);

export const useDialog = () => {
	const open = (component: Component, options: DialogOpenOptions = {}): void => {
		dialogState.value = {
			component,
			options,
		};
	};

	const close = (): void => {
		dialogState.value = null;
	};

	return {
		close,
		open,
		state: readonly(dialogState),
	};
};

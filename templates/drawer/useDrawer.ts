import type { Component } from 'vue';
import { shallowRef } from 'vue';

export type DrawerPosition = 'top' | 'right' | 'bottom' | 'left';

export interface DrawerOpenOptions {
	width?: string;
	height?: string;
	title?: string;
	position?: DrawerPosition;
	data?: Record<string, unknown>;
}

interface DrawerState {
	component: Component;
	options: DrawerOpenOptions;
}

const drawerState = shallowRef<DrawerState | null>(null);

export const useDrawer = () => {
	const open = (component: Component, options: DrawerOpenOptions = {}): void => {
		drawerState.value = {
			component,
			options,
		};
	};

	const close = (): void => {
		drawerState.value = null;
	};

	return {
		close,
		open,
		state: readonly(drawerState),
	};
};

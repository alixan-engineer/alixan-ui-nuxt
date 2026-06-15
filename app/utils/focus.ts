import type { Directive, DirectiveBinding } from 'vue';

interface FocusElementOptions {
	preventScroll?: boolean;
	retries?: number;
}

export const focusElement = (
	element: HTMLElement | null | undefined,
	options: FocusElementOptions = {},
): void => {
	if (!element || !import.meta.client) return;

	const retries = options.retries ?? 12;
	const preventScroll = options.preventScroll ?? true;
	let attempts = 0;

	const focus = (): void => {
		if (!element.isConnected) return;

		element.focus({ preventScroll });

		if (document.activeElement === element || attempts >= retries) {
			return;
		}

		attempts += 1;
		requestAnimationFrame(focus);
	};

	requestAnimationFrame(focus);
};

export const vFocus: Directive<HTMLElement, boolean | undefined> = {
	mounted: (el, binding: DirectiveBinding<boolean | undefined>) => {
		if (!binding.value) return;
		focusElement(el);
	},
	updated: (el, binding: DirectiveBinding<boolean | undefined>) => {
		if (!binding.value || binding.value === binding.oldValue) return;
		focusElement(el);
	},
};

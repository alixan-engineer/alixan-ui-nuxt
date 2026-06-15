interface FocusElementOptions {
	preventScroll?: boolean;
	retries?: number;
}

export const focusElement = (
	element: HTMLElement | null | undefined,
	options: FocusElementOptions = {},
): void => {
	if (!element || !import.meta.client) return;

	const retries = options.retries ?? 3;
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

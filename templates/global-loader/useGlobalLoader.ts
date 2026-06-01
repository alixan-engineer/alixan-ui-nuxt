interface GlobalLoaderState {
	open: boolean;
	label: string;
}

interface GlobalLoaderOptions {
	label?: string;
}

const globalLoaderState = ref<GlobalLoaderState>({
	open: false,
	label: 'Loading...',
});

export const useGlobalLoader = () => {
	const show = (options: GlobalLoaderOptions = {}): void => {
		globalLoaderState.value = {
			open: true,
			label: options.label ?? 'Loading...',
		};
	};

	const hide = (): void => {
		globalLoaderState.value = {
			...globalLoaderState.value,
			open: false,
		};
	};

	return {
		hide,
		show,
		state: readonly(globalLoaderState),
	};
};

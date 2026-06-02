const mobileSidebarOpen = ref(false);

export const useMobileSidebar = () => {
	const open = (): void => {
		mobileSidebarOpen.value = true;
	};

	const close = (): void => {
		mobileSidebarOpen.value = false;
	};

	return {
		close,
		open,
		isOpen: mobileSidebarOpen,
	};
};

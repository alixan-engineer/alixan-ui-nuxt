<script setup lang="ts">
const route = useRoute();
const { links } = usePageToc();
const sidebar = useMobileSidebar();

const scrollPageToTop = () => {
	document.getElementById('root')?.scrollTo({ top: 0 });
};

watch(
	() => route.path,
	async () => {
		await nextTick();
		requestAnimationFrame(scrollPageToTop);
	},
);
</script>

<template>
	<Header />

	<div
		class="w-full max-w-container mx-auto grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_260px]"
	>
		<Sidebar class="hidden lg:block" />

		<main
			class="w-full max-w-190 mx-auto px-5 py-10 sm:px-8 lg:px-10 lg:py-12 space-y-12"
		>
			<NuxtPage />
		</main>

		<PageToc v-if="links.length" :key="route.fullPath" :links="links" />
	</div>

	<Teleport to="body">
		<div
			class="fixed inset-0 z-[60] lg:hidden"
			:class="sidebar.isOpen.value ? 'pointer-events-auto' : 'pointer-events-none'"
		>
			<div
				class="mobile-sidebar-backdrop backdrop"
				:class="sidebar.isOpen.value ? 'opacity-100' : 'opacity-0'"
				@click="sidebar.close"
			/>
			<div
				class="mobile-sidebar-panel absolute inset-y-0 w-72 border-r bg-background"
				:class="sidebar.isOpen.value ? 'left-0' : '-left-72'"
			>
				<Sidebar mobile @close="sidebar.close" />
			</div>
		</div>
	</Teleport>

	<DialogHost />
	<DrawerHost />
	<GlobalLoaderHost />
	<ToastHost />
</template>

<style scoped>
.mobile-sidebar-backdrop {
	transition: opacity 180ms ease;
}

.mobile-sidebar-panel {
	transition: left 220ms ease;
}
</style>

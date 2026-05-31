<script setup lang="ts">
const route = useRoute();
const { links } = usePageToc();

function scrollPageToTop(): void {
	const root = document.getElementById('root');

	root?.scrollTo({
		top: 0,
		behavior: 'auto',
	});
}

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
		<Sidebar />

		<main class="min-w-0 px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
			<NuxtPage />
		</main>

		<PageToc v-if="links.length" :key="route.fullPath" :links="links" />
	</div>
</template>

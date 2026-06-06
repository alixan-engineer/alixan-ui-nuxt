<script setup lang="ts">
const route = useRoute();
const { links } = usePageToc();

const sidebarToggle = ref<boolean>(false);
</script>

<template>
	<Header @sidebar-toggle-change="sidebarToggle = true" />
	<div
		class="w-full max-w-container mx-auto grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_260px]"
	>
		<Sidebar :sidebar-toggle="sidebarToggle" @close="sidebarToggle = false" />
		<main
			class="w-full max-w-190 mx-auto px-5 py-10 sm:px-8 lg:px-10 lg:py-12 space-y-12"
		>
			<NuxtPage />
			<PageNavigation />
		</main>
		<PageToc v-if="links.length" :key="route.fullPath" :links="links" />
	</div>
</template>

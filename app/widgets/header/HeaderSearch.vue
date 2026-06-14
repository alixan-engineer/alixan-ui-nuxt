<script setup lang="ts">
import { Search } from '@lucide/vue';
import DocsSearchDialog from '~/widgets/header/DocsSearchDialog.vue';

const dialog = useDialog();

const openSearch = (): void => {
	dialog.open(DocsSearchDialog, {
		title: 'docsSearch.title',
		width: '640px',
		height: '640px',
	});
};

const handleKeydown = (event: KeyboardEvent): void => {
	if (!event.ctrlKey || event.code !== 'KeyK') return;
	event.preventDefault();
	openSearch();
};

onMounted(() => {
	document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
	document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
	<IconButton
		variant="ghost"
		color="default"
		tooltip="docsSearch.title"
		@click="openSearch"
	>
		<Search />
	</IconButton>
</template>

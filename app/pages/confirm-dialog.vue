<script setup lang="ts">
import ConfirmDialog from '~/components/ui/confirm-dialog/ConfirmDialog.vue';
import { confirmDialogProps } from '~/shared/page-docs/confirm-dialog/api-reference';
import { confirmDialogPageToc } from '~/shared/page-docs/confirm-dialog/page-toc';
import { code } from '~/shared/page-docs/confirm-dialog/usage-examples';
import { propsTableColumns } from '~/shared/page-docs/table-columns';

usePageMeta({
	title: 'componentDocs.confirmDialog.metaTitle',
	description: 'componentDocs.confirmDialog.description',
});

const dialog = useDialog();
const toast = useToast();
const { setToc } = usePageToc();

onMounted(() => setToc(confirmDialogPageToc));

const openConfirm = (): void => {
	dialog.open(ConfirmDialog, {
		width: '360px',
		height: '240px',
		data: {
			title: 'Delete item?',
			description: 'This action cannot be undone.',
			cancelLabel: 'Cancel',
			submitLabel: 'Delete',
			submitColor: 'destructive',
			onSubmit: () => toast.open('Deleted', 'success'),
		},
	});
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.confirmDialog') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.confirmDialog.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="confirm-dialog" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="code">
			<Button color="destructive" @click="openConfirm">Delete</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="confirmDialogProps" />
	</section>
</template>

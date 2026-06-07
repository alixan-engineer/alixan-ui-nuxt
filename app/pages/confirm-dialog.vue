<script setup lang="ts">
import { confirmDialogPageToc } from '~/shared/page-docs/confirm-dialog/page-toc';
import ConfirmDialog from '~/components/ui/confirm-dialog/ConfirmDialog.vue';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.confirmDialog.metaTitle'),
	description: t('componentDocs.confirmDialog.description'),
});

const tocLinks = confirmDialogPageToc(t);

usePageTocLinks(tocLinks);

const dialog = useDialog();
const toast = useToast();

const confirmDialogProps = [
	{
		name: 'data.title',
		type: 'string',
		default: '-',
		description: 'Dialog title.',
	},
	{
		name: 'data.description',
		type: 'string',
		default: '-',
		description: 'Short explanation shown under the title.',
	},
	{
		name: 'data.cancelLabel',
		type: 'string',
		default: "'Cancel'",
		description: 'Cancel action label.',
	},
	{
		name: 'data.submitLabel',
		type: 'string',
		default: "'Confirm'",
		description: 'Submit action label.',
	},
	{
		name: 'data.submitColor',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'Submit action button color.',
	},
	{
		name: 'data.onCancel',
		type: '() => void',
		default: '-',
		description: 'Callback called before closing from cancel.',
	},
	{
		name: 'data.onSubmit',
		type: '() => void',
		default: '-',
		description: 'Callback called before closing from submit.',
	},
];

const code = `<script setup lang="ts">
import ConfirmDialog from '~/components/ui/confirm-dialog/ConfirmDialog.vue'

const dialog = useDialog()

const openConfirm = () => {
  dialog.open(ConfirmDialog, {
    width: '360px',
    height: '240px',
    data: {
      title: 'Delete item?',
      description: 'This action cannot be undone.',
      cancelLabel: 'Cancel',
      submitLabel: 'Delete',
      submitColor: 'destructive',
      onSubmit: () => console.log('confirmed'),
    },
  })
}
<\/script>

<template>
  <Button color="destructive" @click="openConfirm">
    Delete
  </Button>
</template>`;

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
		<Table
			:columns="[
				{ label: $t('docsTable.prop'), value: row => row.name },
				{ label: $t('docsTable.type'), value: row => row.type },
				{ label: $t('docsTable.default'), value: row => row.default },
				{ label: $t('docsTable.description'), value: row => row.description },
			]"
			:rows="confirmDialogProps"
		/>
	</section>
</template>

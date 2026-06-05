<script setup lang="ts">
import ConfirmDialog from '~/components/ui/confirm-dialog/ConfirmDialog.vue';
const { t } = useI18n();


usePageMeta({
	title: t('componentDocs.confirmDialog.metaTitle'),
	description: t('componentDocs.confirmDialog.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const dialog = useDialog();
const toast = useToast();

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
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="confirm-dialog" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="code">
			<Button color="destructive" @click="openConfirm">Delete</Button>
		</ExampleBlock>
	</section>
</template>

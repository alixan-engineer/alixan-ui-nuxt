<script setup lang="ts">
import ConfirmDialog from '~/components/ui/confirm-dialog/ConfirmDialog.vue';

usePageMeta({
	title: 'Confirm Dialog - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
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
		<h1 class="text-4xl font-semibold">Confirm Dialog</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A focused confirmation dialog with cancel and submit actions.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="confirm-dialog" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="code">
			<Button color="destructive" @click="openConfirm">Delete</Button>
		</ExampleBlock>
	</section>
</template>

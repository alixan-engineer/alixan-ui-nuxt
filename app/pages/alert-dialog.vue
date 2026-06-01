<script setup lang="ts">
import AlertDialog from '~/components/ui/AlertDialog.vue';

useSeoMeta({
	title: 'Alert Dialog - Alixan UI',
	ogTitle: 'Alert Dialog - Alixan UI',
	twitterTitle: 'Alert Dialog - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const dialog = useDialog();

const alertDialogProps = [
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
		name: 'data.buttonLabel',
		type: 'string',
		default: "'OK'",
		description: 'Primary action label.',
	},
	{
		name: 'data.imageSrc',
		type: 'string',
		default: '-',
		description: 'Optional image shown in the illustration area.',
	},
	{
		name: 'data.onAction',
		type: '() => void',
		default: '-',
		description: 'Callback called before closing the dialog.',
	},
];

const code = `<script setup lang="ts">
import AlertDialog from '~/components/ui/AlertDialog.vue'

const dialog = useDialog()

const openAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: 'Action unavailable',
      description: 'This feature is not available yet. Try again later.',
      buttonLabel: 'Got it',
    },
  })
}
<\/script>

<template>
  <Button @click="openAlert">Open alert</Button>
</template>`;

const openAlert = (): void => {
	dialog.open(AlertDialog, {
		width: '360px',
		height: '280px',
		data: {
			title: 'Action unavailable',
			description: 'This feature is not available yet. Try again later.',
			buttonLabel: 'Got it',
		},
	});
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Alert Dialog</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A compact Cupertino-style message dialog for clear blocking feedback.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="alert-dialog" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="code">
			<Button @click="openAlert">Open alert</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Prop</th>
						<th class="px-4 py-3 font-medium">Type</th>
						<th class="px-4 py-3 font-medium">Default</th>
						<th class="px-4 py-3 font-medium">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in alertDialogProps" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.default }}
						</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.description }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

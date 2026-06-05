<script setup lang="ts">
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue';

const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.alertDialog.metaTitle'),
	description: t('componentDocs.alertDialog.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
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
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue'

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
		<h1 class="text-4xl font-semibold">{{ $t('component.alertDialog') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.alertDialog.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="alert-dialog" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="code">
			<Button @click="openAlert">Open alert</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.prop') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.type') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.default') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.description') }}</th>
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

<script setup lang="ts">
import DialogPreviewContent from '~/components/examples/DialogPreviewContent.vue';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.dialog.metaTitle'),
	description: t('componentDocs.dialog.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.host'), href: '#host', child: true },
	{ label: t('docsSections.openDialog'), href: '#open-dialog', child: true },
	{ label: t('docsSections.dialogContent'), href: '#dialog-content', child: true },
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
const projectName = ref('Alixan UI');

const dialogServiceApi = [
	{
		name: 'component',
		type: 'Component',
		default: '-',
		description: 'Vue component rendered inside DialogHost.',
	},
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'Passed to DialogHeader.',
	},
	{
		name: 'width',
		type: 'string',
		default: "'500px'",
		description: 'Passed to Dialog as max-width.',
	},
	{
		name: 'height',
		type: 'string',
		default: "'auto'",
		description: 'Passed to Dialog as max-height.',
	},
	{
		name: 'data',
		type: 'Record<string, unknown>',
		default: '{}',
		description: 'Data passed to the dynamic component.',
	},
];

const hostCode = `// app.vue
// Add DialogHost once near the root of your app.
<template>
  <NuxtPage />
  <DialogHost />
</template>`;

const openCode = `// example.vue
<script setup lang="ts">
import ProjectDialog from '~/components/ProjectDialog.vue'

const dialog = useDialog()
const projectName = ref('Alixan UI')

const openDialog = () => {
  dialog.open(ProjectDialog, {
    width: '520px', // maxWidth
    height: '400px', // maxHeight
    title: 'Create project',
    data: {
      projectName: 'Alixan UI',
      onSave: (value: string) => {
        projectName.value = value
      },
    },
  })
}
<\/script>

<template>
  <Button @click="openDialog">Open dialog</Button>
</template>`;

const contentCode = `// ProjectDialog.vue
<script setup lang="ts">
interface ProjectDialogData {
  projectName: string
  onSave: (value: string) => void
}

const props = defineProps<{
  data: ProjectDialogData
  close: () => void
}>()

const projectName = ref('')

onMounted(() => {
  projectName.value = props.data.projectName
})

const save = () => {
  props.data.onSave(projectName.value)
  props.close()
}
<\/script>

<template>
  <div class="size-full flex flex-col divide-y">
    <div class="flex-1 p-4">
      <Input v-model="projectName" label="Project name" />
    </div>

    <div class="flex items-center justify-end gap-2 p-4">
      <Button variant="outlined" label="Cancel" @click="close" />
      <Button label="Save" @click="save" />
    </div>
  </div>
</template>`;

const openDialog = (): void => {
	dialog.open(DialogPreviewContent, {
		width: '520px',
		height: '400px',
		title: 'Create project',
		data: {
			projectName: projectName.value,
			onSave: (value: string) => {
				projectName.value = value;
			},
		},
	});
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.dialog') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.dialog.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="dialog" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>

		<div id="host" class="scroll-mt-24 space-y-3">
			<h3 class="text-xl font-semibold">{{ $t('docsSections.host') }}</h3>
			<ExampleBlock :code="hostCode">
				<div class="text-sm leading-7 text-muted-foreground">
					Add <code>DialogHost</code> once near the root of your app.
				</div>
			</ExampleBlock>
		</div>

		<div id="open-dialog" class="scroll-mt-24 space-y-3">
			<h3 class="text-xl font-semibold">{{ $t('docsSections.openDialog') }}</h3>
			<ExampleBlock :code="openCode">
				<div class="flex flex-wrap items-center justify-center gap-3">
					<Button @click="openDialog">Open dialog</Button>
					<p class="text-sm text-muted-foreground">
						Project name:
						<span class="font-medium text-foreground">{{ projectName }}</span>
					</p>
				</div>
			</ExampleBlock>
		</div>

		<div id="dialog-content" class="scroll-mt-24 space-y-3">
			<h3 class="text-xl font-semibold">
				{{ $t('docsSections.dialogContent') }}
			</h3>
			<ExampleBlock :code="contentCode">
				<div class="text-sm leading-7 text-muted-foreground">
					The content component receives <code>data</code> and
					<code>close</code> from <code>dialog.open()</code>.
				</div>
			</ExampleBlock>
		</div>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<Table
			:columns="[
				{ key: 'name', label: $t('docsTable.option') },
				{ key: 'type', label: $t('docsTable.type') },
				{ key: 'default', label: $t('docsTable.default') },
				{ key: 'description', label: $t('docsTable.description') },
			]"
			:rows="dialogServiceApi"
		/>
	</section>
</template>

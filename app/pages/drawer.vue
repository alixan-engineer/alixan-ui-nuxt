<script setup lang="ts">
import DrawerPreviewContent from '~/components/docs/drawer-preview-content/DrawerPreviewContent.vue';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.drawer.metaTitle'),
	description: t('componentDocs.drawer.description'),
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

const drawer = useDrawer();

const drawerServiceApi = [
	{
		name: 'component',
		type: 'Component',
		default: '-',
		description: 'Vue component rendered inside DrawerHost.',
	},
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'Passed to DrawerHeader.',
	},
	{
		name: 'width',
		type: 'string',
		default: "'420px'",
		description: 'Drawer max-width.',
	},
	{
		name: 'height',
		type: 'string',
		default: "'420px'",
		description: 'Drawer max-height for top and bottom positions.',
	},
	{
		name: 'position',
		type: "'top' | 'right' | 'bottom' | 'left'",
		default: "'bottom'",
		description: 'Drawer placement.',
	},
	{
		name: 'data',
		type: 'Record<string, unknown>',
		default: '{}',
		description: 'Data passed to the dynamic component.',
	},
];

const appCode = `// app.vue
// Add DrawerHost once near the root of your app.
<template>
  <NuxtPage />
  <DrawerHost />
</template>`;

const usageCode = `// example.vue
// Open any Vue component as a drawer and pass options/data.
<script setup lang="ts">
import WorkspaceDrawer from '~/components/WorkspaceDrawer.vue'

const drawer = useDrawer()

const openDrawer = () => {
  drawer.open(WorkspaceDrawer, {
    width: '420px',
    height: '360px',
    position: 'bottom',
    title: 'Workspace settings',
    data: {
      workspaceName: 'Alixan UI',
    },
  })
}
<\/script>

<template>
  <Button @click="openDrawer">Open drawer</Button>
</template>`;

const contentCode = `// WorkspaceDrawer.vue
// This component is rendered inside DrawerHost.
// It receives data and close from drawer.open().
<script setup lang="ts">
interface WorkspaceDrawerData {
  workspaceName: string
}

defineProps<{
  data: WorkspaceDrawerData
  close: () => void
}>()
<\/script>

<template>
  <div class="size-full flex flex-col divide-y">
    <div class="flex-1 space-y-3 p-4">
      <Input :model-value="data.workspaceName" label="Workspace name" />
      <Switch label="Enable notifications" />
    </div>

    <div class="flex items-center justify-end gap-2 p-4">
      <Button variant="outlined" label="Cancel" @click="close" />
      <Button label="Save" @click="close" />
    </div>
  </div>
</template>`;

const openDrawer = (): void => {
	drawer.open(DrawerPreviewContent, {
		width: '420px',
		height: '360px',
		position: 'bottom',
		title: 'Workspace settings',
		data: {
			workspaceName: 'Alixan UI',
		},
	});
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.drawer') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.drawer.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="drawer" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>

		<ExampleBlock :code="appCode" :preview="false" />

		<ExampleBlock :code="usageCode">
			<Button @click="openDrawer">Open drawer</Button>
		</ExampleBlock>

		<ExampleBlock :code="contentCode" :preview="false" />
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="[
				{ label: $t('docsTable.option'), getValue: row => row.name },
				{ label: $t('docsTable.type'), getValue: row => row.type },
				{ label: $t('docsTable.default'), getValue: row => row.default },
				{
					label: $t('docsTable.description'),
					getValue: row => row.description,
				},
			]"
			:rows="drawerServiceApi"
		/>
	</section>
</template>

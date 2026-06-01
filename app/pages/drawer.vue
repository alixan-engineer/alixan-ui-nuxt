<script setup lang="ts">
import DrawerPreviewContent from '~/components/examples/DrawerPreviewContent.vue';

useSeoMeta({
	title: 'Drawer - Alixan UI',
	ogTitle: 'Drawer - Alixan UI',
	twitterTitle: 'Drawer - Alixan UI',
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

const code = `// app.vue
// Add DrawerHost once near the root of your app.
<template>
  <NuxtPage />
  <DrawerHost />
</template>

// example.vue
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
</template>

// WorkspaceDrawer.vue
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
		<h1 class="text-4xl font-semibold">Drawer</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A teleported panel for secondary flows and mobile-friendly details.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="drawer" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="code">
			<Button @click="openDrawer">Open drawer</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Option</th>
						<th class="px-4 py-3 font-medium">Type</th>
						<th class="px-4 py-3 font-medium">Default</th>
						<th class="px-4 py-3 font-medium">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in drawerServiceApi" :key="item.name">
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

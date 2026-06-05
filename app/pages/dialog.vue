<script setup lang="ts">
import DialogPreviewContent from '~/components/examples/DialogPreviewContent.vue';

usePageMeta({
	title: 'Dialog - Alixan UI',
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

const code = `// App.vue. Add DialogHost once near the root of your app.
<template>
  <NuxtPage />
  <DialogHost />
</template>

// Example.vue. Open any Vue component as a dialog and pass options/data.
<script setup lang="ts">
import ProjectDialog from '~/components/ProjectDialog.vue'

const dialog = useDialog()

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
</template>

// ProjectDialog.vue:
// This component is rendered inside DialogHost.
// It receives data and close from dialog.open().
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
		<h1 class="text-4xl font-semibold">Dialog</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A teleported modal surface for focused decisions and forms.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="dialog" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="code">
			<div class="flex flex-wrap items-center justify-center gap-3">
				<Button @click="openDialog">Open dialog</Button>
				<p class="text-sm text-muted-foreground">
					Project name:
					<span class="font-medium text-foreground">{{ projectName }}</span>
				</p>
			</div>
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
					<tr v-for="item in dialogServiceApi" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.default }}</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.description }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

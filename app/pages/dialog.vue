<script setup lang="ts">
import { Copy } from '@lucide/vue';

useSeoMeta({
	title: 'Dialog - Alixan UI',
	ogTitle: 'Dialog - Alixan UI',
	twitterTitle: 'Dialog - Alixan UI',
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

const open = ref(false);

const dialogProps = [
	{ name: 'modelValue', type: 'boolean', default: 'false', description: 'Controls dialog visibility with v-model.' },
	{ name: 'title', type: 'string', default: '-', description: 'Dialog title.' },
	{ name: 'description', type: 'string', default: '-', description: 'Optional text under the title.' },
	{ name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Controls dialog max width.' },
	{ name: 'closeOnOverlay', type: 'boolean', default: 'true', description: 'Closes dialog when the click-catcher overlay is pressed.' },
];

const code = `<script setup lang="ts">
const open = ref(false)
<\/script>

<template>
  <Button @click="open = true">Open dialog</Button>

  <Dialog v-model="open" title="Create project">
    <p>Create a new project in your workspace.</p>

    <template #footer>
      <Button variant="outlined" color="default" @click="open = false">
        Cancel
      </Button>
      <Button @click="open = false">Create</Button>
    </template>
  </Dialog>
</template>`;
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
		<div class="island">
			<div class="px-4 py-3 flex items-center gap-4 border-b text-m">
				<span class="font-medium">npm</span>
				<div class="flex-1" />
				<Copy class="size-5 text-muted-foreground" />
			</div>
			<p class="p-4 text-md">npx alixan-ui-nuxt add dialog</p>
		</div>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="code">
			<Button @click="open = true">Open dialog</Button>
			<Dialog v-model="open" title="Create project" description="Create a new project in your workspace.">
				<p class="text-muted-foreground">Dialogs use Teleport and close on overlay or Escape.</p>
				<template #footer>
					<Button variant="outlined" color="default" @click="open = false">Cancel</Button>
					<Button @click="open = false">Create</Button>
				</template>
			</Dialog>
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
					<tr v-for="item in dialogProps" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.default }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.description }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

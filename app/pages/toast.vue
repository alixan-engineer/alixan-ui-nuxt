<script setup lang="ts">
import type { ToastType } from '~/composables/useToast';

usePageMeta({
	title: 'Toast - Alixan UI',
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

const toast = useToast();

const toastApi = [
	{
		name: 'message',
		type: 'string',
		default: '-',
		description: 'Toast text.',
	},
	{
		name: 'type',
		type: "'success' | 'warning' | 'error' | 'info'",
		default: "'info'",
		description: 'Semantic toast tone.',
	},
	{
		name: 'duration',
		type: 'number',
		default: '4000',
		description: 'Auto-close timeout in milliseconds.',
	},
];

const examples: Array<{ label: string; type: ToastType; message: string }> = [
	{ label: 'Success', type: 'success', message: 'Project saved successfully' },
	{ label: 'Warning', type: 'warning', message: 'Check required fields' },
	{ label: 'Error', type: 'error', message: 'Something went wrong' },
	{ label: 'Info', type: 'info', message: 'New update is available' },
];

const code = `// app.vue
// Add ToastHost once near the root of your app.
<template>
  <NuxtPage />
  <ToastHost />
</template>

// example.vue
<script setup lang="ts">
const toast = useToast()

const showToast = () => {
  toast.open('Project saved successfully', 'success')
}
<\/script>

<template>
  <Button @click="showToast">Show toast</Button>
</template>`;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Toast</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A lightweight notification stack for success, warning, error and info
			messages.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="toast" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="code">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Button
					v-for="item in examples"
					:key="item.type"
					variant="outlined"
					@click="toast.open(item.message, item.type)"
				>
					{{ item.label }}
				</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Argument</th>
						<th class="px-4 py-3 font-medium">Type</th>
						<th class="px-4 py-3 font-medium">Default</th>
						<th class="px-4 py-3 font-medium">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in toastApi" :key="item.name">
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

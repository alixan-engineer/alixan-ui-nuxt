<script setup lang="ts">
useSeoMeta({
	title: 'Global Loader - Alixan UI',
	ogTitle: 'Global Loader - Alixan UI',
	twitterTitle: 'Global Loader - Alixan UI',
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

const loader = useGlobalLoader();

const loaderApi = [
	{
		name: 'show',
		type: '(options?: { label?: string }) => void',
		default: '-',
		description: 'Opens the full-screen loader.',
	},
	{
		name: 'hide',
		type: '() => void',
		default: '-',
		description: 'Closes the loader.',
	},
	{
		name: 'label',
		type: 'string',
		default: "''",
		description: 'Optional label displayed below the spinner.',
	},
];

const code = `// app.vue
// Add GlobalLoaderHost once near the root of your app.
<template>
  <NuxtPage />
  <GlobalLoaderHost />
</template>

// example.vue
<script setup lang="ts">
const loader = useGlobalLoader()

const load = () => {
  loader.show()

  window.setTimeout(() => {
    loader.hide()
  }, 3000)
}
<\/script>

<template>
  <Button @click="load">Show loader</Button>
</template>`;

const showLoader = (): void => {
	loader.show();

	window.setTimeout(() => {
		loader.hide();
	}, 3000);
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Global Loader</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A full-screen loading overlay for blocking async flows.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="global-loader" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="code">
			<Button @click="showLoader">Show loader for 3 seconds</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Method / Option</th>
						<th class="px-4 py-3 font-medium">Type</th>
						<th class="px-4 py-3 font-medium">Default</th>
						<th class="px-4 py-3 font-medium">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in loaderApi" :key="item.name">
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

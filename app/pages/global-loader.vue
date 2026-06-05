<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.globalLoader.metaTitle'),
	description: t('componentDocs.globalLoader.description'),
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
		<h1 class="text-4xl font-semibold">{{ $t('component.globalLoader') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.globalLoader.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="global-loader" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="code">
			<Button @click="showLoader">Show loader for 3 seconds</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.methodOption') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.type') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.default') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.description') }}</th>
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

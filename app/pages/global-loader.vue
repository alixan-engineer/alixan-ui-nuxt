<script setup lang="ts">
import { globalLoaderPageToc } from '~/shared/page-docs/global-loader/page-toc';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.globalLoader.metaTitle'),
	description: t('componentDocs.globalLoader.description'),
});

const tocLinks = globalLoaderPageToc(t);

usePageTocLinks(tocLinks);

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

const appCode = `// app.vue
// Add GlobalLoaderHost once near the root of your app.
<template>
  <NuxtPage />
  <GlobalLoaderHost />
</template>`;

const usageCode = `// example.vue
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
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="global-loader" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>

		<ExampleBlock :code="appCode" :preview="false" />

		<ExampleBlock :code="usageCode">
			<Button @click="showLoader">Show loader for 3 seconds</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="[
				{ label: $t('docsTable.methodOption'), value: row => row.name },
				{ label: $t('docsTable.type'), value: row => row.type },
				{ label: $t('docsTable.default'), value: row => row.default },
				{ label: $t('docsTable.description'), value: row => row.description },
			]"
			:rows="loaderApi"
		/>
	</section>
</template>

<script setup lang="ts">
import { loaderApi } from '~/shared/examples/global-loader/api-reference';
import { globalLoaderPageToc } from '~/shared/examples/global-loader/page-toc';
import {
	appCode,
	usageCode,
} from '~/shared/examples/global-loader/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.globalLoader.metaTitle',
	description: 'componentDocs.globalLoader.description',
});

const loader = useGlobalLoader();
const { setToc } = usePageToc();

onMounted(() => setToc(globalLoaderPageToc));

const showLoader = () => {
	loader.show();
	window.setTimeout(() => loader.hide(), 3000);
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.globalLoader') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.globalLoader.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="global-loader" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>

		<ExampleBlock :code="appCode" :preview="false" />

		<ExampleBlock :code="usageCode">
			<Button @click="showLoader">Show loader for 3 seconds</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="loaderApi" />
	</section>
</template>

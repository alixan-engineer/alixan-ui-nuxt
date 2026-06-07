<script setup lang="ts">
import { globalLoaderPageToc } from '~/shared/page-docs/global-loader/page-toc';
import { loaderApi } from '~/shared/page-docs/global-loader/api-reference';
import { appCode, usageCode } from '~/shared/page-docs/global-loader/usage-examples';
import { propsTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.globalLoader.metaTitle'),
	description: t('componentDocs.globalLoader.description'),
});

const tocLinks = globalLoaderPageToc(t);
const apiColumns = propsTableColumns(t);

usePageTocLinks(tocLinks);

const loader = useGlobalLoader();

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
			:columns="apiColumns"
			:rows="loaderApi"
		/>
	</section>
</template>

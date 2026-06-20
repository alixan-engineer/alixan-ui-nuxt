<script setup lang="ts">
import { propsTableColumns } from '~/shared/examples/table-columns';
import { tableApiRows } from '~/shared/examples/table/api-reference';
import { tablePageToc } from '~/shared/examples/table/page-toc';
import {
	tableUsageCode,
	tableUsageColumns,
	tableUsageRows,
} from '~/shared/examples/table/usage-examples';

usePageMeta({
	title: 'componentDocs.table.metaTitle',
	description: 'componentDocs.table.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(tablePageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.table') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.table.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="table" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="tableUsageCode">
			<Table :columns="tableUsageColumns" :rows="tableUsageRows" />
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="tableApiRows" />
	</section>
</template>

<script setup lang="ts">
import { selectPageToc } from '~/shared/page-docs/select/page-toc';
import { selectProps } from '~/shared/page-docs/select/api-reference';
import { propsTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.select.metaTitle'),
	description: t('componentDocs.select.description'),
});

const tocLinks = selectPageToc(t);
const apiColumns = propsTableColumns(t);

usePageTocLinks(tocLinks);

const value = ref<string | number | null>('cupertino');
const options = [
	{ label: 'Cupertino', value: 'cupertino' },
	{ label: 'Material', value: 'material' },
	{ label: 'Fluent', value: 'fluent', disabled: true },
];
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.select') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.select.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="select" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock
			code='<Select v-model="value" label="Design" :options="options" />'
		>
			<Select v-model="value" label="Design" :options="options" />
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="apiColumns"
			:rows="selectProps"
		/>
	</section>
</template>

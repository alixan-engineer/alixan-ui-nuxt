<script setup lang="ts">
import { accordionPageToc } from '~/shared/page-docs/accordion/page-toc';
import { apiRows } from '~/shared/page-docs/accordion/api-reference';
import { usageCode, multipleCode } from '~/shared/page-docs/accordion/usage-examples';
import { propsTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.accordion.metaTitle'),
	description: t('componentDocs.accordion.description'),
});

const tocLinks = accordionPageToc(t);
const apiColumns = propsTableColumns(t);

usePageTocLinks(tocLinks);

const activeItem = ref<string | number | null>('item-1');
const activeItems = ref<Array<string | number>>(['item-1']);

const items = [
	{
		value: 'item-1',
		title: t('componentDocs.accordion.demo.accessibleTitle'),
		content: t('componentDocs.accordion.demo.accessibleContent'),
	},
	{
		value: 'item-2',
		title: t('componentDocs.accordion.demo.styledTitle'),
		content: t('componentDocs.accordion.demo.styledContent'),
	},
	{
		value: 'item-3',
		title: t('componentDocs.accordion.demo.slotsTitle'),
		content: t('componentDocs.accordion.demo.slotsContent'),
	},
] as const;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.accordion') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.accordion.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="accordion" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="usageCode">
			<div class="w-full max-w-xl">
				<Accordion v-model="activeItem" :items="items" />
			</div>
		</ExampleBlock>
	</section>

	<section id="multiple" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.multiple') }}</h2>
		<ExampleBlock :code="multipleCode">
			<div class="w-full max-w-xl">
				<Accordion v-model="activeItems" :items="items" multiple />
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="apiColumns"
			:rows="apiRows"
		/>
	</section>
</template>

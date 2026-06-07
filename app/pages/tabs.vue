<script setup lang="ts">
import { tabsPageToc } from '~/shared/page-docs/tabs/page-toc';
import { tabsProps } from '~/shared/page-docs/tabs/api-reference';
import { examples } from '~/shared/page-docs/tabs/usage-examples';
import { propsTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.tabs.metaTitle'),
	description: t('componentDocs.tabs.description'),
});

const tocLinks = tabsPageToc(t);
const apiColumns = propsTableColumns(t);

usePageTocLinks(tocLinks);

const tabs = [
	t('componentDocs.tabs.demo.account'),
	t('componentDocs.tabs.demo.password'),
];
const selected = ref(0);
const materialSelected = ref(0);
const fullSelected = ref(0);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.tabs') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.tabs.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="tabs" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="grid gap-4">
				<Tabs v-model="selected" :tabs="tabs" design="cupertino" />
				<Tabs v-model="materialSelected" :tabs="tabs" design="material" />
			</div>
		</ExampleBlock>
	</section>

	<section id="full-width" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.fullWidth') }}</h2>
		<ExampleBlock :code="examples.full">
			<div class="w-full">
				<Tabs v-model="fullSelected" :tabs="tabs" full />
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="apiColumns"
			:rows="tabsProps"
		/>
	</section>
</template>

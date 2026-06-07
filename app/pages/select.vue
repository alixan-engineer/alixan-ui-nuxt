<script setup lang="ts">
import { selectProps } from '~/shared/examples/select/api-reference';
import { selectPageToc } from '~/shared/examples/select/page-toc';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.select.metaTitle',
	description: 'componentDocs.select.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(selectPageToc));

const value = ref<string | number | null>('cupertino');
const options = [
	{ label: 'Cupertino', value: 'cupertino' },
	{ label: 'Material', value: 'material' },
	{ label: 'Fluent', value: 'fluent', disabled: true },
];
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.select') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.select.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="select" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
		<ExampleBlock
			code='<Select v-model="value" label="Design" :options="options" />'
		>
			<Select v-model="value" label="Design" :options="options" />
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="selectProps" />
	</section>
</template>

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
const requiredValue = ref<string | number | null>(null);
const options = [
	{ label: 'Cupertino', value: 'cupertino' },
	{ label: 'Material', value: 'material' },
	{ label: 'Fluent', value: 'fluent', disabled: true },
];

const usageCode = `<script setup lang="ts">
const value = ref('cupertino')
const options = [
  { label: 'Cupertino', value: 'cupertino' },
  { label: 'Material', value: 'material' },
  { label: 'Fluent', value: 'fluent', disabled: true },
]
<\/script>

<template>
  <Select v-model="value" label="Design" :options="options" />
</template>`;

const validationCode = `<script setup lang="ts">
const value = ref(null)
const options = [
  { label: 'Cupertino', value: 'cupertino' },
  { label: 'Material', value: 'material' },
  { label: 'Fluent', value: 'fluent', disabled: true },
]
<\/script>

<template>
  <Select v-model="value" label="Design" :options="options" required />
</template>`;
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
		<ExampleBlock :code="usageCode">
			<Select v-model="value" label="Design" :options="options" />
		</ExampleBlock>
	</section>

	<section id="validation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.validation') }}</h2>
		<ExampleBlock :code="validationCode">
			<div class="w-full max-w-sm">
				<Select
					v-model="requiredValue"
					label="Design"
					:options="options"
					required
				/>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="selectProps" />
	</section>
</template>

<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.select.metaTitle'),
	description: t('componentDocs.select.description'),
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

const value = ref<string | number | null>('cupertino');
const options = [
	{ label: 'Cupertino', value: 'cupertino' },
	{ label: 'Material', value: 'material' },
	{ label: 'Fluent', value: 'fluent', disabled: true },
];

const selectProps = [
	{
		name: 'modelValue',
		type: 'string | number | null',
		default: 'null',
		description: 'Selected option value used by v-model.',
	},
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Floating label text.',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: "'Select option'",
		description: 'Text shown when no option is selected.',
	},
	{
		name: 'options',
		type: 'SelectOption[]',
		default: '[]',
		description: 'Options list with label, value and optional disabled.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables select interaction.',
	},
	{
		name: 'teleport',
		type: 'boolean',
		default: 'true',
		description:
			'Teleports menu to body. Keep true for nested popovers; set false only when the menu must stay inside the local layout.',
	},
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
			:columns="[
				{ label: $t('docsTable.prop'), getValue: row => row.name },
				{ label: $t('docsTable.type'), getValue: row => row.type },
				{ label: $t('docsTable.default'), getValue: row => row.default },
				{
					label: $t('docsTable.description'),
					getValue: row => row.description,
				},
			]"
			:rows="selectProps"
		/>
	</section>
</template>

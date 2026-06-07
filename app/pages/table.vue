<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.table.metaTitle'),
	description: t('componentDocs.table.description'),
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

const usageCode = `<script setup lang="ts">
const columns = [
  getValue: row'name', label: 'Name', getValue: row => row.name },
  getValue: row'type', label: 'Type', getValue: row => row.type },
  {
    key: 'status',
    label: 'Status',
    getValue: row => row.status.toUpperCase(),
  },
]

const rows = [
  { id: 1, name: 'Button', type: 'Component', status: 'Ready' },
  { id: 2, name: 'Input', type: 'Form', status: 'Ready' },
  { id: 3, name: 'Toast', type: 'Overlay', status: 'Beta' },
]

<\/script>

<template>
  <Table
    :columns="columns"
    :rows="rows"
  />
</template>`;
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
		<ExampleBlock :code="usageCode">
			<Table
				:columns="[
					{
						label: 'Name',
						getValue: row => row.name,
					},
					{
						label: 'Type',
						getValue: row => row.type,
					},
					{
						label: 'Status',
						getValue: row => String(row.status).toUpperCase(),
					},
				]"
				:rows="[
					{ id: 1, name: 'Button', type: 'Component', status: 'Ready' },
					{ id: 2, name: 'Input', type: 'Form', status: 'Ready' },
					{ id: 3, name: 'Toast', type: 'Overlay', status: 'Beta' },
				]"
			/>
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
			:rows="[
				{
					name: 'columns',
					type: 'TableColumn[]',
					default: '-',
					description:
						'Column definitions with labels and explicit value mappers.',
				},
				{
					name: 'rows',
					type: 'Record<string, unknown>[]',
					default: '-',
					description: 'Data rows rendered by the table.',
				},
				{
					name: 'columns[].value',
					type: '(row, rowIndex) => unknown',
					default: 'required',
					description:
						'Arrow function that returns the cell value from a row object.',
				},
				{
					name: 'minWidth',
					type: 'string',
					default: '-',
					description:
						'Optional Tailwind class for horizontal overflow control.',
				},
			]"
		/>
	</section>
</template>

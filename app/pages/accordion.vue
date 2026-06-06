<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.accordion.metaTitle'),
	description: t('componentDocs.accordion.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.multiple'), href: '#multiple' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

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

const usageCode = `<script setup lang="ts">
const activeItem = ref('item-1')

const items = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. The trigger uses a native button.',
  },
  {
    value: 'item-2',
    title: 'Is it styled?',
    content: 'Yes. It follows Alixan UI visual language.',
  },
]
<\/script>

<template>
  <Accordion v-model="activeItem" :items="items" />
</template>`;

const multipleCode = `<script setup lang="ts">
const activeItems = ref(['item-1'])
<\/script>

<template>
  <Accordion
    v-model="activeItems"
    :items="items"
    multiple
  />
</template>`;

const apiRows = [
	{
		prop: 'items',
		type: 'AccordionItem[]',
		default: '[]',
		description: 'Accordion sections rendered by the component.',
	},
	{
		prop: 'modelValue',
		type: 'string | number | Array<string | number> | null',
		default: 'null',
		description: 'Controlled open item value. Use an array with multiple mode.',
	},
	{
		prop: 'multiple',
		type: 'boolean',
		default: 'false',
		description: 'Allows more than one item to stay open.',
	},
	{
		prop: 'collapsible',
		type: 'boolean',
		default: 'true',
		description: 'Allows the active single item to be closed.',
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
				<Accordion
					v-model="activeItems"
					:items="items"
					multiple
				/>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="[
				{ key: 'prop', label: $t('docsTable.prop') },
				{ key: 'type', label: $t('docsTable.type') },
				{ key: 'default', label: $t('docsTable.default') },
				{ key: 'description', label: $t('docsTable.description') },
			]"
			:rows="apiRows"
			:row-key="row => String(row.prop)"
		/>
	</section>
</template>

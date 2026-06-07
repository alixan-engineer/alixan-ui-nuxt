<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.tabs.metaTitle'),
	description: t('componentDocs.tabs.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.fullWidth'), href: '#full-width' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const tabs = [
	t('componentDocs.tabs.demo.account'),
	t('componentDocs.tabs.demo.password'),
];
const selected = ref(0);
const materialSelected = ref(0);
const fullSelected = ref(0);

const tabsProps = [
	{
		name: 'modelValue',
		type: 'number',
		default: '0',
		description: 'Selected tab index used by v-model.',
	},
	{
		name: 'tabs',
		type: 'string[]',
		default: '[]',
		description: 'List of tab labels.',
	},
	{
		name: 'design',
		type: "'material' | 'cupertino'",
		default: "'cupertino'",
		description: 'Visual style of the tabs.',
	},
	{
		name: 'full',
		type: 'boolean',
		default: 'false',
		description:
			'Makes the tabs container and every tab use full available width.',
	},
];

const examples = {
	usage: `<script setup lang="ts">
const tabs = ['Account', 'Password']
const selected = ref(0)
<\/script>

<template>
  <div class="grid gap-4">
    <Tabs v-model="selected" :tabs="tabs" design="cupertino" />
    <Tabs v-model="selected" :tabs="tabs" design="material" />
  </div>
</template>`,
	full: `<template>
  <Tabs v-model="selected" :tabs="tabs" full />
</template>`,
};
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
			:columns="[
				{ label: $t('docsTable.prop'), getValue: row => row.name },
				{ label: $t('docsTable.type'), getValue: row => row.type },
				{ label: $t('docsTable.default'), getValue: row => row.default },
				{
					label: $t('docsTable.description'),
					getValue: row => row.description,
				},
			]"
			:rows="tabsProps"
		/>
	</section>
</template>

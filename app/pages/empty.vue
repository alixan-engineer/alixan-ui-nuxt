<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.empty.metaTitle'),
	description: t('componentDocs.empty.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.withMedia'), href: '#with-media' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const emptyProps = [
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'Main empty state heading.',
	},
	{
		name: 'description',
		type: 'string',
		default: '-',
		description: 'Optional supporting text.',
	},
	{
		name: 'button',
		type: 'string',
		default: '-',
		description: 'Optional action button label.',
	},
	{
		name: 'buttonColor',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'Optional action button color.',
	},
];

const emptySlots = [
	{
		name: 'default',
		description: 'Optional media rendered above the title.',
	},
];

const examples = {
	usage: `<template>
  <Empty
    title="No results"
    description="Try changing filters or search query."
    button="Reset filters"
    button-color="secondary"
    @action="resetFilters"
  />
</template>`,
	withMedia: `<template>
  <Empty
    title="Page not found"
    description="The page you are looking for does not exist or has been moved."
    button="Go home"
    button-color="primary"
    @action="navigateTo('/')"
  >
    <div class="flex size-24 items-center justify-center rounded-4xl bg-secondary text-primary">
      <Lottie name="error" :loop="false" width="80px" height="80px" />
    </div>
  </Empty>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.empty') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.empty.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="empty" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<Empty
				title="No results"
				description="Try changing filters or search query."
				button="Reset filters"
				button-color="secondary"
			/>
		</ExampleBlock>
	</section>

	<section id="with-media" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.withMedia') }}</h2>
		<ExampleBlock :code="examples.withMedia">
			<Empty
				title="Page not found"
				description="The page you are looking for does not exist or has been moved."
				button="Go home"
				button-color="primary"
			>
				<div
					class="flex size-24 items-center justify-center rounded-4xl bg-secondary text-primary"
				>
					<Lottie name="error" :loop="false" width="80px" height="80px" />
				</div>
			</Empty>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<Table
			:columns="[
				{ key: 'name', label: $t('docsTable.prop') },
				{ key: 'type', label: $t('docsTable.type') },
				{ key: 'default', label: $t('docsTable.default') },
				{ key: 'description', label: $t('docsTable.description') },
			]"
			:rows="emptyProps"
		/>

		<h3 class="pt-4 text-xl font-semibold">Slots</h3>
		<Table
			:columns="[
				{ key: 'name', label: $t('docsTable.slot') },
				{ key: 'description', label: $t('docsTable.description') },
			]"
			:rows="emptySlots"
		/>
	</section>
</template>

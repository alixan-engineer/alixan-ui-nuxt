<script setup lang="ts">
import { chipPageToc } from '~/shared/page-docs/chip/page-toc';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.chip.metaTitle'),
	description: t('componentDocs.chip.description'),
});

const tocLinks = chipPageToc(t);

usePageTocLinks(tocLinks);

const chipProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Fallback text when the default slot is not used.',
	},
	{
		name: 'type',
		type: "'default' | 'select' | 'remove'",
		default: "'default'",
		description: 'Adds the select chevron or remove icon.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls height, radius, padding and icon size.',
	},
	{
		name: 'selected',
		type: 'boolean',
		default: 'false',
		description: 'Switches the chip into the active primary state.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables interaction and reduces opacity.',
	},
];

const examples = {
	usage: `<template>
  <div class="flex flex-wrap items-center gap-2">
    <Chip label="Default" />
    <Chip label="Selected" selected />
    <Chip label="Design" type="select" />
    <Chip label="Nuxt" type="remove" />
  </div>
</template>`,
	size: `<template>
  <div class="flex flex-wrap items-center gap-2">
    <Chip label="Small" size="sm" />
    <Chip label="Medium" />
    <Chip label="Large" size="lg" />
  </div>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.chip') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.chip.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="chip" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Chip label="Default" />
				<Chip label="Selected" selected />
				<Chip label="Design" type="select" />
				<Chip label="Nuxt" type="remove" />
			</div>
		</ExampleBlock>
	</section>

	<section id="size" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.size') }}</h2>
		<ExampleBlock :code="examples.size">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Chip label="Small" size="sm" />
				<Chip label="Medium" />
				<Chip label="Large" size="lg" />
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="[
				{ label: $t('docsTable.prop'), value: row => row.name },
				{ label: $t('docsTable.type'), value: row => row.type },
				{ label: $t('docsTable.default'), value: row => row.default },
				{ label: $t('docsTable.description'), value: row => row.description },
			]"
			:rows="chipProps"
		/>
	</section>
</template>

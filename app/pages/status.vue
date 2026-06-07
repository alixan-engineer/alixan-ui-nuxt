<script setup lang="ts">
import { statusPageToc } from '~/shared/page-docs/status/page-toc';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.status.metaTitle'),
	description: t('componentDocs.status.description'),
});

const tocLinks = statusPageToc(t);

usePageTocLinks(tocLinks);

const statusProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Fallback text when the default slot is not used.',
	},
	{
		name: 'type',
		type: "'success' | 'warning' | 'info' | 'error'",
		default: "'info'",
		description: 'Semantic status tone.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls height, padding and gap.',
	},
];

const examples = {
	usage: `<template>
  <div class="flex flex-wrap items-center gap-2">
    <Status label="Success" type="success" />
    <Status label="Warning" type="warning" />
    <Status label="Info" type="info" />
    <Status label="Error" type="error" />
  </div>
</template>`,
	size: `<template>
  <div class="flex flex-wrap items-center gap-2">
    <Status label="Small" size="sm" type="success" />
    <Status label="Medium" type="success" />
    <Status label="Large" size="lg" type="success" />
  </div>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.status') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.status.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="status" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Status label="Success" type="success" />
				<Status label="Warning" type="warning" />
				<Status label="Info" type="info" />
				<Status label="Error" type="error" />
			</div>
		</ExampleBlock>
	</section>

	<section id="size" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.size') }}</h2>
		<ExampleBlock :code="examples.size">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Status label="Small" size="sm" type="success" />
				<Status label="Medium" type="success" />
				<Status label="Large" size="lg" type="success" />
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
			:rows="statusProps"
		/>
	</section>
</template>

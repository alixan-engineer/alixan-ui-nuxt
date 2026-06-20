<script setup lang="ts">
import { Info } from '@lucide/vue';
import {
	tooltipProps,
	tooltipSlots,
} from '~/shared/examples/tooltip/api-reference';
import { tooltipPageToc } from '~/shared/examples/tooltip/page-toc';
import { tooltipExamples } from '~/shared/examples/tooltip/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.tooltip.metaTitle',
	description: 'componentDocs.tooltip.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(tooltipPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.tooltip') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.tooltip.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="tooltip" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="tooltipExamples.usage">
			<Button tooltip="tooltip.demo.save">
				{{ $t('componentDocs.button.saveChanges') }}
			</Button>
		</ExampleBlock>
	</section>

	<section id="with-icon" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.withIcon') }}</h2>
		<ExampleBlock :code="tooltipExamples.icon">
			<IconButton tooltip="tooltip.demo.info" variant="outlined">
				<Info />
			</IconButton>
		</ExampleBlock>
	</section>

	<section id="html" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('componentDocs.tooltip.htmlTitle') }}
		</h2>
		<ExampleBlock :code="tooltipExamples.html">
			<Tooltip text="tooltip.demo.shortDescription">
				<span class="rounded-lg border px-3 py-2">
					{{ $t('tooltip.demo.shortDescription') }}
				</span>
			</Tooltip>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="tooltipProps" />
		<Table :columns="propsTableColumns" :rows="tooltipSlots" />
	</section>
</template>

<script setup lang="ts">
import { chipProps } from '~/shared/examples/chip/api-reference';
import { chipPageToc } from '~/shared/examples/chip/page-toc';
import { examples } from '~/shared/examples/chip/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.chip.metaTitle',
	description: 'componentDocs.chip.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(chipPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.chip') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.chip.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="chip" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
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
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.size') }}</h2>
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
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="chipProps" />
	</section>
</template>

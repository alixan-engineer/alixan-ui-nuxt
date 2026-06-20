<script setup lang="ts">
import { spinnerProps } from '~/shared/examples/spinner/api-reference';
import { spinnerPageToc } from '~/shared/examples/spinner/page-toc';
import { examples } from '~/shared/examples/spinner/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.spinner.metaTitle',
	description: 'componentDocs.spinner.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(spinnerPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.spinner') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.spinner.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="spinner" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="w-full h-40">
				<Spinner />
			</div>
		</ExampleBlock>
	</section>

	<section id="size" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.size') }}</h2>
		<ExampleBlock :code="examples.size">
			<div class="w-full grid grid-cols-3 justify-around">
				<Spinner size="sm" />
				<Spinner />
				<Spinner size="lg" />
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="spinnerProps" />
	</section>
</template>

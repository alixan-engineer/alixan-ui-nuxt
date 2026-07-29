<script setup lang="ts">
import { CircleHelp } from '@lucide/vue';
import { infoBoxProps } from '~/shared/examples/info-box/api-reference';
import { infoBoxPageToc } from '~/shared/examples/info-box/page-toc';
import { examples } from '~/shared/examples/info-box/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.infoBox.metaTitle',
	description: 'componentDocs.infoBox.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(infoBoxPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.infoBox') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.infoBox.description') }}
		</p>
	</header>
	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="info-box" />
	</section>
	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<InfoBox>{{ $t('componentDocs.infoBox.demo') }}</InfoBox>
		</ExampleBlock>
		<ExampleBlock :code="examples.withIcon">
			<InfoBox :icon="CircleHelp">
				{{ $t('componentDocs.infoBox.demo') }}
			</InfoBox>
		</ExampleBlock>
	</section>
	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="infoBoxProps" />
	</section>
</template>

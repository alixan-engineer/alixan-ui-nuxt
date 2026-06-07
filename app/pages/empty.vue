<script setup lang="ts">
import { emptyPageToc } from '~/shared/page-docs/empty/page-toc';
import { emptyProps, emptySlots } from '~/shared/page-docs/empty/api-reference';
import { examples } from '~/shared/page-docs/empty/usage-examples';
import { propsTableColumns, slotTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.empty.metaTitle'),
	description: t('componentDocs.empty.description'),
});

const tocLinks = emptyPageToc(t);
const apiColumns = propsTableColumns(t);
const slotColumns = slotTableColumns(t);

usePageTocLinks(tocLinks);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.empty') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.empty.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
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
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="apiColumns"
			:rows="emptyProps"
		/>

		<h3 class="pt-4 text-xl font-semibold">Slots</h3>
		<Table
			:columns="slotColumns"
			:rows="emptySlots"
		/>
	</section>
</template>

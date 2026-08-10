<script setup lang="ts">
import { propsTableColumns, slotTableColumns } from '~/shared/examples/table-columns';
import { virtualScrollerApiRows, virtualScrollerSlotRows } from '~/shared/examples/virtual-scroller/api-reference';
import { virtualScrollerPageToc } from '~/shared/examples/virtual-scroller/page-toc';
import { products, usageCode } from '~/shared/examples/virtual-scroller/usage-examples';

usePageMeta({
	title: 'componentDocs.virtualScroller.metaTitle',
	description: 'componentDocs.virtualScroller.description',
});

const { setToc } = usePageToc();
onMounted(() => setToc(virtualScrollerPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.virtualScroller') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.virtualScroller.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="virtual-scroller" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="usageCode">
			<VirtualScroller
				:items="products"
				item-key="id"
				:row-height="156"
				:min-column-width="180"
				class="h-96"
				grid-class="grid grid-cols-2 gap-3 min-[600px]:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]"
			>
				<template #default="{ item }">
					<article class="h-36 rounded-2xl border bg-card p-4">
						<p class="font-medium">{{ item.name }}</p>
						<p class="mt-2 text-sm text-muted-foreground">
							{{ item.price.toLocaleString() }} ₸
						</p>
					</article>
				</template>
			</VirtualScroller>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<Table :columns="propsTableColumns" :rows="virtualScrollerApiRows" />
		<Table :columns="slotTableColumns" :rows="virtualScrollerSlotRows" />
	</section>
</template>

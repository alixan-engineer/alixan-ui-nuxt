<script setup lang="ts">
import { scaffoldSlots } from '~/shared/examples/scaffold/api-reference';
import { scaffoldPageToc } from '~/shared/examples/scaffold/page-toc';
import { examples } from '~/shared/examples/scaffold/usage-examples';
import { slotTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.scaffold.metaTitle',
	description: 'componentDocs.scaffold.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(scaffoldPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.scaffold') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.scaffold.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="scaffold" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.default">
			<div class="w-full max-w-110 h-80 border rounded-2xl">
				<Scaffold>
					<template #app-bar>
						<div class="h-14 flex items-center justify-center px-4 border-b">
							<h1 class="text-xl font-semibold">App Bar</h1>
						</div>
					</template>
					<template #body>
						<h1 class="text-xl font-semibold mb-4">Body</h1>
						<div class="h-80 bg-secondary rounded-2xl" />
					</template>
					<template #bottom-navigation-bar>
						<div class="h-14 flex items-center justify-center px-4 border-t">
							<h1 class="text-xl font-semibold">Bottom Navigation Bar</h1>
						</div>
					</template>
				</Scaffold>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<h2 class="text-lg font-semibold">Slots</h2>
		<Table :columns="slotTableColumns" :rows="scaffoldSlots" />
	</section>
</template>

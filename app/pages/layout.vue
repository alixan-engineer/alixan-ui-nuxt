<script setup lang="ts">
import { layoutSlots } from '~/shared/examples/layout/api-reference';
import { layoutPageToc } from '~/shared/examples/layout/page-toc';
import { examples } from '~/shared/examples/layout/usage-example';
import { slotTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.layout.metaTitle',
	description: 'componentDocs.layout.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(layoutPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.layout') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.layout.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="layout" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.default">
			<div class="w-full h-80 border rounded-2xl">
				<Layout>
					<template #sidebar>
						<div class="w-40 h-full p-4 border-r">
							<h1 class="text-xl font-semibold">Sidebar</h1>
						</div>
					</template>
					<template #scaffold>
						<Scaffold>
							<template #app-bar>
								<div
									class="h-14 flex items-center justify-center px-4 border-b"
								>
									<h1 class="text-xl font-semibold">App Bar</h1>
								</div>
							</template>
							<template #body>
								<h1 class="text-xl font-semibold mb-4">Body</h1>
								<div class="h-80 bg-secondary rounded-2xl" />
							</template>
							<template #bottom-navigation-bar>
								<div
									class="h-14 flex items-center justify-center px-4 border-t"
								>
									<h1 class="text-xl font-semibold">Bottom Navigation Bar</h1>
								</div>
							</template>
						</Scaffold>
					</template>
				</Layout>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<h2 class="text-lg font-semibold">Slots</h2>
		<Table :columns="slotTableColumns" :rows="layoutSlots" />
	</section>
</template>

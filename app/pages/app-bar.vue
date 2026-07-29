<script setup lang="ts">
import { ChevronLeft, Menu } from '@lucide/vue';
import { appBarProps, appBarSlots } from '~/shared/examples/app-bar/api-reference';
import { appBarPageToc } from '~/shared/examples/app-bar/page-toc';
import { examples } from '~/shared/examples/app-bar/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({ title: 'componentDocs.appBar.metaTitle', description: 'componentDocs.appBar.description' });
const { setToc } = usePageToc();
onMounted(() => setToc(appBarPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.appBar') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">{{ $t('componentDocs.appBar.description') }}</p>
	</header>
	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="app-bar" />
	</section>
	<section id="compact" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('appBar.compactTitle') }}</h2>
		<ExampleBlock :code="examples.compact">
			<div data-scroll-container class="h-80 w-full max-w-lg overflow-y-auto rounded-2xl border bg-background">
				<AppBar variant="compact" title="appBar.dashboard">
					<template #leading><IconButton :aria-label="$t('appBar.openMenu')" size="md"><Menu /></IconButton></template>
					<template #trailing>
						<UserMenuPreview />
					</template>
					<div class="min-h-120 p-4 text-muted-foreground">{{ $t('appBar.scrollHint') }}</div>
				</AppBar>
			</div>
		</ExampleBlock>
	</section>
	<section id="silver" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('appBar.silverTitle') }}</h2>
		<ExampleBlock :code="examples.silver">
			<div data-scroll-container class="h-80 w-full max-w-lg overflow-y-auto rounded-2xl border bg-background">
				<AppBar variant="silver" title="appBar.storeTitle">
					<template #leading><IconButton :aria-label="$t('appBar.back')" size="md"><ChevronLeft /></IconButton></template>
					<template #trailing>
						<UserMenuPreview />
					</template>
					<div class="min-h-120 p-4 text-muted-foreground">{{ $t('appBar.scrollHint') }}</div>
				</AppBar>
			</div>
		</ExampleBlock>
	</section>
	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<Table :columns="propsTableColumns" :rows="appBarProps" />
		<Table :columns="propsTableColumns" :rows="appBarSlots" />
	</section>
</template>

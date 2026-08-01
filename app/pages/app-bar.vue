<script setup lang="ts">
import { ArrowLeft, Ellipsis, Menu, Share } from '@lucide/vue';
import {
	appBarProps,
	appBarSlots,
} from '~/shared/examples/app-bar/api-reference';
import { appBarPageToc } from '~/shared/examples/app-bar/page-toc';
import { examples } from '~/shared/examples/app-bar/usage-examples';
import {
	propsTableColumns,
	slotTableColumns,
} from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.appBar.metaTitle',
	description: 'componentDocs.appBar.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(appBarPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.appBar') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.appBar.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="app-bar" />
	</section>

	<section id="compact" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('appBar.compactTitle') }}</h2>
		<ExampleBlock :code="examples.compact">
			<div class="w-full max-w-110 h-80 border rounded-2xl overflow-hidden">
				<Scaffold>
					<template #app-bar>
						<AppBar title="appBar.dashboard">
							<template #leading>
								<IconButton>
									<Menu />
								</IconButton>
							</template>
							<template #trailing>
								<Avatar name="Alixan" />
							</template>
						</AppBar>
					</template>
					<template #body>
						<div class="h-90 mx-4 my-8 border rounded-2xl p-6 text-xm">
							Page content
						</div>
					</template>
				</Scaffold>
			</div>
		</ExampleBlock>
	</section>

	<section id="silver" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('appBar.silverTitle') }}</h2>
		<p class="text-muted-foreground">{{ $t('appBar.silverGuide') }}</p>
		<ExampleBlock :code="examples.silver">
			<div class="w-full max-w-110 h-90 border rounded-2xl overflow-hidden">
				<Scaffold>
					<template #body>
						<SilverAppBar title="appBar.dashboard">
							<template #leading>
								<IconButton>
									<ArrowLeft />
								</IconButton>
							</template>
							<template #trailing>
								<IconButton>
									<Share />
								</IconButton>
								<IconButton>
									<Ellipsis />
								</IconButton>
							</template>
							<template #observer>
								<h1 class="m-4 text-3xl font-semibold">
									{{ $t('appBar.dashboard') }}
								</h1>
							</template>
						</SilverAppBar>

						<div class="h-90 mx-4 my-8 border rounded-2xl p-6 text-xm">
							Page content
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
		<Table :columns="propsTableColumns" :rows="appBarProps" />
	</section>

	<section id="slots" class="space-y-4">
		<h3 class="text-lg font-semibold">Slots</h3>
		<Table :columns="slotTableColumns" :rows="appBarSlots" />
	</section>
</template>

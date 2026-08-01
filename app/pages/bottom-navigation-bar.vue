<script setup lang="ts">
import { CalendarDays, House, UserRound } from '@lucide/vue';
import { bottomNavigationBarApiRows } from '~/shared/examples/bottom-navigation-bar/api-reference';
import { bottomNavigationBarPageToc } from '~/shared/examples/bottom-navigation-bar/page-toc';
import { usage } from '~/shared/examples/bottom-navigation-bar/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.bottomNavigationBar.metaTitle',
	description: 'componentDocs.bottomNavigationBar.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(bottomNavigationBarPageToc));

const items = [
	{ id: 'home', label: 'bottomNavigation.home', icon: House },
	{ id: 'events', label: 'bottomNavigation.events', icon: CalendarDays },
	{ id: 'profile', label: 'bottomNavigation.profile', icon: UserRound },
];

const selected = ref<string>('home');

const selectedItem = computed(() =>
	items.find(item => item.id === selected.value),
);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">
			{{ $t('component.bottomNavigationBar') }}
		</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.bottomNavigationBar.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="bottom-navigation-bar" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="usage">
			<div class="w-full max-w-110 h-90 border rounded-2xl overflow-hidden">
				<Scaffold>
					<template #app-bar>
						<AppBar
							variant="compact"
							:title="selectedItem?.label ?? ''"
							title-align="center"
						/>
					</template>
					<template #body>
						<NuxtPage />
					</template>
					<template #bottom-navigation-bar>
						<BottomNavigationBar v-model="selected" :items="items" />
					</template>
				</Scaffold>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="bottomNavigationBarApiRows" />
	</section>
</template>

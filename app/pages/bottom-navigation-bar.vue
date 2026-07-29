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

const selected = ref(0);
const routerOutlet = useTemplateRef<HTMLElement>('routerOutlet');
const items = [
	{ label: 'bottomNavigation.home', icon: House },
	{ label: 'bottomNavigation.events', icon: CalendarDays },
	{ label: 'bottomNavigation.profile', icon: UserRound },
];
const selectedTitle = computed(
	() => items[selected.value]?.label ?? 'bottomNavigation.home',
);

watch(selected, async () => {
	await nextTick();
	routerOutlet.value?.scrollTo({ top: 0 });
});
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
			<div
				class="relative z-0 flex h-96 w-full max-w-110 flex-col overflow-hidden rounded-2xl border bg-background"
			>
				<AppBar variant="compact" :title="selectedTitle" />
				<div
					ref="routerOutlet"
					data-router-outlet
					class="min-h-0 flex-1 overflow-y-auto"
				>
					<div
						class="flex min-h-200 items-center justify-center text-muted-foreground"
					>
						{{
							$t('bottomNavigation.pageContent', { page: $t(selectedTitle) })
						}}
					</div>
				</div>
				<BottomNavigationBar v-model="selected" :items="items" />
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

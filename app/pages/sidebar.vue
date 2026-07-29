<script setup lang="ts">
import {
	BarChart3,
	House,
	Menu,
	Settings,
	ShoppingBag,
	Users,
} from '@lucide/vue';
import { sidebarApiRows } from '~/shared/examples/sidebar/api-reference';
import { sidebarPageToc } from '~/shared/examples/sidebar/page-toc';
import {
	analyticsPage,
	dashboardPage,
	layoutUsage,
	ordersPage,
	settingsPage,
	teamPage,
} from '~/shared/examples/sidebar/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.sidebar.metaTitle',
	description: 'componentDocs.sidebar.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(sidebarPageToc));

const sidebarOpen = ref(true);
const mobileSidebarOpen = ref(true);
const desktopSidebarRef = ref<{ scrollToTop: () => void } | null>(null);
const mobileSidebarRef = ref<{ scrollToTop: () => void } | null>(null);
const activePage = ref('dashboard');
const pages = [
	{
		id: 'dashboard',
		title: 'sidebarDemo.dashboard',
		description: 'sidebarDemo.dashboardDescription',
		icon: House,
	},
	{
		id: 'orders',
		title: 'sidebarDemo.orders',
		description: 'sidebarDemo.ordersDescription',
		icon: ShoppingBag,
	},
	{
		id: 'analytics',
		title: 'sidebarDemo.analytics',
		description: 'sidebarDemo.analyticsDescription',
		icon: BarChart3,
	},
	{
		id: 'team',
		title: 'sidebarDemo.team',
		description: 'sidebarDemo.teamDescription',
		icon: Users,
	},
	{
		id: 'settings',
		title: 'sidebarDemo.settings',
		description: 'sidebarDemo.settingsDescription',
		icon: Settings,
	},
];

const sections = [
	{ label: 'sidebarDemo.workspace', pages: pages.slice(0, 3) },
	{ label: 'sidebarDemo.management', pages: pages.slice(3) },
];

const currentPage = computed(
	() => pages.find(page => page.id === activePage.value) ?? pages[0]!,
);

const selectPage = (id: string, close: () => void): void => {
	activePage.value = id;
	nextTick(() => {
		desktopSidebarRef.value?.scrollToTop();
		mobileSidebarRef.value?.scrollToTop();
	});
	if (window.matchMedia('(max-width: 1279px)').matches) close();
};

const selectMobilePage = (id: string, close: () => void): void => {
	selectPage(id, close);
	close();
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.sidebar') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.sidebar.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="sidebar" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="layoutUsage">
			<div class="w-full flex flex-col gap-10">
				<div
					class="h-150 w-full overflow-hidden rounded-3xl border bg-background"
				>
					<Sidebar
						ref="desktopSidebarRef"
						v-model:open="sidebarOpen"
						width="224px"
						mode="desktop"
						contained
					>
						<template #navigation="{ close }">
							<div class="space-y-8">
								<div
									v-for="section in sections"
									:key="section.label"
									class="space-y-1"
								>
									<p
										class="px-3 text-xs font-semibold uppercase text-muted-foreground"
									>
										{{ $t(section.label) }}
									</p>
									<Button
										v-for="page in section.pages"
										:key="page.id"
										:variant="activePage === page.id ? 'filled' : 'ghost'"
										:color="activePage === page.id ? 'primary' : 'default'"
										size="md"
										class="w-full justify-start"
										@click="selectPage(page.id, close)"
									>
										<template #leading>
											<component :is="page.icon" class="size-4" />
										</template>
										{{ $t(page.title) }}
									</Button>
								</div>
							</div>
						</template>

						<template #app-bar="{ toggle }">
							<AppBar
								:key="currentPage.id"
								variant="silver"
								:title="currentPage.title"
							>
								<template #leading>
									<IconButton
										:aria-label="$t('appBar.openMenu')"
										size="md"
										@click="toggle"
										><Menu
									/></IconButton>
								</template>
								<template #trailing>
									<UserMenuPreview />
								</template>
							</AppBar>
						</template>

						<div class="h-375 rounded-2xl bg-secondary" />
					</Sidebar>
				</div>
				<div
					class="mx-auto h-150 w-110 max-w-full overflow-hidden rounded-3xl border bg-background"
				>
					<Sidebar
						ref="mobileSidebarRef"
						v-model:open="mobileSidebarOpen"
						mode="mobile"
						contained
						width="240px"
					>
						<template #navigation="{ close }">
							<div class="space-y-8">
								<div
									v-for="section in sections"
									:key="section.label"
									class="space-y-1"
								>
									<p
										class="px-3 text-xs font-semibold uppercase text-muted-foreground"
									>
										{{ $t(section.label) }}
									</p>
									<Button
										v-for="page in section.pages"
										:key="page.id"
										:variant="activePage === page.id ? 'filled' : 'ghost'"
										:color="activePage === page.id ? 'primary' : 'default'"
										size="md"
										class="w-full justify-start"
										@click="selectMobilePage(page.id, close)"
									>
										<template #leading
											><component :is="page.icon" class="size-4" /></template
										>{{ $t(page.title) }}
									</Button>
								</div>
							</div>
						</template>
						<template #app-bar="{ toggle }">
							<AppBar
								:key="currentPage.id"
								variant="silver"
								:title="currentPage.title"
								title-align="center"
							>
								<template #leading
									><IconButton
										:aria-label="$t('appBar.openMenu')"
										size="md"
										@click="toggle"
										><Menu /></IconButton
								></template>
								<template #trailing><UserMenuPreview /></template>
							</AppBar>
						</template>
						<div class="h-[1500px] rounded-2xl bg-secondary" />
					</Sidebar>
				</div>
			</div>
		</ExampleBlock>
	</section>

	<section id="page-examples" class="space-y-6">
		<h2 class="text-2xl font-semibold">{{ $t('sidebarDemo.pageExamples') }}</h2>
		<div class="space-y-6">
			<div class="space-y-3">
				<h3 class="text-xl font-semibold">
					{{ $t('sidebarDemo.defaultFile') }}
				</h3>
				<ExampleBlock :code="layoutUsage" :preview="false" />
			</div>
			<div class="space-y-3">
				<h3 class="text-xl font-semibold">
					{{ $t('sidebarDemo.dashboardFile') }}
				</h3>
				<ExampleBlock :code="dashboardPage" :preview="false" />
			</div>
			<div class="space-y-3">
				<h3 class="text-xl font-semibold">
					{{ $t('sidebarDemo.ordersFile') }}
				</h3>
				<ExampleBlock :code="ordersPage" :preview="false" />
			</div>
			<div class="space-y-3">
				<h3 class="text-xl font-semibold">
					{{ $t('sidebarDemo.analyticsFile') }}
				</h3>
				<ExampleBlock :code="analyticsPage" :preview="false" />
			</div>
			<div class="space-y-3">
				<h3 class="text-xl font-semibold">{{ $t('sidebarDemo.teamFile') }}</h3>
				<ExampleBlock :code="teamPage" :preview="false" />
			</div>
			<div class="space-y-3">
				<h3 class="text-xl font-semibold">
					{{ $t('sidebarDemo.settingsFile') }}
				</h3>
				<ExampleBlock :code="settingsPage" :preview="false" />
			</div>
		</div>
	</section>

	<section id="guide" class="space-y-3">
		<h2 class="text-2xl font-semibold">{{ $t('sidebarDemo.guideTitle') }}</h2>
		<p class="text-muted-foreground">{{ $t('sidebarDemo.silverGuide') }}</p>
		<p class="text-muted-foreground">
			{{ $t('sidebarDemo.bottomNavigationRule') }}
		</p>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="sidebarApiRows" />
	</section>
</template>

<script setup lang="ts">
import {
	BarChart3,
	House,
	Menu,
	Settings,
	ShoppingBag,
	Users,
} from '@lucide/vue';
import {
	sidebarApiRows,
	sidebarSlots,
} from '~/shared/examples/sidebar/api-reference';
import { sidebarPageToc } from '~/shared/examples/sidebar/page-toc';
import { examples } from '~/shared/examples/sidebar/usage-examples';
import {
	propsTableColumns,
	slotTableColumns,
} from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.sidebar.metaTitle',
	description: 'componentDocs.sidebar.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(sidebarPageToc));

const sidebar = useSidebar();

const sections = [
	{
		label: 'sidebarDemo.workspace',
		pages: [
			{
				id: 'dashboard',
				title: 'sidebarDemo.dashboard',
				icon: House,
			},
			{
				id: 'orders',
				title: 'sidebarDemo.orders',
				icon: ShoppingBag,
			},
		],
	},
	{
		label: 'sidebarDemo.management',
		pages: [
			{
				id: 'analytics',
				title: 'sidebarDemo.analytics',
				icon: BarChart3,
			},
			{
				id: 'team',
				title: 'sidebarDemo.team',
				icon: Users,
			},
			{
				id: 'settings',
				title: 'sidebarDemo.settings',
				icon: Settings,
			},
		],
	},
];
const selected = ref<string>(sections[0]!.pages[0]!.id);

const selectPage = (id: string) => {
	selected.value = id;
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
		<ExampleBlock :code="examples.default">
			<div class="w-full h-80 border rounded-2xl overflow-hidden">
				<Layout>
					<template #sidebar>
						<Sidebar
							:sections="sections"
							:selected="selected"
							@select="selectPage"
						>
							<template #logo>
								<h1 class="text-2xl font-semibold">Logo</h1>
							</template>
							<template #sidebarFooter> Footer </template>
						</Sidebar>
					</template>

					<template #scaffold>
						<Scaffold>
							<template #app-bar>
								<AppBar variant="compact" title="appBar.dashboard">
									<template #leading>
										<IconButton
											variant="ghost"
											color="default"
											@click="sidebar.toggle()"
										>
											<Menu />
										</IconButton>
									</template>
								</AppBar>
							</template>
							<template #body>
								<NuxtPage />
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
		<Table :columns="propsTableColumns" :rows="sidebarApiRows" />
	</section>

	<section id="slots" class="space-y-4">
		<h2 class="text-lg font-semibold">Slots</h2>
		<Table :columns="slotTableColumns" :rows="sidebarSlots" />
	</section>
</template>

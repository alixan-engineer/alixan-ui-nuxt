export const examples = {
	default: `
<script setup lang="ts">
import {
	BarChart3,
	House,
	Menu,
	Settings,
	ShoppingBag,
	Users,
} from 'lucide-vue-next';

import AppBar from '@/components/ui/app-bar/AppBar.vue';
import IconButton from '@/components/ui/button/IconButton.vue';
import Layout from '@/components/ui/layout/Layout.vue';
import Scaffold from '@/components/ui/scaffold/Scaffold.vue';
import Sidebar from '@/components/ui/sidebar/Sidebar.vue';
import { useSidebar } from '@/composables/useSidebar';

const sidebar = useSidebar();

const sections = [
	{
		label: 'sidebarDemo.workspace',
		pages: [
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
		],
	},
	{
		label: 'sidebarDemo.management',
		pages: [
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
		],
	},
];

const selected = ref<string>(sections[0]!.pages[0]!.id);

const selectPage = (id: string) => {
	selected.value = id;
};
</script>

<template>
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

				<template #sidebarFooter>
					Footer
				</template>
			</Sidebar>
		</template>

		<template #scaffold>
			<Scaffold>
				<template #app-bar>
					<AppBar
						variant="compact"
						title="appBar.dashboard"
					>
						<template #leading>
							<IconButton
								variant="ghost"
								color="default"
								@click="sidebar.toggle()"
							>
								<Menu />
							</IconButton>
						</template>
						<template #body>
							<NuxtPage />
						</template>
					</AppBar>
				</template>
			</Scaffold>
		</template>
	</Layout>
</template>
`,
};

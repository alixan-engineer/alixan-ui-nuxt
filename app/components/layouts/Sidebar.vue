<script setup lang="ts">
import type { MessageKey } from '~/composables/useI18n';

import { cn } from '~~/utils/cn';

const route = useRoute();
const { t } = useI18n();

interface MenuItem {
	labelKey: MessageKey;
	to: string;
}

interface MenuSection {
	labelKey: MessageKey;
	items: MenuItem[];
}

const menuSections = [
	{
		labelKey: 'sidebar.sections',
		items: [{ labelKey: 'sidebar.installation', to: '/' }],
	},
	{
		labelKey: 'sidebar.components',
		items: [
			{ labelKey: 'component.button', to: '/button' },
			{ labelKey: 'component.iconButton', to: '/icon-button' },
			{ labelKey: 'component.input', to: '/input' },
			{ labelKey: 'component.search', to: '/search' },
			{ labelKey: 'component.tabs', to: '/tabs' },
			{ labelKey: 'component.switch', to: '/switch' },
		],
	},
] satisfies MenuSection[];

function isActiveRoute(to: string): boolean {
	return route.path === to;
}
</script>

<template>
	<aside class="w-full max-w-70 hidden border-r lg:block">
		<div class="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-2 py-6">
			<nav class="space-y-8">
				<div
					v-for="section in menuSections"
					:key="section.labelKey"
					class="space-y-2"
				>
					<p class="px-3 text-sm font-medium text-muted-foreground">
						{{ t(section.labelKey) }}
					</p>
					<div>
						<Button
							v-for="item in section.items"
							:key="item.labelKey"
							type="button"
							variant="ghost"
							color="default"
							size="sm"
							:class="
								cn(
									'w-full justify-start rounded-lg border-transparent px-2 py-1.5 font-normal',
									isActiveRoute(item.to)
										? 'bg-secondary font-medium text-foreground'
										: 'text-foreground',
								)
							"
							@click="navigateTo(item.to)"
						>
							{{ t(item.labelKey) }}
						</Button>
					</div>
				</div>
			</nav>
		</div>
	</aside>
</template>

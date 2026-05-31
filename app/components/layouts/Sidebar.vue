<script setup lang="ts">
import { cn } from '~~/utils/cn';

const route = useRoute();

const menuSections = [
	{
		label: 'Sections',
		items: [{ label: 'Installation', to: '/' }],
	},
	{
		label: 'Components',
		items: [
			{ label: 'Button', to: '/button' },
			{ label: 'Icon Button', to: '/icon-button' },
		],
	},
];

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
					:key="section.label"
					class="space-y-2"
				>
					<p class="px-3 text-sm font-medium text-muted-foreground">
						{{ section.label }}
					</p>
					<div>
						<Button
							v-for="item in section.items"
							:key="item.label"
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
							{{ item.label }}
						</Button>
					</div>
				</div>
			</nav>
		</div>
	</aside>
</template>

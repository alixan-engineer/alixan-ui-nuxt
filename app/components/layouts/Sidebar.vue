<script setup lang="ts">
const route = useRoute();

const components = [
	{ label: 'Button', to: '/button', disabled: false },
	{ label: 'Icon Button', to: '/icon-button', disabled: false },
	// { label: 'Dialog', to: '/dialog', disabled: true },
	// { label: 'Drawer', to: '/drawer', disabled: true },
];

function isActiveRoute(to: string): boolean {
	return route.path === to;
}
</script>

<template>
	<aside class="w-full max-w-70 hidden border-r lg:block">
		<div class="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-2 py-6">
			<nav class="space-y-8">
				<div class="space-y-2">
					<p class="px-3 text-sm font-medium text-muted-foreground">
						Components
					</p>
					<div>
						<Button
							v-for="item in components"
							:key="item.label"
							type="button"
							variant="ghost"
							color="default"
							size="sm"
							:disabled="item.disabled"
							class="w-full justify-start rounded-lg border-transparent px-2 py-1.5 font-normal"
							:class="[
								isActiveRoute(item.to)
									? 'bg-secondary font-medium text-foreground'
									: 'text-foreground',
								item.disabled ? 'text-muted-foreground/45' : '',
							]"
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

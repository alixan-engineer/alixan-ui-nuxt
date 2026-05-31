<script setup lang="ts">
const components = [
	{ label: 'Button', to: '/button', disabled: false },
	{ label: 'Icon Button', to: '/icon-button', disabled: false },
	// { label: 'Dialog', to: '/dialog', disabled: true },
	// { label: 'Drawer', to: '/drawer', disabled: true },
];
</script>

<template>
	<aside class="hidden border-r lg:block">
		<div class="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-4 py-6">
			<nav class="space-y-8 text-sm">
				<div class="space-y-3">
					<p class="px-2 text-sm font-medium text-muted-foreground">
						Components
					</p>
					<div class="space-y-1">
						<NuxtLink
							v-for="item in components"
							:key="item.label"
							:to="item.to"
							class="block rounded-lg px-2 py-1.5 transition-colors hover:bg-secondary"
							:class="
								item.disabled
									? 'pointer-events-none text-muted-foreground/45'
									: 'text-foreground'
							"
							active-class="bg-secondary font-medium text-foreground"
						>
							{{ item.label }}
						</NuxtLink>
					</div>
				</div>
			</nav>
		</div>
	</aside>
</template>

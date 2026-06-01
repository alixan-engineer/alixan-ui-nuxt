<script setup lang="ts">
import type { MessageKey } from '~/composables/useI18n';

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
		items: [
			{ labelKey: 'sidebar.introduction', to: '/' },
			{ labelKey: 'sidebar.installation', to: '/installation' },
		],
	},
	{
		labelKey: 'sidebar.guides',
		items: [{ labelKey: 'component.icons', to: '/icons' }],
	},
	{
		labelKey: 'sidebar.components',
		items: [
			{ labelKey: 'component.button', to: '/button' },
			{ labelKey: 'component.iconButton', to: '/icon-button' },
			{ labelKey: 'component.input', to: '/input' },
			{ labelKey: 'component.otp', to: '/otp' },
			{ labelKey: 'component.chip', to: '/chip' },
			{ labelKey: 'component.search', to: '/search' },
			{ labelKey: 'component.select', to: '/select' },
			{ labelKey: 'component.tabs', to: '/tabs' },
			{ labelKey: 'component.switch', to: '/switch' },
			{ labelKey: 'component.status', to: '/status' },
		],
	},
	{
		labelKey: 'sidebar.overlays',
		items: [
			{ labelKey: 'component.dialog', to: '/dialog' },
			{ labelKey: 'component.alertDialog', to: '/alert-dialog' },
			{ labelKey: 'component.drawer', to: '/drawer' },
			{ labelKey: 'component.dropdownMenu', to: '/dropdown-menu' },
			{ labelKey: 'component.globalLoader', to: '/global-loader' },
			{ labelKey: 'component.toast', to: '/toast' },
		],
	},
] satisfies MenuSection[];

const isActive = (to: string) => route.path === to;
</script>

<template>
	<aside class="w-full max-w-70 border-r">
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
					<div class="flex flex-col">
						<Button
							v-for="item in section.items"
							:key="item.labelKey"
							type="button"
							class="justify-start"
							size="sm"
							:variant="isActive(item.to) ? 'filled' : 'ghost'"
							:color="isActive(item.to) ? 'primary' : 'default'"
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

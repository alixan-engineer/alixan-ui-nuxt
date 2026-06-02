<script setup lang="ts">
import { cn } from '~~/utils/cn';

const route = useRoute();
const { t } = useI18n();
const emit = defineEmits<{
	close: [];
}>();

const props = withDefaults(
	defineProps<{
		mobile?: boolean;
	}>(),
	{
		mobile: false,
	},
);

interface MenuItem {
	labelKey: string;
	to: string;
}

interface MenuSection {
	labelKey: string;
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
		items: [
			{ labelKey: 'component.icons', to: '/icons' },
			{ labelKey: 'guide.fonts', to: '/fonts' },
			{ labelKey: 'guide.i18n', to: '/i18n' },
			{ labelKey: 'guide.sitemap', to: '/sitemap' },
		],
	},
	{
		labelKey: 'sidebar.components',
		items: [
			{ labelKey: 'component.button', to: '/button' },
			{ labelKey: 'component.iconButton', to: '/icon-button' },
			{ labelKey: 'component.chip', to: '/chip' },
			{ labelKey: 'component.accordion', to: '/accordion' },
			{ labelKey: 'component.tabs', to: '/tabs' },
			{ labelKey: 'component.switch', to: '/switch' },
			{ labelKey: 'component.status', to: '/status' },
		],
	},
	{
		labelKey: 'sidebar.forms',
		items: [
			{ labelKey: 'component.input', to: '/input' },
			{ labelKey: 'component.otp', to: '/otp' },
			{ labelKey: 'component.select', to: '/select' },
			{ labelKey: 'component.search', to: '/search' },
			{ labelKey: 'component.autocomplete', to: '/autocomplete' },
			{ labelKey: 'component.calendar', to: '/calendar' },
		],
	},
	{
		labelKey: 'sidebar.overlays',
		items: [
			{ labelKey: 'component.dialog', to: '/dialog' },
			{ labelKey: 'component.alertDialog', to: '/alert-dialog' },
			{ labelKey: 'component.confirmDialog', to: '/confirm-dialog' },
			{ labelKey: 'component.drawer', to: '/drawer' },
			{ labelKey: 'component.dropdownMenu', to: '/dropdown-menu' },
			{ labelKey: 'component.globalLoader', to: '/global-loader' },
			{ labelKey: 'component.toast', to: '/toast' },
		],
	},
] satisfies MenuSection[];

const isActive = (to: string) => route.path === to;

const goTo = async (to: string): Promise<void> => {
	await navigateTo(to);
	emit('close');
};
</script>

<template>
	<aside
		:class="
			cn(
				'w-full max-w-70 border-r bg-background',
				props.mobile ? 'max-w-none border-r-0' : '',
			)
		"
	>
		<div
			v-if="props.mobile"
			class="h-14 px-4 flex items-center border-b"
		>
			<Logo />
		</div>
		<div
			:class="
				cn(
					'overflow-y-auto px-2 py-6',
					props.mobile
						? 'h-[calc(100vh-3.5rem)]'
						: 'sticky top-14 h-[calc(100vh-3.5rem)]',
				)
			"
		>
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
							class="justify-start"
							size="sm"
							:variant="isActive(item.to) ? 'filled' : 'ghost'"
							:color="isActive(item.to) ? 'primary' : 'default'"
							@click="goTo(item.to)"
						>
							{{ t(item.labelKey) }}
						</Button>
					</div>
				</div>
			</nav>
		</div>
	</aside>
</template>

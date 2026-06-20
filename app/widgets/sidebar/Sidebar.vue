<script setup lang="ts">
import { cn } from '~/utils/cn';
import { scrollToTop } from '~/utils/scroll-to-top';
import { menuSections } from './menu';

interface Props {
	sidebarToggle: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
	close: [];
}>();

const route = useRoute();
const localePath = useLocalePath();

const normalizePath = (path: string): string => {
	const normalizedPath = path.split('#')[0]?.replace(/\/$/, '') || '/';
	return normalizedPath || '/';
};

const isActive = (to: string) =>
	normalizePath(route.path) === normalizePath(localePath(to));
</script>

<template>
	<div
		:class="
			cn(
				'backdrop z-30 transition-opacity duration-200 ease-in-out lg:hidden',
				sidebarToggle
					? 'opacity-100 pointer-events-auto'
					: 'opacity-0 pointer-events-none',
			)
		"
		@click="emit('close')"
	/>
	<aside
		:class="
			cn(
				'w-full max-w-70 border-r bg-background max-lg:absolute max-lg:top-0 max-lg:z-30 max-lg:transition-[left] max-lg:duration-300 max-lg:ease-in-out',
				sidebarToggle ? 'max-lg:left-0' : 'max-lg:-left-70',
			)
		"
	>
		<div
			class="w-full h-14 px-4 relative flex items-center justify-center border-b lg:hidden!"
		>
			<BackButton class="absolute left-4 top-1/2 -translate-y-1/2" />
			<Logo />
		</div>
		<nav
			class="overflow-y-auto px-2 py-6 max-lg:h-[calc(100svh-3.5rem)] lg:sticky lg:top-14 lg:h-[calc(100svh-3.5rem)] space-y-8"
		>
			<div
				v-for="section in menuSections"
				:key="section.labelKey"
				class="space-y-2"
			>
				<p class="px-3 text-sm font-medium text-muted-foreground">
					{{ $t(section.labelKey) }}
				</p>
				<div class="flex flex-col">
					<Button
						v-for="item in section.items"
						:key="item.labelKey"
						class="justify-start"
						size="sm"
						:to="localePath(item.to)"
						:variant="isActive(item.to) ? 'filled' : 'ghost'"
						:color="isActive(item.to) ? 'primary' : 'default'"
						@click="
							emit('close');
							scrollToTop();
						"
					>
						{{ $t(item.labelKey) }}
					</Button>
				</div>
			</div>
		</nav>
	</aside>
</template>

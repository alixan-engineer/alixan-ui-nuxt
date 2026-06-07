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

const isActive = (to: string) => route.path === localePath(to);
</script>

<template>
	<div
		:class="
			cn(
				'backdrop transition-opacity duration-200 ease-in-out lg:hidden',
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
		<Logo class="h-14 px-4 flex items-center border-b lg:hidden" />
		<div
			class="overflow-y-auto px-2 py-6 max-lg:h-[calc(100svh-3.5rem)] lg:sticky lg:top-14 lg:h-[calc(100svh-3.5rem)]"
		>
			<nav class="space-y-8">
				<div
					v-for="section in menuSections"
					:key="section.labelKey"
					class="space-y-2"
				>
					<p class="px-3 text-sm font-medium text-muted-foreground">
						{{ $tn(section.labelKey) }}
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
							{{ $tn(item.labelKey) }}
						</Button>
					</div>
				</div>
			</nav>
		</div>
	</aside>
</template>

<script setup lang="ts">
import { cn } from '~/utils/cn';
import { menuSections } from './menu';

interface Props {
	mobile?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
	mobile: false,
});

const emit = defineEmits<{
	close: [];
}>();

const route = useRoute();
const localePath = useLocalePath();

const normalizePath = (path: string): string =>
	path.length > 1 ? path.replace(/\/$/, '') : path;

const isActive = (to: string): boolean =>
	normalizePath(route.path) === normalizePath(localePath(to));
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
		<div v-if="props.mobile" class="h-14 px-4 flex items-center border-b">
			<Logo />
		</div>
		<div
			:class="
				cn(
					'overflow-y-auto px-2 py-6',
					props.mobile
						? 'h-[calc(100svh-3.5rem)]'
						: 'sticky top-14 h-[calc(100svh-3.5rem)]',
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
							@click="emit('close')"
						>
							{{ $t(item.labelKey) }}
						</Button>
					</div>
				</div>
			</nav>
		</div>
	</aside>
</template>

<script setup lang="ts">
import { X } from '@lucide/vue';
import { computed, watch } from 'vue';

import { cn } from '~~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type DrawerSide = 'right' | 'left' | 'bottom';

interface DrawerProps {
	title?: string;
	description?: string;
	side?: DrawerSide;
	closeOnOverlay?: boolean;
}

const props = withDefaults(defineProps<DrawerProps>(), {
	title: '',
	description: '',
	side: 'right',
	closeOnOverlay: true,
});

const emit = defineEmits<{
	close: [];
}>();

const open = defineModel<boolean>({ default: false });

const drawerClass = computed(() => {
	const sides: Record<DrawerSide, string> = {
		right: 'right-0 top-0 h-full w-full max-w-md rounded-l-3xl',
		left: 'left-0 top-0 h-full w-full max-w-md rounded-r-3xl',
		bottom: 'bottom-0 left-0 max-h-[85vh] w-full rounded-t-3xl',
	};

	return sides[props.side];
});

const transitionClasses = computed(() => {
	if (props.side === 'left') {
		return {
			enterFrom: '-translate-x-full',
			leaveTo: '-translate-x-full',
		};
	}

	if (props.side === 'bottom') {
		return {
			enterFrom: 'translate-y-full',
			leaveTo: 'translate-y-full',
		};
	}

	return {
		enterFrom: 'translate-x-full',
		leaveTo: 'translate-x-full',
	};
});

const closeDrawer = (): void => {
	open.value = false;
	emit('close');
};

const handleOverlayMouseDown = (): void => {
	if (props.closeOnOverlay) {
		closeDrawer();
	}
};

const handleKeydown = (event: KeyboardEvent): void => {
	if (event.key === 'Escape' && open.value) {
		closeDrawer();
	}
};

watch(open, value => {
	if (!import.meta.client) {
		return;
	}

	if (value) {
		document.addEventListener('keydown', handleKeydown);
		document.body.style.overflow = 'hidden';
		return;
	}

	document.removeEventListener('keydown', handleKeydown);
	document.body.style.overflow = '';
});

onBeforeUnmount(() => {
	if (!import.meta.client) {
		return;
	}

	document.removeEventListener('keydown', handleKeydown);
	document.body.style.overflow = '';
});
</script>

<template>
	<Teleport to="body">
		<Transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-if="open"
				class="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-[2px]"
				@mousedown.stop="handleOverlayMouseDown"
				@click.stop
			>
				<Transition
					appear
					enter-active-class="transition duration-300 ease-out"
					:enter-from-class="`${transitionClasses.enterFrom} opacity-90`"
					enter-to-class="translate-x-0 translate-y-0 opacity-100"
					leave-active-class="transition duration-200 ease-in"
					leave-from-class="translate-x-0 translate-y-0 opacity-100"
					:leave-to-class="`${transitionClasses.leaveTo} opacity-90`"
				>
					<aside
						:class="
							cn(
								'fixed flex flex-col overflow-hidden border bg-background shadow-2xl',
								drawerClass,
								$attrs.class,
							)
						"
						role="dialog"
						aria-modal="true"
						@mousedown.stop
					>
						<header
							v-if="title || description || $slots.header"
							class="flex min-h-14 items-start justify-between gap-4 border-b px-6 py-4"
						>
							<slot name="header">
								<div class="min-w-0 space-y-1">
									<h2 v-if="title" class="text-lg font-semibold">
										{{ title }}
									</h2>
									<p
										v-if="description"
										class="text-sm leading-6 text-muted-foreground"
									>
										{{ description }}
									</p>
								</div>
							</slot>
							<IconButton
								label="Close drawer"
								variant="ghost"
								color="default"
								size="sm"
								class="-mr-2 shrink-0"
								@click="closeDrawer"
							>
								<X />
							</IconButton>
						</header>

						<div class="flex-1 overflow-auto p-6">
							<slot />
						</div>

						<footer
							v-if="$slots.footer"
							class="flex items-center justify-end gap-2 border-t p-4"
						>
							<slot name="footer" />
						</footer>
					</aside>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

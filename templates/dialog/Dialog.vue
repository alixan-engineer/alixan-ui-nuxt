<script setup lang="ts">
import { X } from '@lucide/vue';
import { computed, watch } from 'vue';

import { cn } from '~~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type DialogSize = 'sm' | 'md' | 'lg';

interface DialogProps {
	title?: string;
	description?: string;
	size?: DialogSize;
	closeOnOverlay?: boolean;
}

const props = withDefaults(defineProps<DialogProps>(), {
	title: '',
	description: '',
	size: 'md',
	closeOnOverlay: true,
});

const emit = defineEmits<{
	close: [];
}>();

const open = defineModel<boolean>({ default: false });

const sizeClass = computed(() => {
	const sizes: Record<DialogSize, string> = {
		sm: 'max-w-md',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
	};

	return sizes[props.size];
});

function closeDialog(): void {
	open.value = false;
	emit('close');
}

function handleOverlayMouseDown(): void {
	if (props.closeOnOverlay) {
		closeDialog();
	}
}

function handleKeydown(event: KeyboardEvent): void {
	if (event.key === 'Escape' && open.value) {
		closeDialog();
	}
}

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
				class="fixed inset-0 z-[9998] flex items-center justify-center bg-black/30 p-4 backdrop-blur-[2px]"
				@mousedown.stop="handleOverlayMouseDown"
				@click.stop
			>
				<Transition
					appear
					enter-active-class="transition duration-200 ease-out"
					enter-from-class="translate-y-3 scale-95 opacity-0"
					enter-to-class="translate-y-0 scale-100 opacity-100"
					leave-active-class="transition duration-150 ease-in"
					leave-from-class="translate-y-0 scale-100 opacity-100"
					leave-to-class="translate-y-2 scale-95 opacity-0"
				>
					<section
						:class="
							cn(
								'flex max-h-[calc(100vh-2rem)] w-full flex-col overflow-hidden rounded-3xl border bg-background shadow-2xl',
								sizeClass,
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
								label="Close dialog"
								variant="ghost"
								color="default"
								size="sm"
								class="-mr-2 shrink-0"
								@click="closeDialog"
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
					</section>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup lang="ts">
import { Info } from '@lucide/vue';
import { computed, watch } from 'vue';

import { cn } from '~~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

interface AlertDialogProps {
	title?: string;
	description?: string;
	buttonLabel?: string;
	imageSrc?: string;
	closeOnOverlay?: boolean;
}

const props = withDefaults(defineProps<AlertDialogProps>(), {
	title: '',
	description: '',
	buttonLabel: 'OK',
	imageSrc: '',
	closeOnOverlay: true,
});

const emit = defineEmits<{
	action: [];
	close: [];
}>();

const open = defineModel<boolean>({ default: false });

const dialogClass = computed(() =>
	cn(
		'w-full max-w-[360px] rounded-[28px] border bg-background p-5 text-center shadow-2xl shadow-black/20',
	),
);

const closeDialog = (): void => {
	open.value = false;
	emit('close');
};

const handleAction = (): void => {
	emit('action');
	closeDialog();
};

const handleOverlayMouseDown = (): void => {
	if (props.closeOnOverlay) {
		closeDialog();
	}
};

const handleKeydown = (event: KeyboardEvent): void => {
	if (event.key === 'Escape' && open.value) {
		closeDialog();
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
			enter-active-class="transition"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-if="open"
				class="fixed inset-0 z-9998 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
				@mousedown.stop="handleOverlayMouseDown"
				@click.stop
			>
				<Transition
					appear
					enter-active-class="transition"
					enter-from-class="scale-95 opacity-0"
					enter-to-class="scale-100 opacity-100"
					leave-active-class="transition"
					leave-from-class="scale-100 opacity-100"
					leave-to-class="scale-95 opacity-0"
				>
					<div
						v-bind="{ ...$attrs, class: undefined }"
						:class="cn(dialogClass, $attrs.class)"
						role="alertdialog"
						aria-modal="true"
						@mousedown.stop
					>
						<div class="mx-auto mb-4 flex size-20 items-center justify-center overflow-hidden rounded-[24px] bg-secondary text-primary">
							<slot name="illustration">
								<img
									v-if="imageSrc"
									:src="imageSrc"
									alt=""
									class="size-full object-cover"
								/>
								<Info v-else class="size-9" />
							</slot>
						</div>

						<div class="space-y-2">
							<h2 class="text-xl font-semibold">
								<slot name="title">
									{{ title }}
								</slot>
							</h2>
							<p class="text-sm leading-6 text-muted-foreground">
								<slot name="description">
									{{ description }}
								</slot>
							</p>
						</div>

						<Button class="mt-5 w-full" color="primary" @click="handleAction">
							{{ buttonLabel }}
						</Button>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

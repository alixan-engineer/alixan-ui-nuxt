<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import { cn } from '~/utils/cn';

defineOptions({
	inheritAttrs: false,
});

type DrawerPosition = 'top' | 'right' | 'bottom' | 'left';

interface DrawerProps {
	width?: string;
	height?: string;
	title?: string;
	position?: DrawerPosition;
	closeOnOverlay?: boolean;
}

const props = withDefaults(defineProps<DrawerProps>(), {
	width: '420px',
	height: '420px',
	title: '',
	position: 'bottom',
	closeOnOverlay: true,
});

const emit = defineEmits<{
	close: [];
}>();

const open = defineModel<boolean>({ default: false });
const dragOffset = ref(0);
const isDragging = ref(false);
const isSettling = ref(false);

let dragStartY = 0;
let dragStartTime = 0;

const drawerStyle = computed(() => {
	const dragStyle =
		props.position === 'bottom' && (isDragging.value || isSettling.value)
			? {
					transform: `translateY(${dragOffset.value}px)`,
					transition: isDragging.value ? 'none' : 'transform 200ms ease-out',
				}
			: {};

	if (props.position === 'top' || props.position === 'bottom') {
		return {
			maxWidth: props.width,
			maxHeight: props.height,
			...dragStyle,
		};
	}

	return {
		maxWidth: props.width,
	};
});

const positionClass = computed(() => {
	const positions: Record<DrawerPosition, string> = {
		top: 'inset-x-0 top-0 mx-auto h-full w-full rounded-b-3xl',
		right: 'right-0 top-0 h-full w-full rounded-l-3xl',
		bottom: 'bottom-0 inset-x-0 mx-auto h-full w-full rounded-t-3xl',
		left: 'left-0 top-0 h-full w-full rounded-r-3xl',
	};

	return positions[props.position];
});

const transitionClass = computed(() => {
	const positions: Record<DrawerPosition, string> = {
		top: '-translate-y-full',
		right: 'translate-x-full',
		bottom: 'translate-y-full',
		left: '-translate-x-full',
	};

	return positions[props.position];
});

const closeDrawer = (): void => {
	dragOffset.value = 0;
	isDragging.value = false;
	isSettling.value = false;
	open.value = false;
	emit('close');
};

const handleTouchStart = (event: TouchEvent): void => {
	if (props.position !== 'bottom' || event.touches.length !== 1) return;

	const scrollContainer = (event.target as HTMLElement).closest<HTMLElement>(
		'[data-drawer-scroll]',
	);
	if (scrollContainer && scrollContainer.scrollTop > 0) return;

	dragStartY = event.touches[0]?.clientY ?? 0;
	dragStartTime = performance.now();
	dragOffset.value = 0;
	isSettling.value = false;
	isDragging.value = true;
};

const handleTouchMove = (event: TouchEvent): void => {
	if (!isDragging.value || event.touches.length !== 1) return;

	const offset = (event.touches[0]?.clientY ?? dragStartY) - dragStartY;
	if (offset <= 0) {
		dragOffset.value = 0;
		return;
	}

	event.preventDefault();
	dragOffset.value = offset;
};

const handleTouchEnd = (): void => {
	if (!isDragging.value) return;

	const elapsed = Math.max(performance.now() - dragStartTime, 1);
	const velocity = dragOffset.value / elapsed;
	const shouldClose = dragOffset.value >= 96 || velocity >= 0.6;
	isDragging.value = false;

	if (shouldClose) {
		closeDrawer();
		return;
	}

	isSettling.value = true;
	dragOffset.value = 0;
	window.setTimeout(() => {
		isSettling.value = false;
	}, 200);
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
			enter-active-class="transition"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-if="open"
				class="backdrop z-9998"
				@mousedown.stop="handleOverlayMouseDown"
				@click.stop
			>
				<Transition
					appear
					enter-active-class="transition"
					:enter-from-class="`${transitionClass} opacity-95`"
					enter-to-class="translate-x-0 translate-y-0 opacity-100"
					leave-active-class="transition"
					leave-from-class="translate-x-0 translate-y-0 opacity-100"
					:leave-to-class="`${transitionClass} opacity-95`"
				>
					<aside
						:style="drawerStyle"
						:class="
							cn(
								'fixed flex flex-col overflow-hidden border bg-background shadow-2xl',
								positionClass,
								$attrs.class,
							)
						"
						@mousedown.stop
						@touchstart="handleTouchStart"
						@touchmove="handleTouchMove"
						@touchend="handleTouchEnd"
						@touchcancel="handleTouchEnd"
					>
						<DrawerHeader
							v-if="title"
							:title="title"
							:close="closeDrawer"
							class="border-b"
						/>
						<div data-drawer-scroll class="flex-1 overflow-auto">
							<slot />
						</div>
					</aside>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

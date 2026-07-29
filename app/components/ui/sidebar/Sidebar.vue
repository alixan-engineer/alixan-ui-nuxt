<script setup lang="ts">
import { cn } from '~/utils/cn';

defineOptions({ inheritAttrs: false });

interface SidebarProps {
	width?: string;
	closeOnBackdrop?: boolean;
	brand?: string;
	container?: boolean;
	contentClass?: string;
	mode?: 'responsive' | 'mobile' | 'desktop';
	contained?: boolean;
}

const props = withDefaults(defineProps<SidebarProps>(), {
	width: '280px',
	closeOnBackdrop: true,
	brand: 'Alixan UI',
	container: true,
	contentClass: undefined,
	mode: 'responsive',
	contained: false,
});

const open = defineModel<boolean>('open', { default: false });
const attrs = useAttrs();
const route = useRoute();
const bodyRef = ref<HTMLElement | null>(null);
let desktopMedia: MediaQueryList | null = null;

const forwardedAttrs = computed(() => {
	const { class: _class, ...rest } = attrs;
	return rest;
});

const rootClass = computed(() =>
	cn(
		'flex h-svh w-full overflow-hidden bg-background',
		props.contained || props.mode === 'mobile' ? 'relative' : '',
		props.contained ? '!h-full' : '',
		attrs.class,
	),
);

const asideClass = computed(() =>
	cn(
		'inset-y-0 left-0 z-50 flex h-svh w-[var(--sidebar-width)] shrink-0 flex-col overflow-hidden border-r bg-background transition-[transform,width] duration-200 ease-out motion-reduce:transition-none',
		props.mode === 'desktop'
			? 'static z-auto !h-full translate-x-0'
			: props.contained || props.mode === 'mobile'
				? 'absolute !h-full'
				: 'fixed',
		props.mode === 'responsive'
			? 'xl:static xl:z-auto xl:translate-x-0'
			: '',
		open.value
			? cn(
					props.mode === 'mobile' ? '' : 'translate-x-0',
					props.mode === 'responsive' ? 'xl:w-[var(--sidebar-width)]' : '',
				)
			: props.mode === 'desktop'
				? 'w-0 translate-x-0 border-r-0'
				: cn(
						props.mode === 'mobile' ? '' : '-translate-x-full',
						props.mode === 'responsive' ? 'xl:w-0 xl:border-r-0' : '',
					),
	),
);

const asideStyle = computed(() => ({
	'--sidebar-width': props.width,
	width: props.mode === 'desktop' ? (open.value ? props.width : '0px') : undefined,
	transform:
		props.mode === 'mobile'
			? open.value
				? 'translateX(0)'
				: `translateX(-${props.width})`
			: undefined,
}));

const close = (): void => {
	open.value = false;
};

const toggle = (): void => {
	open.value = !open.value;
};

const handleBackdrop = (): void => {
	if (props.closeOnBackdrop) close();
};

const syncWithScreen = (event?: MediaQueryListEvent | MediaQueryList): void => {
	open.value = !(event?.matches ?? desktopMedia?.matches ?? true);
};

const scrollToTop = (): void => {
	bodyRef.value?.scrollTo({ top: 0 });
};

onMounted(() => {
	if (props.mode !== 'responsive') return;
	desktopMedia = window.matchMedia('(max-width: 1279px)');
	syncWithScreen(desktopMedia);
	desktopMedia.addEventListener('change', syncWithScreen);
});

onBeforeUnmount(() => {
	desktopMedia?.removeEventListener('change', syncWithScreen);
});

watch(
	() => route.fullPath,
	async () => {
		await nextTick();
		scrollToTop();
	},
);

defineExpose({ scrollToTop });
</script>

<template>
	<div v-bind="forwardedAttrs" :class="rootClass">
		<Teleport to="body" :disabled="contained">
			<Transition
				enter-active-class="transition-opacity duration-150 ease-out"
				enter-from-class="opacity-0"
				leave-active-class="transition-opacity duration-150 ease-in"
				leave-to-class="opacity-0"
			>
				<div
					v-if="open && mode !== 'desktop'"
					:class="cn('backdrop z-40', contained ? 'absolute!' : '', mode === 'responsive' ? 'xl:hidden' : '')"
					@click="handleBackdrop"
				/>
			</Transition>
		</Teleport>

		<aside :class="asideClass" :style="asideStyle">
			<header class="flex h-14 shrink-0 items-center border-b px-4">
				<slot name="sidebar-header" :close="close">
					<div class="flex items-center gap-2 whitespace-nowrap">
						<svg viewBox="0 0 128 128" aria-hidden="true" class="size-8 shrink-0">
							<rect width="128" height="128" rx="30" fill="#050505" />
							<path d="M29 91 54.8 37h18.4L99 91H81.2L64 53.7 46.8 91H29Z" fill="white" />
							<path d="M52 91 64 65l12 26H52Z" fill="#050505" />
							<path d="M82.8 39.2 99 91H81.2l-8.9-27.6 10.5-24.2Z" fill="#46cca6" />
						</svg>
						<span class="text-lg font-semibold">{{ $t(brand) }}</span>
					</div>
				</slot>
			</header>

			<nav class="min-h-0 flex-1 px-3 py-4">
				<slot name="navigation" :close="close" />
			</nav>

			<footer v-if="$slots['sidebar-footer']" class="shrink-0 border-t p-3">
				<slot name="sidebar-footer" :close="close" />
			</footer>
		</aside>

		<main class="flex min-w-0 flex-1 flex-col overflow-hidden">
			<div ref="bodyRef" data-scroll-container class="min-h-0 flex-1 overflow-y-auto">
				<slot name="app-bar" :open="open" :close="close" :toggle="toggle" />
				<div
					:class="cn(
						'w-full px-4 py-6 sm:px-6 lg:px-8',
						container ? 'mx-auto max-w-container' : '',
						contentClass,
					)"
				>
					<slot><NuxtPage /></slot>
				</div>
			</div>
		</main>
	</div>
</template>

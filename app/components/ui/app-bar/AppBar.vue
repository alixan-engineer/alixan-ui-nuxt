<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';

import { cn } from '~/utils/cn';

defineOptions({ inheritAttrs: false });

type AppBarVariant = 'compact' | 'silver';
type AppBarTitleAlign = 'responsive' | 'start' | 'center';

interface AppBarProps {
	variant?: AppBarVariant;
	title: string;
	sticky?: boolean;
	showDividerOnScroll?: boolean;
	titleAlign?: AppBarTitleAlign;
	scrollTarget?: HTMLElement | string | null;
}

const props = withDefaults(defineProps<AppBarProps>(), {
	variant: 'compact',
	sticky: true,
	showDividerOnScroll: true,
	titleAlign: 'responsive',
	scrollTarget: null,
});

const attrs = useAttrs();
const rootRef = ref<HTMLElement | null>(null);
const largeTitleRef = ref<HTMLElement | null>(null);
const isScrolled = ref(false);
const isCollapsed = ref(false);

let scrollElement: HTMLElement | Window | null = null;
let titleObserver: IntersectionObserver | null = null;

const compactTitleVisible = computed(
	() => props.variant === 'compact' || isCollapsed.value,
);
const dividerVisible = computed(
	() =>
		props.showDividerOnScroll &&
		(props.variant === 'compact' || isScrolled.value || isCollapsed.value),
);

const resolveScrollElement = (): HTMLElement | Window => {
	if (props.scrollTarget instanceof HTMLElement) return props.scrollTarget;
	if (typeof props.scrollTarget === 'string') {
		return document.querySelector<HTMLElement>(props.scrollTarget) ?? window;
	}

	return rootRef.value?.closest<HTMLElement>('[data-scroll-container]') ?? window;
};

const getScrollTop = (): number =>
	scrollElement instanceof Window
		? window.scrollY
		: (scrollElement?.scrollTop ?? 0);

const syncScrolledState = (): void => {
	isScrolled.value = getScrollTop() > 1;
};

const disconnect = (): void => {
	scrollElement?.removeEventListener('scroll', syncScrolledState);
	titleObserver?.disconnect();
	titleObserver = null;
};

const connect = async (): Promise<void> => {
	if (!import.meta.client) return;
	disconnect();
	await nextTick();

	scrollElement = resolveScrollElement();
	scrollElement.addEventListener('scroll', syncScrolledState, { passive: true });
	syncScrolledState();
	isCollapsed.value = false;

	if (props.variant !== 'silver' || !largeTitleRef.value) return;

	titleObserver = new IntersectionObserver(
		([entry]) => {
			if (!entry) return;
			isCollapsed.value =
				!entry.isIntersecting &&
				entry.boundingClientRect.top < (entry.rootBounds?.top ?? 56);
		},
		{
			root: scrollElement instanceof HTMLElement ? scrollElement : null,
			rootMargin: '-56px 0px 0px',
			threshold: 0,
		},
	);
	titleObserver.observe(largeTitleRef.value);
};

onMounted(connect);
onBeforeUnmount(disconnect);
watch(
	() => [props.variant, props.scrollTarget],
	() => connect(),
);
</script>

<template>
	<div ref="rootRef" :class="cn('contents', attrs.class)" v-bind="{ ...attrs, class: undefined }">
		<header
			:class="
				cn(
					'z-30 w-full border-b bg-background pt-[env(safe-area-inset-top)] transition-colors duration-200 motion-reduce:transition-none',
					sticky ? 'sticky top-0' : '',
					dividerVisible ? 'border-border' : 'border-transparent',
				)
			"
		>
			<div
				:class="
					cn(
						'grid h-[55px] items-center px-4',
						titleAlign === 'start'
							? 'grid-cols-[auto_minmax(0,1fr)_auto] gap-2'
							: titleAlign === 'responsive'
								? 'max-md:grid-cols-[minmax(2.75rem,1fr)_minmax(0,auto)_minmax(2.75rem,1fr)] md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-2'
								: 'grid-cols-[minmax(2.75rem,1fr)_minmax(0,auto)_minmax(2.75rem,1fr)]',
					)
				"
			>
				<div class="flex min-w-0 items-center justify-start">
					<slot name="leading" />
				</div>

				<div
					:class="
						cn(
							'min-w-0 transition duration-200 motion-reduce:transition-none',
							titleAlign === 'start'
								? 'justify-self-start'
								: titleAlign === 'center'
									? 'justify-self-center'
									: 'max-md:justify-self-center md:justify-self-start',
							compactTitleVisible ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0',
						)
					"
				>
					<component
						:is="variant === 'compact' ? 'h1' : 'div'"
						class="truncate text-[17px] font-semibold leading-[22px]"
						:aria-hidden="variant === 'silver' ? !compactTitleVisible : undefined"
					>
						<slot name="title">{{ $t(title) }}</slot>
					</component>
				</div>

				<div class="flex min-w-0 items-center justify-end gap-1">
					<slot name="trailing" />
				</div>
			</div>
		</header>

		<div v-if="variant === 'silver'" ref="largeTitleRef" class="px-4 pb-2 pt-5">
			<h1 class="line-clamp-2 text-[34px] font-bold leading-[41px] tracking-tight">
				<slot name="largeTitle">{{ $t(title) }}</slot>
			</h1>
		</div>

		<slot />
	</div>
</template>

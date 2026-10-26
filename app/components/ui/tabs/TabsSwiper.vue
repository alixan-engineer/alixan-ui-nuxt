<script setup lang="ts">
import { computed, nextTick, ref, shallowRef, useId, watch } from 'vue';
import type { Swiper as SwiperInstance } from 'swiper';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import { cn } from '~/utils/cn';

interface TabsSwiperProps {
	tabs?: string[];
	counts?: number[];
	design?: 'material' | 'cupertino';
}

const props = withDefaults(defineProps<TabsSwiperProps>(), {
	tabs: () => [],
	design: 'cupertino',
});

const selected = defineModel<number>({ default: 0 });
const id = useId();
const buttons = ref<HTMLButtonElement[]>([]);
const swiper = shallowRef<SwiperInstance>();
const safeSelected = computed(() =>
	Math.min(
		Math.max(Number.isFinite(selected.value) ? Math.trunc(selected.value) : 0, 0),
		Math.max(props.tabs.length - 1, 0),
	),
);

const syncSwiper = async (speed = 250) => {
	await nextTick();
	const instance = swiper.value;
	if (!instance || instance.destroyed) return;
	instance.update();
	const gap = props.design === 'cupertino' ? 4 : 0;
	const contentWidth = instance.slidesSizesGrid.reduce((sum, width) => sum + width, 0)
		+ Math.max(props.tabs.length - 1, 0) * gap;
	const centered = contentWidth > instance.size + 1;
	if (instance.params.centeredSlides !== centered) {
		instance.params.centeredSlides = centered;
		instance.originalParams.centeredSlides = centered;
		instance.update();
	}
	instance.slideTo(safeSelected.value, speed);
};

const onSwiper = (instance: SwiperInstance) => {
	swiper.value = instance;
	void syncSwiper(0);
};

const selectTab = (index: number) => {
	selected.value = index;
	void syncSwiper();
};

const onKeydown = (event: KeyboardEvent, index: number) => {
	let next = index;
	if (event.key === 'ArrowRight') next = (index + 1) % props.tabs.length;
	else if (event.key === 'ArrowLeft') next = (index - 1 + props.tabs.length) % props.tabs.length;
	else if (event.key === 'Home') next = 0;
	else if (event.key === 'End') next = props.tabs.length - 1;
	else return;
	event.preventDefault();
	selectTab(next);
	buttons.value[next]?.focus({ preventScroll: true });
};

watch(safeSelected, () => { void syncSwiper(); });
watch(
	() => [props.tabs, props.counts, props.design],
	() => { void syncSwiper(0); },
	{ deep: true },
);
</script>

<template>
	<div v-if="tabs.length" class="w-fit min-w-0 max-w-full shrink-0">
		<div :class="cn('overflow-hidden', design === 'material' ? 'border-b' : 'rounded-xl bg-secondary p-1')">
			<Swiper
				role="tablist"
				:modules="[FreeMode]"
				slides-per-view="auto"
				:free-mode="true"
				focusable-elements="input, select, option, textarea, video, label"
				:centered-slides-bounds="true"
				:space-between="design === 'cupertino' ? 4 : 0"
				:class="cn('tabs-swiper max-w-full', design === 'material' ? 'h-12' : 'h-9')"
				@swiper="onSwiper"
				@resize="syncSwiper(0)"
			>
				<SwiperSlide
					v-for="(tab, index) in tabs"
					:key="`${tab}-${index}`"
					class="tabs-swiper-slide"
				>
					<button
						:id="`${id}-tab-${index}`"
						ref="buttons"
						type="button"
						role="tab"
						:aria-selected="safeSelected === index"
						:tabindex="safeSelected === index ? 0 : -1"
						:class="cn(
							'relative h-full w-full cursor-pointer select-none whitespace-nowrap px-4 text-center text-base font-medium transition-colors focus-visible:bg-secondary focus-visible:outline-none',
							design === 'material'
								? safeSelected === index ? 'font-semibold text-primary' : 'text-muted-foreground hover:text-foreground'
								: cn('rounded-lg', safeSelected === index ? 'bg-background font-semibold text-foreground' : 'text-muted-foreground hover:bg-background/40'),
						)"
						@click="selectTab(index)"
						@keydown="onKeydown($event, index)"
					>
						{{ $t(tab) }}
						<span v-if="counts?.[index] !== undefined" class="ml-0.5 text-xs tabular-nums opacity-75">
							{{ counts[index] }}
						</span>
						<span
							v-if="design === 'material' && safeSelected === index"
							class="absolute inset-x-3 bottom-0 mx-auto h-0.5 max-w-25 rounded-t-full bg-primary"
						/>
					</button>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<style scoped>
.tabs-swiper :deep(.tabs-swiper-slide) {
	width: auto;
	flex-shrink: 0;
}
</style>

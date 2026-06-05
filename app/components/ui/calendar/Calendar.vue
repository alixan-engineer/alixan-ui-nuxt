<script setup lang="ts">
import { CalendarDays, ChevronLeft, ChevronRight } from '@lucide/vue';
import { computed, nextTick, ref } from 'vue';

import { cn } from '~/utils/cn';

type CalendarMode = 'day' | 'range';

interface CalendarProps {
	label?: string;
	mode?: CalendarMode;
}

const props = withDefaults(defineProps<CalendarProps>(), {
	label: 'Date',
	mode: 'day',
});

const model = defineModel<string | { from: string; to: string } | null>({
	default: null,
});

const open = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const menuStyle = ref<Record<string, string>>({});
const currentDate = ref(new Date());
const rangeDraft = ref<{ from: string; to: string }>({ from: '', to: '' });

const monthLabel = computed(() =>
	currentDate.value.toLocaleDateString('en', {
		month: 'long',
		year: 'numeric',
	}),
);
const displayValue = computed(() => {
	if (!model.value) {
		return '';
	}

	if (typeof model.value === 'string') {
		return model.value;
	}

	return [model.value.from, model.value.to].filter(Boolean).join(' - ');
});

const formatDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};

const days = computed(() => {
	const year = currentDate.value.getFullYear();
	const month = currentDate.value.getMonth();
	const firstDay = new Date(year, month, 1);
	const totalDays = new Date(year, month + 1, 0).getDate();
	const leading = (firstDay.getDay() + 6) % 7;

	return [
		...Array.from({ length: leading }, () => ''),
		...Array.from({ length: totalDays }, (_, index) =>
			formatDate(new Date(year, month, index + 1)),
		),
	];
});

const updateMenuPosition = (): void => {
	const trigger = triggerRef.value;

	if (!trigger || !import.meta.client) {
		return;
	}

	const rect = trigger.getBoundingClientRect();
	const viewportPadding = 12;
	const menuWidth = Math.min(
		Math.max(rect.width, 288),
		window.innerWidth - viewportPadding * 2,
	);
	const menuHeight = 344;
	const spaceBelow = window.innerHeight - rect.bottom;
	const spaceAbove = rect.top;
	const top =
		spaceBelow < menuHeight && spaceAbove > spaceBelow
			? Math.max(viewportPadding, rect.top - menuHeight - 4)
			: Math.min(rect.bottom + 4, window.innerHeight - viewportPadding);
	const left = Math.min(
		Math.max(viewportPadding, rect.left),
		window.innerWidth - menuWidth - viewportPadding,
	);

	menuStyle.value = {
		top: `${top}px`,
		left: `${left}px`,
		width: `${menuWidth}px`,
		maxHeight: `${Math.min(menuHeight, window.innerHeight - viewportPadding * 2)}px`,
	};
};

const openCalendar = async (): Promise<void> => {
	open.value = true;
	await nextTick();
	updateMenuPosition();
	window.addEventListener('resize', closeCalendar);
	window.addEventListener('scroll', closeCalendar, true);
};

const closeCalendar = (): void => {
	open.value = false;
	window.removeEventListener('resize', closeCalendar);
	window.removeEventListener('scroll', closeCalendar, true);
};

const moveMonth = (step: number): void => {
	currentDate.value = new Date(
		currentDate.value.getFullYear(),
		currentDate.value.getMonth() + step,
		1,
	);
};

const selectDay = (day: string): void => {
	if (!day) {
		return;
	}

	if (props.mode === 'day') {
		model.value = day;
		closeCalendar();
		return;
	}

	if (!rangeDraft.value.from || rangeDraft.value.to) {
		rangeDraft.value = { from: day, to: '' };
		model.value = { ...rangeDraft.value };
		return;
	}

	const ordered = [rangeDraft.value.from, day].sort();
	rangeDraft.value = { from: ordered[0] ?? '', to: ordered[1] ?? '' };
	model.value = { ...rangeDraft.value };
	closeCalendar();
};

const isSelected = (day: string): boolean => {
	if (!day || !model.value) {
		return false;
	}

	if (typeof model.value === 'string') {
		return model.value === day;
	}

	return model.value.from === day || model.value.to === day;
};

onBeforeUnmount(closeCalendar);
</script>

<template>
	<div ref="triggerRef" class="relative w-full">
		<Input
			:model-value="displayValue"
			:label="label"
			readonly
			@click="openCalendar"
			@focus="openCalendar"
		>
			<template #trailing>
				<CalendarDays class="size-5" />
			</template>
		</Input>

		<Teleport to="body">
			<div
				v-if="open"
				class="fixed inset-0 z-9998"
				@mousedown.stop="closeCalendar"
				@click.stop
			/>
			<div
				v-if="open"
				class="fixed z-9999 overflow-auto rounded-2xl border bg-popover p-3 shadow-md"
				:style="menuStyle"
				@mousedown.stop
			>
				<div class="mb-3 flex items-center justify-between">
					<button
						type="button"
						class="flex size-9 items-center justify-center rounded-xl text-foreground hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none [&_svg]:size-4"
						aria-label="Previous month"
						@click="moveMonth(-1)"
					>
						<ChevronLeft />
					</button>
					<p class="text-sm font-semibold">{{ monthLabel }}</p>
					<button
						type="button"
						class="flex size-9 items-center justify-center rounded-xl text-foreground hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none [&_svg]:size-4"
						aria-label="Next month"
						@click="moveMonth(1)"
					>
						<ChevronRight />
					</button>
				</div>
				<div class="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
					<span v-for="day in ['M', 'T', 'W', 'T', 'F', 'S', 'S']" :key="day">
						{{ day }}
					</span>
				</div>
				<div class="mt-1 grid grid-cols-7 gap-1">
					<button
						v-for="(day, index) in days"
						:key="`${day}-${index}`"
						type="button"
						:disabled="!day"
						:class="
							cn(
								'flex h-9 items-center justify-center rounded-lg text-sm hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none disabled:pointer-events-none',
								isSelected(day) ? 'bg-primary text-primary-foreground hover:bg-primary' : '',
							)
						"
						@click="selectDay(day)"
					>
						{{ day ? Number(day.slice(-2)) : '' }}
					</button>
				</div>
			</div>
		</Teleport>
	</div>
</template>

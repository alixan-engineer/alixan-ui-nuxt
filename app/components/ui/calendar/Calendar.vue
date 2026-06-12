<script setup lang="ts">
import { CalendarDays, ChevronLeft, ChevronRight } from '@lucide/vue';
import { computed, nextTick, ref, watch } from 'vue';

import { cn } from '~/utils/cn';

type CalendarMode = 'day' | 'range';
type RangePresetValue = '7d' | '30d' | '6m' | '1y';

interface CalendarProps {
	label?: string;
	mode?: CalendarMode;
	locale?: string;
}

interface CalendarDay {
	date: string;
	label: number;
	isCurrentMonth: boolean;
}

interface RangePreset {
	label: string;
	value: RangePresetValue;
}

const props = withDefaults(defineProps<CalendarProps>(), {
	label: 'Date',
	mode: 'day',
	locale: undefined,
});

const model = defineModel<string | { from: string; to: string } | null>({
	default: null,
});

const open = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const menuStyle = ref<Record<string, string>>({});
const currentDate = ref(new Date());
const rangeDraft = ref<{ from: string; to: string }>({ from: '', to: '' });
const selectedPreset = ref<RangePresetValue | null>(null);

const rangePresets: RangePreset[] = [
	{ label: 'calendarLabels.last7Days', value: '7d' },
	{ label: 'calendarLabels.last30Days', value: '30d' },
	{ label: 'calendarLabels.last6Months', value: '6m' },
	{ label: 'calendarLabels.lastYear', value: '1y' },
];

const weekDays = computed(() =>
	Array.from({ length: 7 }, (_, index) => {
		const label = new Intl.DateTimeFormat(props.locale, {
			weekday: 'short',
		}).format(new Date(2026, 5, index + 1));
		const normalizedLabel = label.replace('.', '');

		return normalizedLabel.charAt(0).toUpperCase() + normalizedLabel.slice(1);
	}),
);

const monthOptions = computed(() =>
	Array.from({ length: 12 }, (_, month) => ({
		label: new Intl.DateTimeFormat(props.locale, { month: 'long' }).format(
			new Date(2026, month, 1),
		),
		value: month,
	})),
);

const yearOptions = computed(() => {
	const currentYear = new Date().getFullYear();
	const startYear = currentYear - 10;

	return Array.from({ length: 21 }, (_, index) => startYear + index);
});

const selectedMonth = computed({
	get: () => currentDate.value.getMonth(),
	set: value => {
		currentDate.value = new Date(
			currentDate.value.getFullYear(),
			Number(value),
			1,
		);
	},
});

const selectedYear = computed({
	get: () => currentDate.value.getFullYear(),
	set: value => {
		currentDate.value = new Date(
			Number(value),
			currentDate.value.getMonth(),
			1,
		);
	},
});

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

const addDays = (date: Date, days: number): Date => {
	const nextDate = new Date(date);
	nextDate.setDate(nextDate.getDate() + days);

	return nextDate;
};

const addMonths = (date: Date, months: number): Date => {
	const nextDate = new Date(date);
	nextDate.setMonth(nextDate.getMonth() + months);

	return nextDate;
};

const days = computed<CalendarDay[]>(() => {
	const year = currentDate.value.getFullYear();
	const month = currentDate.value.getMonth();
	const firstDay = new Date(year, month, 1);
	const totalDays = new Date(year, month + 1, 0).getDate();
	const leading = (firstDay.getDay() + 6) % 7;
	const previousMonthDays = new Date(year, month, 0).getDate();
	const currentMonthDays = Array.from({ length: totalDays }, (_, index) => {
		const date = new Date(year, month, index + 1);

		return {
			date: formatDate(date),
			label: index + 1,
			isCurrentMonth: true,
		};
	});

	const leadingDays = Array.from({ length: leading }, (_, index) => {
		const day = previousMonthDays - leading + index + 1;
		const date = new Date(year, month - 1, day);

		return {
			date: formatDate(date),
			label: day,
			isCurrentMonth: false,
		};
	});
	const visibleDays = [...leadingDays, ...currentMonthDays];
	const trailing = (7 - (visibleDays.length % 7)) % 7;
	const trailingDays = Array.from({ length: trailing }, (_, index) => {
		const day = index + 1;
		const date = new Date(year, month + 1, day);

		return {
			date: formatDate(date),
			label: day,
			isCurrentMonth: false,
		};
	});

	return [...visibleDays, ...trailingDays];
});

const updateMenuPosition = (): void => {
	const trigger = triggerRef.value;

	if (!trigger || !import.meta.client) {
		return;
	}

	const rect = trigger.getBoundingClientRect();
	const viewportPadding = 12;
	const menuWidth = Math.min(
		Math.max(rect.width, 348),
		window.innerWidth - viewportPadding * 2,
	);
	const menuHeight = props.mode === 'range' ? 432 : 376;
	const spaceBelow = window.innerHeight - rect.bottom;
	const spaceAbove = rect.top;
	const top =
		spaceBelow < menuHeight && spaceAbove > spaceBelow
			? Math.max(viewportPadding, rect.top - menuHeight - 4)
			: Math.min(rect.bottom - 16, window.innerHeight - viewportPadding);
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

const applyRangePreset = (value: RangePresetValue | null): void => {
	if (!value) {
		return;
	}

	const today = new Date();
	let fromDate = today;

	if (value === '7d') {
		fromDate = addDays(today, -6);
	}

	if (value === '30d') {
		fromDate = addDays(today, -29);
	}

	if (value === '6m') {
		fromDate = addMonths(today, -6);
	}

	if (value === '1y') {
		fromDate = addMonths(today, -12);
	}

	const range = {
		from: formatDate(fromDate),
		to: formatDate(today),
	};

	rangeDraft.value = range;
	model.value = range;
	currentDate.value = new Date(today.getFullYear(), today.getMonth(), 1);
};

const selectDay = (day: CalendarDay): void => {
	if (props.mode === 'day') {
		model.value = day.date;
		closeCalendar();
		return;
	}

	selectedPreset.value = null;

	if (!rangeDraft.value.from || rangeDraft.value.to) {
		rangeDraft.value = { from: day.date, to: '' };
		model.value = { ...rangeDraft.value };
		return;
	}

	const ordered = [rangeDraft.value.from, day.date].sort();
	rangeDraft.value = { from: ordered[0] ?? '', to: ordered[1] ?? '' };
	model.value = { ...rangeDraft.value };
	closeCalendar();
};

const clearCalendar = (): void => {
	model.value = null;
	rangeDraft.value = { from: '', to: '' };
	selectedPreset.value = null;
};

const isSelected = (day: CalendarDay): boolean => {
	if (!model.value) {
		return false;
	}

	if (typeof model.value === 'string') {
		return model.value === day.date;
	}

	return model.value.from === day.date || model.value.to === day.date;
};

const isInRange = (day: CalendarDay): boolean => {
	if (!model.value || typeof model.value === 'string') {
		return false;
	}

	return Boolean(
		model.value.from &&
		model.value.to &&
		day.date > model.value.from &&
		day.date < model.value.to,
	);
};

watch(selectedPreset, value => {
	applyRangePreset(value);
});

onBeforeUnmount(closeCalendar);
</script>

<template>
	<div ref="triggerRef" class="relative w-full">
		<Input
			:model-value="displayValue"
			:label="label"
			class="cursor-pointer"
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
				<div class="mb-4 grid grid-cols-[auto_1fr_auto_1fr] items-center gap-2">
					<button
						type="button"
						class="flex size-9 items-center justify-center rounded-xl text-foreground hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none [&_svg]:size-4"
						:aria-label="$tn('calendarLabels.previousMonth')"
						@click="moveMonth(-1)"
					>
						<ChevronLeft />
					</button>

					<Select
						v-model="selectedMonth"
						:options="monthOptions"
						:aria-label="$tn('calendarLabels.month')"
					/>

					<button
						type="button"
						class="flex size-9 items-center justify-center rounded-xl text-foreground hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none [&_svg]:size-4"
						:aria-label="$tn('calendarLabels.nextMonth')"
						@click="moveMonth(1)"
					>
						<ChevronRight />
					</button>

					<Select
						v-model="selectedYear"
						:options="
							yearOptions.map(year => ({ label: String(year), value: year }))
						"
						:aria-label="$tn('calendarLabels.year')"
					/>
				</div>

				<div v-if="mode === 'range'" class="mb-4 grid grid-cols-4 gap-2">
					<Checkbox
						v-for="preset in rangePresets"
						:key="preset.value"
						v-model="selectedPreset"
						:value="preset.value"
						:label="$tn(preset.label)"
					/>
				</div>

				<div class="grid grid-cols-7 text-center text-sm text-muted-foreground">
					<span v-for="day in weekDays" :key="day" class="py-1">
						{{ day }}
					</span>
				</div>

				<div class="mt-1 grid grid-cols-7 gap-y-1">
					<button
						v-for="day in days"
						:key="day.date"
						type="button"
						:class="
							cn(
								'flex h-10 items-center justify-center rounded-xl text-base hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none',
								!day.isCurrentMonth
									? 'text-muted-foreground/60'
									: 'text-foreground',
								isInRange(day) ? 'bg-primary/10 text-primary' : '',
								isSelected(day)
									? 'border border-primary bg-primary/5 text-primary hover:bg-primary/10'
									: '',
							)
						"
						@click="selectDay(day)"
					>
						{{ day.label }}
					</button>
				</div>

				<button
					type="button"
					class="mx-auto mt-3 block rounded-lg px-3 py-2 text-base font-medium text-destructive hover:bg-destructive/10 focus-visible:bg-destructive/10 focus-visible:outline-none"
					@click="clearCalendar"
				>
					{{ $tn('actions.clear') }}
				</button>
			</div>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'Calendar - Alixan UI',
	ogTitle: 'Calendar - Alixan UI',
	twitterTitle: 'Calendar - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Day', href: '#day' },
	{ label: 'Range', href: '#range' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const date = ref<string | null>(null);
const range = ref<{ from: string; to: string } | null>(null);

const examples = {
	day: `<script setup lang="ts">
const date = ref(null)
<\/script>

<template>
  <Calendar v-model="date" label="Date" />
</template>`,
	range: `<script setup lang="ts">
const range = ref(null)
<\/script>

<template>
  <Calendar v-model="range" label="Period" mode="range" />
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Calendar</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A readonly input-style calendar for picking one day or a date range.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="calendar" />
	</section>

	<section id="day" class="space-y-5">
		<h2 class="text-2xl font-semibold">Day</h2>
		<ExampleBlock :code="examples.day">
			<div class="w-full max-w-sm">
				<Calendar v-model="date" label="Date" />
			</div>
		</ExampleBlock>
	</section>

	<section id="range" class="space-y-5">
		<h2 class="text-2xl font-semibold">Range</h2>
		<ExampleBlock :code="examples.range">
			<div class="w-full max-w-sm">
				<Calendar v-model="range" label="Period" mode="range" />
			</div>
		</ExampleBlock>
	</section>
</template>

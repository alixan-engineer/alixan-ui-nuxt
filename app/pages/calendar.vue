<script setup lang="ts">
import { calendarPageToc } from '~/shared/examples/calendar/page-toc';
import { examples } from '~/shared/examples/calendar/usage-examples';

usePageMeta({
	title: 'componentDocs.calendar.metaTitle',
	description: 'componentDocs.calendar.description',
});

const { locale } = useI18n();
const { setToc } = usePageToc();

onMounted(() => setToc(calendarPageToc));

const date = ref<string | null>(null);
const range = ref<{ from: string; to: string } | null>(null);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.calendar') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.calendar.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="calendar" />
	</section>

	<section id="day" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.day') }}</h2>
		<ExampleBlock :code="examples.day">
			<div class="w-full max-w-sm">
				<Calendar v-model="date" label="Date" :locale="locale" />
			</div>
		</ExampleBlock>
	</section>

	<section id="range" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.range') }}</h2>
		<ExampleBlock :code="examples.range">
			<div class="w-full max-w-sm">
				<Calendar
					v-model="range"
					label="Period"
					mode="range"
					:locale="locale"
				/>
			</div>
		</ExampleBlock>
	</section>
</template>

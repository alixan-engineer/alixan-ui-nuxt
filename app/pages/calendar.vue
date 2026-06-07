<script setup lang="ts">
import { calendarPageToc } from '~/shared/page-docs/calendar/page-toc';
import { examples } from '~/shared/page-docs/calendar/usage-examples';
const { locale, t } = useI18n();

usePageMeta({
	title: t('componentDocs.calendar.metaTitle'),
	description: t('componentDocs.calendar.description'),
});

const tocLinks = calendarPageToc(t);

usePageTocLinks(tocLinks);

const date = ref<string | null>(null);
const range = ref<{ from: string; to: string } | null>(null);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.calendar') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.calendar.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="calendar" />
	</section>

	<section id="day" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.day') }}</h2>
		<ExampleBlock :code="examples.day">
			<div class="w-full max-w-sm">
				<Calendar v-model="date" label="Date" :locale="locale" />
			</div>
		</ExampleBlock>
	</section>

	<section id="range" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.range') }}</h2>
		<ExampleBlock :code="examples.range">
			<div class="w-full max-w-sm">
				<Calendar v-model="range" label="Period" mode="range" :locale="locale" />
			</div>
		</ExampleBlock>
	</section>
</template>

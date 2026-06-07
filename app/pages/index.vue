<script setup lang="ts">
import { ArrowRight, Boxes, Sparkles } from '@lucide/vue';
import { indexPageToc } from '~/shared/page-docs/index/page-toc';

const { t } = useI18n();

usePageMeta({
	title: t('homePage.metaTitle'),
	description: t('homePage.metaDescription'),
});

usePageTocLinks(indexPageToc());

const features = [
	{
		title: t('homePage.features.copied.title'),
		description: t('homePage.features.copied.description'),
	},
	{
		title: t('homePage.features.production.title'),
		description: t('homePage.features.production.description'),
	},
	{
		title: t('homePage.features.customize.title'),
		description: t('homePage.features.customize.description'),
	},
];
</script>

<template>
	<section class="min-h-[calc(100vh-10rem)] flex items-center">
		<div class="max-w-3xl space-y-8">
			<div class="inline-flex items-center gap-2 rounded-full border bg-secondary/60 px-3 py-1 text-sm text-muted-foreground">
				<Sparkles class="size-4 text-primary" />
				<span>{{ $t('homePage.badge') }}</span>
			</div>

			<div class="space-y-4">
				<h1 class="text-5xl font-semibold tracking-tight sm:text-6xl">
					{{ $t('homePage.title') }}
				</h1>
				<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
					{{ $t('homePage.description') }}
				</p>
			</div>

			<div class="flex flex-wrap gap-3">
				<Button to="/installation" color="primary">
					{{ $t('homePage.actions.getStarted') }}
					<template #trailing>
						<ArrowRight class="size-5" />
					</template>
				</Button>
				<Button to="/button" variant="outlined" color="default">
					{{ $t('homePage.actions.browseComponents') }}
				</Button>
			</div>

			<div class="grid gap-3 sm:grid-cols-3">
				<div
					v-for="feature in features"
					:key="feature.title"
					class="rounded-2xl border bg-background p-4"
				>
					<Boxes class="mb-3 size-5 text-primary" />
					<h2 class="font-medium">{{ feature.title }}</h2>
					<p class="mt-2 text-sm leading-6 text-muted-foreground">
						{{ feature.description }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

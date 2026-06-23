<script setup lang="ts">
import { ArrowRight, Boxes, Sparkles } from '@lucide/vue';

usePageMeta({
	title: 'homePage.metaTitle',
	description: 'homePage.metaDescription',
});

const { setToc } = usePageToc();

onMounted(() => setToc([]));

const features = [
	{
		title: 'homePage.features.copied.title',
		description: 'homePage.features.copied.description',
	},
	{
		title: 'homePage.features.production.title',
		description: 'homePage.features.production.description',
	},
	{
		title: 'homePage.features.customize.title',
		description: 'homePage.features.customize.description',
	},
];
</script>

<template>
	<section class="min-h-[calc(100vh-10rem)] flex items-center">
		<div class="max-w-3xl space-y-8">
			<div
				class="inline-flex items-center gap-2 rounded-full border bg-secondary/60 px-3 py-1 text-sm text-muted-foreground"
			>
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
				<Button :to="$localePath('/installation')" color="primary">
					{{ $t('homePage.actions.getStarted') }}
					<template #trailing>
						<ArrowRight class="size-5" />
					</template>
				</Button>
				<Button :to="$localePath('/button')" variant="outlined" color="default">
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
					<h2 class="font-medium">{{ $t(feature.title) }}</h2>
					<p class="mt-2 text-sm leading-6 text-muted-foreground">
						{{ $t(feature.description) }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ArrowRight, Boxes, Sparkles } from '@lucide/vue';

usePageMeta({
	title: 'Alixan UI - Nuxt Components',
	description:
		'A modern UI component system for Nuxt 4, Vue 3 and TypeScript.',
});

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc([]);
});

onBeforeUnmount(() => {
	clearToc();
});
</script>

<template>
	<section class="min-h-[calc(100vh-10rem)] flex items-center">
		<div class="max-w-3xl space-y-8">
			<div class="inline-flex items-center gap-2 rounded-full border bg-secondary/60 px-3 py-1 text-sm text-muted-foreground">
				<Sparkles class="size-4 text-primary" />
				<span>Nuxt 4, Vue 3, TypeScript</span>
			</div>

			<div class="space-y-4">
				<h1 class="text-5xl font-semibold tracking-tight sm:text-6xl">
					Alixan UI components for Nuxt.
				</h1>
				<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
					This site is the documentation home for Alixan UI: a clean,
					minimal and production-ready component system built for Nuxt apps.
				</p>
			</div>

			<div class="flex flex-wrap gap-3">
				<Button to="/installation" color="primary">
					Get started
					<template #trailing>
						<ArrowRight class="size-5" />
					</template>
				</Button>
				<Button to="/button" variant="outlined" color="default">
					Browse components
				</Button>
			</div>

			<div class="grid gap-3 sm:grid-cols-3">
				<div class="rounded-2xl border bg-background p-4">
					<Boxes class="mb-3 size-5 text-primary" />
					<h2 class="font-medium">Copied to your app</h2>
					<p class="mt-2 text-sm leading-6 text-muted-foreground">
						The CLI installs component source files directly into your Nuxt
						project.
					</p>
				</div>
				<div class="rounded-2xl border bg-background p-4">
					<Boxes class="mb-3 size-5 text-primary" />
					<h2 class="font-medium">Production-ready</h2>
					<p class="mt-2 text-sm leading-6 text-muted-foreground">
						Components are typed, accessible and designed around a consistent
						visual language.
					</p>
				</div>
				<div class="rounded-2xl border bg-background p-4">
					<Boxes class="mb-3 size-5 text-primary" />
					<h2 class="font-medium">Easy to customize</h2>
					<p class="mt-2 text-sm leading-6 text-muted-foreground">
						No heavy abstractions. Tailwind classes and CSS variables stay
						close to the component.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

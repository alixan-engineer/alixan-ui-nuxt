<script setup lang="ts">
import { ArrowRight, Download, Plus } from 'lucide-vue-next';

const variants = [
	{ label: 'Default', variant: 'filled', color: 'default' },
	{ label: 'Primary', variant: 'filled', color: 'primary' },
	{ label: 'Secondary', variant: 'filled', color: 'secondary' },
	{ label: 'Destructive', variant: 'filled', color: 'destructive' },
	{ label: 'Outlined', variant: 'outlined', color: 'default' },
	{ label: 'Ghost', variant: 'ghost', color: 'primary' },
] as const;
</script>

<template>
	<main
		class="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.08),_transparent_22%),linear-gradient(180deg,var(--background)_0%,color-mix(in_srgb,var(--background)_92%,var(--secondary))_100%)]"
	>
		<div class="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 sm:py-14">
			<header class="space-y-4">
				<div class="flex flex-wrap items-center gap-3">
					<span
						class="inline-flex items-center rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_78%,white)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)] shadow-sm backdrop-blur"
					>
						Alixan UI
					</span>
					<span class="text-sm text-[var(--muted-foreground)]">
						Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS
					</span>
				</div>

				<div class="space-y-3">
					<h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
						Button, который уже готов к production и генерации через CLI.
					</h1>
					<p class="max-w-2xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
						Компонент поддерживает variants, sizes, disabled state, slots и доступность, оставаясь при этом самодостаточным.
					</p>
				</div>
			</header>

			<section class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
				<div class="rounded-[calc(var(--radius)+0.8rem)] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_84%,white)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
					<div class="mb-6 flex items-center justify-between gap-4">
						<div>
							<h2 class="text-xl font-semibold">Preview</h2>
							<p class="mt-1 text-sm text-[var(--muted-foreground)]">
								Единый визуальный язык для основных сценариев.
							</p>
						</div>

						<Button variant="ghost" color="default" size="sm" label="components/ui/Button.vue" />
					</div>

					<div class="space-y-6">
						<div class="flex flex-wrap gap-3">
							<Button
								v-for="item in variants"
								:key="`${item.variant}-${item.color}`"
								:variant="item.variant"
								:color="item.color"
							>
								{{ item.label }}
							</Button>
						</div>

						<div class="flex flex-wrap items-center gap-3">
							<Button size="sm" color="primary">Small</Button>
							<Button size="md" color="primary">Medium</Button>
							<Button size="lg" color="primary">
								<template #trailing>
									<ArrowRight class="size-4" />
								</template>
								Large
							</Button>
						</div>

						<div class="flex flex-wrap items-center gap-3">
							<Button color="primary">
								<template #leading>
									<Download class="size-4" />
								</template>
								Скачать
							</Button>
							<Button variant="outlined" color="default" disabled>
								<template #leading>
									<Plus class="size-4" />
								</template>
								Disabled
							</Button>
						</div>
					</div>
				</div>

				<div class="space-y-6">
					<div class="rounded-[calc(var(--radius)+0.8rem)] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_88%,white)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
						<h2 class="text-lg font-semibold">API</h2>
						<div class="mt-4 space-y-4 text-sm text-[var(--muted-foreground)]">
							<div>
								<p class="font-medium text-[var(--foreground)]">Variants</p>
								<p>`filled`, `outlined`, `ghost`</p>
							</div>
							<div>
								<p class="font-medium text-[var(--foreground)]">Colors</p>
								<p>`default`, `primary`, `secondary`, `destructive`</p>
							</div>
							<div>
								<p class="font-medium text-[var(--foreground)]">Sizes</p>
								<p>`sm`, `md`, `lg`</p>
							</div>
							<div>
								<p class="font-medium text-[var(--foreground)]">Slots</p>
								<p>`default`, `leading`, `trailing`</p>
							</div>
						</div>
					</div>

					<div class="rounded-[calc(var(--radius)+0.8rem)] border border-[var(--border)] bg-[var(--foreground)] p-6 text-[var(--background)] shadow-[0_18px_50px_rgba(15,23,42,0.14)]">
						<p class="text-sm text-white/65">CLI</p>
						<pre class="mt-3 overflow-x-auto rounded-2xl bg-white/6 p-4 text-sm text-white/90"><code>npx alixan-ui add button</code></pre>
						<p class="mt-4 text-sm leading-6 text-white/70">
							Команда читает registry JSON и копирует готовый `.vue`-шаблон прямо в `components/ui`.
						</p>
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

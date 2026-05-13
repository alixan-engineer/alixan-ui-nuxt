<template>
	<main class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_32%),linear-gradient(180deg,var(--background)_0%,color-mix(in_srgb,var(--background)_92%,var(--secondary))_100%)]">
		<div class="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16">
			<div class="max-w-3xl space-y-6">
				<span
					class="inline-flex items-center rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_75%,white)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)] shadow-sm backdrop-blur"
				>
					Alixan UI for Nuxt 4
				</span>

				<div class="space-y-4">
					<h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
						Современная UI-система в духе shadcn/ui, но нативно для Nuxt.
					</h1>
					<p class="max-w-2xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
						Production-ready компоненты, прозрачная структура и CLI, который копирует исходники прямо в проект без привязки к `node_modules`.
					</p>
				</div>

				<div class="flex flex-wrap items-center gap-3">
					<Button color="primary" size="lg" label="Открыть документацию" @click="navigateTo('/docs')" />
					<Button variant="outlined" color="default" size="lg" label="Посмотреть Button API" @click="navigateTo('/docs')" />
				</div>
			</div>
		</div>
	</main>
</template>

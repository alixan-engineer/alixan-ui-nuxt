<script setup lang="ts">
import { Github } from 'lucide-vue-next';
</script>

<template>
	<header class="sticky top-0 z-30 bg-background">
		<div
			class="w-full max-w-container min-h-14 mx-auto px-4 flex items-center gap-4"
		>
			<NuxtLink to="/" class="flex items-center gap-2">
				<img
					src="/favicon.svg"
					alt="Alixan UI"
					priority
					width="36"
					height="36"
					class="size-9"
				/>
				<span class="text-xl font-semibold tracking-wider">Alixan UI</span>
			</NuxtLink>

			<div class="ml-auto hidden items-center gap-3 lg:flex">
				<a
					class="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
					href="https://github.com"
					target="_blank"
					rel="noreferrer"
				>
					<Github class="size-4 text-foreground" />
					<span>10.0k</span>
				</a>
			</div>
		</div>
	</header>
</template>

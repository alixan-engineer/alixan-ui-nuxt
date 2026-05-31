<script setup lang="ts">
import { ArrowLeft, Settings } from '@lucide/vue';
</script>

<template>
	<header class="sticky top-0 z-30 bg-background">
		<div
			class="w-full max-w-container min-h-14 mx-auto px-4 flex items-center gap-4"
		>
			<IconButton variant="ghost" color="default" href="https://ui.alixan.kz/">
				<ArrowLeft />
			</IconButton>
			<NuxtLink to="/" class="flex items-center gap-2">
				<img
					src="/favicon.svg"
					alt="Alixan UI"
					priority
					width="32"
					height="32"
					class="size-8"
				/>
				<span class="text-xl font-semibold tracking-wider">Alixan UI</span>
			</NuxtLink>
			<div class="flex-1" />
			<IconButton variant="ghost" color="default">
				<Settings />
			</IconButton>
		</div>
	</header>
</template>

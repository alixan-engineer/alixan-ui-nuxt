<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
	error: NuxtError;
}>();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
	<div class="min-h-screen flex items-center justify-center px-6">
		<div class="max-w-md text-center space-y-5">
			<p class="text-sm font-medium text-muted-foreground">
				{{ error.statusCode }}
			</p>

			<h1 class="text-4xl font-semibold">Page not found</h1>

			<p class="text-muted-foreground">
				The page you are looking for does not exist or has been moved.
			</p>

			<Button color="primary" @click="handleError"> Go home </Button>
		</div>
	</div>
</template>

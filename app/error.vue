<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
	error: NuxtError;
}>();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
	<Empty
		:title="error.status === 404 ? 'Page not found' : 'Something went wrong'"
		:description="
			error.status === 404
				? 'The page you are looking for does not exist or has been moved.'
				: 'An unexpected error occurred while loading this page.'
		"
		button="Go home"
		@action="handleError"
	>
		<Lottie name="error" :loop="false" width="140px" height="140px" />
	</Empty>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
	error: NuxtError;
}>();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
	<Empty
		:title="
			error.status === 404
				? $tn('errorPage.notFoundTitle')
				: $tn('errorPage.defaultTitle')
		"
		:description="
			error.status === 404
				? $tn('errorPage.notFoundDescription')
				: $tn('errorPage.defaultDescription')
		"
		:button="$tn('errorPage.goHome')"
		@action="handleError"
	>
		<div
			class="flex size-37 items-center justify-center rounded-4xl bg-secondary text-primary"
		>
			<Lottie name="error" :loop="false" width="140px" height="140px" />
		</div>
	</Empty>
</template>

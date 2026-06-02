<script setup lang="ts">
defineProps<{ code: string }>();
</script>

<template>
	<div class="island min-w-0 divide-y overflow-hidden">
		<div class="min-h-65 p-8 flex items-center justify-center">
			<slot />
		</div>

		<div class="relative min-w-0">
			<CopyButton
				:text="code"
				class="absolute right-3 top-3"
				label="Copy code"
			/>
			<pre class="overflow-x-auto p-6 pr-12 text-sm leading-7"><code>{{ code }}</code></pre>
		</div>
	</div>
</template>

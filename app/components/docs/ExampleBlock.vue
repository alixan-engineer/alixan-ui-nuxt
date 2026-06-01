<script setup lang="ts">
defineProps<{ code: string }>();
</script>

<template>
	<div class="island divide-y">
		<div class="min-h-65 p-8 flex items-center justify-center">
			<slot />
		</div>

		<div class="relative">
			<CopyButton
				:text="code"
				class="absolute right-3 top-3"
				label="Copy code"
			/>
			<pre class="p-6 pr-12 text-sm leading-7"><code>{{ code }}</code></pre>
		</div>
	</div>
</template>

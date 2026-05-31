<script setup lang="ts">
import { Copy } from '@lucide/vue';

defineProps<{ code: string }>();
</script>

<template>
	<div class="island divide-y">
		<div class="min-h-65 p-8 flex items-center justify-center">
			<slot />
		</div>

		<div class="relative">
			<Copy class="absolute right-4 top-4 size-5 text-muted-foreground" />
			<pre class="p-6 pr-12 text-sm leading-7"><code>{{ code }}</code></pre>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Copy } from 'lucide-vue-next';

interface ExampleBlockProps {
	code: string;
}

defineProps<ExampleBlockProps>();
</script>

<template>
	<div class="overflow-hidden rounded-xl border bg-background">
		<div class="flex min-h-[260px] items-center justify-center p-8">
			<slot />
		</div>

		<div class="relative border-t bg-secondary/60">
			<Copy class="absolute right-4 top-4 size-4 text-muted-foreground" />
			<pre class="overflow-x-auto p-6 pr-12 text-sm leading-7"><code>{{ code }}</code></pre>
		</div>
	</div>
</template>

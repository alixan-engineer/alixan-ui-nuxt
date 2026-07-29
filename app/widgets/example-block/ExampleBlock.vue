<script setup lang="ts">
withDefaults(
	defineProps<{
		code: string;
		path?: string;
		preview?: boolean;
	}>(),
	{
		preview: true,
	},
);
</script>

<template>
	<Island class="min-w-0" content-class="divide-y p-0">
		<div v-if="path" class="px-4 py-3 border-b">
			{{ path }}
		</div>

		<div v-if="preview" class="min-h-65 p-8 flex items-center justify-center">
			<slot />
		</div>

		<div class="relative min-w-0">
			<CopyButton
				:text="code"
				class="absolute right-3 top-3"
				label="Copy code"
			/>
			<pre
				class="overflow-x-auto p-4 pr-12 text-sm leading-7"
			><code>{{ code }}</code></pre>
		</div>
	</Island>
</template>

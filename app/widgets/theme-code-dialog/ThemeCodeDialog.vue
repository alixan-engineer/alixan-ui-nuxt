<script setup lang="ts">
interface ThemeCodeDialogData {
	code: string;
}

const props = defineProps<{
	data: ThemeCodeDialogData;
	close: () => void;
}>();

const toast = useToast();
const { $tn } = useNuxtApp();

const copyCode = async (): Promise<void> => {
	if (!import.meta.client) {
		return;
	}

	await navigator.clipboard.writeText(props.data.code);
	toast.open($tn('themeSettings.copiedStyle'), 'success');
};
</script>

<template>
	<div class="size-full flex flex-col divide-y">
		<pre class="flex-1 overflow-auto p-4 text-sm leading-7"><code>{{ data.code }}</code></pre>
		<div class="flex items-center justify-end p-4">
			<Button color="primary" @click="copyCode">
				{{ $tn('themeSettings.copy') }}
			</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Check, Copy } from '@lucide/vue';

interface CopyButtonProps {
	text: string;
	label?: string;
	copiedLabel?: string;
}

const props = withDefaults(defineProps<CopyButtonProps>(), {
	label: 'Copy',
	copiedLabel: 'Copied',
});

const copied = ref(false);
const toast = useToast();

const copyText = async (): Promise<void> => {
	if (!import.meta.client) {
		return;
	}

	await navigator.clipboard.writeText(props.text);
	copied.value = true;
	toast.open('Code copied', 'success');

	window.setTimeout(() => {
		copied.value = false;
	}, 1200);
};
</script>

<template>
	<IconButton
		variant="ghost"
		color="default"
		size="sm"
		:label="copied ? copiedLabel : label"
		@click="copyText"
	>
		<Check v-if="copied" />
		<Copy v-else />
	</IconButton>
</template>

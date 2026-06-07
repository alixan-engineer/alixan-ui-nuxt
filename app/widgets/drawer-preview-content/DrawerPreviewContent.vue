<script setup lang="ts">
interface DrawerPreviewData {
	workspaceName: string;
}

defineProps<{
	data: DrawerPreviewData;
	close: () => void;
}>();
</script>

<template>
	<div class="size-full flex flex-col divide-y">
		<div class="flex-1 space-y-3 p-4">
			<Input :model-value="data.workspaceName" label="Workspace name" />
			<Switch label="Enable notifications" />
		</div>
		<div class="flex items-center justify-end gap-2 p-4">
			<Button variant="outlined" label="Cancel" @click="close" />
			<Button label="Save" @click="close" />
		</div>
	</div>
</template>

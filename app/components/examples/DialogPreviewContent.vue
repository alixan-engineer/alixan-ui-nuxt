<script setup lang="ts">
interface DialogPreviewData {
	projectId: number;
}

const props = defineProps<{
	data: DialogPreviewData;
	close: () => void;
}>();

const projectId = ref<number | null>(null);

onMounted(() => {
	projectId.value = props.data.projectId;
});
</script>

<template>
	<div class="size-full flex flex-col divide-y">
		<div class="flex-1 p-4">
			<Input v-model="projectId" label="Project ID" />
		</div>
		<div class="flex items-center justify-end gap-2 p-4">
			<Button variant="outlined" label="Cancel" @click="close" />
			<Button label="Create" @click="close" />
		</div>
	</div>
</template>

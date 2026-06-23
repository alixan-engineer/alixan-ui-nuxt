<script setup lang="ts">
interface DialogPreviewData {
	projectName: string;
	onSave: (value: string) => void;
}

const props = defineProps<{
	data: DialogPreviewData;
	close: () => void;
}>();

const projectName = ref('');

onMounted(() => {
	projectName.value = props.data.projectName;
});

const save = (): void => {
	props.data.onSave(projectName.value);
	props.close();
};
</script>

<template>
	<div class="size-full flex flex-col divide-y">
		<div class="flex-1 p-6">
			<Input v-model="projectName" label="dialogPreview.projectName" />
		</div>
		<div class="grid grid-cols-2 gap-2 p-4">
			<Button variant="outlined" label="dialogPreview.cancel" @click="close" />
			<Button label="dialogPreview.save" @click="save" />
		</div>
	</div>
</template>

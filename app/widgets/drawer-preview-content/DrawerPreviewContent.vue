<script setup lang="ts">
interface DrawerPreviewData {
	projectName: string;
	onSave: (value: string) => void;
}

const props = defineProps<{
	data: DrawerPreviewData;
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
		<div class="flex-1 space-y-3 p-4">
			<Input v-model="projectName" label="drawerPreview.projectName" />
		</div>
		<div class="grid grid-cols-2 gap-2 p-4">
			<Button variant="outlined" label="drawerPreview.cancel" @click="close" />
			<Button label="drawerPreview.save" @click="save" />
		</div>
	</div>
</template>

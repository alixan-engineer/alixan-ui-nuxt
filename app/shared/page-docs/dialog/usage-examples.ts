export const hostCode = `// app.vue
// Add DialogHost once near the root of your app.
<template>
  <NuxtPage />
  <DialogHost />
</template>`;
export const openCode = `// example.vue
<script setup lang="ts">
import ProjectDialog from '~/components/ProjectDialog.vue'

const dialog = useDialog()
const projectName = ref('Alixan UI')

const openDialog = () => {
  dialog.open(ProjectDialog, {
    width: '520px', // maxWidth
    height: '400px', // maxHeight
    title: 'Create project',
    data: {
      projectName: 'Alixan UI',
      onSave: (value: string) => {
        projectName.value = value
      },
    },
  })
}
<\/script>

<template>
  <Button @click="openDialog">Open dialog</Button>
</template>`;
export const contentCode = `// ProjectDialog.vue
<script setup lang="ts">
interface ProjectDialogData {
  projectName: string
  onSave: (value: string) => void
}

const props = defineProps<{
  data: ProjectDialogData
  close: () => void
}>()

const projectName = ref('')

onMounted(() => {
  projectName.value = props.data.projectName
})

const save = () => {
  props.data.onSave(projectName.value)
  props.close()
}
<\/script>

<template>
  <div class="size-full flex flex-col divide-y">
    <div class="flex-1 p-4">
      <Input v-model="projectName" label="Project name" />
    </div>

    <div class="flex items-center justify-end gap-2 p-4">
      <Button variant="outlined" label="Cancel" @click="close" />
      <Button label="Save" @click="save" />
    </div>
  </div>
</template>`;

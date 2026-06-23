export const hostCode = `<template>
  <NuxtPage />
  <DialogHost /> <!-- Add DialogHost once near the root. It renders only on the client. -->
</template>`;

export const openCode = `<script setup lang="ts">
import ProjectDialog from '~/components/ProjectDialog.vue'

const dialog = useDialog()
const projectName = ref('Alixan UI')

const openDialog = () => {
  dialog.open(ProjectDialog, {
    width: '420px', // maxWidth
    height: '400px', // maxHeight
    title: 'dialogPreview.title',
    data: {
      projectName: projectName.value,
      onSave: (value: string) => {
        projectName.value = value
      },
    },
  })
}
<\/script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <Button @click="openDialog">
      {{ $t('dialogPreview.openDialog') }}
    </Button>
    <p class="text-sm text-muted-foreground">
      {{ $t('dialogPreview.projectName') }}:
      <span class="font-medium text-foreground">{{ projectName }}</span>
    </p>
  </div>
</template>`;

export const contentCode = `<script setup lang="ts">
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
    <div class="flex-1 px-4 py-6">
      <Input v-model="projectName" label="dialogPreview.projectName" />
    </div>

    <div class="grid grid-cols-2 gap-2 p-4">
      <Button variant="outlined" label="dialogPreview.cancel" @click="close" />
      <Button label="dialogPreview.save" @click="save" />
    </div>
  </div>
</template>`;

export const appCode = `<template>
  <NuxtPage />
  <DrawerHost /> <!-- Add DrawerHost once near the root of your app. -->
</template>`;

export const usageCode = `<script setup lang="ts">
import WorkspaceDrawer from '~/components/WorkspaceDrawer.vue'

const drawer = useDrawer()
const projectName = ref('Alixan UI')

const openDrawer = () => {
  drawer.open(WorkspaceDrawer, {
    width: '420px',
    height: '360px',
    position: 'bottom',
    title: 'drawerPreview.title',
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
    <Button @click="openDrawer">
      {{ $tn('drawerPreview.openDrawer') }}
    </Button>
    <p class="text-sm text-muted-foreground">
      {{ $tn('drawerPreview.projectName') }}:
      <span class="font-medium text-foreground">{{ projectName }}</span>
    </p>
  </div>
</template>`;

export const contentCode = `<script setup lang="ts">
interface WorkspaceDrawerData {
  projectName: string
  onSave: (value: string) => void
}

const props = defineProps<{
  data: WorkspaceDrawerData
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
    <div class="flex-1 space-y-3 p-4">
      <Input v-model="projectName" label="drawerPreview.projectName" />
    </div>

    <div class="grid grid-cols-2 gap-2 p-4">
      <Button variant="outlined" label="drawerPreview.cancel" @click="close" />
      <Button label="drawerPreview.save" @click="save" />
    </div>
  </div>
</template>`;

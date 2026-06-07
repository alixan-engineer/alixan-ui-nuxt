export const appCode = `// app.vue
// Add DrawerHost once near the root of your app.
<template>
  <NuxtPage />
  <DrawerHost />
</template>`;
export const usageCode = `// example.vue
// Open any Vue component as a drawer and pass options/data.
<script setup lang="ts">
import WorkspaceDrawer from '~/components/WorkspaceDrawer.vue'

const drawer = useDrawer()

const openDrawer = () => {
  drawer.open(WorkspaceDrawer, {
    width: '420px',
    height: '360px',
    position: 'bottom',
    title: 'Workspace settings',
    data: {
      workspaceName: 'Alixan UI',
    },
  })
}
<\/script>

<template>
  <Button @click="openDrawer">Open drawer</Button>
</template>`;
export const contentCode = `// WorkspaceDrawer.vue
// This component is rendered inside DrawerHost.
// It receives data and close from drawer.open().
<script setup lang="ts">
interface WorkspaceDrawerData {
  workspaceName: string
}

defineProps<{
  data: WorkspaceDrawerData
  close: () => void
}>()
<\/script>

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
</template>`;

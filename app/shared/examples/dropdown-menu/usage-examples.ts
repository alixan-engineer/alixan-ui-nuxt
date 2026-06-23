export const code = `<script setup lang="ts">
const open = ref(false)

const data = {
  workspace: 'Alixan UI',
}
<\/script>

<template>
  <DropdownMenu
    v-model:open="open"
    width="260px"
    height="320px"
    position="bottomLeft"
  >
    <template #trigger>
      <Button variant="outlined">
        {{ $t('dropdownPreview.openMenu') }}
      </Button>
    </template>

    <template #default>
      <div class="p-1">
        <Button class="w-full justify-start" size="sm" variant="ghost">
          {{ $t('dropdownPreview.profile') }}
        </Button>
        <Button class="w-full justify-start" size="sm" variant="ghost">
          {{ $t('dropdownPreview.settings') }}
        </Button>
        <Button class="w-full justify-start" size="sm" variant="ghost" color="destructive">
          {{ $t('dropdownPreview.deleteWorkspace', { name: data.workspace }) }}
        </Button>
        <Button class="mt-1 w-full" size="sm" variant="ghost" @click="open = false">
          {{ $t('actions.close') }}
        </Button>
      </div>
    </template>
  </DropdownMenu>
</template>`;

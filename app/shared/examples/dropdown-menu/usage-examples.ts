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
        Open menu
      </Button>
    </template>

    <template #default>
      <div class="p-1">
        <button class="flex h-9 w-full items-center rounded-xl px-3 text-left text-md hover:bg-secondary">
          Profile
        </button>
        <button class="flex h-9 w-full items-center rounded-xl px-3 text-left text-md hover:bg-secondary">
          Settings
        </button>
        <button class="flex h-9 w-full items-center rounded-xl px-3 text-left text-md text-destructive hover:bg-destructive/10">
          Delete {{ data.workspace }}
        </button>
        <Button class="mt-1 w-full" size="sm" variant="ghost" @click="open = false">
          Close
        </Button>
      </div>
    </template>
  </DropdownMenu>
</template>`;

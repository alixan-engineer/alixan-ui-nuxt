export const installCode = `npm install @lucide/vue`;

export const lucideCode = `<script setup lang="ts">
import { Bell, Search } from '@lucide/vue'
import Button from '@/components/ui/button/Button.vue'
import IconButton from '@/components/ui/icon-button/IconButton.vue'
<\/script>

<template>
  <Button>
    <template #leading>
      <Search class="size-5" />
    </template>
      Search
	</Button>

  <IconButton>
    <Bell />
  </IconButton>
</template>`;

export const mdiCode = `npx nuxi module add nuxt-mdi`;

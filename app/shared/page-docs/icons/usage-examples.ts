export const installCode = `npm install @lucide/vue`;
export const lucideCode = `<script setup lang="ts">
import { Bell, Search } from '@lucide/vue'
<\/script>

<template>
  <Button>
		<template #leading>
			<Search class="size-5" />
		</template>
		Search
	</Button>

  <IconButton label="Notifications">
    <Bell />
  </IconButton>
</template>`;
export const mdiCode = `npx nuxi module add nuxt-mdi`;

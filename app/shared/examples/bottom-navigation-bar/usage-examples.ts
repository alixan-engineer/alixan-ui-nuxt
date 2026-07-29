export const usage = `<script setup lang="ts">
import { CalendarDays, House, UserRound } from '@lucide/vue';

const selected = ref(0);
const items = [
  { label: 'bottomNavigation.home', icon: House },
  { label: 'bottomNavigation.events', icon: CalendarDays },
  { label: 'bottomNavigation.profile', icon: UserRound },
];
const selectedTitle = computed(
  () => items[selected.value]?.label ?? 'bottomNavigation.home',
);
</script>

<template>
  <div class="flex h-96 w-full max-w-110 flex-col overflow-hidden rounded-2xl border">
    <AppBar variant="compact" :title="selectedTitle" />
    <main class="min-h-0 flex-1 overflow-y-auto">
      <NuxtPage />
    </main>
    <BottomNavigationBar v-model="selected" :items="items" />
  </div>
</template>`;

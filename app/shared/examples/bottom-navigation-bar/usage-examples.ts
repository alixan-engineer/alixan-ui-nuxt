export const usage = `<script setup lang="ts">
import { CalendarDays, House, UserRound } from '@lucide/vue';

const selected = ref(0);
const items = [
  { label: 'bottomNavigation.home', icon: House },
  { label: 'bottomNavigation.events', icon: CalendarDays },
  { label: 'bottomNavigation.profile', icon: UserRound },
];
</script>

<template>
  <BottomNavigationBar v-model="selected" :items="items" />
</template>`;

export const usage = `<script setup lang="ts">
import { CalendarDays, House, UserRound } from '@lucide/vue';
import AppBar from '@/components/ui/app-bar/AppBar.vue';
import BottomNavigationBar from '@/components/ui/bottom-navigation-bar/BottomNavigationBar.vue';
import Scaffold from '@/components/ui/scaffold/Scaffold.vue';

const items = [
	{ id: 'home', label: 'bottomNavigation.home', icon: House },
	{ id: 'events', label: 'bottomNavigation.events', icon: CalendarDays },
	{ id: 'profile', label: 'bottomNavigation.profile', icon: UserRound },
];

const selected = ref<string>('home');

const selectedItem = computed(() =>
	items.find((item) => item.id === selected.value),
);
</script>

<template>
	<Scaffold>
		<template #app-bar>
			<AppBar
				:title="selectedItem?.label ?? ''"
				title-align="center"
			/>
		</template>

		<template #body>
			<NuxtPage />
		</template>

		<template #bottom-navigation-bar>
			<BottomNavigationBar
				v-model="selected"
				:items="items"
			/>
		</template>
	</Scaffold>
</template>`;

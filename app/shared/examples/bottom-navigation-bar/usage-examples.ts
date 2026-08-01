export const usage = `<script setup lang="ts">
import { CalendarDays, House, UserRound } from '@lucide/vue';

const selected = ref<number>(0);

const items = [
	{ label: 'bottomNavigation.home', icon: House },
	{ label: 'bottomNavigation.events', icon: CalendarDays },
	{ label: 'bottomNavigation.profile', icon: UserRound },
];
</script>

<template>
	<Scaffold>
		<template #app-bar>
			<AppBar
				variant="compact"
				:title="items[selected]!.label"
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

<script setup lang="ts">
import { LogOut, Settings, UserRound } from '@lucide/vue';
</script>

<template>
	<DropdownMenu width="300px" position="bottomRight">
		<template #trigger>
			<button type="button" :aria-label="$t('sidebarDemo.accountMenu')" class="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
				<Avatar :name="$t('userMenu.userName')" size="sm" />
			</button>
		</template>
		<div class="border-b p-3">
			<div class="flex items-center gap-3">
				<Avatar :name="$t('userMenu.userName')" />
				<div class="min-w-0">
					<p class="truncate font-semibold">{{ $t('userMenu.userName') }}</p>
					<p class="text-sm text-muted-foreground">{{ $t('userMenu.administrator') }}</p>
				</div>
			</div>
		</div>
		<div class="space-y-1 p-1">
			<Button variant="ghost" size="md" class="w-full justify-start">
				<template #leading><UserRound /></template>{{ $t('sidebarDemo.profile') }}
			</Button>
			<Button variant="ghost" size="md" class="w-full justify-start">
				<template #leading><Settings /></template>{{ $t('sidebarDemo.settings') }}
			</Button>
		</div>
		<div class="border-t p-1">
			<Button variant="ghost" color="destructive" size="md" class="w-full justify-start">
				<template #leading><LogOut /></template>{{ $t('sidebarDemo.signOut') }}
			</Button>
		</div>
	</DropdownMenu>
</template>

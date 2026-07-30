export const layoutUsage = `<script setup lang="ts">
import { BarChart3, House, LogOut, Menu, Settings, ShoppingBag, UserRound, Users } from '@lucide/vue';

const open = ref(false);
const route = useRoute();
const pages = [
  { title: 'sidebarDemo.dashboard', to: '/', icon: House },
  { title: 'sidebarDemo.orders', to: '/orders', icon: ShoppingBag },
  { title: 'sidebarDemo.analytics', to: '/analytics', icon: BarChart3 },
  { title: 'sidebarDemo.team', to: '/team', icon: Users },
  { title: 'sidebarDemo.settings', to: '/settings', icon: Settings },
];
const sections = [
  { label: 'sidebarDemo.workspace', pages: pages.slice(0, 3) },
  { label: 'sidebarDemo.management', pages: pages.slice(3) },
];
const title = computed(() => String(route.meta.title ?? 'sidebarDemo.dashboard'));
</script>

<template>
  <Sidebar v-model:open="open">
    <template #logo>
      <NuxtLink to="/" class="flex items-center gap-2 font-semibold">
        <img src="/icons/icon-192.png" alt="" class="size-8" />
        <span>Alixan UI</span>
      </NuxtLink>
    </template>
    <template #navigation="{ close }">
      <div class="space-y-8">
        <div v-for="section in sections" :key="section.label" class="space-y-1">
          <p class="px-3 text-xs font-semibold uppercase text-muted-foreground">
            {{ $t(section.label) }}
          </p>
          <Button
            v-for="page in section.pages"
            :key="page.to"
            :to="page.to"
            variant="ghost"
            size="sm"
            class="w-full justify-start"
            @click="close"
          >
            <template #leading><component :is="page.icon" class="size-4" /></template>
            {{ $t(page.title) }}
          </Button>
        </div>
      </div>
    </template>
    <template #app-bar="{ toggle }">
      <AppBar variant="silver" :title="title">
        <template #leading><IconButton :aria-label="$t('appBar.openMenu')" @click="toggle"><Menu /></IconButton></template>
        <template #trailing>
          <DropdownMenu width="300px" position="bottomRight">
            <template #trigger>
              <button type="button" :aria-label="$t('sidebarDemo.accountMenu')" class="rounded-full">
                <Avatar :name="$t('userMenu.userName')" size="sm" />
              </button>
            </template>
            <div class="flex items-center gap-3 border-b p-3">
              <Avatar :name="$t('userMenu.userName')" />
              <div>
                <p class="font-semibold">{{ $t('userMenu.userName') }}</p>
                <p class="text-sm text-muted-foreground">{{ $t('userMenu.administrator') }}</p>
              </div>
            </div>
            <div class="space-y-1 p-1">
              <Button variant="ghost" size="md" class="w-full justify-start">
                <template #leading><UserRound /></template>
                {{ $t('sidebarDemo.profile') }}
              </Button>
              <Button variant="ghost" size="md" class="w-full justify-start">
                <template #leading><Settings /></template>
                {{ $t('sidebarDemo.settings') }}
              </Button>
            </div>
            <div class="border-t p-1">
              <Button variant="ghost" color="destructive" size="md" class="w-full justify-start">
                <template #leading><LogOut /></template>
                {{ $t('sidebarDemo.signOut') }}
              </Button>
            </div>
          </DropdownMenu>
        </template>
      </AppBar>
    </template>

    <NuxtPage />
  </Sidebar>
</template>`;

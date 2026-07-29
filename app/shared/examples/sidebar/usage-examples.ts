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
const title = computed(() => String(route.meta.title ?? 'sidebarDemo.dashboard'));
</script>

<template>
  <Sidebar v-model:open="open">
    <template #navigation="{ close }">
      <Button v-for="page in pages" :key="page.to" :to="page.to" variant="ghost" class="w-full justify-start" @click="close">
        <template #leading><component :is="page.icon" /></template>
        {{ $t(page.title) }}
      </Button>
    </template>
    <template #app-bar="{ toggle }">
      <AppBar variant="silver" :title="title">
        <template #leading><IconButton :aria-label="$t('appBar.openMenu')" @click="toggle"><Menu /></IconButton></template>
        <template #trailing>
          <DropdownMenu width="300px" position="bottomRight">
            <template #trigger><button type="button" :aria-label="$t('sidebarDemo.accountMenu')" class="rounded-full"><Avatar :name="$t('userMenu.userName')" size="sm" /></button></template>
            <div class="flex items-center gap-3 border-b p-3">
              <Avatar :name="$t('userMenu.userName')" />
              <div><p class="font-semibold">{{ $t('userMenu.userName') }}</p><p class="text-sm text-muted-foreground">{{ $t('userMenu.administrator') }}</p></div>
            </div>
            <div class="space-y-1 p-1">
              <Button variant="ghost" size="md" class="w-full justify-start"><template #leading><UserRound /></template>{{ $t('sidebarDemo.profile') }}</Button>
              <Button variant="ghost" size="md" class="w-full justify-start"><template #leading><Settings /></template>{{ $t('sidebarDemo.settings') }}</Button>
            </div>
            <div class="border-t p-1">
              <Button variant="ghost" color="destructive" size="md" class="w-full justify-start"><template #leading><LogOut /></template>{{ $t('sidebarDemo.signOut') }}</Button>
            </div>
          </DropdownMenu>
        </template>
      </AppBar>
    </template>
  </Sidebar>
</template>`;

const pageExample = (title: string) => `<script setup lang="ts">
definePageMeta({ title: '${title}' });
<\/script>

<template>
  <div class="h-[1500px] rounded-2xl bg-secondary" />
</template>`;

export const dashboardPage = pageExample('sidebarDemo.dashboard');
export const ordersPage = pageExample('sidebarDemo.orders');
export const analyticsPage = pageExample('sidebarDemo.analytics');
export const teamPage = pageExample('sidebarDemo.team');
export const settingsPage = pageExample('sidebarDemo.settings');

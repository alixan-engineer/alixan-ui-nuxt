const userMenu = `<DropdownMenu width="300px" position="bottomRight">
  <template #trigger>
    <button type="button" :aria-label="$t('sidebarDemo.accountMenu')" class="rounded-full">
      <Avatar :name="$t('userMenu.userName')" size="sm" />
    </button>
  </template>
  <div class="flex items-center gap-3 border-b p-3">
    <Avatar :name="$t('userMenu.userName')" />
    <div>
      <p class="font-semibold">{{ $t('userMenu.userName') }}</p>
      <p class="text-sm text-muted-foreground">
        {{ $t('userMenu.administrator') }}
      </p>
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
    <Button
      variant="ghost"
      color="destructive"
      size="md"
      class="w-full justify-start"
    >
      <template #leading><LogOut /></template>
      {{ $t('sidebarDemo.signOut') }}
    </Button>
  </div>
</DropdownMenu>`;

export const examples = {
	compact: `<script setup lang="ts">
import { LogOut, Menu, Settings, UserRound } from '@lucide/vue';
<\/script>

<div data-scroll-container class="h-80 w-full max-w-110 overflow-y-auto">
  <AppBar variant="compact" title="appBar.dashboard">
    <template #leading>
      <IconButton :aria-label="$t('appBar.openMenu')" size="md"><Menu /></IconButton>
    </template>
    <template #trailing>
      ${userMenu}
    </template>
    <div class="min-h-120 p-4">{{ $t('appBar.scrollHint') }}</div>
  </AppBar>
</div>`,
	silver: `<script setup lang="ts">
import { ChevronLeft, EllipsisVertical, Share } from '@lucide/vue';
<\/script>

<div data-scroll-container class="h-80 w-full max-w-110 overflow-y-auto">
  <AppBar variant="silver" title="appBar.storeTitle">
    <template #leading>
      <IconButton :aria-label="$t('appBar.back')" size="md"><ChevronLeft /></IconButton>
    </template>
    <template #trailing>
      <IconButton :aria-label="$t('appBar.share')" size="md">
        <Share />
      </IconButton>
      <IconButton :aria-label="$t('appBar.more')" size="md">
        <EllipsisVertical />
      </IconButton>
    </template>
    <div class="min-h-120 space-y-3 p-4">{{ $t('appBar.scrollHint') }}</div>
  </AppBar>
</div>`,
};

export const examples = {
	compact: `<script setup lang="ts">
import { LogOut, Menu, Settings, UserRound } from '@lucide/vue';
<\/script>

<div data-scroll-container class="h-80 w-full max-w-110 overflow-y-auto">
  <AppBar variant="compact" title="appBar.dashboard">
    <template #leading>
      <IconButton>
        <Menu />
      </IconButton>
    </template>
    <template #trailing>
      <Avatar name="Alixan" />
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
      <IconButton :aria-label="$t('appBar.back')"><ChevronLeft /></IconButton>
    </template>
    <template #trailing>
      <IconButton :aria-label="$t('appBar.share')">
        <Share />
      </IconButton>
      <IconButton :aria-label="$t('appBar.more')">
        <EllipsisVertical />
      </IconButton>
    </template>
    <div class="min-h-120 space-y-3 p-4">{{ $t('appBar.scrollHint') }}</div>
  </AppBar>
</div>`,
};

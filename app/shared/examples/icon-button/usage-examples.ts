export const iconButtonExamples = {
	combinations: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import IconButton from '@/components/ui/icon-button/IconButton.vue'
<\/script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center gap-2">
      <IconButton variant="filled" color="default">
        <ArrowUpRight />
      </IconButton>
      <IconButton variant="filled" color="primary">
        <ArrowUpRight />
      </IconButton>
      <IconButton variant="filled" color="secondary">
        <ArrowUpRight />
      </IconButton>
      <IconButton variant="filled" color="destructive">
        <ArrowUpRight />
      </IconButton>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <IconButton variant="outlined" color="default">
        <ArrowUpRight />
      </IconButton>
      <IconButton variant="outlined" color="primary">
        <ArrowUpRight />
      </IconButton>
      <IconButton variant="outlined" color="secondary">
        <ArrowUpRight />
      </IconButton>
      <IconButton variant="outlined" color="destructive">
        <ArrowUpRight />
      </IconButton>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <IconButton variant="ghost" color="default">
        <ArrowUpRight />
      </IconButton>
      <IconButton variant="ghost" color="primary">
        <ArrowUpRight />
      </IconButton>
      <IconButton variant="ghost" color="secondary">
        <ArrowUpRight />
      </IconButton>
      <IconButton variant="ghost" color="destructive">
        <ArrowUpRight />
      </IconButton>
    </div>
  </div>
</template>`,
	size: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import IconButton from '@/components/ui/icon-button/IconButton.vue'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <IconButton size="sm">
      <ArrowUpRight />
    </IconButton>
    <IconButton>
      <ArrowUpRight />
    </IconButton>
    <IconButton size="lg">
      <ArrowUpRight />
    </IconButton>
  </div>
</template>`,
	navigation: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import IconButton from '@/components/ui/icon-button/IconButton.vue'

const localePath = useLocalePath()
<\/script>

<template>
  <div class="flex items-center gap-2">
    <IconButton :to="localePath('/icon-button')">
      <ArrowUpRight />
    </IconButton>

    <IconButton
      href="https://github.com"
      target="_blank"
      variant="outlined"
    >
      <ArrowUpRight />
    </IconButton>
  </div>
</template>`,
	loading: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

const loader = useGlobalLoader()

const save = () => {
  loader.show({ label: 'Saving action...' })

  window.setTimeout(() => {
    loader.hide()
  }, 3000)
}
<\/script>

<template>
  <IconButton @click="save">
    <ArrowUpRight />
  </IconButton>
</template>`,
	disable: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

const dialog = useDialog()
const { $tn } = useNuxtApp()

const openAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: $tn('componentDocs.iconButton.actionUnavailable'),
      description: $tn('componentDocs.iconButton.exportUnavailable'),
      buttonLabel: $tn('componentDocs.iconButton.gotIt'),
    },
  })
}
<\/script>

<template>
  <IconButton variant="outlined" @click="openAlert">
    <ArrowUpRight />
  </IconButton>
</template>`,
};

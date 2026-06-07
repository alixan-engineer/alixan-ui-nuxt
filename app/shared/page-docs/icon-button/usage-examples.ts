export const iconButtonExamples = {
	combinations: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import IconButton from '@/components/ui/icon-button/IconButton.vue'
<\/script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center gap-2">
      <IconButton label="Default" variant="filled" color="default">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Primary" variant="filled" color="primary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Secondary" variant="filled" color="secondary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Destructive" variant="filled" color="destructive">
        <ArrowUpRight />
      </IconButton>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <IconButton label="Default outline" variant="outlined" color="default">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Primary outline" variant="outlined" color="primary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Secondary outline" variant="outlined" color="secondary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Destructive outline" variant="outlined" color="destructive">
        <ArrowUpRight />
      </IconButton>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <IconButton label="Default ghost" variant="ghost" color="default">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Primary ghost" variant="ghost" color="primary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Secondary ghost" variant="ghost" color="secondary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Destructive ghost" variant="ghost" color="destructive">
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
    <IconButton label="Small action" size="sm">
      <ArrowUpRight />
    </IconButton>
    <IconButton label="Default action">
      <ArrowUpRight />
    </IconButton>
    <IconButton label="Large action" size="lg">
      <ArrowUpRight />
    </IconButton>
  </div>
</template>`,
	navigation: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import IconButton from '@/components/ui/icon-button/IconButton.vue'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <IconButton label="Open icon button docs" to="/icon-button">
      <ArrowUpRight />
    </IconButton>

    <IconButton
      label="Open GitHub"
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
  <IconButton label="Save action" @click="save">
    <ArrowUpRight />
  </IconButton>
</template>`,
	disable: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

const dialog = useDialog()

const openAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: 'Action unavailable',
      description: 'Export will be available after the report is generated.',
      buttonLabel: 'Got it',
    },
  })
}
<\/script>

<template>
  <IconButton label="Export report" variant="outlined" @click="openAlert">
    <ArrowUpRight />
  </IconButton>
</template>`,
};

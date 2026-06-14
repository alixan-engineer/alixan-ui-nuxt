export const buttonExamples = {
	size: `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button size="sm">
      Small
    </Button>
    <Button>
      Default
    </Button>
    <Button size="lg">
      Large
    </Button>
  </div>
</template>`,
	navigation: `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'

const localePath = useLocalePath()
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button :to="localePath('/icon-button')">
      NuxtLink
    </Button>

    <Button
      href="https://github.com"
      target="_blank"
      variant="outlined"
    >
      External link
    </Button>
  </div>
</template>`,
	combinations: `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
<\/script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center gap-2">
      <Button variant="filled" color="default">Default</Button>
      <Button variant="filled" color="primary">Primary</Button>
      <Button variant="filled" color="secondary">Secondary</Button>
      <Button variant="filled" color="destructive">Destructive</Button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <Button variant="outlined" color="default">Default</Button>
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" color="destructive">Destructive</Button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <Button variant="ghost" color="default">Default</Button>
      <Button variant="ghost" color="primary">Primary</Button>
      <Button variant="ghost" color="secondary">Secondary</Button>
      <Button variant="ghost" color="destructive">Destructive</Button>
    </div>
  </div>
</template>`,
	withIcon: `<script setup lang="ts">
import { ArrowRight, GitBranch } from '@lucide/vue'
import Button from '@/components/ui/button/Button.vue'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button variant="outlined">
      <template #leading>
        <GitBranch class="size-5" />
      </template>
      New Branch
    </Button>

    <Button variant="outlined">
      Continue
      <template #trailing>
        <ArrowRight class="size-5" />
      </template>
    </Button>
  </div>
</template>`,
	loading: `<script setup lang="ts">
const loader = useGlobalLoader()

const save = () => {
  loader.show({ label: 'componentDocs.button.savingChanges' })

  window.setTimeout(() => {
    loader.hide()
  }, 3000)
}
<\/script>

<template>
  <Button @click="save">Save changes</Button>
</template>`,
	disable: `<script setup lang="ts">
const dialog = useDialog()
const { $tn } = useNuxtApp()

const openAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: $tn('componentDocs.button.actionUnavailable'),
      description: $tn('componentDocs.button.exportUnavailable'),
      buttonLabel: $tn('componentDocs.button.gotIt'),
    },
  })
}
<\/script>

<template>
  <Button variant="outlined" @click="openAlert">
    Export report
  </Button>
</template>`,
};

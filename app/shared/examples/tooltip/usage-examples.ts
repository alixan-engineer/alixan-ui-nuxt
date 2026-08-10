export const tooltipExamples = {
	usage: `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
<\/script>

<template>
  <Button tooltip="tooltip.demo.save">
    Save changes
  </Button>
</template>`,
	icon: `<script setup lang="ts">
import { Info } from '@lucide/vue'
import IconButton from '@/components/ui/icon-button/IconButton.vue'
</script>

<template>
  <IconButton tooltip="tooltip.demo.info" variant="outlined">
    <Info />
  </IconButton>
</template>`,
	html: `<script setup lang="ts">
import Tooltip from '@/components/ui/tooltip/Tooltip.vue'
<\/script>

<template>
  <Tooltip text="tooltip.demo.shortDescription">
    <span>
      Short description
    </span>
  </Tooltip>
</template>`,
};

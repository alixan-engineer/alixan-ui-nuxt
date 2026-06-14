export const tooltipExamples = {
	usage: `<template>
  <Button tooltip="tooltip.demo.save">
    Save changes
  </Button>
</template>`,
	icon: `<script setup lang="ts">
import { Info } from '@lucide/vue'
</script>

<template>
  <IconButton tooltip="tooltip.demo.info" variant="outlined">
    <Info />
  </IconButton>
</template>`,
	html: `<template>
  <Tooltip text="tooltip.demo.shortDescription">
    <span>
      Short description
    </span>
  </Tooltip>
</template>`,
};

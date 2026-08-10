export const examples = {
	usage: `<script setup lang="ts">
import Empty from '@/components/ui/empty/Empty.vue'
<\/script>

<template>
  <Empty
    title="No results"
    description="Try changing filters or search query."
    button="Reset filters"
    button-color="secondary"
    @action="resetFilters"
  />
</template>`,
	withMedia: `<script setup lang="ts">
import Empty from '@/components/ui/empty/Empty.vue'
<\/script>

<template>
  <Empty
    title="Page not found"
    description="The page you are looking for does not exist or has been moved."
    button="Go home"
    button-color="primary"
    @action="navigateTo('/')"
  >
    <div class="flex size-24 items-center justify-center rounded-4xl bg-secondary text-primary">
      <Lottie name="error" :loop="false" width="80px" height="80px" />
    </div>
  </Empty>
</template>`,
};

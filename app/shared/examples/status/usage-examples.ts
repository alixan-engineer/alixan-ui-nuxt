export const examples = {
	usage: `<script setup lang="ts">
import Status from '@/components/ui/status/Status.vue'
<\/script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Status label="Success" type="success" />
    <Status label="Warning" type="warning" />
    <Status label="Info" type="info" />
    <Status label="Error" type="error" />
  </div>
</template>`,
	size: `<script setup lang="ts">
import Status from '@/components/ui/status/Status.vue'
<\/script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Status label="Small" size="sm" type="success" />
    <Status label="Medium" type="success" />
    <Status label="Large" size="lg" type="success" />
  </div>
</template>`,
};

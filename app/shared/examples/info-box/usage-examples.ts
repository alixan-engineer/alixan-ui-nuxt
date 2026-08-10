export const examples = {
	usage: `<script setup lang="ts">
import InfoBox from '@/components/ui/info-box/InfoBox.vue'
<\/script>

<template>
  <InfoBox>{{ $t('componentDocs.infoBox.demo') }}</InfoBox>
</template>`,
	withIcon: `<script setup lang="ts">
import { CircleHelp } from '@lucide/vue';
import InfoBox from '@/components/ui/info-box/InfoBox.vue';
<\/script>

<template>
  <InfoBox :icon="CircleHelp">{{ $t('componentDocs.infoBox.demo') }}</InfoBox>
</template>`,
};

<script setup lang="ts">
import { favicon } from './config/site/favicon';

const { locale } = useI18n();
const { applyAccentTheme } = useTheme();

// Init default meta SEO tags
usePageMeta();

// Apply accent theme
onMounted(() => applyAccentTheme());

// Init lang and favicon for html
useHead({
	htmlAttrs: { lang: locale.value },
	link: favicon,
});
</script>

<template>
	<NuxtLayout />
	<DialogHost />
	<DrawerHost />
	<GlobalLoaderHost />
	<ToastHost />
</template>

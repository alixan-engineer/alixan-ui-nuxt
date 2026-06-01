<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';
import githubIcon from '~/assets/icons/github.svg';

const { t } = useI18n();
</script>

<template>
	<header class="sticky top-0 z-30 bg-background">
		<div class="w-full max-w-container min-h-14 mx-auto px-4 flex items-center">
			<IconButton
				variant="ghost"
				color="default"
				href="https://ui.alixan.kz/"
				:label="t('app.back')"
			>
				<ArrowLeft />
			</IconButton>
			<div class="ml-4 flex items-center gap-2">
				<Logo />
				<Status label="Beta" size="sm" type="warning" />
			</div>
			<div class="flex-1" />
			<IconButton
				variant="ghost"
				color="default"
				href="https://github.com/alixan-engineer/alixan-ui-nuxt"
				target="_blank"
				:label="t('app.github')"
			>
				<img :src="githubIcon" alt="" class="size-6 dark:invert" />
			</IconButton>
			<HeaderSettings />
		</div>
	</header>
</template>

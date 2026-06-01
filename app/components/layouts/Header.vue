<script setup lang="ts">
import { ArrowLeft, Languages, Moon, Sun } from '@lucide/vue';

const { locale, t, toggleLocale } = useI18n();
const { theme, toggleTheme } = useTheme();
</script>

<template>
	<header class="sticky top-0 z-30 bg-background">
		<div
			class="w-full max-w-container min-h-14 mx-auto px-4 flex items-center gap-4"
		>
			<IconButton
				variant="ghost"
				color="default"
				href="https://ui.alixan.kz/"
				:label="t('app.back')"
			>
				<ArrowLeft />
			</IconButton>
			<div class="flex items-center gap-2">
				<Logo />
				<Status label="Beta" size="sm" type="warning" />
			</div>
			<div class="flex-1" />
			<IconButton
				variant="ghost"
				color="default"
				:label="`${t('app.language')}: ${locale.toUpperCase()}`"
				@click="toggleLocale"
			>
				<Languages />
			</IconButton>
			<IconButton
				variant="ghost"
				color="default"
				:label="t('app.theme')"
				@click="toggleTheme"
			>
				<Sun v-if="theme === 'dark'" />
				<Moon v-else />
			</IconButton>
		</div>
	</header>
</template>

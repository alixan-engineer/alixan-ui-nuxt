<script setup lang="ts">
import { installationPageToc } from '~/shared/page-docs/installation/page-toc';
import { Terminal } from '@lucide/vue';
import type { AccentThemeType } from '~/interfaces/theme/theme.interface';
import { accentColors } from '~/shared/theme/colors';
import {
	commands,
	rootIdConfig,
	nuxtConfig,
	usageCode,
} from '~/shared/page-docs/installation/usage-examples';

const { t } = useI18n();
const { createThemeCss } = useTheme();

usePageMeta({
	title: t('installationPage.metaTitle'),
	description: t('installationPage.description'),
});

const tocLinks = installationPageToc(t);

usePageTocLinks(tocLinks);

const accentTheme = useCookie<AccentThemeType>('alixan-ui-accent-theme', {
	default: () => 'default',
});
const showTailwindCode = ref(false);

const currentTailwindCss = computed(() =>
	createThemeCss(accentColors[accentTheme.value]),
);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('installationPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('installationPage.description') }}
		</p>
	</header>

	<section id="create-project" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $t('installationPage.createProject.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $t('installationPage.createProject.description') }}
			</p>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
				<Terminal class="size-5 text-muted-foreground" />
				<span class="font-medium">Terminal</span>
				<div class="flex-1" />
				<CopyButton
					:text="commands.createProject"
					:label="$t('installationPage.copyCommand')"
				/>
			</div>
			<pre class="p-4 text-md"><code>{{ commands.createProject }}</code></pre>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
				<span class="font-medium">nuxt.config.ts</span>
				<div class="flex-1" />
				<CopyButton
					:text="rootIdConfig"
					:label="$t('installationPage.copyCode')"
				/>
			</div>
			<pre class="p-4 text-sm leading-7"><code>{{ rootIdConfig }}</code></pre>
		</div>
	</section>

	<section id="add-tailwind-css" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $t('installationPage.addTailwind.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $t('installationPage.addTailwind.description') }}
			</p>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
				<Terminal class="size-5 text-muted-foreground" />
				<span class="font-medium">{{
					$t('installationPage.addTailwind.commandTitle')
				}}</span>
				<div class="flex-1" />
				<CopyButton
					:text="commands.addTailwind"
					:label="$t('installationPage.copyCommand')"
				/>
			</div>
			<pre class="p-4 text-md"><code>{{ commands.addTailwind }}</code></pre>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
				<span class="font-medium">app/assets/css/tailwind.css</span>
				<div class="flex-1" />
				<CopyButton
					:text="currentTailwindCss"
					:label="$t('installationPage.copyCode')"
				/>
			</div>
			<pre
				class="overflow-hidden p-4 text-sm leading-7"
				:class="showTailwindCode ? '' : 'max-h-50'"
			><code>{{ currentTailwindCss }}</code></pre>
			<div class="border-t p-3 flex justify-center">
				<Button
					variant="ghost"
					size="sm"
					@click="showTailwindCode = !showTailwindCode"
				>
					{{
						showTailwindCode
							? $t('installationPage.hideCode')
							: $t('installationPage.viewCode')
					}}
				</Button>
			</div>
		</div>

		<div
			class="rounded-2xl border bg-secondary/50 p-4 text-sm leading-7 text-muted-foreground"
		>
			{{ $t('installationPage.backdrop.prefix') }}
			<span class="font-medium text-foreground">backdrop</span>
			{{ $t('installationPage.backdrop.middle') }}
			<span class="font-medium text-foreground">
				fixed inset-0 bg-black/30 dark:bg-black/80.
			</span>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
				<span class="font-medium">nuxt.config.ts</span>
				<div class="flex-1" />
				<CopyButton
					:text="nuxtConfig"
					:label="$t('installationPage.copyCode')"
				/>
			</div>
			<pre class="p-4 text-sm leading-7"><code>{{ nuxtConfig }}</code></pre>
		</div>
	</section>

	<section id="install-component" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $t('installationPage.installComponent.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $t('installationPage.installComponent.description') }}
			</p>
		</div>

		<InstallCommandBlock component="button" />

		<div
			class="rounded-2xl border bg-secondary/50 p-4 text-sm leading-7 text-muted-foreground"
		>
			{{ $t('installationPage.installComponent.createdPrefix') }}
			<span class="font-medium text-foreground">
				components/ui/button/Button.vue
			</span>
			,
			<span class="font-medium text-foreground">utils/cn.ts</span>
			{{ $t('installationPage.installComponent.createdSuffix') }}
		</div>
	</section>

	<section id="use-component" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $t('installationPage.useComponent.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $t('installationPage.useComponent.description') }}
			</p>
		</div>

		<div class="island">
			<div class="min-h-40 p-8 flex items-center justify-center">
				<Button color="primary">
					{{ $t('installationPage.useComponent.previewButton') }}
				</Button>
			</div>
			<div class="relative border-t">
				<CopyButton
					:text="usageCode"
					class="absolute right-3 top-3"
					:label="$t('installationPage.copyCode')"
				/>
				<pre
					class="p-6 pr-12 text-sm leading-7"
				><code>{{ usageCode }}</code></pre>
			</div>
		</div>
	</section>
</template>

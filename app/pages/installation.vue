<script setup lang="ts">
import { Terminal } from '@lucide/vue';
import type { AccentThemeType } from '~/interfaces/theme/theme.interface';
import { installationPageToc } from '~/shared/examples/installation/page-toc';
import {
	commands,
	nuxtConfig,
	rootIdConfig,
	tnPluginCode,
	tnTypesCode,
	usageCode,
} from '~/shared/examples/installation/usage-examples';
import { accentColors } from '~/shared/theme/colors';

usePageMeta({
	title: 'installationPage.metaTitle',
	description: 'installationPage.description',
});

const { createThemeCss } = useTheme();
const { setToc } = usePageToc();

onMounted(() => setToc(installationPageToc));

const accentTheme = useCookie<AccentThemeType>('alixan-ui-accent-theme', {
	default: () => 'default',
});
const showTailwindCode = ref<boolean>(false);
const currentTailwindCss = computed(() =>
	createThemeCss(accentColors[accentTheme.value]),
);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('installationPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('installationPage.description') }}
		</p>
	</header>

	<section id="create-project" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $tn('installationPage.createProject.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $tn('installationPage.createProject.description') }}
			</p>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b">
				<Terminal class="size-5 text-muted-foreground" />
				<span>Terminal</span>
				<div class="flex-1" />
				<CopyButton
					:text="commands.createProject"
					:label="$tn('installationPage.copyCommand')"
				/>
			</div>
			<pre class="p-4 text-md"><code>{{ commands.createProject }}</code></pre>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b">
				<span>nuxt.config.ts</span>
				<div class="flex-1" />
				<CopyButton
					:text="rootIdConfig"
					:label="$tn('installationPage.copyCode')"
				/>
			</div>
			<pre class="p-4 text-sm leading-7"><code>{{ rootIdConfig }}</code></pre>
		</div>
	</section>

	<section id="add-tailwind-css" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $tn('installationPage.addTailwind.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $tn('installationPage.addTailwind.description') }}
			</p>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b">
				<Terminal class="size-5 text-muted-foreground" />
				<span>
					{{ $tn('installationPage.addTailwind.commandTitle') }}
				</span>
				<div class="flex-1" />
				<CopyButton
					:text="commands.addTailwind"
					:label="$tn('installationPage.copyCommand')"
				/>
			</div>
			<pre class="p-4 text-md"><code>{{ commands.addTailwind }}</code></pre>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b">
				<span>app/assets/css/tailwind.css</span>
				<div class="flex-1" />
				<CopyButton
					:text="currentTailwindCss"
					:label="$tn('installationPage.copyCode')"
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
							? $tn('installationPage.hideCode')
							: $tn('installationPage.viewCode')
					}}
				</Button>
			</div>
		</div>

		<div
			class="rounded-2xl border bg-secondary/50 p-4 text-sm leading-7 text-muted-foreground"
		>
			{{ $tn('installationPage.iosDoubleTapZoom.prefix') }}
			<span class="text-foreground">touch-action: manipulation</span>
			{{ $tn('installationPage.iosDoubleTapZoom.suffix') }}
		</div>

		<div
			class="rounded-2xl border bg-secondary/50 p-4 text-sm leading-7 text-muted-foreground"
		>
			{{ $tn('installationPage.backdrop.prefix') }}
			<span class="text-foreground">backdrop</span>
			{{ $tn('installationPage.backdrop.middle') }}
			<span class="text-foreground">
				fixed inset-0 bg-black/30 dark:bg-black/80.
			</span>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b">
				<span>nuxt.config.ts</span>
				<div class="flex-1" />
				<CopyButton
					:text="nuxtConfig"
					:label="$tn('installationPage.copyCode')"
				/>
			</div>
			<pre class="p-4 text-sm leading-7"><code>{{ nuxtConfig }}</code></pre>
		</div>
	</section>

	<section id="add-i18n" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $tn('installationPage.addI18n.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $tn('installationPage.addI18n.description') }}
			</p>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b">
				<Terminal class="size-5 text-muted-foreground" />
				<span>{{ $tn('installationPage.addI18n.commandTitle') }}</span>
				<div class="flex-1" />
				<CopyButton
					:text="commands.addI18n"
					:label="$tn('installationPage.copyCommand')"
				/>
			</div>
			<pre class="p-4 text-md"><code>{{ commands.addI18n }}</code></pre>
		</div>
	</section>

	<section id="translation-helper" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $tn('installationPage.translationHelper.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $tn('installationPage.translationHelper.description') }}
			</p>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b">
				<span>app/plugins/tn.ts</span>
				<div class="flex-1" />
				<CopyButton
					:text="tnPluginCode"
					:label="$tn('installationPage.copyCode')"
				/>
			</div>
			<pre class="p-4 text-sm leading-7"><code>{{ tnPluginCode }}</code></pre>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b">
				<span>app/types/tn.d.ts</span>
				<div class="flex-1" />
				<CopyButton
					:text="tnTypesCode"
					:label="$tn('installationPage.copyCode')"
				/>
			</div>
			<pre class="p-4 text-sm leading-7"><code>{{ tnTypesCode }}</code></pre>
		</div>
	</section>

	<section id="install-component" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $tn('installationPage.installComponent.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $tn('installationPage.installComponent.description') }}
			</p>
		</div>

		<InstallCommandBlock component="button" />

		<div
			class="rounded-2xl border bg-secondary/50 p-4 text-sm leading-7 text-muted-foreground"
		>
			{{ $tn('installationPage.installComponent.createdPrefix') }}
			<span class="text-foreground"> components/ui/button/Button.vue </span>
			,
			<span class="text-foreground">utils/cn.ts</span>
			{{ $tn('installationPage.installComponent.createdSuffix') }}
		</div>
	</section>

	<section id="use-component" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $tn('installationPage.useComponent.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $tn('installationPage.useComponent.description') }}
			</p>
		</div>

		<div class="island">
			<div class="min-h-40 p-8 flex items-center justify-center">
				<Button color="primary">
					{{ $tn('installationPage.useComponent.previewButton') }}
				</Button>
			</div>
			<div class="relative border-t">
				<CopyButton
					:text="usageCode"
					class="absolute right-3 top-3"
					:label="$tn('installationPage.copyCode')"
				/>
				<pre
					class="p-6 pr-12 text-sm leading-7"
				><code>{{ usageCode }}</code></pre>
			</div>
		</div>
	</section>
</template>

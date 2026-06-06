<script setup lang="ts">
import type { AccentThemeType } from '~/interfaces/theme/theme.interface';
import { accentColors } from '~/shared/theme/colors';

const { t } = useI18n();
const { setToc, clearToc } = usePageToc();
const { createThemeCss } = useTheme();

usePageMeta({
	title: t('stylesPage.metaTitle'),
	description: t('stylesPage.metaDescription'),
});

const tocLinks = [
	{ label: t('stylesPage.tailwind.title'), href: '#tailwind-css' },
	{ label: t('stylesPage.textSize.title'), href: '#text-size' },
	{ label: t('stylesPage.island.title'), href: '#island' },
	{ label: t('stylesPage.backdrop.title'), href: '#backdrop' },
] as const;

onMounted(() => setToc(tocLinks));

onBeforeUnmount(() => clearToc());

const accentTheme = useCookie<AccentThemeType>('alixan-ui-accent-theme', {
	default: () => 'default',
});

const showTailwindCode = ref(false);

const currentTailwindCss = computed(() =>
	createThemeCss(accentColors[accentTheme.value]),
);

const textSizeCode = `@theme {
  --text-md: 15px;
}`;

const islandCode = `@utility island {
  @apply flex flex-col border overflow-hidden dark:bg-card dark:text-card-foreground min-h-fit;

  border-radius: clamp(var(--radius-md), 4%, var(--radius-xl));
}`;

const backdropCode = `@utility backdrop {
  @apply fixed inset-0 bg-black/30 dark:bg-black/80;
}`;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('stylesPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('stylesPage.description') }}
		</p>
	</header>

	<section id="tailwind-css" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">
				{{ $t('stylesPage.tailwind.title') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $t('stylesPage.tailwind.description') }}
			</p>
		</div>

		<div class="island">
			<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
				<span class="font-medium">app/assets/css/tailwind.css</span>
				<div class="flex-1" />
				<CopyButton
					:text="currentTailwindCss"
					:label="$t('stylesPage.tailwind.copyCode')"
					:copied-label="$t('stylesPage.tailwind.copiedCode')"
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
							? $t('stylesPage.tailwind.hideCode')
							: $t('stylesPage.tailwind.viewCode')
					}}
				</Button>
			</div>
		</div>
	</section>

	<section id="text-size" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('stylesPage.textSize.title') }}
		</h2>
		<ExampleBlock :code="textSizeCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				<code>text-md</code>
				{{ $t('stylesPage.textSize.descriptionMiddle') }}
				<code>15px</code>
				{{ $t('stylesPage.textSize.descriptionSuffix') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="island" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('stylesPage.island.title') }}
		</h2>
		<ExampleBlock :code="islandCode">
			<div class="island w-full max-w-sm p-4 text-muted-foreground">
				{{ $t('stylesPage.island.descriptionPrefix') }}
				<code>island</code>
				{{ $t('stylesPage.island.descriptionSuffix') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="backdrop" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('stylesPage.backdrop.title') }}
		</h2>
		<ExampleBlock :code="backdropCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				<code>backdrop</code>
				{{ $t('stylesPage.backdrop.description') }}
			</div>
		</ExampleBlock>
	</section>
</template>

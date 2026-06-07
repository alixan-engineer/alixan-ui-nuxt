<script setup lang="ts">
import { i18nPageToc } from '~/shared/page-docs/i18n/page-toc';
import {
	installCode,
	messagesCode,
	pageMetaCode,
	setupCode,
	usageCode,
} from '~/shared/page-docs/i18n/usage-examples';

usePageMeta({
	title: 'i18n - Alixan UI',
});

const { locale, setLocale } = useI18n();
const { setToc } = usePageToc();

onMounted(() => setToc(i18nPageToc));

type Locale = 'en' | 'ru' | 'kk';

const languageOptions: Array<{ label: string; value: Locale }> = [
	{ label: 'English', value: 'en' },
	{ label: 'Русский', value: 'ru' },
	{ label: 'Қазақша', value: 'kk' },
];

const changeLocale = async (value: Locale): Promise<void> => {
	useHead({
		htmlAttrs: { lang: value },
	});
	await setLocale(value);
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">i18n</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Alixan UI uses the official Nuxt i18n module. The project keeps message
			keys typed, while locale switching and persistence are handled by the
			module.
		</p>
		<Info>
			For more detailed information, visit the
			<TextLink href="https://i18n.nuxtjs.org/" target="_blank">
				Nuxt i18n documentation.
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Install the Nuxt i18n module, then register it in
				<code>nuxt.config.ts</code>.
			</div>
		</ExampleBlock>
		<ExampleBlock :code="setupCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Use <code>strategy: 'prefix_except_default'</code> to keep the default
				language without a prefix and prefix all other locales.
			</div>
		</ExampleBlock>
	</section>

	<section id="messages" class="space-y-5">
		<h2 class="text-2xl font-semibold">Messages</h2>
		<ExampleBlock :code="messagesCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Keep locale JSON files in <code>root/i18n/locales</code>. The
				<code>file</code> option maps each locale to its message file.
			</div>
		</ExampleBlock>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="usageCode">
			<div class="max-w-sm">
				<div class="space-y-2">
					<p class="px-1 text-sm font-medium text-muted-foreground">
						{{ $t('settings.language') }}
					</p>
					<Select
						:model-value="locale"
						:options="languageOptions"
						@change="changeLocale($event.value as Locale)"
					/>
				</div>
			</div>
		</ExampleBlock>
	</section>

	<section id="page-meta" class="space-y-5">
		<h2 class="text-2xl font-semibold">Page Meta</h2>
		<ExampleBlock :code="pageMetaCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Translate page-level SEO copy with <code>t(...)</code>, then pass the
				resolved strings to <code>usePageMeta</code>.
			</div>
		</ExampleBlock>
	</section>
</template>

<script setup lang="ts">
import { i18nPageToc } from '~/shared/examples/i18n/page-toc';
import {
	enTranslationsCode,
	installCode,
	kkTranslationsCode,
	localePathCode,
	pageMetaCode,
	ruTranslationsCode,
	setupCode,
	usageCode,
} from '~/shared/examples/i18n/usage-examples';

usePageMeta({
	title: 'i18nPage.metaTitle',
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
		<h1 class="text-4xl font-semibold">{{ $t('i18nPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('i18nPage.description') }}
		</p>
		<Info>
			{{ $t('app.infoPrefix') }}
			<TextLink href="https://i18n.nuxtjs.org/" target="_blank">
				{{ $t('i18nPage.infoLink') }}
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('i18nPage.installationTitle') }}
		</h2>
		<p class="text-muted-foreground leading-7">
			{{ $t('i18nPage.installationDescription') }}
			<code>nuxt.config.ts</code>.
		</p>
		<ExampleBlock :code="installCode" :preview="false" />
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('fontsPage.configurationTitle') }}
		</h2>
		<p class="text-muted-foreground leading-7">
			{{ $t('i18nPage.setupDescriptionStart') }}
			<code>strategy: 'prefix_except_default'</code>
			{{ $t('i18nPage.setupDescriptionEnd') }}
		</p>
		<ExampleBlock path="nuxt.config.ts" :code="setupCode" :preview="false" />
	</section>

	<section id="translations" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('i18nPage.translationsTitle') }}
		</h2>
		<p class="text-muted-foreground leading-7">
			{{ $t('i18nPage.translationsDescriptionStart') }}
			<code>i18n/locales</code>.
			{{ $t('i18nPage.translationsDescriptionEnd') }}
		</p>
		<ExampleBlock
			path="i18n/locales/en.json"
			:code="enTranslationsCode"
			:preview="false"
		/>
		<ExampleBlock
			path="i18n/locales/ru.json"
			:code="ruTranslationsCode"
			:preview="false"
		/>
		<ExampleBlock
			path="i18n/locales/kk.json"
			:code="kkTranslationsCode"
			:preview="false"
		/>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('i18nPage.usageTitle') }}</h2>
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

	<section id="localized-links" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('i18nPage.localizedLinksTitle') }}
		</h2>
		<p class="text-muted-foreground leading-7">
			{{ $t('i18nPage.localizedLinksDescriptionStart') }}
			<code>useLocalePath</code>
			{{ $t('i18nPage.localizedLinksDescriptionEnd') }}
		</p>
		<ExampleBlock path="Example.vue" :code="localePathCode" :preview="false" />
	</section>

	<section id="page-meta" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('i18nPage.pageMetaTitle') }}</h2>
		<p class="text-muted-foreground leading-7">
			{{ $t('i18nPage.pageMetaDescriptionStart') }}
			<code>usePageMeta</code>
			{{ $t('i18nPage.pageMetaDescriptionMiddle') }}
			<code>useI18n().t</code>
			{{ $t('i18nPage.pageMetaDescriptionEnd') }}
		</p>
		<ExampleBlock
			path="pages/button.vue"
			:code="pageMetaCode"
			:preview="false"
		/>
	</section>
</template>

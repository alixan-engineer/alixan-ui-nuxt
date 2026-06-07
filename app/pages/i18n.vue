<script setup lang="ts">
import { i18nPageToc } from '~/shared/examples/i18n/page-toc';
import {
	installCode,
	messagesCode,
	pageMetaCode,
	setupCode,
	tnPluginCode,
	tnTypesCode,
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
		<h1 class="text-4xl font-semibold">{{ $tn('i18nPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('i18nPage.description') }}
		</p>
		<Info>
			{{ $tn('i18nPage.infoPrefix') }}
			<TextLink href="https://i18n.nuxtjs.org/" target="_blank">
				{{ $tn('i18nPage.infoLink') }}
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('i18nPage.installationTitle') }}
		</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('i18nPage.installationDescription') }}
				<code>nuxt.config.ts</code>.
			</div>
		</ExampleBlock>
		<ExampleBlock :code="setupCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('i18nPage.setupDescriptionStart') }}
				<code>strategy: 'prefix_except_default'</code>
				{{ $tn('i18nPage.setupDescriptionEnd') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="messages" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('i18nPage.messagesTitle') }}
		</h2>
		<ExampleBlock :code="messagesCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('i18nPage.messagesDescriptionStart') }}
				<code>root/i18n/locales</code>.
				{{ $tn('i18nPage.messagesDescriptionEnd') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="translation-helper" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('i18nPage.translationHelperTitle') }}
		</h2>
		<ExampleBlock :code="tnPluginCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('i18nPage.translationHelperDescriptionStart') }}
				<code>$tn</code>
				{{ $tn('i18nPage.translationHelperDescriptionEnd') }}
				{{ $tn('i18nPage.seoConnection') }}
			</div>
		</ExampleBlock>
		<ExampleBlock :code="tnTypesCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('i18nPage.translationTypesDescription') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('i18nPage.usageTitle') }}</h2>
		<ExampleBlock :code="usageCode">
			<div class="max-w-sm">
				<div class="space-y-2">
					<p class="px-1 text-sm font-medium text-muted-foreground">
						{{ $tn('settings.language') }}
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
		<h2 class="text-2xl font-semibold">{{ $tn('i18nPage.pageMetaTitle') }}</h2>
		<ExampleBlock :code="pageMetaCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('i18nPage.pageMetaDescriptionStart') }}
				<code>usePageMeta</code>
				{{ $tn('i18nPage.pageMetaDescriptionMiddle') }}
				<code>t(...)</code>
				{{ $tn('i18nPage.pageMetaDescriptionEnd') }}
			</div>
		</ExampleBlock>
	</section>
</template>

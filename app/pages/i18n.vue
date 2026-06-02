<script setup lang="ts">
useSeoMeta({
	title: 'i18n - Alixan UI',
	ogTitle: 'i18n - Alixan UI',
	twitterTitle: 'i18n - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Messages', href: '#messages' },
	{ label: 'Usage', href: '#usage' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const installCode = `npm install @nuxtjs/i18n`;

const setupCode = `export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'ru', name: 'Русский' },
      { code: 'kk', name: 'Қазақша' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'alixan-ui-locale',
      redirectOn: 'root',
    },
    vueI18n: 'i18n.config.ts',
  },
})`;

const messagesCode = `// i18n/locales/en.json
{
  "app": {
    "settings": "Open settings"
  },
  "settings": {
    "language": "Language"
  },
  "component": {
    "button": "Button"
  }
}

// i18n/locales/ru.json
{
  "app": {
    "settings": "Открыть настройки"
  },
  "settings": {
    "language": "Язык"
  },
  "component": {
    "button": "Кнопка"
  }
}

// i18n/i18n.config.ts
import en from './locales/en.json'
import ru from './locales/ru.json'
import kk from './locales/kk.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
    kk,
  },
}))`;

const usageCode = `<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
<\/script>

<template>
  <Button @click="setLocale(locale === 'en' ? 'ru' : 'en')">
    {{ t('settings.language') }}
  </Button>
</template>`;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">i18n</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Alixan UI uses the official Nuxt i18n module. The project keeps message
			keys typed, while locale switching and persistence are handled by the
			module.
		</p>
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
				Use <code>strategy: 'no_prefix'</code> when the documentation should
				keep the same routes for every language.
			</div>
		</ExampleBlock>
	</section>

	<section id="messages" class="space-y-5">
		<h2 class="text-2xl font-semibold">Messages</h2>
		<ExampleBlock :code="messagesCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Keep messages in dedicated JSON files. This keeps localization easy to
				edit and works naturally with Nuxt i18n.
			</div>
		</ExampleBlock>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="usageCode">
			<div class="max-w-sm">
				<Button>Language</Button>
			</div>
		</ExampleBlock>
	</section>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'i18n - Alixan UI',
	ogTitle: 'i18n - Alixan UI',
	twitterTitle: 'i18n - Alixan UI',
});

const tocLinks = [
	{ label: 'Setup', href: '#setup' },
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

const setupCode = `// composables/useI18n.ts
export type Locale = 'en' | 'ru' | 'kk'

const locale = ref<Locale>('en')

export const useI18n = () => {
  const setLocale = (value: Locale) => {
    locale.value = value

    if (import.meta.client) {
      localStorage.setItem('alixan-ui-locale', value)
      document.documentElement.lang = value
    }
  }

  return {
    locale: readonly(locale),
    setLocale,
  }
}`;

const messagesCode = `type MessageKey =
  | 'app.settings'
  | 'settings.language'
  | 'component.button'

const messages: Record<Locale, Record<MessageKey, string>> = {
  en: {
    'app.settings': 'Open settings',
    'settings.language': 'Language',
    'component.button': 'Button',
  },
  ru: {
    'app.settings': 'Открыть настройки',
    'settings.language': 'Язык',
    'component.button': 'Кнопка',
  },
  kk: {
    'app.settings': 'Баптауларды ашу',
    'settings.language': 'Тіл',
    'component.button': 'Батырма',
  },
}`;

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
			Alixan UI keeps localization simple: a tiny composable, typed message
			keys and localStorage persistence for the selected locale.
		</p>
	</header>

	<section id="setup" class="space-y-5">
		<h2 class="text-2xl font-semibold">Setup</h2>
		<ExampleBlock :code="setupCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Create a small composable that stores the current locale and exposes
				<code>setLocale</code>.
			</div>
		</ExampleBlock>
	</section>

	<section id="messages" class="space-y-5">
		<h2 class="text-2xl font-semibold">Messages</h2>
		<ExampleBlock :code="messagesCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Use a typed <code>MessageKey</code> union to catch missing keys early
				while keeping the implementation lightweight.
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

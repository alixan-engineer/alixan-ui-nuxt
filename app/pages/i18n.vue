<script setup lang="ts">
usePageMeta({
	title: 'i18n - Alixan UI',
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
  modules: [
    [
      '@nuxtjs/i18n',
      {
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: false,
        locales: [
          { code: 'en', name: 'English', file: 'en.json' },
          { code: 'ru', name: 'Русский', file: 'ru.json' },
          { code: 'kk', name: 'Қазақша', file: 'kk.json' },
        ],
      },
    ],
  ],
})`;

const messagesCode = `// root/i18n/locales/en.json
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

// root/i18n/locales/ru.json
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

// root/i18n/locales/kk.json
{
  "app": {
    "settings": "Баптауларды ашу"
  },
  "settings": {
    "language": "Тіл"
  },
  "component": {
    "button": "Батырма"
  }
}`;

const usageCode = `<script setup lang="ts">
type Locale = 'en' | 'ru' | 'kk'

const { locale, setLocale } = useI18n()

const languageOptions: Array<{ label: string; value: Locale }> = [
  { label: 'English', value: 'en' },
  { label: 'Русский', value: 'ru' },
  { label: 'Қазақша', value: 'kk' },
]

const changeLocale = async (value: Locale): Promise<void> => {
  useHead({
    htmlAttrs: { lang: value },
  })
  await setLocale(value)
}
<\/script>

<template>
  <Select
    :label="$t('settings.language')"
    :model-value="locale"
    :options="languageOptions"
    @change="changeLocale($event.value as Locale)"
  />
</template>`;

type Locale = 'en' | 'ru' | 'kk';

const { locale, setLocale } = useI18n();

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
			<TextLink
				href="https://i18n.nuxtjs.org/"
				target="_blank"
			>
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
				<Select
					:label="$t('settings.language')"
					:model-value="locale"
					:options="languageOptions"
					@change="changeLocale($event.value as Locale)"
				/>
			</div>
		</ExampleBlock>
	</section>
</template>

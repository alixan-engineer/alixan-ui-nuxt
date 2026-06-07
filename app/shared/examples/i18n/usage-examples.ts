export const installCode = `npx nuxt module add i18n`;
export const setupCode = `export default defineNuxtConfig({
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
export const messagesCode = `// root/i18n/locales/en.json
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
export const usageCode = `<script setup lang="ts">
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
</template>`;
export const pageMetaCode = `<script setup lang="ts">
const { t } = useI18n()

usePageMeta({
  title: t('seo.metaTitle'),
  description: t('seo.metaDescription'),
})
<\/script>`;

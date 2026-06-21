export const installCode = `npx nuxt module add i18n`;
export const setupCode = `export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './configs/i18n.config.ts',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'kk', name: 'Қазақша', file: 'kk.json' },
    ],
  },
})`;
export const vueI18nConfigCode = `export default {
  // Disable warnings because some UI props intentionally pass plain strings through $t.
  missingWarn: false,
  fallbackWarn: false,
}`;
export const enTranslationsCode = `{
  "app": {
    "settings": "Open settings"
  },
  "settings": {
    "language": "Language"
  },
  "component": {
    "button": "Button"
  }
}`;

export const ruTranslationsCode = `{
  "app": {
    "settings": "Открыть настройки"
  },
  "settings": {
    "language": "Язык"
  },
  "component": {
    "button": "Кнопка"
  }
}`;

export const kkTranslationsCode = `{
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
export const localePathCode = `<script setup lang="ts">
const localePath = useLocalePath()
<\/script>

<template>
  <Button :to="localePath('/button')">
    Button
  </Button>
</template>`;
export const pageMetaCode = `<script setup lang="ts">
usePageMeta({
  title: 'seo.metaTitle',
  description: 'seo.metaDescription',
})
<\/script>`;

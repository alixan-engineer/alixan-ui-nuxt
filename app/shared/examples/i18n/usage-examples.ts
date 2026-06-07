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
export const tnPluginCode = `// app/plugins/tn.ts
type TnValue = string | number | boolean | null | undefined

interface I18nTranslator {
  t: (key: string) => string
  te: (key: string) => boolean
}

export default defineNuxtPlugin({
  name: 'tn',
  enforce: 'post',
  setup(nuxtApp) {
    const { t, te } = nuxtApp.$i18n as I18nTranslator

    const tn = (value: TnValue): string => {
      if (typeof value !== 'string') return String(value ?? '')
      return te(value) ? t(value) : value
    }

    nuxtApp.vueApp.config.globalProperties.$tn = tn

    return {
      provide: {
        tn,
      },
    }
  },
})`;
export const tnTypesCode = `// app/types/tn.d.ts
type TnValue = string | number | boolean | null | undefined
type Tn = (value: TnValue) => string

declare module '#app' {
  interface NuxtApp {
    $tn: Tn
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $tn: Tn
  }
}

export {}`;
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
      {{ $tn('settings.language') }}
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

export const commands = {
	createProject: 'npx nuxi@latest init my-app',
	addTailwind: 'npm install tailwindcss @tailwindcss/vite -D',
	addI18n: 'npm install @nuxtjs/i18n',
};
export const rootIdConfig = `export default defineNuxtConfig({
  app: {
    rootId: 'root', // Change appId to root.
  },
})`;
export const nuxtConfig = `import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  features: {
    inlineStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})`;
export const tnPluginCode = `type TnValue = string | number | boolean | null | undefined

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
export const tnTypesCode = `type TnValue = string | number | boolean | null | undefined
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
export const usageCode = `<template>
  <Button color="primary">
    Save changes
  </Button>
</template>`;

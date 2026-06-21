# Alixan UI Nuxt

Modern, minimal, copy-paste UI components for Nuxt 4, Vue 3, TypeScript and Tailwind CSS.

Alixan UI Nuxt is not a runtime component package. The CLI copies component source files into your project, so you own the code, can edit it freely, and keep only the pieces you actually use.

<p>
  <a href="https://nuxt.ui.alixan.kz/">📖 DOCS</a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/alixan-engineer/alixan-ui-nuxt">⭐ GITHUB</a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/alixan-ui-nuxt">📦 NPM</a>
</p>

## ✨ Features

- 🎯 Built for Nuxt 4 and Vue 3
- 🎨 Tailwind CSS v4 tokens, CSS variables and dark mode support
- 🧩 Copy components directly into your project
- 🧠 TypeScript-first component APIs
- 🌍 i18n-ready documentation patterns
- 🌓 Nuxt Color Mode examples
- 🔎 SEO, favicon, sitemap and robots.txt guide files
- 🧰 Small CLI with npm, pnpm, yarn and bun command output
- 📦 No hidden component runtime dependency

## 🚀 Quick Start

Add one or more components from your project root:

```bash
npx alixan-ui-nuxt add button icon-button input
```

This copies the component and required utilities into your app:

```txt
components/ui/button/Button.vue
utils/cn.ts
```

Then use it in any Vue template:

```vue
<template>
	<Button>Save changes</Button>
</template>
```

## 📦 Installation Setup

Alixan UI components expect Tailwind CSS and the shared CSS tokens from the documentation.

Install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite -D
```

Register Tailwind in `nuxt.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	css: ['~/assets/css/tailwind.css'],
	vite: {
		plugins: [tailwindcss()],
	},
});
```

Use the documented `app/assets/css/tailwind.css` file for theme tokens, color variables, base styles and shared utilities.

## 🧩 Components

Available registry items include:

- `button`
- `icon-button`
- `text-link`
- `chip`
- `accordion`
- `tabs`
- `switch`
- `status`
- `empty`
- `divider`
- `input`
- `email-input`
- `password-input`
- `phone-input`
- `username-input`
- `otp`
- `checkbox`
- `select`
- `search`
- `autocomplete`
- `calendar`
- `dialog`
- `alert-dialog`
- `confirm-dialog`
- `drawer`
- `dropdown-menu`
- `global-loader`
- `toast`
- `seo`

Example:

```bash
npx alixan-ui-nuxt add dialog toast seo
```

## 🧰 CLI

The package exposes one CLI command:

```bash
npx alixan-ui-nuxt add <component...>
```

The CLI reads the registry, copies source files into your project, and keeps component paths folder-based:

```txt
components/ui/button/Button.vue
components/ui/alert-dialog/AlertDialog.vue
components/ui/dropdown-menu/DropdownMenu.vue
```

## 🎨 Theming

Theme values are powered by CSS variables in `app/assets/css/tailwind.css`.

The docs include examples for:

- Tailwind CSS setup
- dark mode with Nuxt Color Mode
- accent colors
- shared utilities such as `island` and `backdrop`
- copying generated theme CSS

Install Nuxt Color Mode with:

```bash
npx nuxt module add color-mode
```

## 🌍 i18n

The documentation uses `@nuxtjs/i18n` with locale files in:

```txt
i18n/locales/en.json
i18n/locales/ru.json
i18n/locales/kk.json
```

Install Nuxt i18n with:

```bash
npx nuxt module add i18n
```

Components and docs use Nuxt i18n's built-in `$t`. Set `missingWarn: false` in i18n config if plain values can pass through `$t`.

The Nuxt module points to a separate Vue i18n config file:

```ts
export default defineNuxtConfig({
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
});
```

```ts
// i18n/configs/i18n.config.ts
export default {
	// Disable warnings because some UI props intentionally pass plain strings through $t.
	missingWarn: false,
	fallbackWarn: false,
};
```

## 🪟 Client-only overlays

`DialogHost`, `DrawerHost` and `ToastHost` should be mounted once near the root of the app. These hosts render their overlay content through `ClientOnly`, so dialog, drawer and toast UI is client-side only.

## 🔎 SEO

The `seo` registry item includes:

- `app/config/site/site.ts`
- `app/config/site/favicon.ts`
- `app/composables/usePageMeta.ts`

It gives you a shared place for site URL, title, description, Open Graph image and page-level SEO metadata.
`usePageMeta` resolves page title and description through `useI18n().t`, so values can be translation keys or plain strings when `missingWarn` is disabled.

For sitemap support:

```bash
npx nuxt module add @nuxtjs/sitemap
```

## 🛠 Development

Install dependencies:

```bash
npm install
```

Start the documentation app:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Generate a static site:

```bash
npm run generate
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```txt
app/
  assets/css/tailwind.css
  components/ui/
  composables/
  config/site/
  plugins/
  types/
  pages/
cli/
  index.js
registry/
  *.json
i18n/
  configs/i18n.config.ts
  locales/*.json
```

## 📄 License

MIT

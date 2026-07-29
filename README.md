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

Every registry item is source code that becomes part of your application. Start with
the smallest component that matches the interaction, then compose larger flows from
the same tokens and states.

### Actions and navigation

| Component | Use it for |
| --- | --- |
| `button` | Primary, secondary and destructive text actions. Choose one visually dominant action per surface and use quieter variants for alternatives. |
| `icon-button` | Compact actions whose icon is universally recognizable. Always provide an accessible label and use a text Button when the meaning could be ambiguous. |
| `text-link` | Inline navigation inside paragraphs, hints and documentation. It preserves reading flow without adding button padding. |
| `app-bar` | Page-level navigation and actions. Compact keeps a stable 56px bar; Silver adds a large title that collapses while its own content container scrolls. |
| `sidebar` | Responsive application shells with persistent desktop navigation, a mobile overlay and an independently scrolling router outlet. |
| `bottom-navigation-bar` | Three to five primary mobile destinations. Keep it fixed below the router outlet and use the selected destination as the Compact App Bar title. |
| `tabs` | Switching between closely related views without changing the page hierarchy. Avoid tabs for sequential workflows. |

### Forms and selection

| Component | Use it for |
| --- | --- |
| `input` | General text entry with floating labels, masks and validation. Create an `XControl` for every field to own its value and form state. |
| `email-input` | Email entry with the Input interaction model and email-format validation. |
| `password-input` | Secret text entry with a built-in visibility action and optional length rules. |
| `phone-input` | Kazakhstan-friendly phone entry with a visible country prefix and formatted national number. |
| `username-input` | Account names restricted to letters and numbers with sensible default length limits. |
| `iin-input` | Kazakhstan IIN entry with numeric masking and a 12-digit validation rule. |
| `otp` | Short one-time verification codes split into predictable character cells. Use it only for codes, not passwords or recovery phrases. |
| `checkbox` | Independent boolean choices or selection of several values from a group. |
| `switch` | Settings that take effect immediately when turned on or off. Use Checkbox when a value is submitted as part of a form. |
| `select` | Choosing one predefined option when displaying every option inline would consume too much space. |
| `autocomplete` | Selecting one predefined option while filtering a longer list by text. It is not a free-form Input. |
| `calendar` | Selecting a day or date range with month/year navigation and common range presets. |
| `search` | Search queries that benefit from debounce, a search affordance and a clear action. |

### Content and data display

| Component | Use it for |
| --- | --- |
| `accordion` | Progressive disclosure of secondary information. Keep labels descriptive so users can predict the hidden content. |
| `avatar` | A user image with an initials fallback. Supply a meaningful name even when an image URL is available. |
| `card` | A self-contained content preview with media, supporting information and one main action. |
| `chip` | Compact filters, selected values and removable metadata. Do not use it as the primary page action. |
| `divider` | A subtle boundary between related content groups when spacing alone is insufficient. |
| `info-box` | Supporting notes, constraints and guidance that should remain visible without interrupting the flow. |
| `island` | A grouped content surface with an optional inside or outside header. Use it to establish page rhythm, not to wrap every element. |
| `list` | Repeated rows with consistent leading, content and trailing regions, including interactive rows and trailing actions. |
| `status` | Short semantic states such as success, warning, information and error. Keep labels concise. |
| `table` | Structured records whose columns need explicit labels and value mapping. Prefer List for narrow mobile summaries. |
| `tooltip` | Brief clarification for icon actions or unfamiliar controls. Essential information must remain visible outside a tooltip. |

### Feedback and overlays

| Component | Use it for |
| --- | --- |
| `dialog` | Focused forms and decisions that must be completed or dismissed before returning to the page. |
| `alert-dialog` | Blocking information with one acknowledgement action. It should not ask the user to make a choice. |
| `confirm-dialog` | Explicit confirmation of consequential actions with clear cancel and submit labels. |
| `drawer` | Secondary workflows and supporting details that benefit from more vertical space, especially on mobile. |
| `dropdown-menu` | A compact set of contextual actions anchored to a trigger. Keep frequent actions directly visible instead. |
| `empty` | No-data, no-results and recoverable error states with a useful explanation and next action. |
| `global-loader` | Blocking application work during which navigation or duplicate actions would be unsafe. |
| `spinner` | Local loading inside a bounded region where the rest of the interface remains usable. |
| `toast` | Non-blocking feedback after an action. Use Dialog for information that requires acknowledgement. |

### Project integration

| Registry item | Use it for |
| --- | --- |
| `seo` | Shared site metadata, localized page metadata, favicon links and social previews. |

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
- the shared `backdrop` utility for overlays
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

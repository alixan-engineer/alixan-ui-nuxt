# AGENTS.md

Краткий контекст для AI-агентов, работающих с `alixan-ui-nuxt`.

## Проект

`alixan-ui-nuxt` — UI-система для Nuxt 4 / Vue 3 / TypeScript. Компоненты устанавливаются через локальный CLI: CLI читает `registry/*.json` и копирует исходники из этого репозитория прямо в проект пользователя.

Стиль компонентов: чистый iOS/Cupertino-like UI, спокойные состояния, аккуратные радиусы, light/dark theme через CSS variables и Tailwind.

## Реальная структура

- `app/components/ui/*` — исходники UI-компонентов.
- `app/composables/*` — composables для overlay/service patterns: dialog, drawer, toast, loader, theme, page meta/toc.
- `app/pages/*` — страницы документации.
- `app/shared/examples/*` — code examples, API reference rows и page toc для документации.
- `app/shared/theme/*` — theme tokens и CSS generation helpers.
- `app/widgets/*` — документационные виджеты: header, sidebar, copy button, example block, page toc.
- `i18n/locales/en.json`, `ru.json`, `kk.json` — все runtime/documentation переводы.
- `registry/*.json` — список файлов, которые CLI копирует для каждого registry item.
- `cli/index.js` — CLI entrypoint.
- `public/icons/*` и `app/assets/*` — публичные и app assets.

Нет папки `templates`. Если она упоминается в README/package metadata, не ориентируйся на неё как на источник файлов.
В `package.json.files` должны попадать `app`, `cli`, `registry`, `README.md`.

## Команды

- `npm run dev` — dev server.
- `npm run build` — Nuxt build.
- `npm run generate` — static generation.
- `npm run preview` — preview generated/build output.
- `node cli/index.js list` — посмотреть registry items.
- `node cli/index.js add button --force` — локально проверить копирование компонента.

Не добавляй новые зависимости без явного запроса. Используй только стек из `package.json`.

## Стек и стиль кода

- Vue SFC: `<script setup lang="ts">`, Composition API.
- Nuxt 4 conventions и auto-imports; alias `~/`.
- Tailwind CSS v4 через `@tailwindcss/vite`.
- Иконки импортируются из `@lucide/vue`, например:

```ts
import { ChevronRight, Plus } from '@lucide/vue';
```

- Tailwind classes держи прямо в шаблонах компонентов. Не выноси в `@apply`, если нет сильной причины.
- Компоненты должны быть простыми: typed props/emits, минимум абстракций, без factory/helper layers ради красоты.
- Переиспользуй существующие local utilities: `cn`, текущие composables и patterns в соседних компонентах.

## i18n правила

i18n в проекте считается базовой интеграцией для документации и компонентов.

- Не пиши отображаемый текст прямо в Vue templates, page toc или API reference rows.
- В Vue templates используй `$tn(value)`. Это глобальный helper из `app/plugins/tn.ts`: если строка существует как i18n key, он вернет перевод, иначе покажет исходную строку без missing-key warning.
- В `usePageMeta` передавай ключи, а не результат `t(...)`:

```ts
usePageMeta({
	title: 'componentDocs.button.metaTitle',
	description: 'componentDocs.button.description',
});
```
- `usePageMeta` использует `useNuxtApp().$tn` внутри. Если меняешь SEO registry item, не удаляй `plugins: ["tn.ts"]` и `types: ["tn.d.ts"]`.

- Для внутренних Nuxt-ссылок в локализованных страницах/виджетах используй `useLocalePath()`:

```ts
const localePath = useLocalePath();
```

```vue
<Button :to="localePath('/button')">Button</Button>
```

Не оборачивай внешние `href`, `Teleport to="body"` и внутренний pass-through `:to="to"` в базовых компонентах.
- `Table.vue` показывает `column.label` и `column.getValue(...)` через `$tn(...)`. Поэтому `app/shared/examples/*/api-reference.ts` должен хранить `description: 'apiReferenceDescriptions.someKey'`, а не английский текст.
- `PageToc.vue` показывает `link.label` через `$tn(...)`. Все `page-toc.ts` должны хранить ключи переводов.
- При добавлении ключей обновляй все три локали: `en`, `ru`, `kk`.
- После изменений проверяй равенство ключей локалей.

## Документация компонентов

Обычная страница компонента использует:

- `app/pages/<name>.vue`
- `app/shared/examples/<name>/usage-examples.ts`
- `app/shared/examples/<name>/api-reference.ts`
- `app/shared/examples/<name>/page-toc.ts`
- `app/shared/examples/table-columns.ts`

API reference rows обычно отображаются через `Table`, поэтому значения в колонке `description` должны быть translation keys.

## Registry / CLI

Registry item хранится в `registry/<name>.json`.

Поддерживаемые ключи registry:

- `components` — имена файлов компонентов. CLI ищет файл внутри `app/components/ui`.
- `composables` — файлы из `app/composables`.
- `config` — файлы из `app/config`.
- `plugins` — файлы из `app/plugins`.
- `types` — файлы из `app/types`.
- `utils` — файлы из `app/utils`.

CLI копирует файлы в те же пути внутри проекта пользователя. Если добавляешь компонент с зависимостями, обнови registry item так, чтобы CLI копировал все нужные components/composables/config/plugins/types/utils.

## Проверки перед ответом

Минимум:

```bash
python3 -m json.tool i18n/locales/en.json >/dev/null
python3 -m json.tool i18n/locales/ru.json >/dev/null
python3 -m json.tool i18n/locales/kk.json >/dev/null
```

Для i18n/API docs изменений:

```bash
rg --pcre2 "description:\s*(?:\n\s*)?'(?!apiReferenceDescriptions\.)" app/shared/examples -g 'api-reference.ts'
rg "label: '[A-ZА-Я]" app/shared/examples -g 'page-toc.ts'
```

Если package manager доступен, запускай `npm run build`. Если в окружении нет `npm`, явно скажи это в финальном ответе.

## Важные ограничения

- Не трогай unrelated dirty changes.
- Не используй `git reset --hard`, `git checkout --` и другие destructive команды без явного запроса.
- Для ручных правок используй `apply_patch`.
- Не добавляй `templates/` и не переносись обратно на старую `app/shared/page-docs` структуру.

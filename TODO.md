# TODO

### Исправить registry

- [ ] я установил кпноку и он очень долго скачивался и я получил warning:
      xalidevxx@air kaspi-bot-dashboard % npx alixan-ui-nuxt add button
      Need to install the following packages:
      alixan-ui-nuxt@0.1.3
      Ok to proceed? (y) y

npm warn deprecated vue-i18n@10.0.8: v9 and v10 no longer supported. please migrate to v11. about maintenance status, see https://vue-i18n.intlify.dev/guide/maintenance.html
npm warn deprecated glob@10.5.0: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
Created: components/ui/Button.vue
Created: utils/cn.ts

Done. Added Button.
Можешь исправить и компоннет добавился в root/components а должен был добавится в root/app/component. кстати можно cn функцию минимизировать как в shadcn а то разрабы могут испугаться от такого кода


- [x] Удалить упоминание shadcn из главной
- [x] Исправить scroll по оси Х в мобильной версий в pages/Input .vue
- [ ] Для accordion оптимизировать анимацию, появляются лаги в мобильной версии сафари
- [ ] Исправить sidebar "h-screen" на safari. в safari есть absolute элементы которые накладываются поверх сайта, надо использовать на видимый view, в scss было такое свойство
- [ ] Sitemap добавить комментарии изменить на свой сайт
- [ ] Перевести весь текст i18n в документации
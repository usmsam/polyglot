# polyglot

## Суть
Веб-читалка книг для изучения иностранных языков: пользователь читает книги прямо в браузере (PDF-ридер), ведёт личную библиотеку и собирает словари новых слов. Многоязычный интерфейс. Продукт объединяет чтение и работу со словарным запасом в одном месте.

## Стек
- **Next.js** (Pages Router) + **React**, TypeScript, SCSS.
- **PDF:** `@react-pdf-viewer/core` + `pdfjs-dist` (чтение книг в браузере).
- **Стейт:** Redux Toolkit + `react-redux`.
- **i18n:** переводы в `public/locales` (en, de).
- **Данные/формы:** `axios`, `react-hook-form`, `leaflet`, `framer-motion`, `lodash`.

## Архитектура
Feature-Sliced Design:
- `pages/*` — роуты: `index` (лендинг), `allbooks`, `books/[id]` (чтение), `dictionaries`, `mylibrary`, `login`, `registration`.
- `src/pages/*` — композиции (`HomePage`, `AllBooksPage`, `MyLibraryPage`, `MyDictionaryPage`, `AuthPage`, `RegisterPage`).
- `src/shared/api` — axios-инстанс + маршруты по доменам (`auth`, `books`, `categories`, `dictionaries`, `files`, `users`).
- `src/features/*` — `DictionaryList`, `DictionaryModal` (+ item), два хедера (`HeaderLanding`/`HeaderLibrary`), `Sidebar`/`MobileSidebar`, `RestorePasswordModal`, `Heroblock`, `InfoBlock`.
- `src/store` — Redux-стор.

## Фичи
- **Чтение книг:** просмотр PDF в браузере (`books/[id]`), каталог всех книг и категории.
- **Личная библиотека:** сохранённые книги пользователя (`mylibrary`).
- **Словари:** создание и ведение словарей слов (`dictionaries`, `DictionaryModal`) — выписывание новых слов при чтении.
- **Аутентификация:** вход/регистрация, восстановление пароля.
- **Многоязычность:** переключение локалей (en/de).
- **Адаптив:** раздельные хедеры лендинга и библиотеки, мобильный сайдбар.

## Сложные места
- **PDF-ридер в вебе.** Интеграция `@react-pdf-viewer` + `pdfjs-dist` для чтения книг в браузере — работа с воркером pdf.js, подгрузкой файлов (`api/routes/files`) и производительностью больших документов.
- **Связка «чтение → словарь».** Сценарий, когда новые слова из книги попадают в личные словари пользователя — объединение ридера и словарного модуля.
- **Два режима интерфейса.** Публичный лендинг и приватная «библиотека» имеют разные хедеры/навигацию в рамках одного приложения.
- **Доменный API-слой.** `shared/api/routes/*` по сущностям (книги, словари, файлы, категории) поверх одного инстанса.

## Кейсы
- **«Читалка PDF в браузере».** Интеграция pdf.js/react-pdf-viewer и работа с большими файлами.
- **«Чтение + накопление словаря».** Как связать ридер с личными словарями для изучения языка.
- **Статус: до ИИ.**

## Навыки
`Next.js` · `Pages Router` · `React` · `TypeScript` · `PDF (pdf.js / react-pdf-viewer)` · `Redux Toolkit` · `Feature-Sliced Design` · `i18n (en/de)` · `доменный API-слой` · `react-hook-form` · `адаптивная навигация`

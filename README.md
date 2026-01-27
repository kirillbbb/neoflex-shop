# Neoflex Shop

SPA-приложение интернет-магазина аудио-аксессуаров, реализованное в рамках тестового задания.

---

## Стек технологий

- React
- React Router
- TypeScript
- Vite
- SCSS (CSS Modules)
- ESLint + Prettier

---

## Что реализовано

Разработано SPA-приложение с использованием React, React Router и TypeScript.

Реализованы три основные страницы:
- каталог товаров;
- корзина с выбранными товарами;
- страница избранного.

Настроен масштабируемый роутинг с использованием React Router.

Данные о товарах хранятся в виде массива и используются
для динамической генерации карточек товаров.

Реализована логика добавления товаров в корзину:
- при нажатии на кнопку «Купить» счётчик товаров увеличивается;
- состояние корзины является общим для всего приложения.

Реализовано изменение количества товаров в корзине:
- увеличение и уменьшение количества;
- автоматический перерасчёт общей суммы и количества товаров.

Реализована возможность удаления товаров из корзины.

Реализован переход из корзины обратно на главную страницу
через логотип.

Все интерактивные элементы (кнопки, ссылки, иконки)
имеют hover-состояния и поддерживают переходы.

Добавлена адаптивность для всех основных экранов.

## Запуск проекта
- npm install
- npm run dev
---


##  Структура проекта

```text
neoflex-shop/
├── public/
│   ├── icons/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── router.tsx
│   │
│   ├── components/
│   │   ├── CartItem/
│   │   │   ├── CartItem.tsx
│   │   │   └── CartItem.module.scss
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.scss
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.scss
│   │   └── ProductCard/
│   │       ├── ProductCard.tsx
│   │       └── ProductCard.module.scss
│   │
│   ├── context/
│   │   ├── CartContext.tsx
│   │   ├── CartProvider.tsx
│   │   └── FavoritesContext.tsx
│   │
│   ├── data/
│   │   └── products.ts
│   │
│   ├── hooks/
│   │   └── useCart.ts
│   │
│   ├── layouts/
│   │   └── Layout.tsx
│   │
│   ├── pages/
│   │   ├── CartPage/
│   │   │   ├── CartPage.tsx
│   │   │   └── CartPage.module.scss
│   │   ├── CatalogPage/
│   │   │   └── CatalogPage.tsx
│   │   └── FavoritePage/
│   │       └── FavoritesPage.tsx
│   │
│   ├── styles/
│   │   ├── global.scss
│   │   ├── layout.scss
│   │   └── variables.scss
│   │
│   ├── types/
│   │   ├── cart.ts
│   │   └── product.ts
│   │
│   └── main.tsx
│
├── eslint.config.js
├── package.json
├── tsconfig.json
└── vite.config.ts
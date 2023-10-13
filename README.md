# Rediska

[https://rediska.vercel.app/](https://rediska.vercel.app/)

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/-Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![RTK Query](https://img.shields.io/badge/-RTK%20Query-4B32C3?style=for-the-badge&logo=redux&logoColor=white)
![React Markdown](https://img.shields.io/badge/-React%20Markdown-000000?style=for-the-badge)

## Запуск проекта

First, clone repo:

`git clone https://github.com/blastuha/Rediska.git`

Go to the folder, install dependencies and run the development server:

```
$ npm install

$ npm run dev

```

## Что реализовано ?

- **Работа с Markdown**: Реализовано динамическое отображение Markdown-статей (сюжетов) и подборок рецептов с использованием библиотеки React Markdown. Сюжеты и подборки хранятся в Firebase в виде Markdown разметки.
- **Использование Redux Toolkit**: Сайт использует Redux Toolkit для управления глобальным состоянием приложения.
- **Запросы на Firebase с использованием RTK Query**: В данном проекте используется Redux Query для управления запросами к Firebase и получения актуальных данных.
- **Оптимистическое обновление при добавлении/удалении рецепта в базу-избранных Firebase**: Реализовано оптимистическое обновление, которое позволяет вам моментально добавить/удалить рецепт в избранное, а затем асинхронно синхронизировать его с Firebase.
- **Счетчик добавлений в избранное**: Сайт подсчитывает, сколько раз разные пользователи добавили каждый рецепт в избранное.
- **Авторизация Firebase и валидация форм с Formik**: Сайт обеспечивает возможность авторизации для пользователей с помощью Firebase. Доступны: регистрация, авторизация, функция восстановления пароля. Все формы валидируются с помощью Formik.
- **Компонент React.lazy и Заглушка**: Для улучшения производительности используется React.lazy для ленивой загрузки компонента приложения, что позволяет ускорить начальную загрузку страницы. Также добавлено отображение загрузчика при загрузке сайта.
- **Использование Tailwind**: В этом проекте я познакомился с Tailwind CSS и внедрили его для создания дизайна. Дизайн разрабатывался самостоятельно по ходу движения разработчки сайта. Упор на дизайн не ставился.
- **Поиск с debounce**: Реализован поиск с задержкой (debounce), чтобы исключить большое количество запросов.
- **Сортировка рецептов**: Вы можете сортировать рецепты по разным параметрам. В том числе по количеству добавленных рецептов в избранное.
- **Карусель и Swiper слайдов новостей**: Для улучшения пользовательского опыта на сайте есть карусель и слайдер написанные с помощью библиотеки Swiper.
- **Анимации с Framer Motion**: Сайт использует библиотеку Framer Motion для создания плавного появления страниц при открытии сайта.
- **Работа с Grid-Сетками**: Большинство элементов сайта использует Grid-сетку.
- **Уведомления**: При добавлении рецепта в избранное - появляется уведомление. Реализовано с помощью библиотеки Toastify.
- **Адаптивная верстка**: Сайт адаптирован для экранов всех размеров, начиная от узких экранов шириной 320px.

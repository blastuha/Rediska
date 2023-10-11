import React from 'react'
import { useScrollToTop } from '../../../hooks/useScrollToTop'
import me from '../../../assets/me.png'

export const AboutPage: React.FC = () => {
  useScrollToTop()

  return (
    <div className='container mx-auto flex flex-grow  flex-col pl-4 pr-4 md:max-w-[900px]'>
      <div className='mb-16 flex flex-col items-center'>
        <h2 className='mb-4 text-center font-dancingScript text-[2.4rem]'>Author</h2>
        <div className='mb-6 max-h-[280px] xs:max-w-[180px] md:max-w-[280px]'>
          <img src={me} alt='me' />
        </div>
        <p className='mb-4'>
          Позвольте представиться. Меня зовут Борис Шевнин, и я являюсь веб-разработчиком с более
          чем полуторагодичным стажем. Моя профессиональная деятельность связана с созданием
          веб-сайтов, и мой интерес к этой области развивается с каждым проектом.
        </p>
        <p className=''>
          Что меня вдохновляет в веб-разработке? Возможность создания уникальных и функциональных
          веб-ресурсов. В будущем, моей целью является разработка собственного веб-сайта с товарами
          из Китая. Также, в моих планах - запуск интернет-магазина по парфюмерии.
        </p>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='mb-8 text-center font-dancingScript text-[2.4rem]'>Website functionality</h2>
        <ul className='list-disc xs:ml-4'>
          <li className='mb-3 '>
            <b className='mr-2'>Работа с Markdown:</b>Реализовано динамическое отображение
            Markdown-статей (сюжетов) и подборок рецептов с использованием библиотеки React
            Markdown. Сюжеты и подборки хранятся в Firebase в виде Markdown разметки.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Использование Redux Toolkit:</b>Сайт использует Redux Toolkit для
            управления глобальным состоянием приложения.
          </li>
          <li className='mb-3'>
            <b className='mb-2 mr-2'>Запросы на Firebase с использованием RTK Query:</b>В данном
            проекте используется Redux Query для управления запросами к Firebase и получения
            актуальных данных.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>
              Оптимистическое обновление приы добавлении/удалении рецепта в базу-избранных Firebase:
            </b>
            Реализовано оптимистическое обновление, которое позволяет вам моментально
            добавить/удалить рецепт в избранное, а затем асинхронно синхронизировать его с Firebase.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Счетчик добавлений в избранное:</b>
            Сайт подсчитывает, сколько раз <b>разные</b> пользователи добавили каждый рецепт в
            избранное.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Авторизация Firebase и валидация форм с Formik:</b>
            Сайт обеспечивает возможность авторизации для пользователей с помощью Firebase.
            Доступны: регистрация, авторизация, функция восстановления пароля. Все формы
            валидируются с помощью <b>Formik</b>.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Компонент React.lazy и Заглушка:</b>Для улучшения производительности
            используется React.lazy для ленивой загрузки компонента приложения, что позволяет
            ускорить начальную загрузку страницы. Также добавлено отображение загрузчика при
            загрузке сайта.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Использование Tailwind:</b>В этом проекте я познакомился с Tailwind
            CSS и внедрили его для создания дизайна. Дизайн разрабатывался самостоятельно по ходу
            движения разработчки сайта. Упор на дизайн не ставился.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Поиск с debounce:</b>
            Реализован поиск с задержкой (debounce), чтобы исключить большое количество запросов.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Сортировка рецептов:</b>
            Вы можете сортировать рецепты по разным параметрам. В том числе по количеству
            добавленных рецептов в избранное.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Карусель и Swiper слайдов новостей:</b> Для улучшения
            пользовательского опыта на сайте есть карусель и слайдер написанные с помощью библиотеки{' '}
            <b>Swiper</b>.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Анимации с Framer Motion:</b>Сайт использует библиотеку Framer
            Motion для создания плавного появления страниц при открытии сайта.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Работа с Grid-Сетками:</b>Большинство элементов сайта использует
            Grid-сетку.
          </li>
          <li className='mb-3'>
            <b className='mr-2'>Адаптивная верстка:</b>Сайт адаптирован для экранов всех размеров,
            начиная от узких экранов шириной 320px.
          </li>
        </ul>
      </div>
    </div>
  )
}

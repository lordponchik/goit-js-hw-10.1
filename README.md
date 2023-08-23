# Homework / Домашнее задание :clipboard:
## goit-js-hw-10
:us:
<details>
	<summary>English</summary>
# Acceptance criteria

- `goit-js-hw-07` repository created.
- In your submitted homework, there are two links: One to your source files and one to your working page on `GitHub Pages`.
- During live page visits, there are no errors or warnings generated in the console.
- Clear and descriptive names of variables and functions.
- Code formatted with `Prettier`.

## Start files

- In the [src folder](./src), you will find start files with basic markup and ready-made styles. Copy them to your project. To do this, download this entire repository as an archive or use the [DownGit service](https://downgit.github.io/) to download a separate folder from the repository.
- In the `gallery-items.js` file, there is an array called `galleryItems`, which contains objects with information about Images: small (preview), original (large) and description. It has already been added to each of the project's JS files.

## Task 1 - image gallery

Create a gallery with the ability to click on its items and view full size images in a modal window. Check out the demo video of the gallery.

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Do this task in the `01-gallery.html` and `01-gallery.js` files. Break it down into several subtasks:

1. Creating and rendering markup from the `galleryItems` data array and provided gallery item template.
2. Implementing delegation to `ul.gallery` and getting the `url` of a large image.
3. Adding the script and styles of the modal window library [basicLightbox](https://basiclightbox.electerious.com/). Use the [jsdelivrCDN](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist) service and add links to the minified (`.min`) library files to your project.
4. Opening a modal window by clicking on a gallery item. To do this, check out the [documentation](https://github.com/electerious/basicLightbox#readme) and [examples](https://basiclightbox.electerious.com/).
5. Replacing the value of the `src` attribute of the `<img>` element in a modal window before opening. Use the ready-made modal window markup with the image from the examples of the [basicLightbox](https://basiclightbox.electerious.com/) library.

### Gallery item markup

The link to the original image must be stored in the `source` data attribute on the `<img>` element and specified in the link's `href`. Do not add any HTML tags or CSS classes other than those in this template.

```html
<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li>
```

Please note that the image is wrapped in a link, which means that, when clicked, the user will be redirected to another page by default. Disable this behavior by default.

### Closing from keyboard

> ⚠️ The following features are optional, but they will be good for additional practice.

Add functionality for modal window closing upon pressing the `Escape` key. Make keyboard listening available only while the modal window is open. In the [basicLightbox](https://basiclightbox.electerious.com/) library, there is a method to close the modal window programmatically.

## Task 2 - `SimpleLightbox` library

Create the same gallery as in the first task, but using the [SimpleLightbox](https://simplelightbox.com/) library, which will handle image clicks, modal opening and closing, and image scrolling with the keyboard.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

It is necessary to slightly change the gallery card markup; use this template.

```html
<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>
```

Do this task in the `02-lightbox.html` and `02-lightbox.js` files. Break it down into several subtasks:

1. Creating and rendering markup from the `galleryItems` data array and provided gallery element template. Use the ready-made code from the first task.
2. Adding the script and library styles using the [cdnjs](https://cdnjs.com/libraries/simplelightbox) CDN service. You need to add links to two files: `simple-lightbox.min.js` and `simple-lightbox.min.css`.
3. Library initialization after gallery items are created and added to `ul.gallery`. To do this, read the [SimpleLightbox](https://simplelightbox.com/) documentation - first of all, the Usage and Markup sections.
4. Look in the documentation for the Options section and add an image caption display from the `alt` attribute. Let the caption be at the bottom and appear 250 milliseconds after image opening.
</details>
:ukraine:
<details>
<summary>Russian</summary>
	
# Критерии приема

 - Создан репозиторий goit-js-hw-10.
 - При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages.
 - При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
 - Проект собран с помощью [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
 - Код отформатирован Prettier.

## Стартовые файлы

[Скачай стартовые файлы index.html](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/10/src) с базовой разметкой, готовыми стилями и подключенными файлами скриптов для каждого задания. Скопируй его себе в проект в папке src в [parcel-project-template](https://github.com/goitacademy/parcel-project-template).

## Задание - Котопоиск

Создай фронтенд часть приложения поиска информации о коте по его породе. Посмотри демо видео работы приложения, используй его как ориентир на требуемый функционал.

https://textbook.edu.goit.global/lms-js-homework/v2/assets/medias/catsearch-demo-7a9eca87a69c1131c828592a49f6f647.mp4

## HTTP-запросы
Используй публичный [The Cat API](https://thecatapi.com/). Для начала работы необходимо зарегистрироваться и получить уникальный ключ доступа, который нужно прикреплять к каждому запросу. Заходим на [главную страницу](https://thecatapi.com/) и ниже нажимаем кнопку Signup for free, следуем инструкции, ключ будет отправлен на указаную почту.

Использовать ключ необходимо в HTTP-заголовке x-api-key. Рекомендуется использовать axios и добавить заголовок для всех запросов.

```html
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "твой ключ";
```

## Коллекция пород
При загрузке страницы должен выполняться HTTP-запрос за коллекцией пород. Для этого необходимо выполнить GET-запрос на ресурс https://api.thecatapi.com/v1/breeds, возвращающий массив объектов. При успешном запросе, необходимо наполнить select.breed-select опциями так, чтобы value опции содержал id породы, а в интерфейсе пользователю отображалось название породы.

Напиши функцию fetchBreeds() которая делает HTTP-запрос и возвращает промис с массивом пород - результатом запроса. Вынеси её в файл cat-api.js и сделай именованный экспорт.

## Информация о коте
Когда пользователь выбирает опцию в селекте, необходимо выполнять запрос за полной информацией о коте на ресурс https://api.thecatapi.com/v1/images/search. Не забудь указать в этом запросе параметр строки запроса breed_ids с идентификатором породы.

Так будет выглядеть URL запроса полной информации о собаке по идентификатору породы.

```html
https://api.thecatapi.com/v1/images/search?breed_ids=идентификатор_породы
```

Напиши функцию fetchCatByBreed(breedId) которая ожидает идентификатор породы, делает HTTP-запрос и возвращает промис с данными о коте - результатом запроса. Вынеси её в файл cat-api.js и сделай именованный экспорт.

Если запрос был успешный, под селектом, в блоке div.cat-info появляется изображение и развернутая информация о коте: название породы, описание и темперамент.

## Обработка состояния загрузки
Пока идет любой HTTP-запрос, необходимо показывать загрузчик - элемент p.loader. Пока запросов нет или когда запрос завершился, загрузчик необходимо скрывать. Используй для этого дополнительные CSS классы.

Пока идет запрос за списком пород, необходимо скрыть select.breed-select и показать p.loader.
Пока идет запрос за инфорацией о коте, необходимо скрыть div.cat-info и показать p.loader.
Когда любой запрос завершился, p.loader необходимо скрыть

## Обработка ошибки
Если у пользователя произошла ошибка любого HTTP-запроса, например упала сеть, была потеря пакетов и т. п., то есть промис был отклонен, необходимо отобразить элемент p.error, а при каждом последующем запросе скрывать его. Используй для этого дополнительные CSS классы.

Протестировать работоспособноть отображения ошибки очень просто - измени адрес запроса добавив в конец любой символ, например вместо https://api.thecatapi.com/v1/breeds используй https://api.thecatapi.com/v1/breeds123. Запрос получения списка пород будет отклонен с ошибкой. Аналогично для запроса информации о коте по породе.

## Интерфейс
Добавь минимальное оформление элементов интерфейса.
Вместо select.breed-select можешь использовать любую библиотеку с красивыми селектом, например https://slimselectjs.com/
Вместо p.loader можешь использовать любую библиотеку с красивыми CSS-загрузчиками, например https://cssloaders.github.io/
Вместо p.error можешь использовать любую библиотеку с красивыми оповещениями, например Notiflix
</details>




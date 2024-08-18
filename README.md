<h1 id="home">Homework :clipboard:</h1>

## goit-js-hw-10.1


* 🇺🇸 [English](#en)
* 🇺🇦 [Ukrainian](#uk)
* 🇷🇺 [Russian](#ru)

--- 

<h3 id="en">📚 EN 📚</h3>

# Admission criteria

 - Repository created goit-js-hw-10.1
 - When submitting homework, there are two links: to the source files and the working page on GitHub Pages.
 - When visiting the live job page, there are no errors or warnings in the console.
 - The project is built with [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
 - Code formatted Prettier.

## Starter files

[Download starter files index.html](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/10/src) with basic markup, ready-made styles and included script files for each task. Copy it to your project in the src folder in [parcel-project-template](https://github.com/goitacademy/parcel-project-template).

## Task - cat search

Create a front-end part of the application for searching information about a cat by its breed. Watch a demo video of the application, use it as a guide to the required functionality.

https://textbook.edu.goit.global/lms-js-homework/v2/assets/medias/catsearch-demo-7a9eca87a69c1131c828592a49f6f647.mp4

## HTTP-requests
Use public [The Cat API](https://thecatapi.com/). To get started, you need to register and get a unique access key that you need to attach to each request. We go to [home page](https://thecatapi.com/) and below we press the Signup for free button, follow the instructions, the key will be sent to the specified mail.

The key must be used in the x-api-key HTTP header. It is recommended to use axios and add a header for all requests.

```html
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "your key";
```

## Breed collection
When the page is loaded, an HTTP request should be made for the collection of rocks. To do this, you need to make a GET request to the https://api.thecatapi.com/v1/breeds resource, which returns an array of objects. Upon successful request, it is necessary to fill select.breed-select with options so that the value of the option contains the id of the breed, and the name of the breed is displayed in the interface to the user.

Write a fetchBreeds() function that makes an HTTP request and returns a promise with an array of breeds as the result of the request. Put it in the cat-api.js file and make a named export.

## Information about the cat
When the user selects an option in the select, it is necessary to perform a request for complete information about the cat to the https://api.thecatapi.com/v1/images/search resource. Don't forget to include the breed_ids query string parameter with the breed ID in this request.

This is how the URL for requesting complete information about the dog by breed ID will look like.

```html
https://api.thecatapi.com/v1/images/search?breed_ids=id__breed
```

Write a function fetchCatByBreed(breedId) that takes a breed ID, makes an HTTP request, and returns a promise with cat data as the result of the request. Put it in the cat-api.js file and make a named export.

If the request was successful, under the select, in the div.cat-info block, an image and detailed information about the cat appears: breed name, description and temperament.

## Load state handling
While any HTTP request is in progress, it is necessary to show the loader - the p.loader element. While there are no requests or when the request has completed, the loader must be hidden. Use additional CSS classes for this.

While the request is for a list of breeds, you need to hide select.breed-select and show p.loader.
While there is a request for information about the cat, you need to hide div.cat-info and show p.loader.
When any request has completed p.loader needs to be hidden

## Error Handling
If the user had an error in any HTTP request, for example, the network went down, there was a packet loss, etc., that is, the promise was rejected, you need to display the p.error element, and hide it on each subsequent request. Use additional CSS classes for this.

Testing the error display is very simple - change the request address by adding any character to the end, for example, instead of https://api.thecatapi.com/v1/breeds, use https://api.thecatapi.com/v1/breeds123. The request to get a list of breeds will be rejected with an error. Similarly for requesting information about a cat by breed.

## Interface
Instead of select.breed-select you can use any library with nice selects like 
https://slimselectjs.com/
Instead of p.loader, you can use any library with beautiful CSS loaders, like 
https://cssloaders.github.io/
Instead of p.error, you can use any library with beautiful alerts, such as Notiflix

---
---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3> 			

# Критерії прийому

 - Створено репозиторій goit-js-hw-10.1
 - При здачі домашньої роботи є два посилання: на вихідні файли та робочу сторінку на GitHub Pages.
 - При відвідуванні живої сторінки завдання, в консолі немає помилок та попереджень.
 - Проект зібрано за допомогою [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
 - Код відформатовано Prettier.

## Стартові файли

[Скачай стартові файли index.html](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/10/src ) з базовою розміткою, готовими стилями та підключеними файлами скриптів для кожного завдання. Скопіюй його собі в проект у папці src у [parcel-project-template](https://github.com/goitacademy/parcel-project-template).

## Завдання - Котопошук

Створи фронтенд частину додатка пошуку інформації про кота за його породою. Подивіться демо відео роботи програми, використовуй його як орієнтир на потрібний функціонал.

https://textbook.edu.goit.global/lms-js-homework/v2/assets/medias/catsearch-demo-7a9eca87a69c1131c828592a49f6f647.mp4

## HTTP-запити
Використовуйте публічний [The Cat API](https://thecatapi.com/). Для початку роботи необхідно зареєструватися та отримати унікальний ключ доступу, який потрібно прикріплювати до кожного запиту. Заходимо на [головну сторінку](https://thecatapi.com/) і нижче натискаємо кнопку Signup for free, дотримуємося інструкції, ключ буде відправлено на вказану пошту.

Використовувати ключ необхідно в заголовку HTTP x-api-key. Рекомендується використовувати axios та додати заголовок для всіх запитів.

```html
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "твой ключ";
```

## Колекція порід
При завантаженні сторінки повинен виконуватися запит HTTP за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. При успішному запиті необхідно наповнити select.breed-select опціями так, щоб value опції містив id породи, а в інтерфейсі користувачеві відображалася назва породи.

Напиши функцію fetchBreeds(), яка робить HTTP-запит і повертає проміс з масивом порід - результатом запиту. Винеси їх у файл cat-api.js і зроби іменований експорт.

## Інформація про кота
Коли користувач вибирає опцію в селекті, необхідно виконувати запит на повну інформацію про кота на ресурс https://api.thecatapi.com/v1/images/search. Не забудь вказати у цьому запиті параметр рядка запиту breed_ids із ідентифікатором породи.

Так буде виглядати URL-адреса запиту повної інформації про собаку по ідентифікатору породи.

```html
https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
```

Напиши функцію fetchCatByBreed(breedId) яка чекає на ідентифікатор породи, робить HTTP-запит і повертає проміс з даними про кота - результатом запиту. Винеси їх у файл cat-api.js і зроби іменований експорт.

Якщо запит був успішний, під селектом, у блоці div.cat-info з'являється зображення та розгорнута інформація про коту: назву породи, опис та темперамент.

## Обробка стану завантаження
Поки йде будь-який HTTP-запит, потрібно показувати завантажувач - елемент p.loader. Поки запитів немає або коли запит завершився, завантажувач потрібно приховувати. Використовуйте для цього додаткові CSS класи.

Поки йде запит за списком порід, потрібно приховати select.breed-select і показати p.loader.
Поки йде запит за інформацією про кота, необхідно приховати div.cat-info та показати p.loader.
Коли будь-який запит завершився, p.loader потрібно приховати

## Обробка помилки
Якщо у користувача відбулася помилка будь-якого HTTP-запиту, наприклад, впала мережа, була втрата пакетів і т.п., тобто проміс був відхилений, необхідно відобразити елемент p.error, а при кожному наступному запиті приховувати його. Використовуйте для цього додаткові CSS класи.

Протестувати працездатність відображення помилки дуже просто - зміни адресу запиту додавши до кінця будь-який символ, наприклад замість https://api.thecatapi.com/v1/breeds використовуй https://api.thecatapi.com/v1/breeds123. Запит на отримання списку порід буде відхилений з помилкою. Аналогічно для запиту інформації про кота по породі.

## Інтерфейс
Додай мінімальне оформлення елементів інтерфейсу.
Замість select.breed-select можеш використовувати будь-яку бібліотеку з гарним селектом, наприклад https://slimselectjs.com/
Замість p.loader можеш використовувати будь-яку бібліотеку із гарними CSS-завантажувачами, наприклад https://cssloaders.github.io/
Замість p.error можеш використовувати будь-яку бібліотеку з гарними оповіщеннями, наприклад, Notiflix

---
---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3> 

# Критерии приема

 - Создан репозиторий goit-js-hw-10.1
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

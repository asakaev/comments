comments
========

Comments loader using AJAX to get JSON from *AMP to create DOM

* Неплохо тянется на разных разрешениях.
* Работает без перезагрузки страницы.
* Одним простым SQL запросом собирает весь контент из базы.
* jQuery, Twitter Bootstrap
* PHP walker (tree traversal) by Marijan Šuflaj <msufflaj32@gmail.com>

* Надо фиксить:
* 1. Проверки нужно сделать на пустые поля. Если ничего не вводить то падать скорее всего будет.
* 2. Много лишнего JSON передаётся от сервера.
* 3. HTML в JS это плохо. Шаблонизатор нужен человеческий.

![alt tag](https://raw.githubusercontent.com/tematema/comments/master/screenshots/Снимок%20экрана%202014-05-11%20в%2010.51.24.png)

![alt tag](https://raw.githubusercontent.com/tematema/comments/master/screenshots/Снимок%20экрана%202014-05-11%20в%2010.51.45.png)
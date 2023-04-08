# HTML-generator - тестовое задание от SIMAI

## Задание
Создайте генератор html-элементов
#### Описание
Необходимо написать класс Component для генерации элементов на странице сайта. В текущем задании нет необходимости генерировать всевозможные html-элементы. Достаточно будет генерации нескольких видов кнопок. 
В зависимости от переданных параметров класс Component должен создавать разный вид одного и того же элемента страницы.
На вход классу Component приходят данные о создаваемом элементе:
  1) Шаблон – шаблон (html представление) элемента страницы;
  2) Параметры отображения – с их помощью можно менять внешний вид элемента страницы;
  3) Модификаторы – предназначены для «тонкой настройки» отображения элемента страницы;
  4) Текстовые значения, которые могут содержать элементы страницы;
  5) События – перечень действий на каждое событие.
На выходе должны получить сгенерированный элемент страницы, созданный классом Component в зависимости от входных данных.

#### Функциональные требования
Использование нативного JavaScript

## Подготовка к работе
#### Скачать репозиторий https://github.com/nea2310/HTML-generator

#### Установить зависимости
```commandline
npm i
```

#### Запустить webpack devserver
```commandline
npm start
```
проект запустится на  http://localhost:8080/

#### Создать сборку проекта
```commandline
npm run build
```
сборка будет размещена в директории **dist**

## Интерфейс параметра конструктора класса Component
  ```
{
  HTMLtemplate?: string;
  viewParameters?: {
    width?: number;
    height?: number;
    shape?: 'square' | 'round'
  };
  modifiers?: {
    background?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    borderStyle?: string;
    fontColor?: string;
  };
  text?: string;
  eventListeners?: [keyof HTMLElementEventMap, EventListenerOrEventListenerObject[]][];
}
  ```


## Опции панели конфигурации

* **HTML-шаблон** - шаблон (HTML-представление) элемента страницы
формат: строка (HTML-содержимое элемента в виде строки)<br>
значение по умолчанию: '<button class = "component__button">click me</button>'

* **обработчики событий** - перечень действий на каждое событие
формат: строка (JSON объект), преобразуемый в массив, например [["click",[["alert(event)", "event"],["alert(event)", "event"]]]]<br>
значение по умолчанию: отсутствует

* **форма элемента** - форма элемента
формат: строка (прямоугольник или овал). При выборе значения 'овал' становится активно поле для ввода радиуса скругления углов<br>
значение по умолчанию: прямоугольник

* **радиус скругления углов(px)** - радиус скругления углов
формат: число. Опция активна только при выборе значения 'овал' в поле `форма элемента`<br>
значение по умолчанию: прямоугольник

* **ширина(px)** - ширина элемента (css-свойство width)
формат: число<br>
значение по умолчанию: отсутствует (ширина по контенту)

* **высота(px)** - высота элемента (css-свойство height)
формат: число<br>
значение по умолчанию: отсутствует (высота по контенту)

* **цвет заливки** - фон элемента (css-свойство background)
формат: строка (запись цвета или градиента в любом доступном для css формате)<br>
значение по умолчанию: отсутствует<br>
пример: green или #84f280 или linear-gradient(#84f280 0%, #28ab24 100%)

* **цвет текста** - цвет текста элемента (css-свойство color)
формат: строка (запись цвета в любом доступном для css формате)<br>
значение по умолчанию: отсутствует

* **цвет рамки** - цвет границы элемента (css-свойство border-color)
формат: строка (запись цвета в любом доступном для css формате)<br>
значение по умолчанию: black

* **ширина рамки** - ширина границы элемента (css-свойство border-width)
формат: число<br>
значение по умолчанию: отсутствует

* **стиль рамки** - стиль границы элемента (css-свойство border-style)
формат: строка (одно из возможных значений css-свойства border-style)<br>
значение по умолчанию: solid

* **текст элемента** - innerText элемента
формат: строка<br>
значение по умолчанию: click me







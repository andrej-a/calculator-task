# Tестовое задание калькулятор

## Содержание

- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Структура проекта](#Структура-проекта)
- [Тестирование](#Тестирование)
- [Как начать](#Как-начать)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание
Необходимо реализовать приложение калькулятор. Приложение должно предоставлять основные арифметические операции, построитель выражений и полную историю всех выражений.

**Обязательная компонентная модель:**

- ***Header*** - должен отображать заголовок приложения, а также ссылки на другие страницы.
- ***Calculator*** - корневой элемент для менеджмента данных калькулятора (логика для хранения истории, операций, текущего состояния и т.д.).
- ***Display*** - отображает ввод калькулятора, выражения и историю.
- ***History*** - отображает список ранее выполненных операций.
- ***ControlPanel*** - используется для управления взаимодействиями калькулятора, которые не связаны с расчетными операциями. Например, он предоставляет функции для переключения истории открытия и закрытия.
- ***Keypad*** - используется для ввода операндов, а также выполнения различных операций с этими операндами.

#### Диаграмма компонентов:

> ![diagramma of components](https://github.com/slava-ovchinnikov/education-task-calculator/blob/master/doc/digrama_of_components.png?raw=true)

#### Необходимый функционал:

- Сложение
- Вычитание
- Умножение
- Деление
- Переключение знака
- Построитель выражения
- История операций
- Показывать полную историю
- Очистка истории
- Очистка вычисленного значения и выражения
- Очистка всего (истории, вычисленного значения и выражения)
- Точность расчета - 3 символа

#### Дополнительный функционал

- Действительные числа могут быть записаны как 0.5 и .5
- Операция **%** - остаток от деления
- Операция **^** - возведение числа в квадрат
- Операция **√** - извлечение квадратного корня из числа
- Локализация приложения с использованием i18n
- Сохранение темы приложения с использованием redux-persist
- Реализация приложения с использованием принципов программирования SOLID. Выполненная реализация включает:
- - Single Responsibility Principle, для выполнения которого компоненты были инкапсулированы и каждый компонент имеет только одну причину для изменения
- - Open Closed Principle, для выполнения которого из компонента Header элементы навигации были вынесены в отдельный компонент Navigation и переданы в качестве props.children, что позволяет нам изменять элементы навигации (например, добавление новых элементов), не изменяя при этом сам компонент Header, который открыт для расширения, но не изменяется, т.к. все действия происходят в стороннем компоненте
- - Liskov Substitution Principle, некоторые из компонентов в styled-components наследуют друг друга и могут быть заменены при необходимости.
- - Interface Segregation Principle, компоненты не зависят от пропсов или интерфейсов (представим, что это TS и они реализованы), которые не реализуют
- Dependency Inversion Principle, функция **controller** была убрана из компонента Keypad и передается туда в качестве пропа. Компонент Keypad теперь не знает, какую функцию реализует и от нее не зависим, что позволяет нам легко ее заменять при необходимости

#### Пример графического представления:

Ссылка на макет: [Макет "Калькулятор"](https://xd.adobe.com/view/3d64c8c6-a59f-4785-736f-6b50257b8e83-4b55/). Также макет можно найти в папке **doc** c расширением **.xd** для программы **Adobe XD**.


> ![example_1](https://github.com/slava-ovchinnikov/education-task-calculator/blob/master/doc/example_1.png?raw=true)


> ![example_2](https://github.com/slava-ovchinnikov/education-task-calculator/blob/master/doc/example_2.png?raw=true)


> ![example_3](https://github.com/slava-ovchinnikov/education-task-calculator/blob/master/doc/example_3.png?raw=true)


#### Также проект предполагает:
- Организацию файловой структуры react приложения ([*см. Структура проекта*](#Структура-проекта)).
- Для реализации логики приложения, необходимо использовать поведенческий паттерн программирования ***"Команда"***, который позволяет превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов, ставить запросы в очередь, логировать их, а также поддерживать отмену операций (см. подробнее [паттерн Команда](https://refactoring.guru/ru/design-patterns/command)).
- Реализация с использованием как классовых, так и функциональных react компонентов и использованием хуков. Разделите приложение на две страницы, на одной из которых будет представлена реализация через классовые компоненты, а на второй - через функциональные.
- Обработку ошибок через паттерн *"Error Boundaries"*
- Реализация светлой и тёмной темы с использованием *styled-components*
- Проверку типов в React компонентах, передаваемых параметров и подобных объектов.
- Использование алиасов для импортирования файлов.

## Используемые технологии

### Для react
- ***Node.js*** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код).
- ***Babel*** - транспайлер, преобразующий код из одного стандарта в другой.
- ***Webpack*** - инструмент, позволяющий скомпилировать, например, JavaScript модули в единый JS-файл.
- ***yarn*** - менеджер пакетов.
- ***react*** - JavaScript-библиотека для создания пользовательских интерфейсов.
- ***react-router-dom*** - набор навигационных компонентов.
- ***react-redux*** - инструмент управления состоянием.
- ***prop-types*** - набор валидаторов, которые могут быть использованы для проверки получаемых данных.
- ***styled-components*** - система стилизации react компонентов.
- ***cypress*** — e2e тестирование для веб приложений.

 ### Для react native
- ***Node.js*** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код).
- ***Babel*** - транспайлер, преобразующий код из одного стандарта в другой.
- ***Metro Bundler*** - сборщик для RN проектов.
- ***yarn*** - менеджер пакетов.
- ***react-navigations*** - библиотека для навигации в RN.
- ***react-redux*** - инструмент управления состоянием.
- ***prop-types*** - набор валидаторов, которые могут быть использованы для проверки получаемых данных.
- ***styled-components*** - система стилизации react компонентов.
- ***detox*** - e2e тестирование для RN приложений.

## Структура проекта

#### Пример необходимой структуры проекта:

> ![structure_1](https://github.com/slava-ovchinnikov/education-task-calculator/blob/master/doc/structure_1.png?raw=true)

#### Пояснения к корневой папке:
- ***.vscode*** - папка для конфигурационных файлов ***VS CODE***.
- ***node_modules*** - здесь будут находится пакеты, установленные ***NPM*** или ***Yarn***.
- ***public*** - место, где находятся ваши статические файлы (например ***index.html***, ***manifest.json***).
- ***src*** - место, где находятся ваши динамические файлы (исходный код вашего приложения). Также в корневой папке находятся все конфигурационные файлы вашего приложения.


#### Пояснения к папке src:
- ***assets*** - папка используется для нужных файлов/объектов, которые необходимы для работы приложения *(Например, картинки)*
- ***components*** - в первую очередь связаны с тем, как все выглядит (глупые компоненты), содержит только метод рендеринга и немного другой логики, они не знают, как загружать или изменять данные, которые они отображают они лучше всего если они написаны как функциональные компоненты без сохранения состояния.
- ***constants*** - константы, необходимые для работы приложения.
- ***containers*** - контейнерные компоненты (умные компоненты) в первую очередь связаны с тем, как все работает они редко имеют свои собственные теги HTML, кроме оберточного ```<div>```
они часто с состоянием, они несут ответственность за предоставление данных и поведения для своих детей (components).
- ***srceens*** - в этой папке находятся страницы вашего приложения, которые состоят из компонентов и контейнеров.
- ***utils*** - необходимые логические модули.


#### Пример структуры react компонента:

> ![structure_2](https://github.com/slava-ovchinnikov/education-task-calculator/blob/master/doc/structure_2.png?raw=true)

#### Пояснение для структуры файлов компонента:
- ***index.js*** - корневой файл для экспорта компонентов.
- ***\*.jsx*** - компоненты модуля (может быть несколько).
- ***conponents.js*** - стилизованные компоненты с использование ***stylde-components***.

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:
- Арифметические операции.
- Модуль истории.
- Модуль дисплея.
- Модуль клавиатуры.
- Модуль навигации.
- Модуль смены темы и т.д.


## Как начать

Эта инструкция поможет вам сделать копию проекта и запустить его на вашей локальной машине для разработки и тестирования.

### React

#### Установка

Для того чтобы получить шаблон проекта, необходимо сделать следующее:

1. Зарегистрировать аккаунт в github.
2. Получить доступ к репозиторию с шаблоном.
3. Импортировать шаблон в свой репозиторий.
4. Склонировать репозиторий на свою локальную машину.

> ![template_1](https://github.com/slava-ovchinnikov/education-task-calculator/blob/master/doc/template.png?raw=true)

#### Запуск ESlint
- Проверка eslint

    `yarn eslint:test`

- Проверка eslint и автофикс

    `yarn eslint:fix`

#### Запуск

- Запуск проекта:

    `yarn start`

- Запуск проекта в режиме разработки

    `yarn dev`

#### Сборка

- Сборка проекта:

    `yarn build`

#### Тесты

- Запуск теста в командной строке

    `yarn build && yarn cypress:test`

- Запуск тестов в графическом интерфейсе

    `yarn cypress`

### React Native

Will be soon...

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[React router dom](https://reacttraining.com/react-router/web/guides/quick-start)

[React redux](https://react-redux.js.org/introduction/quick-start)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Detox](https://github.com/wix/Detox/blob/master/docs/README.md)

[Styled-components](https://www.styled-components.com/docs)

[Commits convetional](https://www.conventionalcommits.org/en/v1.0.0/#specification)

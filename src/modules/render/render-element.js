export default function renderElement(tag, classes) {
  const element = document.createElement(tag);
  element.classList.add(classes);
  return element;
}

// TODO сделать массив классов вместо одного
// TODO Сделать переключение языка
// TODO В русской ракладке неверно отрисовывается ШИФТ
// TODO Всё проверить
// TODO Исправить ошибки линтера

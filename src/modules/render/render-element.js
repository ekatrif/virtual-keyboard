export default function renderElement(tag, classes) {
  const element = document.createElement(tag);
  element.classList.add(classes);
  return element;
}

// TODO сделать массив классов вместо одного
// TODO Пробел не ставит в середине строки
// TODO Всё проверить
// TODO Исправить ошибки линтера
// TODO Отрефачить render-key

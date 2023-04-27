export default function renderElement(tag, classes) {
  const element = document.createElement(tag);
  element.classList.add(classes);
  return element;
}

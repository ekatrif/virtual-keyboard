import * as renderElement from './render-element';

const isLatinLetter = (char) => /[a-zA-Z]/.test(char);
const isCirillicLetter = (char) => /[а-яА-Я]/.test(char);
const makeHidden = (element) => element.classList.add('hidden');

export default function renderKey(key, keyName) {
  const keyWrapper = renderElement.default('div', 'keyboard__key');
  keyWrapper.classList.add('key');
  keyWrapper.classList.add(keyName);

  const ru = renderElement.default('span', 'key__ru');
  const en = renderElement.default('span', 'key__en');

  const up = renderElement.default('span', 'up');
  up.innerText = isCirillicLetter || isLatinLetter ? key.toUpperCase() : key;

  const down = renderElement.default('span', 'down');
  down.innerText = key;

  const caps = renderElement.default('span', 'caps');
  up.innerText = isCirillicLetter || isLatinLetter ? key.toUpperCase() : key;

  const shiftCaps = renderElement.default('span', 'shift-caps');
  shiftCaps.innerText = key;

  // Default hidden state
  makeHidden(ru);
  makeHidden(up);
  makeHidden(caps);
  makeHidden(shiftCaps);

  ru.append(down);
  ru.append(up);
  ru.append(caps);
  ru.append(shiftCaps);

  en.append(down);
  en.append(up);
  en.append(caps);
  en.append(shiftCaps);

  keyWrapper.append(ru);
  keyWrapper.append(en);

  return keyWrapper;
}

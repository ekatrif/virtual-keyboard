import * as renderElement from './render-element';
import * as allKeys from '../keys';

const isLatinLetter = (char) => /[a-zA-Z]/.test(char);
const isCirillicLetter = (char) => /[а-яА-Я]/.test(char);
const makeHidden = (element) => element.classList.add('hidden');
const keys = allKeys.default;
const getLanguage = () => localStorage.getItem('language');
const currentLanguage = getLanguage();
// Create shiftEn or shiftRu name
const optionName = currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1);

const getShiftOption = (keyName) => {
  for (let i=0; i < keys.length; i++) {
    const char = keys[i];
    if (char.code === keyName) {
      // If option shiftEn exists, return true
      return char[`shift${optionName}`];
    }
  }
};

export default function renderKey(key, keyName) {
  const keyWrapper = renderElement.default('div', 'keyboard__key');
  keyWrapper.classList.add('key');
  keyWrapper.classList.add(keyName);

  const ru = renderElement.default('span', 'key__ru');
  const en = renderElement.default('span', 'key__en');

  const up = renderElement.default('span', 'up');
  // If key is a one letter
  if ((isCirillicLetter(key) || isLatinLetter(key)) && key.length === 1) {
    up.innerText = key.toUpperCase();
  } else {
    up.innerText = key;
  }
  // If option for shift exists past it to specific span
  const shiftOption = getShiftOption(keyName);
  if (shiftOption) {
    up.innerText = shiftOption;
  }

  const down = renderElement.default('span', 'down');
  down.innerText = key;

  const caps = renderElement.default('span', 'caps');
  // If key is a number or one letter
  if (key.length === 1) {
    caps.innerText = isCirillicLetter || isLatinLetter ? key.toUpperCase() : key;
  } else {
    caps.innerText = key;
  }

  const shiftCaps = renderElement.default('span', 'shift-caps');
  // If option for shift exists past it to specific span
  // const shiftOption = getShiftOption(keyName);
  // shiftCaps.innerText = shiftOption || key;

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

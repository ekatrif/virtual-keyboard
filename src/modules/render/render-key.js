import * as renderElement from './render-element';
import * as allKeys from '../keys';

const isLatinLetter = (char) => /[a-zA-Z]/.test(char);
const isCirillicLetter = (char) => /[а-яА-Я]/.test(char);
const makeHidden = (element) => element.classList.add('hidden');
const keys = allKeys.default;

const getShiftOption = (keyName, language) => {
  for (let i = 0; i < keys.length; i += 1) {
    const char = keys[i];
    if (char.code === keyName) {
      // If option shiftEn exists, return it, if not - false
      const shiftOption = language.charAt(0).toUpperCase() + language.slice(1);
      return char[`shift${shiftOption}`];
    }
  }
  return false;
};

export default function renderKey(keyName) {
  const currentKey = keys.filter((item) => item.code === keyName);
  const key = currentKey[0];

  const keyWrapper = renderElement.default('div', 'keyboard__key');
  keyWrapper.classList.add('key');
  keyWrapper.classList.add(keyName);

  const ru = renderElement.default('span', 'key__ru');
  const en = renderElement.default('span', 'key__en');

  // Renderv key value in up register
  const upRu = renderElement.default('span', 'up');
  // If key is one letter
  if (isCirillicLetter(key.ru) && key.ru.length === 1) {
    upRu.innerText = key.ru.toUpperCase();
  } else {
    upRu.innerText = key.ru;
  }
  // If option for shift exists past it to specific span
  let shiftOption = getShiftOption(keyName, 'ru');
  if (shiftOption) {
    upRu.innerText = shiftOption;
  }

  const upEn = renderElement.default('span', 'up');
  // If key is one letter
  if (isLatinLetter(key.en) && key.en.length === 1) {
    upEn.innerText = key.en.toUpperCase();
  } else {
    upEn.innerText = key.en;
  }
  // If option for shift exists past it to specific span
  shiftOption = getShiftOption(keyName, 'en');
  if (shiftOption) {
    upEn.innerText = shiftOption;
  }

  const downRu = renderElement.default('span', 'down');
  downRu.innerText = key.ru;
  const downEn = renderElement.default('span', 'down');
  downEn.innerText = key.en;

  const capsRu = renderElement.default('span', 'caps');
  // If key is a number or one letter
  if (key.ru.length === 1) {
    capsRu.innerText = isCirillicLetter || isLatinLetter ? key.ru.toUpperCase() : key.ru;
  } else {
    capsRu.innerText = key.ru;
  }
  const capsEn = renderElement.default('span', 'caps');
  // If key is a number or one letter
  if (key.en.length === 1) {
    capsEn.innerText = isCirillicLetter || isLatinLetter ? key.en.toUpperCase() : key.en;
  } else {
    capsEn.innerText = key.en;
  }

  const shiftCapsRu = renderElement.default('span', 'shift-caps');
  // If option for shift exists past it to specific span
  shiftOption = getShiftOption(keyName, 'ru');
  if (shiftOption) {
    shiftCapsRu.innerText = shiftOption;
  } else {
    shiftCapsRu.innerText = key.ru;
  }
  const shiftCapsEn = renderElement.default('span', 'shift-caps');
  // If option for shift exists past it to specific span
  shiftOption = getShiftOption(keyName, 'en');
  if (shiftOption) {
    shiftCapsEn.innerText = shiftOption;
  } else {
    shiftCapsEn.innerText = key.en;
  }

  // Default hidden state
  makeHidden(ru);
  makeHidden(upRu);
  makeHidden(downRu);
  makeHidden(capsRu);
  makeHidden(shiftCapsRu);
  makeHidden(capsRu);
  makeHidden(shiftCapsRu);
  makeHidden(upEn);
  makeHidden(capsEn);
  makeHidden(shiftCapsEn);

  ru.append(downRu);
  ru.append(upRu);
  ru.append(capsRu);
  ru.append(shiftCapsRu);

  en.append(downEn);
  en.append(upEn);
  en.append(capsEn);
  en.append(shiftCapsEn);

  keyWrapper.append(ru);
  keyWrapper.append(en);

  return keyWrapper;
}

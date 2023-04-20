import * as allKeys from '../keys';
import * as renderElement from './render-element';
import * as renderKey from './render-key';

// Default english layout
localStorage.setItem('language', 'en');

const getLanguage = () => localStorage.getItem('language');

const keys = allKeys.default;

const keyboard = renderElement.default('div', 'keyboard');

const renderRow = (indexStart, indexEnd) => {
  const keyboardRow = renderElement.default('div', 'keyboard__row');
  for (let i = indexStart; i < indexEnd; i += 1) {
    const currentLanguage = getLanguage();
    const currentObject = keys[i];
    const key = currentLanguage === 'en' ? currentObject.en : currentObject.ru;
    const keyName = currentObject.code;
    keyboardRow.append(renderKey.default(key, keyName));
  }
  keyboard.append(keyboardRow);
};

// First keyboard row
renderRow(0, 14);
// Second keyboard row
renderRow(14, 29);
// Third keyboard row
renderRow(29, 42);
// 4th keyboard row
renderRow(42, 55);
// 5th keyboard row
renderRow(55, keys.length);

export default keyboard;

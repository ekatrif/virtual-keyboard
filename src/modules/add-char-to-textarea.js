import * as allKeys from './keys';

const deleteNextChar = () => {
    const textarea = document.querySelector('.textarea');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const currentValue = textarea.value;
    if (startPos === endPos) {
      textarea.value = currentValue.slice(0, startPos) + currentValue.slice(startPos + 1);
      textarea.selectionStart = textarea.selectionEnd = startPos;
    } else {
      textarea.value = currentValue.slice(0, startPos) + currentValue.slice(endPos);
      textarea.selectionStart = textarea.selectionEnd = startPos;
    }
}

const deletePrevChar = () => {
  const textarea = document.querySelector('.textarea');
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;
  const text = textarea.value;
  if (startPos === endPos) {
    textarea.value = text.slice(0, startPos - 1) + text.slice(startPos);
    textarea.selectionStart = textarea.selectionEnd = startPos - 1;
  } else {
    textarea.value = text.slice(0, startPos) + text.slice(endPos);
    textarea.selectionStart = textarea.selectionEnd = startPos;
  }
}


const keyDownHandler = (e) => {
  const getLanguage = () => localStorage.getItem('language');
  const currentLanguage = getLanguage();
  const keys = allKeys.default;
  const textarea = document.querySelector('.textarea');
  e.preventDefault();

  // const currentKey = document.querySelector(`.${e.code}`);
  keys.forEach((key) => {
    if (key.code === e.code) {
      switch (e.code) {
        case 'Backspace':
          deletePrevChar();
          break;
        case 'Tab':
          textarea.value += '\u0009';
          break;
        case 'Delete':
          deleteNextChar();
          break;
        default:
          textarea.value += key[currentLanguage];
          break;
      }
    }
  })
}

export default function highlightKey() {
  window.addEventListener('keydown', keyDownHandler);
}
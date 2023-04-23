import * as allKeys from './keys';

const getLanguage = () => localStorage.getItem('language');
let currentLanguage = getLanguage();

const isCapsActive = () => {
  // Checks if caps is active
  const caps = document.querySelector('.CapsLock');
  return caps.classList.contains('key_active');
};

const isShiftActive = () => {
  // Checks if shift is active
  const shiftLeft = document.querySelector('.ShiftLeft');
  const shiftRight = document.querySelector('.ShiftRight');
  return shiftLeft.classList.contains('key_active') || shiftRight.classList.contains('key_active');
};

const isAltActive = () => {
  // Checks if alt is active
  const altLeft = document.querySelector('.AltLeft');
  return altLeft.classList.contains('key_active');
};

const toggleActiveLanguageClass = () => {
  const languageWrapper = document.querySelectorAll(`.key__${currentLanguage}`);
  languageWrapper.forEach((item) => {
    item.classList.remove('hidden');
  });
  const hiddenLanguageWrapper = currentLanguage === 'en' ? document.querySelectorAll('.key__ru') : document.querySelectorAll('.key__en');
  hiddenLanguageWrapper.forEach((item) => {
    item.classList.add('hidden');
  });
};

const capsShiftOn = () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    const spans = key.querySelectorAll('span');
    spans.forEach((span) => {
      // Make all spans hidden
      if (span.classList.contains('up')
      || span.classList.contains('down')
      || span.classList.contains('caps')
      || span.classList.contains('shift-caps')) {
        span.classList.add('hidden');
      }
      // Make active span with class 'shift-caps'
      if (span.classList.contains('shift-caps')) {
        span.classList.remove('hidden');
      }
    });
  });
};

const shiftOn = () => {
  if (isCapsActive()) {
    capsShiftOn();
  } else {
    if (isAltActive()) {
      // Change language
      currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
      localStorage.setItem('language', currentLanguage);

      // Toggle language container hidden class
      toggleActiveLanguageClass();
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
      const spans = key.querySelectorAll('span');
      spans.forEach((span) => {
        // Make all spans hidden
        if (span.classList.contains('up')
        || span.classList.contains('down')
        || span.classList.contains('caps')
        || span.classList.contains('shift-caps')) {
          span.classList.add('hidden');
        }
        // Make active span with class 'up'
        if (span.classList.contains('up')) {
          span.classList.remove('hidden');
        }
      });
    });
  }
};

const shiftOff = () => {
  if (isCapsActive()) {
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
      const spans = key.querySelectorAll('span');
      spans.forEach((span) => {
        // Make all spans hidden
        if (span.classList.contains('up')
        || span.classList.contains('down')
        || span.classList.contains('caps')
        || span.classList.contains('shift-caps')) {
          span.classList.add('hidden');
        }
        // Make active span with class 'up'
        if (span.classList.contains('up')) {
          span.classList.remove('hidden');
        }
      });
    });
  } else {
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
      const spans = key.querySelectorAll('span');
      spans.forEach((span) => {
        // Make all spans hidden
        if (span.classList.contains('up')
        || span.classList.contains('down')
        || span.classList.contains('caps')
        || span.classList.contains('shift-caps')) {
          span.classList.add('hidden');
        }
        // Make active span with class 'down'
        if (span.classList.contains('down')) {
          span.classList.remove('hidden');
        }
      });
    });
  }
};

const deleteNextChar = () => {
  const textarea = document.querySelector('.textarea');
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;
  const currentValue = textarea.value;
  if (startPos === endPos) {
    textarea.value = currentValue.slice(0, startPos) + currentValue.slice(startPos + 1);
    textarea.selectionStart = startPos;
    textarea.selectionEnd = startPos;
  } else {
    textarea.value = currentValue.slice(0, startPos) + currentValue.slice(endPos);
    textarea.selectionStart = startPos;
    textarea.selectionEnd = startPos;
  }
};

const deletePrevChar = () => {
  const textarea = document.querySelector('.textarea');
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;
  const currentValue = textarea.value;
  if (startPos === endPos) {
    textarea.value = currentValue.slice(0, startPos - 1) + currentValue.slice(startPos);
    textarea.selectionStart = startPos - 1;
    textarea.selectionEnd = startPos - 1;
  } else {
    textarea.value = currentValue.slice(0, startPos) + currentValue.slice(endPos);
    textarea.selectionStart = startPos;
    textarea.selectionEnd = startPos;
  }
};

const addSpace = () => {
  const textarea = document.querySelector('.textarea');
  const endPos = textarea.selectionEnd;
  const currentValue = textarea.value;
  textarea.value = `${currentValue.slice(0, endPos)} ${currentValue.slice(endPos)}`;
  textarea.selectionStart = endPos + 1;
  textarea.selectionEnd = endPos + 1;
};

const capsOn = () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    const spans = key.querySelectorAll('span');
    spans.forEach((span) => {
      // Make all spans hidden
      if (span.classList.contains('up')
      || span.classList.contains('down')
      || span.classList.contains('caps')
      || span.classList.contains('shift-caps')) {
        span.classList.add('hidden');
      }
      // Make active span with class 'caps'
      if (span.classList.contains('caps')) {
        span.classList.remove('hidden');
      }
    });
  });
};

const capsOff = () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    const spans = key.querySelectorAll('span');
    spans.forEach((span) => {
      // Make all spans hidden
      if (span.classList.contains('up')
      || span.classList.contains('down')
      || span.classList.contains('caps')
      || span.classList.contains('shift-caps')) {
        span.classList.add('hidden');
      }
      // Make active span with class 'down'
      if (span.classList.contains('down')) {
        span.classList.remove('hidden');
      }
    });
  });
};

const capsOnOff = () => {
  const caps = document.querySelector('.CapsLock');
  return caps.classList.contains('key_active') ? capsOn() : capsOff();
};

const addNewLine = () => {
  const textarea = document.querySelector('.textarea');
  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;
  const currentValue = textarea.value;
  textarea.value = `${currentValue.slice(0, startPos)}\n${currentValue.slice(endPos)}`;
  textarea.selectionStart = startPos + 1;
  textarea.selectionEnd = startPos + 1;
};

const checkShift = () => {
  if (isShiftActive()) {
    // Change language
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    localStorage.setItem('language', currentLanguage);

    // Toggle language container hidden class
    toggleActiveLanguageClass();
  }
};

const keyDownHandler = (e) => {
  // Create shiftEn or shiftRu name
  const optionName = currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1);
  const keys = allKeys.default;
  const textarea = document.querySelector('.textarea');
  e.preventDefault();

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
        case 'CapsLock':
          capsOnOff();
          break;
        case 'Enter':
          addNewLine();
          break;
        case 'ShiftLeft':
          shiftOn();
          break;
        case 'ShiftRight':
          shiftOn();
          break;
        case 'ControlLeft':
          break;
        case 'ControlRight':
          break;
        case 'AltLeft':
          checkShift();
          break;
        case 'AltRight':
          break;
        case 'MetaLeft':
          break;
        case 'Space':
          addSpace();
          break;
        default:
          // If both caps & shift are active
          if (isCapsActive() && isShiftActive()) {
            textarea.value += key.shiftEn ? key[`shift${optionName}`]
              : key[currentLanguage];
            break;
          }

          // If only shift is active
          if (isShiftActive()) {
            textarea.value += key.shiftEn ? key[`shift${optionName}`]
              : key[currentLanguage].toUpperCase();
            break;
          }

          // If only caps is active
          if (isCapsActive()) {
            textarea.value += key[currentLanguage].toUpperCase();
            break;
          }

          // Default case
          textarea.value += key[currentLanguage];
          break;
      }
    }
  });
};

const keyUpHandler = (e) => {
  e.preventDefault();

  // Turn Off shift effects
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    shiftOff();
  }
};

export default function reactKey() {
  window.addEventListener('keydown', keyDownHandler);
  window.addEventListener('keyup', keyUpHandler);
}

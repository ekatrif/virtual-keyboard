/** *** */ (() => { // webpackBootstrap
/** *** */ 	const __webpack_modules__ = ({

    /***/ './node_modules/@babel/polyfill/lib/noConflict.js':
    /*! ********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! core-js/es6 */ './node_modules/core-js/es6/index.js');

      __webpack_require__(/*! core-js/fn/array/includes */ './node_modules/core-js/fn/array/includes.js');

      __webpack_require__(/*! core-js/fn/array/flat-map */ './node_modules/core-js/fn/array/flat-map.js');

      __webpack_require__(/*! core-js/fn/string/pad-start */ './node_modules/core-js/fn/string/pad-start.js');

      __webpack_require__(/*! core-js/fn/string/pad-end */ './node_modules/core-js/fn/string/pad-end.js');

      __webpack_require__(/*! core-js/fn/string/trim-start */ './node_modules/core-js/fn/string/trim-start.js');

      __webpack_require__(/*! core-js/fn/string/trim-end */ './node_modules/core-js/fn/string/trim-end.js');

      __webpack_require__(/*! core-js/fn/symbol/async-iterator */ './node_modules/core-js/fn/symbol/async-iterator.js');

      __webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ './node_modules/core-js/fn/object/get-own-property-descriptors.js');

      __webpack_require__(/*! core-js/fn/object/values */ './node_modules/core-js/fn/object/values.js');

      __webpack_require__(/*! core-js/fn/object/entries */ './node_modules/core-js/fn/object/entries.js');

      __webpack_require__(/*! core-js/fn/promise/finally */ './node_modules/core-js/fn/promise/finally.js');

      __webpack_require__(/*! core-js/web */ './node_modules/core-js/web/index.js');

      __webpack_require__(/*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js');
      /***/ }),

    /***/ './src/modules/highlight-key.js':
    /*! **************************************!*\
  !*** ./src/modules/highlight-key.js ***!
  \************************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ highlightKey),
        /* harmony export */ });
      const keyDownHandler = (e) => {
        const currentKey = document.querySelector(`.${e.code}`);
        if (e.code === 'CapsLock') {
          currentKey?.classList.toggle('key_active');
        } else {
          currentKey?.classList.add('key_active');
        }
      };
      const keyUpHandler = (e) => {
        if (e.code && e.code !== 'CapsLock') {
          const currentKey = document.querySelector(`.${e.code}`);
          currentKey?.classList.remove('key_active');
        }
      };
      const mouseUpHandler = (e) => {
        if (e.target.closest('.key')) {
          // Choose pressed key container
          const currentKeyWrapper = e.target.closest('.key');
          if (currentKeyWrapper.classList.contains('CapsLock')) {
            currentKeyWrapper?.classList.toggle('key_active');
          } else {
            currentKeyWrapper?.classList.add('key_active');
          }
        }
      };
      const mouseDownHandler = (e) => {
        if (e.target.closest('.key')) {
          // Choose pressed key container
          const currentKeyWrapper = e.target.closest('.key');
          if (!currentKeyWrapper.classList.contains('CapsLock')) {
            currentKeyWrapper?.classList.remove('key_active');
          }
        }
      };
      function highlightKey() {
        window.addEventListener('keydown', keyDownHandler);
        window.addEventListener('keyup', keyUpHandler);
        const keyboardWrapper = document.querySelector('.keyboard');
        keyboardWrapper.addEventListener('mousedown', mouseUpHandler);
        keyboardWrapper.addEventListener('mouseup', mouseDownHandler);
      }
      /***/ }),

    /***/ './src/modules/key-handler.js':
    /*! ************************************!*\
  !*** ./src/modules/key-handler.js ***!
  \*********************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ keyHandler),
        /* harmony export */ });
      /* harmony import */ const _highlight_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight-key */ './src/modules/highlight-key.js');
      /* harmony import */ const _react_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-key */ './src/modules/react-key.js');

      function keyHandler() {
        // Highlight selected key
        _highlight_key__WEBPACK_IMPORTED_MODULE_0__.default();

        // React on key press & click
        _react_key__WEBPACK_IMPORTED_MODULE_1__.default();
      }
      /***/ }),

    /***/ './src/modules/keys.js':
    /*! *****************************!*\
  !*** ./src/modules/keys.js ***!
  \**************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
        code: 'Backquote',
        ru: '`',
        en: '`',
        shiftEn: '~',
        shiftRu: 'Ё',
      }, {
        code: 'Digit1',
        ru: '1',
        en: '1',
        shiftEn: '!',
        shiftRu: '!',
      }, {
        code: 'Digit2',
        ru: '2',
        en: '2',
        shiftEn: '@',
        shiftRu: '"',
      }, {
        code: 'Digit3',
        ru: '3',
        en: '3',
        shiftEn: '#',
        shiftRu: '№',
      }, {
        code: 'Digit4',
        ru: '4',
        en: '4',
        shiftEn: '$',
        shiftRu: ';',
      }, {
        code: 'Digit5',
        ru: '5',
        en: '5',
        shiftEn: '%',
        shiftRu: '%',
      }, {
        code: 'Digit6',
        ru: '6',
        en: '6',
        shiftEn: '^',
        shiftRu: ':',
      }, {
        code: 'Digit7',
        ru: '7',
        en: '7',
        shiftEn: '&',
        shiftRu: '?',
      }, {
        code: 'Digit8',
        ru: '8',
        en: '8',
        shiftEn: '*',
        shiftRu: '*',
      }, {
        code: 'Digit9',
        ru: '9',
        en: '9',
        shiftEn: '(',
        shiftRu: '(',
      }, {
        code: 'Digit0',
        ru: '0',
        en: '0',
        shiftEn: ')',
        shiftRu: ')',
      }, {
        code: 'Minus',
        ru: '-',
        en: '-',
        shiftEn: '_',
        shiftRu: '_',
      }, {
        code: 'Equal',
        ru: '=',
        en: '=',
        shiftEn: '+',
        shiftRu: '+',
      }, {
        code: 'Backspace',
        ru: 'Backspace',
        en: 'Backspace',
      }, {
        code: 'Tab',
        ru: 'Tab',
        en: 'Tab',
      }, {
        code: 'KeyQ',
        ru: 'й',
        en: 'q',
      }, {
        code: 'KeyW',
        ru: 'ц',
        en: 'w',
      }, {
        code: 'KeyE',
        ru: 'у',
        en: 'e',
      }, {
        code: 'KeyR',
        ru: 'к',
        en: 'r',
      }, {
        code: 'KeyT',
        ru: 'е',
        en: 't',
      }, {
        code: 'KeyY',
        ru: 'н',
        en: 'y',
      }, {
        code: 'KeyU',
        ru: 'г',
        en: 'u',
      }, {
        code: 'KeyI',
        ru: 'ш',
        en: 'i',
      }, {
        code: 'KeyO',
        ru: 'щ',
        en: 'o',
      }, {
        code: 'KeyP',
        ru: 'з',
        en: 'p',
      }, {
        code: 'BracketLeft',
        ru: 'х',
        en: '[',
        shiftEn: '{',
        shiftRu: 'Х',
      }, {
        code: 'BracketRight',
        ru: 'ъ',
        en: ']',
        shiftEn: '}',
        shiftRu: 'Ъ',
      }, {
        code: 'Backslash',
        ru: '\\',
        en: '\\',
        shiftEn: '|',
        shiftRu: '/',
      }, {
        code: 'Delete',
        ru: 'Del',
        en: 'Del',
      }, {
        code: 'CapsLock',
        ru: 'CapsLock',
        en: 'CapsLock',
      }, {
        code: 'KeyA',
        ru: 'ф',
        en: 'a',
      }, {
        code: 'KeyS',
        ru: 'ы',
        en: 's',
      }, {
        code: 'KeyD',
        ru: 'в',
        en: 'd',
      }, {
        code: 'KeyF',
        ru: 'а',
        en: 'f',
      }, {
        code: 'KeyG',
        ru: 'п',
        en: 'g',
      }, {
        code: 'KeyH',
        ru: 'р',
        en: 'h',
      }, {
        code: 'KeyJ',
        ru: 'о',
        en: 'j',
      }, {
        code: 'KeyK',
        ru: 'л',
        en: 'k',
      }, {
        code: 'KeyL',
        ru: 'д',
        en: 'l',
      }, {
        code: 'Semicolon',
        ru: 'ж',
        en: ';',
        shiftEn: ':',
        shiftRu: 'Ж',
      }, {
        code: 'Quote',
        ru: 'э',
        en: '\'',
        shiftEn: '"',
        shiftRu: 'Э',
      }, {
        code: 'Enter',
        ru: 'Enter',
        en: 'Enter',
      }, {
        code: 'ShiftLeft',
        ru: 'Shift',
        en: 'Shift',
      }, {
        code: 'KeyZ',
        ru: 'я',
        en: 'z',
      }, {
        code: 'KeyX',
        ru: 'ч',
        en: 'x',
      }, {
        code: 'KeyC',
        ru: 'с',
        en: 'c',
      }, {
        code: 'KeyV',
        ru: 'м',
        en: 'v',
      }, {
        code: 'KeyB',
        ru: 'и',
        en: 'b',
      }, {
        code: 'KeyN',
        ru: 'т',
        en: 'n',
      }, {
        code: 'KeyM',
        ru: 'ь',
        en: 'm',
      }, {
        code: 'Comma',
        ru: 'б',
        en: ',',
        shiftEn: '<',
        shiftRu: 'Б',
      }, {
        code: 'Period',
        ru: 'ю',
        en: '.',
        shiftEn: '>',
        shiftRu: 'Ю',
      }, {
        code: 'Slash',
        ru: '.',
        en: '/',
        shiftEn: '?',
        shiftRu: ',',
      }, {
        code: 'ArrowUp',
        ru: '▲',
        en: '▲',
      }, {
        code: 'ShiftRight',
        ru: 'Shift',
        en: 'Shift',
      }, {
        code: 'ControlLeft',
        ru: 'Ctrl',
        en: 'Ctrl',
      }, {
        code: 'MetaLeft',
        ru: 'Win',
        en: 'Win',
      }, {
        code: 'AltLeft',
        ru: 'Alt',
        en: 'Alt',
      }, {
        code: 'Space',
        ru: ' ',
        en: ' ',
      }, {
        code: 'AltRight',
        ru: 'Alt',
        en: 'Alt',
      }, {
        code: 'ArrowLeft',
        ru: '◄',
        en: '◄',
      }, {
        code: 'ArrowDown',
        ru: '▼',
        en: '▼',
      }, {
        code: 'ArrowRight',
        ru: '►',
        en: '►',
      }, {
        code: 'ControlRight',
        ru: 'Ctrl',
        en: 'Ctrl',
      }]);
      /***/ }),

    /***/ './src/modules/react-key.js':
    /*! **********************************!*\
  !*** ./src/modules/react-key.js ***!
  \********************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ reactKey),
        /* harmony export */ });
      /* harmony import */ const _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ './src/modules/keys.js');

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
            if (span.classList.contains('up') || span.classList.contains('down') || span.classList.contains('caps') || span.classList.contains('shift-caps')) {
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
              if (span.classList.contains('up') || span.classList.contains('down') || span.classList.contains('caps') || span.classList.contains('shift-caps')) {
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
              if (span.classList.contains('up') || span.classList.contains('down') || span.classList.contains('caps') || span.classList.contains('shift-caps')) {
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
              if (span.classList.contains('up') || span.classList.contains('down') || span.classList.contains('caps') || span.classList.contains('shift-caps')) {
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
        textarea.focus();
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
        textarea.focus();
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
        textarea.focus();
        const endPos = textarea.selectionEnd;
        const currentValue = textarea.value;
        textarea.value = `${currentValue.slice(0, endPos)} ${currentValue.slice(endPos)}`;
        textarea.selectionStart = endPos + 1;
        textarea.selectionEnd = endPos + 1;
      };
      const addChar = (key) => {
        const textarea = document.querySelector('.textarea');
        const endPos = textarea.selectionEnd;
        const currentValue = textarea.value;
        textarea.focus();
        textarea.value = `${currentValue.slice(0, endPos)}${key[currentLanguage]}${currentValue.slice(endPos)}`;
        textarea.selectionStart = endPos + 1;
        textarea.selectionEnd = endPos + 1;
      };
      const addTab = () => {
        const textarea = document.querySelector('.textarea');
        const endPos = textarea.selectionEnd;
        const currentValue = textarea.value;
        textarea.focus();
        textarea.value = `${currentValue.slice(0, endPos)}\u0009${currentValue.slice(endPos)}`;
        textarea.selectionStart = endPos + 1;
        textarea.selectionEnd = endPos + 1;
      };
      const capsOn = () => {
        const keys = document.querySelectorAll('.key');
        keys.forEach((key) => {
          const spans = key.querySelectorAll('span');
          spans.forEach((span) => {
            // Make all spans hidden
            if (span.classList.contains('up') || span.classList.contains('down') || span.classList.contains('caps') || span.classList.contains('shift-caps')) {
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
            if (span.classList.contains('up') || span.classList.contains('down') || span.classList.contains('caps') || span.classList.contains('shift-caps')) {
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
        const textarea = document.querySelector('.textarea');
        textarea.focus();
        const caps = document.querySelector('.CapsLock');
        return caps.classList.contains('key_active') ? capsOn() : capsOff();
      };
      const addNewLine = () => {
        const textarea = document.querySelector('.textarea');
        textarea.focus();
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
        const keys = _keys__WEBPACK_IMPORTED_MODULE_0__.default;
        const textarea = document.querySelector('.textarea');
        e.preventDefault();
        keys.forEach((key) => {
          if (key.code === e.code) {
            switch (e.code) {
              case 'Backspace':
                deletePrevChar();
                break;
              case 'Tab':
                addTab();
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
                  textarea.value += key.shiftEn ? key[`shift${optionName}`] : key[currentLanguage];
                  break;
                }

                // If only shift is active
                if (isShiftActive()) {
                  textarea.value += key.shiftEn ? key[`shift${optionName}`] : key[currentLanguage].toUpperCase();
                  break;
                }

                // If only caps is active
                if (isCapsActive()) {
                  textarea.value += key[currentLanguage].toUpperCase();
                  break;
                }

                // Default case
                addChar(key);
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
      const mouseupHandler = (e) => {
        if (e.target.closest('.key')) {
          e.preventDefault();

          // Choose pressed key container
          const currentKeyWrapper = e.target.closest('.key');

          // Find pressed key code
          const keyClasses = currentKeyWrapper.classList;
          const currentKeyCode = [...keyClasses].filter((item) => item !== 'key' && item !== 'keyboard__key')[0];

          // Turn Off shift effects
          if (currentKeyCode === 'ShiftLeft' || currentKeyCode === 'ShiftRight') {
            shiftOff();
          }
        }
      };
      const mousedownHandler = (e) => {
        if (e.target.closest('.key')) {
          // Create shiftEn or shiftRu name
          const optionName = currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1);
          const keys = _keys__WEBPACK_IMPORTED_MODULE_0__.default;
          const textarea = document.querySelector('.textarea');
          e.preventDefault();

          // Choose pressed key container
          const currentKeyWrapper = e.target.closest('.key');

          // Find pressed key code
          const keyClasses = currentKeyWrapper.classList;
          const currentKeyCode = [...keyClasses].filter((item) => item !== 'key' && item !== 'keyboard__key')[0];
          const filteredKeys = keys.filter((item) => Object.values(item).includes(currentKeyCode));
          const key = filteredKeys[0];
          switch (currentKeyCode) {
            case 'Backspace':
              deletePrevChar();
              break;
            case 'Tab':
              addTab();
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
                textarea.value += key.shiftEn ? key[`shift${optionName}`] : key[currentLanguage];
                break;
              }

              // If only shift is active
              if (isShiftActive()) {
                textarea.value += key.shiftEn ? key[`shift${optionName}`] : key[currentLanguage].toUpperCase();
                break;
              }

              // If only caps is active
              if (isCapsActive()) {
                textarea.value += key[currentLanguage].toUpperCase();
                break;
              }

              // Default case
              addChar(key);
              break;
          }
        }
      };
      function reactKey() {
        // React on key press
        window.addEventListener('keydown', keyDownHandler);
        window.addEventListener('keyup', keyUpHandler);

        // React on key click
        const keyboardWrapper = document.querySelector('.keyboard');
        keyboardWrapper.addEventListener('mousedown', mousedownHandler);
        keyboardWrapper.addEventListener('mouseup', mouseupHandler);
      }
      /***/ }),

    /***/ './src/modules/render-html.js':
    /*! ************************************!*\
  !*** ./src/modules/render-html.js ***!
  \*********************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ renderHtml),
        /* harmony export */ });
      /* harmony import */ const _render_render_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render/render-wrapper */ './src/modules/render/render-wrapper.js');
      /* harmony import */ const _render_render_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/render-title */ './src/modules/render/render-title.js');
      /* harmony import */ const _render_render_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/render-textarea */ './src/modules/render/render-textarea.js');
      /* harmony import */ const _render_render_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render/render-keyboard */ './src/modules/render/render-keyboard.js');
      /* harmony import */ const _render_render_paragraph_os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render/render-paragraph-os */ './src/modules/render/render-paragraph-os.js');
      /* harmony import */ const _render_render_paragraph_lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render/render-paragraph-lang */ './src/modules/render/render-paragraph-lang.js');

      function renderHtml() {
        const container = _render_render_wrapper__WEBPACK_IMPORTED_MODULE_0__.default;
        document.body.appendChild(container);
        container.appendChild(_render_render_title__WEBPACK_IMPORTED_MODULE_1__.default);
        container.appendChild(_render_render_textarea__WEBPACK_IMPORTED_MODULE_2__.default);
        container.appendChild(_render_render_keyboard__WEBPACK_IMPORTED_MODULE_3__.keyboard);
        container.appendChild(_render_render_paragraph_os__WEBPACK_IMPORTED_MODULE_4__.default);
        container.appendChild(_render_render_paragraph_lang__WEBPACK_IMPORTED_MODULE_5__.default);
      }
      /***/ }),

    /***/ './src/modules/render/render-element.js':
    /*! **********************************************!*\
  !*** ./src/modules/render/render-element.js ***!
  \********************************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ renderElement),
        /* harmony export */ });
      function renderElement(tag, classes) {
        const element = document.createElement(tag);
        element.classList.add(classes);
        return element;
      }
      /***/ }),

    /***/ './src/modules/render/render-key.js':
    /*! ******************************************!*\
  !*** ./src/modules/render/render-key.js ***!
  \***************************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ renderKey),
        /* harmony export */ });
      /* harmony import */ const _render_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-element */ './src/modules/render/render-element.js');
      /* harmony import */ const _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keys */ './src/modules/keys.js');

      const isLatinLetter = (char) => /[a-zA-Z]/.test(char);
      const isCirillicLetter = (char) => /[а-яА-Я]/.test(char);
      const makeHidden = (element) => element.classList.add('hidden');
      const keys = _keys__WEBPACK_IMPORTED_MODULE_1__.default;
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
      function renderKey(keyName, language) {
        const currentKey = keys.filter((item) => item.code === keyName);
        const key = currentKey[0];
        const keyWrapper = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('div', 'keyboard__key');
        keyWrapper.classList.add('key');
        keyWrapper.classList.add(keyName);
        const ru = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'key__ru');
        const en = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'key__en');

        // Renderv key value in up register
        const upRu = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'up');
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
        const upEn = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'up');
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
        const downRu = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'down');
        downRu.innerText = key.ru;
        const downEn = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'down');
        downEn.innerText = key.en;
        const capsRu = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'caps');
        // If key is a number or one letter
        if (key.ru.length === 1) {
          capsRu.innerText = isCirillicLetter || isLatinLetter ? key.ru.toUpperCase() : key.ru;
        } else {
          capsRu.innerText = key.ru;
        }
        const capsEn = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'caps');
        // If key is a number or one letter
        if (key.en.length === 1) {
          capsEn.innerText = isCirillicLetter || isLatinLetter ? key.en.toUpperCase() : key.en;
        } else {
          capsEn.innerText = key.en;
        }
        const shiftCapsRu = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'shift-caps');
        // If option for shift exists past it to specific span
        shiftOption = getShiftOption(keyName, 'ru');
        if (shiftOption) {
          shiftCapsRu.innerText = shiftOption;
        } else {
          shiftCapsRu.innerText = key.ru;
        }
        const shiftCapsEn = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('span', 'shift-caps');
        // If option for shift exists past it to specific span
        shiftOption = getShiftOption(keyName, 'en');
        if (shiftOption) {
          shiftCapsEn.innerText = shiftOption;
        } else {
          shiftCapsEn.innerText = key.en;
        }

        // Default hidden state
        if (language === 'en') {
          makeHidden(ru);
          makeHidden(upRu);
          makeHidden(downRu);
          makeHidden(capsRu);
          makeHidden(shiftCapsRu);
          makeHidden(upEn);
          makeHidden(capsEn);
          makeHidden(shiftCapsEn);
        } else {
          makeHidden(en);
          makeHidden(upEn);
          makeHidden(downEn);
          makeHidden(capsEn);
          makeHidden(shiftCapsEn);
          makeHidden(upRu);
          makeHidden(capsRu);
          makeHidden(shiftCapsRu);
        }
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
      /***/ }),

    /***/ './src/modules/render/render-keyboard.js':
    /*! ***********************************************!*\
  !*** ./src/modules/render/render-keyboard.js ***!
  \********************************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ keyboard: () => (/* binding */ keyboard),
        /* harmony export */ renderKeys: () => (/* binding */ renderKeys),
        /* harmony export */ });
      /* harmony import */ const _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keys */ './src/modules/keys.js');
      /* harmony import */ const _render_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-element */ './src/modules/render/render-element.js');
      /* harmony import */ const _render_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-key */ './src/modules/render/render-key.js');

      // If language is not set, set default english layout
      if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'en');
      }
      const keys = _keys__WEBPACK_IMPORTED_MODULE_0__.default;
      const keyboard = _render_element__WEBPACK_IMPORTED_MODULE_1__.default('div', 'keyboard');
      const renderRow = (indexStart, indexEnd) => {
        const getLanguage = () => localStorage.getItem('language');
        const currentLanguage = getLanguage();
        const keyboardRow = _render_element__WEBPACK_IMPORTED_MODULE_1__.default('div', 'keyboard__row');
        for (let i = indexStart; i < indexEnd; i += 1) {
          const currentObject = keys[i];
          const keyName = currentObject.code;
          keyboardRow.append(_render_key__WEBPACK_IMPORTED_MODULE_2__.default(keyName, currentLanguage));
        }
        keyboard.append(keyboardRow);
      };
      function renderKeys() {
        keyboard.innerHTML = '';
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
      }

      // Render all keys in keyboard
      renderKeys();
      /***/ }),

    /***/ './src/modules/render/render-paragraph-lang.js':
    /*! *****************************************************!*\
  !*** ./src/modules/render/render-paragraph-lang.js ***!
  \**************************************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _render_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-element */ './src/modules/render/render-element.js');

      const paragraph = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('p', 'paragraph');
      paragraph.classList.add('paragraph');
      paragraph.innerText = 'To switch language press Left Shift + Left Alt';
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paragraph);
      /***/ }),

    /***/ './src/modules/render/render-paragraph-os.js':
    /*! ***************************************************!*\
  !*** ./src/modules/render/render-paragraph-os.js ***!
  \************************************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _render_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-element */ './src/modules/render/render-element.js');

      const paragraph = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('p', 'paragraph');
      paragraph.classList.add('paragraph');
      paragraph.innerText = 'OS Windows';
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paragraph);
      /***/ }),

    /***/ './src/modules/render/render-textarea.js':
    /*! ***********************************************!*\
  !*** ./src/modules/render/render-textarea.js ***!
  \********************************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _render_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-element */ './src/modules/render/render-element.js');

      const textarea = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('textarea', 'textarea');
      textarea.name = 'textarea';
      textarea.id = 'textarea';
      textarea.cols = 30;
      textarea.rows = 5;
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textarea);
      /***/ }),

    /***/ './src/modules/render/render-title.js':
    /*! ********************************************!*\
  !*** ./src/modules/render/render-title.js ***!
  \******************************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _render_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-element */ './src/modules/render/render-element.js');

      const title = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('h1', 'h1');
      title.innerText = 'Virtual Keyboard';
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (title);
      /***/ }),

    /***/ './src/modules/render/render-wrapper.js':
    /*! **********************************************!*\
  !*** ./src/modules/render/render-wrapper.js ***!
  \********************************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _render_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-element */ './src/modules/render/render-element.js');

      const wrapper = _render_element__WEBPACK_IMPORTED_MODULE_0__.default('div', 'wrapper');
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);
      /***/ }),

    /***/ './node_modules/core-js/es6/index.js':
    /*! *******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \****************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../modules/es6.symbol */ './node_modules/core-js/modules/es6.symbol.js');
      __webpack_require__(/*! ../modules/es6.object.create */ './node_modules/core-js/modules/es6.object.create.js');
      __webpack_require__(/*! ../modules/es6.object.define-property */ './node_modules/core-js/modules/es6.object.define-property.js');
      __webpack_require__(/*! ../modules/es6.object.define-properties */ './node_modules/core-js/modules/es6.object.define-properties.js');
      __webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ './node_modules/core-js/modules/es6.object.get-own-property-descriptor.js');
      __webpack_require__(/*! ../modules/es6.object.get-prototype-of */ './node_modules/core-js/modules/es6.object.get-prototype-of.js');
      __webpack_require__(/*! ../modules/es6.object.keys */ './node_modules/core-js/modules/es6.object.keys.js');
      __webpack_require__(/*! ../modules/es6.object.get-own-property-names */ './node_modules/core-js/modules/es6.object.get-own-property-names.js');
      __webpack_require__(/*! ../modules/es6.object.freeze */ './node_modules/core-js/modules/es6.object.freeze.js');
      __webpack_require__(/*! ../modules/es6.object.seal */ './node_modules/core-js/modules/es6.object.seal.js');
      __webpack_require__(/*! ../modules/es6.object.prevent-extensions */ './node_modules/core-js/modules/es6.object.prevent-extensions.js');
      __webpack_require__(/*! ../modules/es6.object.is-frozen */ './node_modules/core-js/modules/es6.object.is-frozen.js');
      __webpack_require__(/*! ../modules/es6.object.is-sealed */ './node_modules/core-js/modules/es6.object.is-sealed.js');
      __webpack_require__(/*! ../modules/es6.object.is-extensible */ './node_modules/core-js/modules/es6.object.is-extensible.js');
      __webpack_require__(/*! ../modules/es6.object.assign */ './node_modules/core-js/modules/es6.object.assign.js');
      __webpack_require__(/*! ../modules/es6.object.is */ './node_modules/core-js/modules/es6.object.is.js');
      __webpack_require__(/*! ../modules/es6.object.set-prototype-of */ './node_modules/core-js/modules/es6.object.set-prototype-of.js');
      __webpack_require__(/*! ../modules/es6.object.to-string */ './node_modules/core-js/modules/es6.object.to-string.js');
      __webpack_require__(/*! ../modules/es6.function.bind */ './node_modules/core-js/modules/es6.function.bind.js');
      __webpack_require__(/*! ../modules/es6.function.name */ './node_modules/core-js/modules/es6.function.name.js');
      __webpack_require__(/*! ../modules/es6.function.has-instance */ './node_modules/core-js/modules/es6.function.has-instance.js');
      __webpack_require__(/*! ../modules/es6.parse-int */ './node_modules/core-js/modules/es6.parse-int.js');
      __webpack_require__(/*! ../modules/es6.parse-float */ './node_modules/core-js/modules/es6.parse-float.js');
      __webpack_require__(/*! ../modules/es6.number.constructor */ './node_modules/core-js/modules/es6.number.constructor.js');
      __webpack_require__(/*! ../modules/es6.number.to-fixed */ './node_modules/core-js/modules/es6.number.to-fixed.js');
      __webpack_require__(/*! ../modules/es6.number.to-precision */ './node_modules/core-js/modules/es6.number.to-precision.js');
      __webpack_require__(/*! ../modules/es6.number.epsilon */ './node_modules/core-js/modules/es6.number.epsilon.js');
      __webpack_require__(/*! ../modules/es6.number.is-finite */ './node_modules/core-js/modules/es6.number.is-finite.js');
      __webpack_require__(/*! ../modules/es6.number.is-integer */ './node_modules/core-js/modules/es6.number.is-integer.js');
      __webpack_require__(/*! ../modules/es6.number.is-nan */ './node_modules/core-js/modules/es6.number.is-nan.js');
      __webpack_require__(/*! ../modules/es6.number.is-safe-integer */ './node_modules/core-js/modules/es6.number.is-safe-integer.js');
      __webpack_require__(/*! ../modules/es6.number.max-safe-integer */ './node_modules/core-js/modules/es6.number.max-safe-integer.js');
      __webpack_require__(/*! ../modules/es6.number.min-safe-integer */ './node_modules/core-js/modules/es6.number.min-safe-integer.js');
      __webpack_require__(/*! ../modules/es6.number.parse-float */ './node_modules/core-js/modules/es6.number.parse-float.js');
      __webpack_require__(/*! ../modules/es6.number.parse-int */ './node_modules/core-js/modules/es6.number.parse-int.js');
      __webpack_require__(/*! ../modules/es6.math.acosh */ './node_modules/core-js/modules/es6.math.acosh.js');
      __webpack_require__(/*! ../modules/es6.math.asinh */ './node_modules/core-js/modules/es6.math.asinh.js');
      __webpack_require__(/*! ../modules/es6.math.atanh */ './node_modules/core-js/modules/es6.math.atanh.js');
      __webpack_require__(/*! ../modules/es6.math.cbrt */ './node_modules/core-js/modules/es6.math.cbrt.js');
      __webpack_require__(/*! ../modules/es6.math.clz32 */ './node_modules/core-js/modules/es6.math.clz32.js');
      __webpack_require__(/*! ../modules/es6.math.cosh */ './node_modules/core-js/modules/es6.math.cosh.js');
      __webpack_require__(/*! ../modules/es6.math.expm1 */ './node_modules/core-js/modules/es6.math.expm1.js');
      __webpack_require__(/*! ../modules/es6.math.fround */ './node_modules/core-js/modules/es6.math.fround.js');
      __webpack_require__(/*! ../modules/es6.math.hypot */ './node_modules/core-js/modules/es6.math.hypot.js');
      __webpack_require__(/*! ../modules/es6.math.imul */ './node_modules/core-js/modules/es6.math.imul.js');
      __webpack_require__(/*! ../modules/es6.math.log10 */ './node_modules/core-js/modules/es6.math.log10.js');
      __webpack_require__(/*! ../modules/es6.math.log1p */ './node_modules/core-js/modules/es6.math.log1p.js');
      __webpack_require__(/*! ../modules/es6.math.log2 */ './node_modules/core-js/modules/es6.math.log2.js');
      __webpack_require__(/*! ../modules/es6.math.sign */ './node_modules/core-js/modules/es6.math.sign.js');
      __webpack_require__(/*! ../modules/es6.math.sinh */ './node_modules/core-js/modules/es6.math.sinh.js');
      __webpack_require__(/*! ../modules/es6.math.tanh */ './node_modules/core-js/modules/es6.math.tanh.js');
      __webpack_require__(/*! ../modules/es6.math.trunc */ './node_modules/core-js/modules/es6.math.trunc.js');
      __webpack_require__(/*! ../modules/es6.string.from-code-point */ './node_modules/core-js/modules/es6.string.from-code-point.js');
      __webpack_require__(/*! ../modules/es6.string.raw */ './node_modules/core-js/modules/es6.string.raw.js');
      __webpack_require__(/*! ../modules/es6.string.trim */ './node_modules/core-js/modules/es6.string.trim.js');
      __webpack_require__(/*! ../modules/es6.string.iterator */ './node_modules/core-js/modules/es6.string.iterator.js');
      __webpack_require__(/*! ../modules/es6.string.code-point-at */ './node_modules/core-js/modules/es6.string.code-point-at.js');
      __webpack_require__(/*! ../modules/es6.string.ends-with */ './node_modules/core-js/modules/es6.string.ends-with.js');
      __webpack_require__(/*! ../modules/es6.string.includes */ './node_modules/core-js/modules/es6.string.includes.js');
      __webpack_require__(/*! ../modules/es6.string.repeat */ './node_modules/core-js/modules/es6.string.repeat.js');
      __webpack_require__(/*! ../modules/es6.string.starts-with */ './node_modules/core-js/modules/es6.string.starts-with.js');
      __webpack_require__(/*! ../modules/es6.string.anchor */ './node_modules/core-js/modules/es6.string.anchor.js');
      __webpack_require__(/*! ../modules/es6.string.big */ './node_modules/core-js/modules/es6.string.big.js');
      __webpack_require__(/*! ../modules/es6.string.blink */ './node_modules/core-js/modules/es6.string.blink.js');
      __webpack_require__(/*! ../modules/es6.string.bold */ './node_modules/core-js/modules/es6.string.bold.js');
      __webpack_require__(/*! ../modules/es6.string.fixed */ './node_modules/core-js/modules/es6.string.fixed.js');
      __webpack_require__(/*! ../modules/es6.string.fontcolor */ './node_modules/core-js/modules/es6.string.fontcolor.js');
      __webpack_require__(/*! ../modules/es6.string.fontsize */ './node_modules/core-js/modules/es6.string.fontsize.js');
      __webpack_require__(/*! ../modules/es6.string.italics */ './node_modules/core-js/modules/es6.string.italics.js');
      __webpack_require__(/*! ../modules/es6.string.link */ './node_modules/core-js/modules/es6.string.link.js');
      __webpack_require__(/*! ../modules/es6.string.small */ './node_modules/core-js/modules/es6.string.small.js');
      __webpack_require__(/*! ../modules/es6.string.strike */ './node_modules/core-js/modules/es6.string.strike.js');
      __webpack_require__(/*! ../modules/es6.string.sub */ './node_modules/core-js/modules/es6.string.sub.js');
      __webpack_require__(/*! ../modules/es6.string.sup */ './node_modules/core-js/modules/es6.string.sup.js');
      __webpack_require__(/*! ../modules/es6.date.now */ './node_modules/core-js/modules/es6.date.now.js');
      __webpack_require__(/*! ../modules/es6.date.to-json */ './node_modules/core-js/modules/es6.date.to-json.js');
      __webpack_require__(/*! ../modules/es6.date.to-iso-string */ './node_modules/core-js/modules/es6.date.to-iso-string.js');
      __webpack_require__(/*! ../modules/es6.date.to-string */ './node_modules/core-js/modules/es6.date.to-string.js');
      __webpack_require__(/*! ../modules/es6.date.to-primitive */ './node_modules/core-js/modules/es6.date.to-primitive.js');
      __webpack_require__(/*! ../modules/es6.array.is-array */ './node_modules/core-js/modules/es6.array.is-array.js');
      __webpack_require__(/*! ../modules/es6.array.from */ './node_modules/core-js/modules/es6.array.from.js');
      __webpack_require__(/*! ../modules/es6.array.of */ './node_modules/core-js/modules/es6.array.of.js');
      __webpack_require__(/*! ../modules/es6.array.join */ './node_modules/core-js/modules/es6.array.join.js');
      __webpack_require__(/*! ../modules/es6.array.slice */ './node_modules/core-js/modules/es6.array.slice.js');
      __webpack_require__(/*! ../modules/es6.array.sort */ './node_modules/core-js/modules/es6.array.sort.js');
      __webpack_require__(/*! ../modules/es6.array.for-each */ './node_modules/core-js/modules/es6.array.for-each.js');
      __webpack_require__(/*! ../modules/es6.array.map */ './node_modules/core-js/modules/es6.array.map.js');
      __webpack_require__(/*! ../modules/es6.array.filter */ './node_modules/core-js/modules/es6.array.filter.js');
      __webpack_require__(/*! ../modules/es6.array.some */ './node_modules/core-js/modules/es6.array.some.js');
      __webpack_require__(/*! ../modules/es6.array.every */ './node_modules/core-js/modules/es6.array.every.js');
      __webpack_require__(/*! ../modules/es6.array.reduce */ './node_modules/core-js/modules/es6.array.reduce.js');
      __webpack_require__(/*! ../modules/es6.array.reduce-right */ './node_modules/core-js/modules/es6.array.reduce-right.js');
      __webpack_require__(/*! ../modules/es6.array.index-of */ './node_modules/core-js/modules/es6.array.index-of.js');
      __webpack_require__(/*! ../modules/es6.array.last-index-of */ './node_modules/core-js/modules/es6.array.last-index-of.js');
      __webpack_require__(/*! ../modules/es6.array.copy-within */ './node_modules/core-js/modules/es6.array.copy-within.js');
      __webpack_require__(/*! ../modules/es6.array.fill */ './node_modules/core-js/modules/es6.array.fill.js');
      __webpack_require__(/*! ../modules/es6.array.find */ './node_modules/core-js/modules/es6.array.find.js');
      __webpack_require__(/*! ../modules/es6.array.find-index */ './node_modules/core-js/modules/es6.array.find-index.js');
      __webpack_require__(/*! ../modules/es6.array.species */ './node_modules/core-js/modules/es6.array.species.js');
      __webpack_require__(/*! ../modules/es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js');
      __webpack_require__(/*! ../modules/es6.regexp.constructor */ './node_modules/core-js/modules/es6.regexp.constructor.js');
      __webpack_require__(/*! ../modules/es6.regexp.exec */ './node_modules/core-js/modules/es6.regexp.exec.js');
      __webpack_require__(/*! ../modules/es6.regexp.to-string */ './node_modules/core-js/modules/es6.regexp.to-string.js');
      __webpack_require__(/*! ../modules/es6.regexp.flags */ './node_modules/core-js/modules/es6.regexp.flags.js');
      __webpack_require__(/*! ../modules/es6.regexp.match */ './node_modules/core-js/modules/es6.regexp.match.js');
      __webpack_require__(/*! ../modules/es6.regexp.replace */ './node_modules/core-js/modules/es6.regexp.replace.js');
      __webpack_require__(/*! ../modules/es6.regexp.search */ './node_modules/core-js/modules/es6.regexp.search.js');
      __webpack_require__(/*! ../modules/es6.regexp.split */ './node_modules/core-js/modules/es6.regexp.split.js');
      __webpack_require__(/*! ../modules/es6.promise */ './node_modules/core-js/modules/es6.promise.js');
      __webpack_require__(/*! ../modules/es6.map */ './node_modules/core-js/modules/es6.map.js');
      __webpack_require__(/*! ../modules/es6.set */ './node_modules/core-js/modules/es6.set.js');
      __webpack_require__(/*! ../modules/es6.weak-map */ './node_modules/core-js/modules/es6.weak-map.js');
      __webpack_require__(/*! ../modules/es6.weak-set */ './node_modules/core-js/modules/es6.weak-set.js');
      __webpack_require__(/*! ../modules/es6.typed.array-buffer */ './node_modules/core-js/modules/es6.typed.array-buffer.js');
      __webpack_require__(/*! ../modules/es6.typed.data-view */ './node_modules/core-js/modules/es6.typed.data-view.js');
      __webpack_require__(/*! ../modules/es6.typed.int8-array */ './node_modules/core-js/modules/es6.typed.int8-array.js');
      __webpack_require__(/*! ../modules/es6.typed.uint8-array */ './node_modules/core-js/modules/es6.typed.uint8-array.js');
      __webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ './node_modules/core-js/modules/es6.typed.uint8-clamped-array.js');
      __webpack_require__(/*! ../modules/es6.typed.int16-array */ './node_modules/core-js/modules/es6.typed.int16-array.js');
      __webpack_require__(/*! ../modules/es6.typed.uint16-array */ './node_modules/core-js/modules/es6.typed.uint16-array.js');
      __webpack_require__(/*! ../modules/es6.typed.int32-array */ './node_modules/core-js/modules/es6.typed.int32-array.js');
      __webpack_require__(/*! ../modules/es6.typed.uint32-array */ './node_modules/core-js/modules/es6.typed.uint32-array.js');
      __webpack_require__(/*! ../modules/es6.typed.float32-array */ './node_modules/core-js/modules/es6.typed.float32-array.js');
      __webpack_require__(/*! ../modules/es6.typed.float64-array */ './node_modules/core-js/modules/es6.typed.float64-array.js');
      __webpack_require__(/*! ../modules/es6.reflect.apply */ './node_modules/core-js/modules/es6.reflect.apply.js');
      __webpack_require__(/*! ../modules/es6.reflect.construct */ './node_modules/core-js/modules/es6.reflect.construct.js');
      __webpack_require__(/*! ../modules/es6.reflect.define-property */ './node_modules/core-js/modules/es6.reflect.define-property.js');
      __webpack_require__(/*! ../modules/es6.reflect.delete-property */ './node_modules/core-js/modules/es6.reflect.delete-property.js');
      __webpack_require__(/*! ../modules/es6.reflect.enumerate */ './node_modules/core-js/modules/es6.reflect.enumerate.js');
      __webpack_require__(/*! ../modules/es6.reflect.get */ './node_modules/core-js/modules/es6.reflect.get.js');
      __webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ './node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js');
      __webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ './node_modules/core-js/modules/es6.reflect.get-prototype-of.js');
      __webpack_require__(/*! ../modules/es6.reflect.has */ './node_modules/core-js/modules/es6.reflect.has.js');
      __webpack_require__(/*! ../modules/es6.reflect.is-extensible */ './node_modules/core-js/modules/es6.reflect.is-extensible.js');
      __webpack_require__(/*! ../modules/es6.reflect.own-keys */ './node_modules/core-js/modules/es6.reflect.own-keys.js');
      __webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ './node_modules/core-js/modules/es6.reflect.prevent-extensions.js');
      __webpack_require__(/*! ../modules/es6.reflect.set */ './node_modules/core-js/modules/es6.reflect.set.js');
      __webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ './node_modules/core-js/modules/es6.reflect.set-prototype-of.js');
      module.exports = __webpack_require__(/*! ../modules/_core */ './node_modules/core-js/modules/_core.js');
      /***/ }),

    /***/ './node_modules/core-js/fn/array/flat-map.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.array.flat-map */ './node_modules/core-js/modules/es7.array.flat-map.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').Array.flatMap;
      /***/ }),

    /***/ './node_modules/core-js/fn/array/includes.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.array.includes */ './node_modules/core-js/modules/es7.array.includes.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').Array.includes;
      /***/ }),

    /***/ './node_modules/core-js/fn/object/entries.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.object.entries */ './node_modules/core-js/modules/es7.object.entries.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').Object.entries;
      /***/ }),

    /***/ './node_modules/core-js/fn/object/get-own-property-descriptors.js':
    /*! ************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \*********************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ './node_modules/core-js/modules/es7.object.get-own-property-descriptors.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').Object.getOwnPropertyDescriptors;
      /***/ }),

    /***/ './node_modules/core-js/fn/object/values.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.object.values */ './node_modules/core-js/modules/es7.object.values.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').Object.values;
      /***/ }),

    /***/ './node_modules/core-js/fn/promise/finally.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es6.promise */ './node_modules/core-js/modules/es6.promise.js');
      __webpack_require__(/*! ../../modules/es7.promise.finally */ './node_modules/core-js/modules/es7.promise.finally.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').Promise.finally;
      /***/ }),

    /***/ './node_modules/core-js/fn/string/pad-end.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.string.pad-end */ './node_modules/core-js/modules/es7.string.pad-end.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').String.padEnd;
      /***/ }),

    /***/ './node_modules/core-js/fn/string/pad-start.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.string.pad-start */ './node_modules/core-js/modules/es7.string.pad-start.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').String.padStart;
      /***/ }),

    /***/ './node_modules/core-js/fn/string/trim-end.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.string.trim-right */ './node_modules/core-js/modules/es7.string.trim-right.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').String.trimRight;
      /***/ }),

    /***/ './node_modules/core-js/fn/string/trim-start.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.string.trim-left */ './node_modules/core-js/modules/es7.string.trim-left.js');
      module.exports = __webpack_require__(/*! ../../modules/_core */ './node_modules/core-js/modules/_core.js').String.trimLeft;
      /***/ }),

    /***/ './node_modules/core-js/fn/symbol/async-iterator.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \********************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ './node_modules/core-js/modules/es7.symbol.async-iterator.js');
      module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ './node_modules/core-js/modules/_wks-ext.js').f)('asyncIterator');
      /***/ }),

    /***/ './node_modules/core-js/library/fn/global.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../modules/es7.global */ './node_modules/core-js/library/modules/es7.global.js');
      module.exports = __webpack_require__(/*! ../modules/_core */ './node_modules/core-js/library/modules/_core.js').global;
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_a-function.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \************************************************************ */
    /***/ ((module) => {
      module.exports = function (it) {
        if (typeof it !== 'function') throw TypeError(`${it} is not a function!`);
        return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_an-object.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \*********************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js');
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(`${it} is not an object!`);
        return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_core.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \****************************************************** */
    /***/ ((module) => {
      const core = module.exports = { version: '2.6.12' };
      if (typeof __e === 'number') __e = core; // eslint-disable-line no-undef
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_ctx.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // optional / simple context binding
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/library/modules/_a-function.js');
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1: return function (a) {
            return fn.call(that, a);
          };
          case 2: return function (a, b) {
            return fn.call(that, a, b);
          };
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments);
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_descriptors.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \************************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__(/*! ./_fails */ './node_modules/core-js/library/modules/_fails.js')(() => Object.defineProperty({}, 'a', { get() { return 7; } }).a != 7);
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_dom-create.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \************************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js');
      const { document } = __webpack_require__(/*! ./_global */ './node_modules/core-js/library/modules/_global.js');
      // typeof document.createElement is 'object' in old IE
      const is = isObject(document) && isObject(document.createElement);
      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_export.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \******************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/library/modules/_global.js');
      const core = __webpack_require__(/*! ./_core */ './node_modules/core-js/library/modules/_core.js');
      const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/library/modules/_ctx.js');
      const hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/library/modules/_hide.js');
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/library/modules/_has.js');
      const PROTOTYPE = 'prototype';

      const $export = function (type, name, source) {
        const IS_FORCED = type & $export.F;
        const IS_GLOBAL = type & $export.G;
        const IS_STATIC = type & $export.S;
        const IS_PROTO = type & $export.P;
        const IS_BIND = type & $export.B;
        const IS_WRAP = type & $export.W;
        const exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        const expProto = exports[PROTOTYPE];
        const target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
        let key; let own; let
          out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          if (own && has(exports, key)) continue;
          // export native or passed
          out = own ? target[key] : source[key];
          // prevent global pollution for namespaces
          exports[key] = IS_GLOBAL && typeof target[key] !== 'function' ? source[key]
          // bind timers to global for call from export context
            : IS_BIND && own ? ctx(out, global)
            // wrap global constructors for prevent change them in library
              : IS_WRAP && target[key] == out ? (function (C) {
                const F = function (a, b, c) {
                  if (this instanceof C) {
                    switch (arguments.length) {
                      case 0: return new C();
                      case 1: return new C(a);
                      case 2: return new C(a, b);
                    } return new C(a, b, c);
                  } return C.apply(this, arguments);
                };
                F[PROTOTYPE] = C[PROTOTYPE];
                return F;
                // make static versions for prototype methods
              }(out)) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out;
          // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
          if (IS_PROTO) {
            (exports.virtual || (exports.virtual = {}))[key] = out;
            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
            if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
          }
        }
      };
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      $export.U = 64; // safe
      $export.R = 128; // real proto method for `library`
      module.exports = $export;
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_fails.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \******************************************************* */
    /***/ ((module) => {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_global.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \******************************************************** */
    /***/ ((module) => {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      const global = module.exports = typeof window !== 'undefined' && window.Math == Math
        ? window : typeof self !== 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
          : Function('return this')();
      if (typeof __g === 'number') __g = global; // eslint-disable-line no-undef
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_has.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \***************************************************** */
    /***/ ((module) => {
      const { hasOwnProperty } = {};
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_hide.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \****************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/library/modules/_object-dp.js');
      const createDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/library/modules/_property-desc.js');
      module.exports = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js') ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_ie8-dom-define.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \**************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = !__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js') && !__webpack_require__(/*! ./_fails */ './node_modules/core-js/library/modules/_fails.js')(() => Object.defineProperty(__webpack_require__(/*! ./_dom-create */ './node_modules/core-js/library/modules/_dom-create.js')('div'), 'a', { get() { return 7; } }).a != 7);
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_is-object.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \*********************************************************** */
    /***/ ((module) => {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_object-dp.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/library/modules/_an-object.js');
      const IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ './node_modules/core-js/library/modules/_ie8-dom-define.js');
      const toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/library/modules/_to-primitive.js');
      const dP = Object.defineProperty;

      exports.f = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/library/modules/_descriptors.js') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) {
          try {
            return dP(O, P, Attributes);
          } catch (e) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_property-desc.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \*************************************************************** */
    /***/ ((module) => {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value,
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/_to-primitive.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/library/modules/_is-object.js');
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        let fn; let
          val;
        if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
      /***/ }),

    /***/ './node_modules/core-js/library/modules/es7.global.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/tc39/proposal-global
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/library/modules/_export.js');

      $export($export.G, { global: __webpack_require__(/*! ./_global */ './node_modules/core-js/library/modules/_global.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/_a-function.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \**************************************************** */
    /***/ ((module) => {
      module.exports = function (it) {
        if (typeof it !== 'function') throw TypeError(`${it} is not a function!`);
        return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_a-number-value.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \******************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
      module.exports = function (it, msg) {
        if (typeof it !== 'number' && cof(it) != 'Number') throw TypeError(msg);
        return +it;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_add-to-unscopables.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \************************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 22.1.3.31 Array.prototype[@@unscopables]
      const UNSCOPABLES = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('unscopables');
      const ArrayProto = Array.prototype;
      if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js')(ArrayProto, UNSCOPABLES, {});
      module.exports = function (key) {
        ArrayProto[UNSCOPABLES][key] = true;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_advance-string-index.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const at = __webpack_require__(/*! ./_string-at */ './node_modules/core-js/modules/_string-at.js')(true);

      // `AdvanceStringIndex` abstract operation
      // https://tc39.github.io/ecma262/#sec-advancestringindex
      module.exports = function (S, index, unicode) {
        return index + (unicode ? at(S, index).length : 1);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_an-instance.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \***************************************************** */
    /***/ ((module) => {
      module.exports = function (it, Constructor, name, forbiddenField) {
        if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
          throw TypeError(`${name}: incorrect invocation!`);
        } return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_an-object.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(`${it} is not an object!`);
        return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_array-copy-within.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \*********************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');

      module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
        const O = toObject(this);
        const len = toLength(O.length);
        let to = toAbsoluteIndex(target, len);
        let from = toAbsoluteIndex(start, len);
        const end = arguments.length > 2 ? arguments[2] : undefined;
        let count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
        let inc = 1;
        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }
        while (count-- > 0) {
          if (from in O) O[to] = O[from];
          else delete O[to];
          to += inc;
          from += inc;
        } return O;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_array-fill.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      module.exports = function fill(value /* , start = 0, end = @length */) {
        const O = toObject(this);
        const length = toLength(O.length);
        const aLen = arguments.length;
        let index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
        const end = aLen > 2 ? arguments[2] : undefined;
        const endPos = end === undefined ? length : toAbsoluteIndex(end, length);
        while (endPos > index) O[index++] = value;
        return O;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_array-includes.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \******************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // false -> Array#indexOf
      // true  -> Array#includes
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js');
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          const O = toIObject($this);
          const length = toLength(O.length);
          let index = toAbsoluteIndex(fromIndex, length);
          let value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) {
            while (length > index) {
              value = O[index++];
              // eslint-disable-next-line no-self-compare
              if (value != value) return true;
            // Array#indexOf ignores holes, Array#includes - not
            }
          } else {
            for (;length > index; index++) {
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
              }
            }
          } return !IS_INCLUDES && -1;
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_array-methods.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \******************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 0 -> Array#forEach
      // 1 -> Array#map
      // 2 -> Array#filter
      // 3 -> Array#some
      // 4 -> Array#every
      // 5 -> Array#find
      // 6 -> Array#findIndex
      const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
      const IObject = __webpack_require__(/*! ./_iobject */ './node_modules/core-js/modules/_iobject.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const asc = __webpack_require__(/*! ./_array-species-create */ './node_modules/core-js/modules/_array-species-create.js');
      module.exports = function (TYPE, $create) {
        const IS_MAP = TYPE == 1;
        const IS_FILTER = TYPE == 2;
        const IS_SOME = TYPE == 3;
        const IS_EVERY = TYPE == 4;
        const IS_FIND_INDEX = TYPE == 6;
        const NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        const create = $create || asc;
        return function ($this, callbackfn, that) {
          const O = toObject($this);
          const self = IObject(O);
          const f = ctx(callbackfn, that, 3);
          const length = toLength(self.length);
          let index = 0;
          const result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
          let val; let
            res;
          for (;length > index; index++) {
            if (NO_HOLES || index in self) {
              val = self[index];
              res = f(val, index, O);
              if (TYPE) {
                if (IS_MAP) result[index] = res; // map
                else if (res) {
                  switch (TYPE) {
                    case 3: return true; // some
                    case 5: return val; // find
                    case 6: return index; // findIndex
                    case 2: result.push(val); // filter
                  }
                } else if (IS_EVERY) return false; // every
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_array-reduce.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \****************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const IObject = __webpack_require__(/*! ./_iobject */ './node_modules/core-js/modules/_iobject.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');

      module.exports = function (that, callbackfn, aLen, memo, isRight) {
        aFunction(callbackfn);
        const O = toObject(that);
        const self = IObject(O);
        const length = toLength(O.length);
        let index = isRight ? length - 1 : 0;
        const i = isRight ? -1 : 1;
        if (aLen < 2) {
          for (;;) {
            if (index in self) {
              memo = self[index];
              index += i;
              break;
            }
            index += i;
            if (isRight ? index < 0 : length <= index) {
              throw TypeError('Reduce of empty array with no initial value');
            }
          }
        }
        for (;isRight ? index >= 0 : length > index; index += i) {
          if (index in self) {
            memo = callbackfn(memo, self[index], index, O);
          }
        }
        return memo;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_array-species-constructor.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \******************************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const isArray = __webpack_require__(/*! ./_is-array */ './node_modules/core-js/modules/_is-array.js');
      const SPECIES = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('species');

      module.exports = function (original) {
        let C;
        if (isArray(original)) {
          C = original.constructor;
          // cross-realm fallback
          if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined;
          if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        } return C === undefined ? Array : C;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_array-species-create.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
      const speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ './node_modules/core-js/modules/_array-species-constructor.js');

      module.exports = function (original, length) {
        return new (speciesConstructor(original))(length);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_bind.js':
    /*! ***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \********************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const invoke = __webpack_require__(/*! ./_invoke */ './node_modules/core-js/modules/_invoke.js');
      const arraySlice = [].slice;
      const factories = {};

      const construct = function (F, len, args) {
        if (!(len in factories)) {
          for (var n = [], i = 0; i < len; i++) n[i] = `a[${i}]`;
          // eslint-disable-next-line no-new-func
          factories[len] = Function('F,a', `return new F(${n.join(',')})`);
        } return factories[len](F, args);
      };

      module.exports = Function.bind || function bind(that /* , ...args */) {
        const fn = aFunction(this);
        const partArgs = arraySlice.call(arguments, 1);
        const bound = function (/* args... */) {
          const args = partArgs.concat(arraySlice.call(arguments));
          return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
        };
        if (isObject(fn.prototype)) bound.prototype = fn.prototype;
        return bound;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_classof.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // getting tag from 19.1.3.6 Object.prototype.toString()
      const cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
      const TAG = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('toStringTag');
      // ES3 wrong here
      const ARG = cof(function () { return arguments; }()) == 'Arguments';

      // fallback for IE11 Script Access Denied error
      const tryGet = function (it, key) {
        try {
          return it[key];
        } catch (e) { /* empty */ }
      };

      module.exports = function (it) {
        let O; let T; let
          B;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
          : typeof (T = tryGet(O = Object(it), TAG)) === 'string' ? T
          // builtinTag case
            : ARG ? cof(O)
            // ES3 arguments fallback
              : (B = cof(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : B;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_cof.js':
    /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \********************************************* */
    /***/ ((module) => {
      const { toString } = {};

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_collection-strong.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \*********************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const dP = (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f);
      const create = __webpack_require__(/*! ./_object-create */ './node_modules/core-js/modules/_object-create.js');
      const redefineAll = __webpack_require__(/*! ./_redefine-all */ './node_modules/core-js/modules/_redefine-all.js');
      const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
      const anInstance = __webpack_require__(/*! ./_an-instance */ './node_modules/core-js/modules/_an-instance.js');
      const forOf = __webpack_require__(/*! ./_for-of */ './node_modules/core-js/modules/_for-of.js');
      const $iterDefine = __webpack_require__(/*! ./_iter-define */ './node_modules/core-js/modules/_iter-define.js');
      const step = __webpack_require__(/*! ./_iter-step */ './node_modules/core-js/modules/_iter-step.js');
      const setSpecies = __webpack_require__(/*! ./_set-species */ './node_modules/core-js/modules/_set-species.js');
      const DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
      const { fastKey } = __webpack_require__(/*! ./_meta */ './node_modules/core-js/modules/_meta.js');
      const validate = __webpack_require__(/*! ./_validate-collection */ './node_modules/core-js/modules/_validate-collection.js');
      const SIZE = DESCRIPTORS ? '_s' : 'size';

      const getEntry = function (that, key) {
        // fast case
        const index = fastKey(key);
        let entry;
        if (index !== 'F') return that._i[index];
        // frozen object case
        for (entry = that._f; entry; entry = entry.n) {
          if (entry.k == key) return entry;
        }
      };

      module.exports = {
        getConstructor(wrapper, NAME, IS_MAP, ADDER) {
          var C = wrapper((that, iterable) => {
            anInstance(that, C, NAME, '_i');
            that._t = NAME; // collection type
            that._i = create(null); // index
            that._f = undefined; // first entry
            that._l = undefined; // last entry
            that[SIZE] = 0; // size
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
          });
          redefineAll(C.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function clear() {
              for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                entry.r = true;
                if (entry.p) entry.p = entry.p.n = undefined;
                delete data[entry.i];
              }
              that._f = that._l = undefined;
              that[SIZE] = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            delete(key) {
              const that = validate(this, NAME);
              const entry = getEntry(that, key);
              if (entry) {
                const next = entry.n;
                const prev = entry.p;
                delete that._i[entry.i];
                entry.r = true;
                if (prev) prev.n = next;
                if (next) next.p = prev;
                if (that._f == entry) that._f = next;
                if (that._l == entry) that._l = prev;
                that[SIZE]--;
              } return !!entry;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function forEach(callbackfn /* , that = undefined */) {
              validate(this, NAME);
              const f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
              let entry;
              while (entry = entry ? entry.n : this._f) {
                f(entry.v, entry.k, this);
                // revert to the last existing entry
                while (entry && entry.r) entry = entry.p;
              }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
              return !!getEntry(validate(this, NAME), key);
            },
          });
          if (DESCRIPTORS) {
            dP(C.prototype, 'size', {
              get() {
                return validate(this, NAME)[SIZE];
              },
            });
          }
          return C;
        },
        def(that, key, value) {
          let entry = getEntry(that, key);
          let prev; let
            index;
          // change existing entry
          if (entry) {
            entry.v = value;
            // create new entry
          } else {
            that._l = entry = {
              i: index = fastKey(key, true), // <- index
              k: key, // <- key
              v: value, // <- value
              p: prev = that._l, // <- previous entry
              n: undefined, // <- next entry
              r: false, // <- removed
            };
            if (!that._f) that._f = entry;
            if (prev) prev.n = entry;
            that[SIZE]++;
            // add to index
            if (index !== 'F') that._i[index] = entry;
          } return that;
        },
        getEntry,
        setStrong(C, NAME, IS_MAP) {
          // add .keys, .values, .entries, [@@iterator]
          // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
          $iterDefine(C, NAME, function (iterated, kind) {
            this._t = validate(iterated, NAME); // target
            this._k = kind; // kind
            this._l = undefined; // previous
          }, function () {
            const that = this;
            const kind = that._k;
            let entry = that._l;
            // revert to the last existing entry
            while (entry && entry.r) entry = entry.p;
            // get next entry
            if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
              // or finish the iteration
              that._t = undefined;
              return step(1);
            }
            // return step by kind
            if (kind == 'keys') return step(0, entry.k);
            if (kind == 'values') return step(0, entry.v);
            return step(0, [entry.k, entry.v]);
          }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

          // add [@@species], 23.1.2.2, 23.2.2.2
          setSpecies(NAME);
        },
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_collection-weak.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \********************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const redefineAll = __webpack_require__(/*! ./_redefine-all */ './node_modules/core-js/modules/_redefine-all.js');
      const { getWeak } = __webpack_require__(/*! ./_meta */ './node_modules/core-js/modules/_meta.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const anInstance = __webpack_require__(/*! ./_an-instance */ './node_modules/core-js/modules/_an-instance.js');
      const forOf = __webpack_require__(/*! ./_for-of */ './node_modules/core-js/modules/_for-of.js');
      const createArrayMethod = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js');
      const $has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const validate = __webpack_require__(/*! ./_validate-collection */ './node_modules/core-js/modules/_validate-collection.js');
      const arrayFind = createArrayMethod(5);
      const arrayFindIndex = createArrayMethod(6);
      let id = 0;

      // fallback for uncaught frozen keys
      const uncaughtFrozenStore = function (that) {
        return that._l || (that._l = new UncaughtFrozenStore());
      };
      var UncaughtFrozenStore = function () {
        this.a = [];
      };
      const findUncaughtFrozen = function (store, key) {
        return arrayFind(store.a, (it) => it[0] === key);
      };
      UncaughtFrozenStore.prototype = {
        get(key) {
          const entry = findUncaughtFrozen(this, key);
          if (entry) return entry[1];
        },
        has(key) {
          return !!findUncaughtFrozen(this, key);
        },
        set(key, value) {
          const entry = findUncaughtFrozen(this, key);
          if (entry) entry[1] = value;
          else this.a.push([key, value]);
        },
        delete(key) {
          const index = arrayFindIndex(this.a, (it) => it[0] === key);
          if (~index) this.a.splice(index, 1);
          return !!~index;
        },
      };

      module.exports = {
        getConstructor(wrapper, NAME, IS_MAP, ADDER) {
          var C = wrapper((that, iterable) => {
            anInstance(that, C, NAME, '_i');
            that._t = NAME; // collection type
            that._i = id++; // collection id
            that._l = undefined; // leak store for uncaught frozen objects
            if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
          });
          redefineAll(C.prototype, {
            // 23.3.3.2 WeakMap.prototype.delete(key)
            // 23.4.3.3 WeakSet.prototype.delete(value)
            delete(key) {
              if (!isObject(key)) return false;
              const data = getWeak(key);
              if (data === true) return uncaughtFrozenStore(validate(this, NAME)).delete(key);
              return data && $has(data, this._i) && delete data[this._i];
            },
            // 23.3.3.4 WeakMap.prototype.has(key)
            // 23.4.3.4 WeakSet.prototype.has(value)
            has: function has(key) {
              if (!isObject(key)) return false;
              const data = getWeak(key);
              if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
              return data && $has(data, this._i);
            },
          });
          return C;
        },
        def(that, key, value) {
          const data = getWeak(anObject(key), true);
          if (data === true) uncaughtFrozenStore(that).set(key, value);
          else data[that._i] = value;
          return that;
        },
        ufstore: uncaughtFrozenStore,
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_collection.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
      const redefineAll = __webpack_require__(/*! ./_redefine-all */ './node_modules/core-js/modules/_redefine-all.js');
      const meta = __webpack_require__(/*! ./_meta */ './node_modules/core-js/modules/_meta.js');
      const forOf = __webpack_require__(/*! ./_for-of */ './node_modules/core-js/modules/_for-of.js');
      const anInstance = __webpack_require__(/*! ./_an-instance */ './node_modules/core-js/modules/_an-instance.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const $iterDetect = __webpack_require__(/*! ./_iter-detect */ './node_modules/core-js/modules/_iter-detect.js');
      const setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js');
      const inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ './node_modules/core-js/modules/_inherit-if-required.js');

      module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
        const Base = global[NAME];
        let C = Base;
        const ADDER = IS_MAP ? 'set' : 'add';
        const proto = C && C.prototype;
        const O = {};
        const fixMethod = function (KEY) {
          const fn = proto[KEY];
          redefine(
            proto,
            KEY,
            KEY == 'delete' ? function (a) {
              return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
            } : KEY == 'has' ? function has(a) {
              return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
            } : KEY == 'get' ? function get(a) {
              return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
            } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
              : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; },
          );
        };
        if (typeof C !== 'function' || !(IS_WEAK || proto.forEach && !fails(() => {
          new C().entries().next();
        }))) {
          // create collection constructor
          C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
          redefineAll(C.prototype, methods);
          meta.NEED = true;
        } else {
          const instance = new C();
          // early implementations not supports chaining
          const HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
          // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
          const THROWS_ON_PRIMITIVES = fails(() => { instance.has(1); });
          // most early implementations doesn't supports iterables, most modern - not close it correctly
          const ACCEPT_ITERABLES = $iterDetect((iter) => { new C(iter); }); // eslint-disable-line no-new
          // for early implementations -0 and +0 not the same
          const BUGGY_ZERO = !IS_WEAK && fails(() => {
            // V8 ~ Chromium 42- fails only with 5+ elements
            const $instance = new C();
            let index = 5;
            while (index--) $instance[ADDER](index, index);
            return !$instance.has(-0);
          });
          if (!ACCEPT_ITERABLES) {
            C = wrapper((target, iterable) => {
              anInstance(target, C, NAME);
              const that = inheritIfRequired(new Base(), target, C);
              if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
              return that;
            });
            C.prototype = proto;
            proto.constructor = C;
          }
          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
          }
          if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
          // weak collections should not contains .clear method
          if (IS_WEAK && proto.clear) delete proto.clear;
        }

        setToStringTag(C, NAME);

        O[NAME] = C;
        $export($export.G + $export.W + $export.F * (C != Base), O);

        if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

        return C;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_core.js':
    /*! ***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \********************************************** */
    /***/ ((module) => {
      const core = module.exports = { version: '2.6.12' };
      if (typeof __e === 'number') __e = core; // eslint-disable-line no-undef
      /***/ }),

    /***/ './node_modules/core-js/modules/_create-property.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \********************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const $defineProperty = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
      const createDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');

      module.exports = function (object, index, value) {
        if (index in object) $defineProperty.f(object, index, createDesc(0, value));
        else object[index] = value;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_ctx.js':
    /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \********************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // optional / simple context binding
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1: return function (a) {
            return fn.call(that, a);
          };
          case 2: return function (a, b) {
            return fn.call(that, a, b);
          };
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments);
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_date-to-iso-string.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \************************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const { getTime } = Date.prototype;
      const $toISOString = Date.prototype.toISOString;

      const lz = function (num) {
        return num > 9 ? num : `0${num}`;
      };

      // PhantomJS / old WebKit has a broken implementations
      module.exports = (fails(() => $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z') || !fails(() => {
        $toISOString.call(new Date(NaN));
      })) ? function toISOString() {
          if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
          const d = this;
          const y = d.getUTCFullYear();
          const m = d.getUTCMilliseconds();
          const s = y < 0 ? '-' : y > 9999 ? '+' : '';
          return `${s + (`00000${Math.abs(y)}`).slice(s ? -6 : -4)
          }-${lz(d.getUTCMonth() + 1)}-${lz(d.getUTCDate())
          }T${lz(d.getUTCHours())}:${lz(d.getUTCMinutes())
          }:${lz(d.getUTCSeconds())}.${m > 99 ? m : `0${lz(m)}`}Z`;
        } : $toISOString;
      /***/ }),

    /***/ './node_modules/core-js/modules/_date-to-primitive.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \*********************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');
      const NUMBER = 'number';

      module.exports = function (hint) {
        if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
        return toPrimitive(anObject(this), hint != NUMBER);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_defined.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \************************************************* */
    /***/ ((module) => {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError(`Can't call method on  ${it}`);
        return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_descriptors.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => Object.defineProperty({}, 'a', { get() { return 7; } }).a != 7);
      /***/ }),

    /***/ './node_modules/core-js/modules/_dom-create.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const { document } = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      // typeof document.createElement is 'object' in old IE
      const is = isObject(document) && isObject(document.createElement);
      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_enum-bug-keys.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \******************************************************* */
    /***/ ((module) => {
      // IE 8- don't enum bug keys
      module.exports = (
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
      ).split(',');
      /***/ }),

    /***/ './node_modules/core-js/modules/_enum-keys.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // all enumerable object keys, includes symbols
      const getKeys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');
      const gOPS = __webpack_require__(/*! ./_object-gops */ './node_modules/core-js/modules/_object-gops.js');
      const pIE = __webpack_require__(/*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js');
      module.exports = function (it) {
        const result = getKeys(it);
        const getSymbols = gOPS.f;
        if (getSymbols) {
          const symbols = getSymbols(it);
          const isEnum = pIE.f;
          let i = 0;
          let key;
          while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
        } return result;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_export.js':
    /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const core = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js');
      const hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
      const redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
      const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
      const PROTOTYPE = 'prototype';

      const $export = function (type, name, source) {
        const IS_FORCED = type & $export.F;
        const IS_GLOBAL = type & $export.G;
        const IS_STATIC = type & $export.S;
        const IS_PROTO = type & $export.P;
        const IS_BIND = type & $export.B;
        const target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
        const exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        const expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        let key; let own; let out; let
          exp;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          // export native or passed
          out = (own ? target : source)[key];
          // bind timers to global for call from export context
          exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out;
          // extend global
          if (target) redefine(target, key, out, type & $export.U);
          // export
          if (exports[key] != out) hide(exports, key, exp);
          if (IS_PROTO && expProto[key] != out) expProto[key] = out;
        }
      };
      global.core = core;
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      $export.U = 64; // safe
      $export.R = 128; // real proto method for `library`
      module.exports = $export;
      /***/ }),

    /***/ './node_modules/core-js/modules/_fails-is-regexp.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \********************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const MATCH = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('match');
      module.exports = function (KEY) {
        const re = /./;
        try {
          '/./'[KEY](re);
        } catch (e) {
          try {
            re[MATCH] = false;
            return !'/./'[KEY](re);
          } catch (f) { /* empty */ }
        } return true;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_fails.js':
    /*! ************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \*********************************************** */
    /***/ ((module) => {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_fix-re-wks.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./es6.regexp.exec */ './node_modules/core-js/modules/es6.regexp.exec.js');
      const redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
      const hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
      const wks = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js');
      const regexpExec = __webpack_require__(/*! ./_regexp-exec */ './node_modules/core-js/modules/_regexp-exec.js');

      const SPECIES = wks('species');

      const REPLACE_SUPPORTS_NAMED_GROUPS = !fails(() => {
        // #replace needs built-in support for named groups.
        // #match works fine because it just return the exec results, even if it has
        // a "grops" property.
        const re = /./;
        re.exec = function () {
          const result = [];
          result.groups = { a: '7' };
          return result;
        };
        return ''.replace(re, '$<a>') !== '7';
      });

      const SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
        // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
        const re = /(?:)/;
        const originalExec = re.exec;
        re.exec = function () { return originalExec.apply(this, arguments); };
        const result = 'ab'.split(re);
        return result.length === 2 && result[0] === 'a' && result[1] === 'b';
      }());

      module.exports = function (KEY, length, exec) {
        const SYMBOL = wks(KEY);

        const DELEGATES_TO_SYMBOL = !fails(() => {
          // String methods call symbol-named RegEp methods
          const O = {};
          O[SYMBOL] = function () { return 7; };
          return ''[KEY](O) != 7;
        });

        const DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(() => {
          // Symbol-named RegExp methods call .exec
          let execCalled = false;
          const re = /a/;
          re.exec = function () { execCalled = true; return null; };
          if (KEY === 'split') {
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};
            re.constructor[SPECIES] = function () { return re; };
          }
          re[SYMBOL]('');
          return !execCalled;
        }) : undefined;

        if (
          !DELEGATES_TO_SYMBOL
    || !DELEGATES_TO_EXEC
    || (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS)
    || (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
        ) {
          const nativeRegExpMethod = /./[SYMBOL];
          const fns = exec(
            defined,
            SYMBOL,
            ''[KEY],
            (nativeMethod, regexp, str, arg2, forceStringMethod) => {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  // The native String method already delegates to @@method (this
                  // polyfilled function), leasing to infinite recursion.
                  // We avoid it by directly calling the native @@method method.
                  return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                }
                return { done: true, value: nativeMethod.call(str, regexp, arg2) };
              }
              return { done: false };
            },
          );
          const strfn = fns[0];
          const rxfn = fns[1];

          redefine(String.prototype, KEY, strfn);
          hide(RegExp.prototype, SYMBOL, length == 2
          // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            ? function (string, arg) { return rxfn.call(string, this, arg); }
          // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
            : function (string) { return rxfn.call(string, this); });
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_flags.js':
    /*! ************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \*********************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 21.2.5.3 get RegExp.prototype.flags
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      module.exports = function () {
        const that = anObject(this);
        let result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_flatten-into-array.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \************************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
      const isArray = __webpack_require__(/*! ./_is-array */ './node_modules/core-js/modules/_is-array.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
      const IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('isConcatSpreadable');

      function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        let targetIndex = start;
        let sourceIndex = 0;
        const mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
        let element; let
          spreadable;

        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

            spreadable = false;
            if (isObject(element)) {
              spreadable = element[IS_CONCAT_SPREADABLE];
              spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
            }

            if (spreadable && depth > 0) {
              targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 0x1fffffffffffff) throw TypeError();
              target[targetIndex] = element;
            }

            targetIndex++;
          }
          sourceIndex++;
        }
        return targetIndex;
      }

      module.exports = flattenIntoArray;
      /***/ }),

    /***/ './node_modules/core-js/modules/_for-of.js':
    /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
      const call = __webpack_require__(/*! ./_iter-call */ './node_modules/core-js/modules/_iter-call.js');
      const isArrayIter = __webpack_require__(/*! ./_is-array-iter */ './node_modules/core-js/modules/_is-array-iter.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ './node_modules/core-js/modules/core.get-iterator-method.js');
      const BREAK = {};
      const RETURN = {};
      const exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
        const iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
        const f = ctx(fn, that, entries ? 2 : 1);
        let index = 0;
        let length; let step; let iterator; let
          result;
        if (typeof iterFn !== 'function') throw TypeError(`${iterable} is not iterable!`);
        // fast case for arrays with default iterator
        if (isArrayIter(iterFn)) {
          for (length = toLength(iterable.length); length > index; index++) {
            result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
            if (result === BREAK || result === RETURN) return result;
          }
        } else {
          for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
            result = call(iterator, f, step.value, entries);
            if (result === BREAK || result === RETURN) return result;
          }
        }
      };
      exports.BREAK = BREAK;
      exports.RETURN = RETURN;
      /***/ }),

    /***/ './node_modules/core-js/modules/_function-to-string.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \************************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__(/*! ./_shared */ './node_modules/core-js/modules/_shared.js')('native-function-to-string', Function.toString);
      /***/ }),

    /***/ './node_modules/core-js/modules/_global.js':
    /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \************************************************ */
    /***/ ((module) => {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      const global = module.exports = typeof window !== 'undefined' && window.Math == Math
        ? window : typeof self !== 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
          : Function('return this')();
      if (typeof __g === 'number') __g = global; // eslint-disable-line no-undef
      /***/ }),

    /***/ './node_modules/core-js/modules/_has.js':
    /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \********************************************* */
    /***/ ((module) => {
      const { hasOwnProperty } = {};
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_hide.js':
    /*! ***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \********************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
      const createDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
      module.exports = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_html.js':
    /*! ***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \********************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const { document } = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      module.exports = document && document.documentElement;
      /***/ }),

    /***/ './node_modules/core-js/modules/_ie8-dom-define.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \******************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = !__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') && !__webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => Object.defineProperty(__webpack_require__(/*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js')('div'), 'a', { get() { return 7; } }).a != 7);
      /***/ }),

    /***/ './node_modules/core-js/modules/_inherit-if-required.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \************************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ './node_modules/core-js/modules/_set-proto.js').set);
      module.exports = function (that, target, C) {
        const S = target.constructor;
        let P;
        if (S !== C && typeof S === 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
          setPrototypeOf(that, P);
        } return that;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_invoke.js':
    /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \************************************************ */
    /***/ ((module) => {
      // fast apply, http://jsperf.lnkit.com/fast-apply/5
      module.exports = function (fn, args, that) {
        const un = that === undefined;
        switch (args.length) {
          case 0: return un ? fn()
            : fn.call(that);
          case 1: return un ? fn(args[0])
            : fn.call(that, args[0]);
          case 2: return un ? fn(args[0], args[1])
            : fn.call(that, args[0], args[1]);
          case 3: return un ? fn(args[0], args[1], args[2])
            : fn.call(that, args[0], args[1], args[2]);
          case 4: return un ? fn(args[0], args[1], args[2], args[3])
            : fn.call(that, args[0], args[1], args[2], args[3]);
        } return fn.apply(that, args);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_iobject.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      const cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
      // eslint-disable-next-line no-prototype-builtins
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_is-array-iter.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \******************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // check on default Array iterator
      const Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
      const ITERATOR = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator');
      const ArrayProto = Array.prototype;

      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_is-array.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 7.2.2 IsArray(argument)
      const cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
      module.exports = Array.isArray || function isArray(arg) {
        return cof(arg) == 'Array';
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_is-integer.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 20.1.2.3 Number.isInteger(number)
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const { floor } = Math;
      module.exports = function isInteger(it) {
        return !isObject(it) && isFinite(it) && floor(it) === it;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_is-object.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \*************************************************** */
    /***/ ((module) => {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_is-regexp.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 7.2.8 IsRegExp(argument)
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
      const MATCH = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('match');
      module.exports = function (it) {
        let isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_iter-call.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // call something on iterator step with safe closing on error
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      module.exports = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value);
          // 7.4.6 IteratorClose(iterator, completion)
        } catch (e) {
          const ret = iterator.return;
          if (ret !== undefined) anObject(ret.call(iterator));
          throw e;
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_iter-create.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const create = __webpack_require__(/*! ./_object-create */ './node_modules/core-js/modules/_object-create.js');
      const descriptor = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
      const setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js');
      const IteratorPrototype = {};

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js')(IteratorPrototype, __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator'), function () { return this; });

      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
        setToStringTag(Constructor, `${NAME} Iterator`);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_iter-define.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const LIBRARY = __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
      const hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
      const Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
      const $iterCreate = __webpack_require__(/*! ./_iter-create */ './node_modules/core-js/modules/_iter-create.js');
      const setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js');
      const getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js');
      const ITERATOR = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator');
      const BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
      const FF_ITERATOR = '@@iterator';
      const KEYS = 'keys';
      const VALUES = 'values';

      const returnThis = function () { return this; };

      module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);
        const getMethod = function (kind) {
          if (!BUGGY && kind in proto) return proto[kind];
          switch (kind) {
            case KEYS: return function keys() { return new Constructor(this, kind); };
            case VALUES: return function values() { return new Constructor(this, kind); };
          } return function entries() { return new Constructor(this, kind); };
        };
        const TAG = `${NAME} Iterator`;
        const DEF_VALUES = DEFAULT == VALUES;
        let VALUES_BUG = false;
        var proto = Base.prototype;
        const $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
        let $default = $native || getMethod(DEFAULT);
        const $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
        const $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
        let methods; let key; let
          IteratorPrototype;
        // Fix native
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] !== 'function') hide(IteratorPrototype, ITERATOR, returnThis);
          }
        }
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;
          $default = function values() { return $native.call(this); };
        }
        // Define iterator
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        }
        // Plug for library
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries,
          };
          if (FORCED) {
            for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            }
          } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }
        return methods;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_iter-detect.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const ITERATOR = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator');
      let SAFE_CLOSING = false;

      try {
        const riter = [7][ITERATOR]();
        riter.return = function () { SAFE_CLOSING = true; };
        // eslint-disable-next-line no-throw-literal
        Array.from(riter, () => { throw 2; });
      } catch (e) { /* empty */ }

      module.exports = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        let safe = false;
        try {
          const arr = [7];
          const iter = arr[ITERATOR]();
          iter.next = function () { return { done: safe = true }; };
          arr[ITERATOR] = function () { return iter; };
          exec(arr);
        } catch (e) { /* empty */ }
        return safe;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_iter-step.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \*************************************************** */
    /***/ ((module) => {
      module.exports = function (done, value) {
        return { value, done: !!done };
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_iterators.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \*************************************************** */
    /***/ ((module) => {
      module.exports = {};
      /***/ }),

    /***/ './node_modules/core-js/modules/_library.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \************************************************* */
    /***/ ((module) => {
      module.exports = false;
      /***/ }),

    /***/ './node_modules/core-js/modules/_math-expm1.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \**************************************************** */
    /***/ ((module) => {
      // 20.2.2.14 Math.expm1(x)
      const $expm1 = Math.expm1;
      module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
      ) ? function expm1(x) {
          return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
        } : $expm1;
      /***/ }),

    /***/ './node_modules/core-js/modules/_math-fround.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.16 Math.fround(x)
      const sign = __webpack_require__(/*! ./_math-sign */ './node_modules/core-js/modules/_math-sign.js');
      const { pow } = Math;
      const EPSILON = 2 ** -52;
      const EPSILON32 = 2 ** -23;
      const MAX32 = 2 ** 127 * (2 - EPSILON32);
      const MIN32 = 2 ** -126;

      const roundTiesToEven = function (n) {
        return n + 1 / EPSILON - 1 / EPSILON;
      };

      module.exports = Math.fround || function fround(x) {
        const $abs = Math.abs(x);
        const $sign = sign(x);
        let a; let
          result;
        if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
        a = (1 + EPSILON32 / EPSILON) * $abs;
        result = a - (a - $abs);
        // eslint-disable-next-line no-self-compare
        if (result > MAX32 || result != result) return $sign * Infinity;
        return $sign * result;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_math-log1p.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \**************************************************** */
    /***/ ((module) => {
      // 20.2.2.20 Math.log1p(x)
      module.exports = Math.log1p || function log1p(x) {
        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_math-sign.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \*************************************************** */
    /***/ ((module) => {
      // 20.2.2.28 Math.sign(x)
      module.exports = Math.sign || function sign(x) {
        // eslint-disable-next-line no-self-compare
        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_meta.js':
    /*! ***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \********************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const META = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js')('meta');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const setDesc = (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f);
      let id = 0;
      const isExtensible = Object.isExtensible || function () {
        return true;
      };
      const FREEZE = !__webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => isExtensible(Object.preventExtensions({})));
      const setMeta = function (it) {
        setDesc(it, META, {
          value: {
            i: `O${++id}`, // object ID
            w: {}, // weak collections IDs
          },
        });
      };
      const fastKey = function (it, create) {
        // return primitive with prefix
        if (!isObject(it)) return typeof it === 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it;
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return 'F';
          // not necessary to add metadata
          if (!create) return 'E';
          // add missing metadata
          setMeta(it);
          // return object ID
        } return it[META].i;
      };
      const getWeak = function (it, create) {
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true;
          // not necessary to add metadata
          if (!create) return false;
          // add missing metadata
          setMeta(it);
          // return hash weak collections IDs
        } return it[META].w;
      };
      // add metadata on freeze-family methods calling
      const onFreeze = function (it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
        return it;
      };
      var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey,
        getWeak,
        onFreeze,
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_microtask.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const macrotask = (__webpack_require__(/*! ./_task */ './node_modules/core-js/modules/_task.js').set);
      const Observer = global.MutationObserver || global.WebKitMutationObserver;
      const { process } = global;
      const { Promise } = global;
      const isNode = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js')(process) == 'process';

      module.exports = function () {
        let head; let last; let
          notify;

        const flush = function () {
          let parent; let
            fn;
          if (isNode && (parent = process.domain)) parent.exit();
          while (head) {
            fn = head.fn;
            head = head.next;
            try {
              fn();
            } catch (e) {
              if (head) notify();
              else last = undefined;
              throw e;
            }
          } last = undefined;
          if (parent) parent.enter();
        };

        // Node.js
        if (isNode) {
          notify = function () {
            process.nextTick(flush);
          };
          // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
        } else if (Observer && !(global.navigator && global.navigator.standalone)) {
          let toggle = true;
          const node = document.createTextNode('');
          new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
          notify = function () {
            node.data = toggle = !toggle;
          };
          // environments with maybe non-completely correct, but existent Promise
        } else if (Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          const promise = Promise.resolve(undefined);
          notify = function () {
            promise.then(flush);
          };
          // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout
        } else {
          notify = function () {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
          };
        }

        return function (fn) {
          const task = { fn, next: undefined };
          if (last) last.next = task;
          if (!head) {
            head = task;
            notify();
          } last = task;
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_new-promise-capability.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \**************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 25.4.1.5 NewPromiseCapability(C)
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');

      function PromiseCapability(C) {
        let resolve; let
          reject;
        this.promise = new C(($$resolve, $$reject) => {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      }

      module.exports.f = function (C) {
        return new PromiseCapability(C);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-assign.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \******************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.1 Object.assign(target, source, ...)
      const DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
      const getKeys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');
      const gOPS = __webpack_require__(/*! ./_object-gops */ './node_modules/core-js/modules/_object-gops.js');
      const pIE = __webpack_require__(/*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const IObject = __webpack_require__(/*! ./_iobject */ './node_modules/core-js/modules/_iobject.js');
      const $assign = Object.assign;

      // should work with symbols and should have deterministic property order (V8 bug)
      module.exports = !$assign || __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => {
        const A = {};
        const B = {};
        // eslint-disable-next-line no-undef
        const S = Symbol();
        const K = 'abcdefghijklmnopqrst';
        A[S] = 7;
        K.split('').forEach((k) => { B[k] = k; });
        return ({ ...A })[S] != 7 || Object.keys({ ...B }).join('') != K;
      }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
          const T = toObject(target);
          const aLen = arguments.length;
          let index = 1;
          const getSymbols = gOPS.f;
          const isEnum = pIE.f;
          while (aLen > index) {
            const S = IObject(arguments[index++]);
            const keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
            const { length } = keys;
            let j = 0;
            var key;
            while (length > j) {
              key = keys[j++];
              if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
            }
          } return T;
        } : $assign;
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-create.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \******************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const dPs = __webpack_require__(/*! ./_object-dps */ './node_modules/core-js/modules/_object-dps.js');
      const enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js');
      const IE_PROTO = __webpack_require__(/*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js')('IE_PROTO');
      const Empty = function () { /* empty */ };
      const PROTOTYPE = 'prototype';

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      let createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        const iframe = __webpack_require__(/*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js')('iframe');
        let i = enumBugKeys.length;
        const lt = '<';
        const gt = '>';
        let iframeDocument;
        iframe.style.display = 'none';
        (__webpack_require__(/*! ./_html */ './node_modules/core-js/modules/_html.js').appendChild)(iframe);
        iframe.src = 'javascript:'; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(`${lt}script${gt}document.F=Object${lt}/script${gt}`);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
      };

      module.exports = Object.create || function create(O, Properties) {
        let result;
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null;
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O;
        } else result = createDict();
        return Properties === undefined ? result : dPs(result, Properties);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-dp.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \*************************************************** */
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ './node_modules/core-js/modules/_ie8-dom-define.js');
      const toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');
      const dP = Object.defineProperty;

      exports.f = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) {
          try {
            return dP(O, P, Attributes);
          } catch (e) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-dps.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const getKeys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');

      module.exports = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        const keys = getKeys(Properties);
        const { length } = keys;
        let i = 0;
        let P;
        while (length > i) dP.f(O, P = keys[i++], Properties[P]);
        return O;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-gopd.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \***************************************************** */
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
      const pIE = __webpack_require__(/*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js');
      const createDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ './node_modules/core-js/modules/_ie8-dom-define.js');
      const gOPD = Object.getOwnPropertyDescriptor;

      exports.f = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') ? gOPD : function getOwnPropertyDescriptor(O, P) {
        O = toIObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) {
          try {
            return gOPD(O, P);
          } catch (e) { /* empty */ }
        }
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-gopn-ext.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \********************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const gOPN = (__webpack_require__(/*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js').f);
      const { toString } = {};

      const windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window) : [];

      const getWindowNames = function (it) {
        try {
          return gOPN(it);
        } catch (e) {
          return windowNames.slice();
        }
      };

      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-gopn.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \***************************************************** */
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      const $keys = __webpack_require__(/*! ./_object-keys-internal */ './node_modules/core-js/modules/_object-keys-internal.js');
      const hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js').concat)('length', 'prototype');

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return $keys(O, hiddenKeys);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-gops.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \***************************************************** */
    /***/ ((__unused_webpack_module, exports) => {
      exports.f = Object.getOwnPropertySymbols;
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-gpo.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const IE_PROTO = __webpack_require__(/*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js')('IE_PROTO');
      const ObjectProto = Object.prototype;

      module.exports = Object.getPrototypeOf || function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];
        if (typeof O.constructor === 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        } return O instanceof Object ? ObjectProto : null;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-keys-internal.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const arrayIndexOf = __webpack_require__(/*! ./_array-includes */ './node_modules/core-js/modules/_array-includes.js')(false);
      const IE_PROTO = __webpack_require__(/*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js')('IE_PROTO');

      module.exports = function (object, names) {
        const O = toIObject(object);
        let i = 0;
        const result = [];
        let key;
        for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        }
        return result;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-keys.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      const $keys = __webpack_require__(/*! ./_object-keys-internal */ './node_modules/core-js/modules/_object-keys-internal.js');
      const enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js');

      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-pie.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \**************************************************** */
    /***/ ((__unused_webpack_module, exports) => {
      exports.f = {}.propertyIsEnumerable;
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-sap.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // most Object methods by ES6 should accept primitives
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const core = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      module.exports = function (KEY, exec) {
        const fn = (core.Object || {})[KEY] || Object[KEY];
        const exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(() => { fn(1); }), 'Object', exp);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_object-to-array.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \********************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
      const getKeys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const isEnum = (__webpack_require__(/*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js').f);
      module.exports = function (isEntries) {
        return function (it) {
          const O = toIObject(it);
          const keys = getKeys(O);
          const { length } = keys;
          let i = 0;
          const result = [];
          let key;
          while (length > i) {
            key = keys[i++];
            if (!DESCRIPTORS || isEnum.call(O, key)) {
              result.push(isEntries ? [key, O[key]] : O[key]);
            }
          }
          return result;
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_own-keys.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // all object keys, includes non-enumerable and symbols
      const gOPN = __webpack_require__(/*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js');
      const gOPS = __webpack_require__(/*! ./_object-gops */ './node_modules/core-js/modules/_object-gops.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const { Reflect } = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
        const keys = gOPN.f(anObject(it));
        const getSymbols = gOPS.f;
        return getSymbols ? keys.concat(getSymbols(it)) : keys;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_parse-float.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const $parseFloat = (__webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js').parseFloat);
      const $trim = (__webpack_require__(/*! ./_string-trim */ './node_modules/core-js/modules/_string-trim.js').trim);

      module.exports = 1 / $parseFloat(`${__webpack_require__(/*! ./_string-ws */ './node_modules/core-js/modules/_string-ws.js')}-0`) !== -Infinity ? function parseFloat(str) {
        const string = $trim(String(str), 3);
        const result = $parseFloat(string);
        return result === 0 && string.charAt(0) == '-' ? -0 : result;
      } : $parseFloat;
      /***/ }),

    /***/ './node_modules/core-js/modules/_parse-int.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const $parseInt = (__webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js').parseInt);
      const $trim = (__webpack_require__(/*! ./_string-trim */ './node_modules/core-js/modules/_string-trim.js').trim);
      const ws = __webpack_require__(/*! ./_string-ws */ './node_modules/core-js/modules/_string-ws.js');
      const hex = /^[-+]?0[xX]/;

      module.exports = $parseInt(`${ws}08`) !== 8 || $parseInt(`${ws}0x16`) !== 22 ? function parseInt(str, radix) {
        const string = $trim(String(str), 3);
        return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
      } : $parseInt;
      /***/ }),

    /***/ './node_modules/core-js/modules/_perform.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \************************************************* */
    /***/ ((module) => {
      module.exports = function (exec) {
        try {
          return { e: false, v: exec() };
        } catch (e) {
          return { e: true, v: e };
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_promise-resolve.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \********************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ './node_modules/core-js/modules/_new-promise-capability.js');

      module.exports = function (C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        const promiseCapability = newPromiseCapability.f(C);
        const { resolve } = promiseCapability;
        resolve(x);
        return promiseCapability.promise;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_property-desc.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \******************************************************* */
    /***/ ((module) => {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value,
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_redefine-all.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \****************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
      module.exports = function (target, src, safe) {
        for (const key in src) redefine(target, key, src[key], safe);
        return target;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_redefine.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const SRC = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js')('src');
      const $toString = __webpack_require__(/*! ./_function-to-string */ './node_modules/core-js/modules/_function-to-string.js');
      const TO_STRING = 'toString';
      const TPL = (`${$toString}`).split(TO_STRING);

      (__webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js').inspectSource) = function (it) {
        return $toString.call(it);
      };

      (module.exports = function (O, key, val, safe) {
        const isFunction = typeof val === 'function';
        if (isFunction) has(val, 'name') || hide(val, 'name', key);
        if (O[key] === val) return;
        if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? `${O[key]}` : TPL.join(String(key)));
        if (O === global) {
          O[key] = val;
        } else if (!safe) {
          delete O[key];
          hide(O, key, val);
        } else if (O[key]) {
          O[key] = val;
        } else {
          hide(O, key, val);
        }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, TO_STRING, function toString() {
        return typeof this === 'function' && this[SRC] || $toString.call(this);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/_regexp-exec-abstract.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const classof = __webpack_require__(/*! ./_classof */ './node_modules/core-js/modules/_classof.js');
      const builtinExec = RegExp.prototype.exec;

      // `RegExpExec` abstract operation
      // https://tc39.github.io/ecma262/#sec-regexpexec
      module.exports = function (R, S) {
        const { exec } = R;
        if (typeof exec === 'function') {
          const result = exec.call(R, S);
          if (typeof result !== 'object') {
            throw new TypeError('RegExp exec method returned something other than an Object or null');
          }
          return result;
        }
        if (classof(R) !== 'RegExp') {
          throw new TypeError('RegExp#exec called on incompatible receiver');
        }
        return builtinExec.call(R, S);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_regexp-exec.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const regexpFlags = __webpack_require__(/*! ./_flags */ './node_modules/core-js/modules/_flags.js');

      const nativeExec = RegExp.prototype.exec;
      // This always refers to the native implementation, because the
      // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
      // which loads this file before patching the method.
      const nativeReplace = String.prototype.replace;

      let patchedExec = nativeExec;

      const LAST_INDEX = 'lastIndex';

      const UPDATES_LAST_INDEX_WRONG = (function () {
        const re1 = /a/;
        const re2 = /b*/g;
        nativeExec.call(re1, 'a');
        nativeExec.call(re2, 'a');
        return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
      }());

      // nonparticipating capturing group, copied from es5-shim's String#split patch.
      const NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

      const PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

      if (PATCH) {
        patchedExec = function exec(str) {
          const re = this;
          let lastIndex; let reCopy; let match; let
            i;

          if (NPCG_INCLUDED) {
            reCopy = new RegExp(`^${re.source}$(?!\\s)`, regexpFlags.call(re));
          }
          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

          match = nativeExec.call(re, str);

          if (UPDATES_LAST_INDEX_WRONG && match) {
            re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            // eslint-disable-next-line no-loop-func
            nativeReplace.call(match[0], reCopy, function () {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) match[i] = undefined;
              }
            });
          }

          return match;
        };
      }

      module.exports = patchedExec;
      /***/ }),

    /***/ './node_modules/core-js/modules/_same-value.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \**************************************************** */
    /***/ ((module) => {
      // 7.2.9 SameValue(x, y)
      module.exports = Object.is || function is(x, y) {
        // eslint-disable-next-line no-self-compare
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_set-proto.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // Works with __proto__ only. Old v8 can't work with null proto objects.
      /* eslint-disable no-proto */
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const check = function (O, proto) {
        anObject(O);
        if (!isObject(proto) && proto !== null) throw TypeError(`${proto}: can't set as prototype!`);
      };
      module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
          (function (test, buggy, set) {
            try {
              set = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js')(Function.call, (__webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js').f)(Object.prototype, '__proto__').set, 2);
              set(test, []);
              buggy = !(test instanceof Array);
            } catch (e) { buggy = true; }
            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy) O.__proto__ = proto;
              else set(O, proto);
              return O;
            };
          }({}, false)) : undefined),
        check,
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_set-species.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
      const DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
      const SPECIES = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('species');

      module.exports = function (KEY) {
        const C = global[KEY];
        if (DESCRIPTORS && C && !C[SPECIES]) {
          dP.f(C, SPECIES, {
            configurable: true,
            get() { return this; },
          });
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_set-to-string-tag.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \*********************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const def = (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f);
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const TAG = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_shared-key.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const shared = __webpack_require__(/*! ./_shared */ './node_modules/core-js/modules/_shared.js')('keys');
      const uid = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js');
      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_shared.js':
    /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const core = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js');
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const SHARED = '__core-js_shared__';
      const store = global[SHARED] || (global[SHARED] = {});

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: core.version,
        mode: __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js') ? 'pure' : 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/_species-constructor.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \************************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 7.3.20 SpeciesConstructor(O, defaultConstructor)
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
      const SPECIES = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('species');
      module.exports = function (O, D) {
        const C = anObject(O).constructor;
        let S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_strict-method.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \******************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');

      module.exports = function (method, arg) {
        return !!method && fails(() => {
          // eslint-disable-next-line no-useless-call
          arg ? method.call(null, () => { /* empty */ }, 1) : method.call(null);
        });
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_string-at.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
      const defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
      // true  -> String#at
      // false -> String#codePointAt
      module.exports = function (TO_STRING) {
        return function (that, pos) {
          const s = String(defined(that));
          const i = toInteger(pos);
          const l = s.length;
          let a; let
            b;
          if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
          a = s.charCodeAt(i);
          return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
            ? TO_STRING ? s.charAt(i) : a
            : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_string-context.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \******************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // helper for String#{startsWith, endsWith, includes}
      const isRegExp = __webpack_require__(/*! ./_is-regexp */ './node_modules/core-js/modules/_is-regexp.js');
      const defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');

      module.exports = function (that, searchString, NAME) {
        if (isRegExp(searchString)) throw TypeError(`String#${NAME} doesn't accept regex!`);
        return String(defined(that));
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_string-html.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
      const quot = /"/g;
      // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
      const createHTML = function (string, tag, attribute, value) {
        const S = String(defined(string));
        let p1 = `<${tag}`;
        if (attribute !== '') p1 += ` ${attribute}="${String(value).replace(quot, '&quot;')}"`;
        return `${p1}>${S}</${tag}>`;
      };
      module.exports = function (NAME, exec) {
        const O = {};
        O[NAME] = exec(createHTML);
        $export($export.P + $export.F * fails(() => {
          const test = ''[NAME]('"');
          return test !== test.toLowerCase() || test.split('"').length > 3;
        }), 'String', O);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_string-pad.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/tc39/proposal-string-pad-start-end
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const repeat = __webpack_require__(/*! ./_string-repeat */ './node_modules/core-js/modules/_string-repeat.js');
      const defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');

      module.exports = function (that, maxLength, fillString, left) {
        const S = String(defined(that));
        const stringLength = S.length;
        const fillStr = fillString === undefined ? ' ' : String(fillString);
        const intMaxLength = toLength(maxLength);
        if (intMaxLength <= stringLength || fillStr == '') return S;
        const fillLen = intMaxLength - stringLength;
        let stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
        return left ? stringFiller + S : S + stringFiller;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_string-repeat.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \******************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
      const defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');

      module.exports = function repeat(count) {
        let str = String(defined(this));
        let res = '';
        let n = toInteger(count);
        if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
        for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
        return res;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_string-trim.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const spaces = __webpack_require__(/*! ./_string-ws */ './node_modules/core-js/modules/_string-ws.js');
      const space = `[${spaces}]`;
      const non = '\u200b\u0085';
      const ltrim = RegExp(`^${space}${space}*`);
      const rtrim = RegExp(`${space + space}*$`);

      const exporter = function (KEY, exec, ALIAS) {
        const exp = {};
        const FORCE = fails(() => !!spaces[KEY]() || non[KEY]() != non);
        const fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
        if (ALIAS) exp[ALIAS] = fn;
        $export($export.P + $export.F * FORCE, 'String', exp);
      };

      // 1 -> String#trimLeft
      // 2 -> String#trimRight
      // 3 -> String#trim
      var trim = exporter.trim = function (string, TYPE) {
        string = String(defined(string));
        if (TYPE & 1) string = string.replace(ltrim, '');
        if (TYPE & 2) string = string.replace(rtrim, '');
        return string;
      };

      module.exports = exporter;
      /***/ }),

    /***/ './node_modules/core-js/modules/_string-ws.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \*************************************************** */
    /***/ ((module) => {
      module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003'
  + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
      /***/ }),

    /***/ './node_modules/core-js/modules/_task.js':
    /*! ***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \********************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
      const invoke = __webpack_require__(/*! ./_invoke */ './node_modules/core-js/modules/_invoke.js');
      const html = __webpack_require__(/*! ./_html */ './node_modules/core-js/modules/_html.js');
      const cel = __webpack_require__(/*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js');
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const { process } = global;
      let setTask = global.setImmediate;
      let clearTask = global.clearImmediate;
      const { MessageChannel } = global;
      const { Dispatch } = global;
      let counter = 0;
      const queue = {};
      const ONREADYSTATECHANGE = 'onreadystatechange';
      let defer; let channel; let
        port;
      const run = function () {
        const id = +this;
        // eslint-disable-next-line no-prototype-builtins
        if (queue.hasOwnProperty(id)) {
          const fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      const listener = function (event) {
        run.call(event.data);
      };
      // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
      if (!setTask || !clearTask) {
        setTask = function setImmediate(fn) {
          const args = [];
          let i = 1;
          while (arguments.length > i) args.push(arguments[i++]);
          queue[++counter] = function () {
            // eslint-disable-next-line no-new-func
            invoke(typeof fn === 'function' ? fn : Function(fn), args);
          };
          defer(counter);
          return counter;
        };
        clearTask = function clearImmediate(id) {
          delete queue[id];
        };
        // Node.js 0.8-
        if (__webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js')(process) == 'process') {
          defer = function (id) {
            process.nextTick(ctx(run, id, 1));
          };
          // Sphere (JS game engine) Dispatch API
        } else if (Dispatch && Dispatch.now) {
          defer = function (id) {
            Dispatch.now(ctx(run, id, 1));
          };
          // Browsers with MessageChannel, includes WebWorkers
        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = ctx(port.postMessage, port, 1);
          // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global.addEventListener && typeof postMessage === 'function' && !global.importScripts) {
          defer = function (id) {
            global.postMessage(`${id}`, '*');
          };
          global.addEventListener('message', listener, false);
          // IE8-
        } else if (ONREADYSTATECHANGE in cel('script')) {
          defer = function (id) {
            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run.call(id);
            };
          };
          // Rest old browsers
        } else {
          defer = function (id) {
            setTimeout(ctx(run, id, 1), 0);
          };
        }
      }
      module.exports = {
        set: setTask,
        clear: clearTask,
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_to-absolute-index.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \*********************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
      const { max } = Math;
      const { min } = Math;
      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_to-index.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // https://tc39.github.io/ecma262/#sec-toindex
      const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      module.exports = function (it) {
        if (it === undefined) return 0;
        const number = toInteger(it);
        const length = toLength(number);
        if (number !== length) throw RangeError('Wrong length!');
        return length;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_to-integer.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \**************************************************** */
    /***/ ((module) => {
      // 7.1.4 ToInteger
      const { ceil } = Math;
      const { floor } = Math;
      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_to-iobject.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      const IObject = __webpack_require__(/*! ./_iobject */ './node_modules/core-js/modules/_iobject.js');
      const defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
      module.exports = function (it) {
        return IObject(defined(it));
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_to-length.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 7.1.15 ToLength
      const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
      const { min } = Math;
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_to-object.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \*************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 7.1.13 ToObject(argument)
      const defined = __webpack_require__(/*! ./_defined */ './node_modules/core-js/modules/_defined.js');
      module.exports = function (it) {
        return Object(defined(it));
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_to-primitive.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \****************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        let fn; let
          val;
        if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_typed-array.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      if (__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js')) {
        const LIBRARY = __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js');
        const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
        const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
        const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
        const $typed = __webpack_require__(/*! ./_typed */ './node_modules/core-js/modules/_typed.js');
        const $buffer = __webpack_require__(/*! ./_typed-buffer */ './node_modules/core-js/modules/_typed-buffer.js');
        const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
        const anInstance = __webpack_require__(/*! ./_an-instance */ './node_modules/core-js/modules/_an-instance.js');
        const propertyDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
        const hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
        const redefineAll = __webpack_require__(/*! ./_redefine-all */ './node_modules/core-js/modules/_redefine-all.js');
        const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
        const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
        const toIndex = __webpack_require__(/*! ./_to-index */ './node_modules/core-js/modules/_to-index.js');
        const toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js');
        const toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');
        const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
        const classof = __webpack_require__(/*! ./_classof */ './node_modules/core-js/modules/_classof.js');
        const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
        const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
        const isArrayIter = __webpack_require__(/*! ./_is-array-iter */ './node_modules/core-js/modules/_is-array-iter.js');
        const create = __webpack_require__(/*! ./_object-create */ './node_modules/core-js/modules/_object-create.js');
        const getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js');
        const gOPN = (__webpack_require__(/*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js').f);
        const getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ './node_modules/core-js/modules/core.get-iterator-method.js');
        const uid = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js');
        const wks = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js');
        const createArrayMethod = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js');
        const createArrayIncludes = __webpack_require__(/*! ./_array-includes */ './node_modules/core-js/modules/_array-includes.js');
        const speciesConstructor = __webpack_require__(/*! ./_species-constructor */ './node_modules/core-js/modules/_species-constructor.js');
        const ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js');
        const Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
        const $iterDetect = __webpack_require__(/*! ./_iter-detect */ './node_modules/core-js/modules/_iter-detect.js');
        const setSpecies = __webpack_require__(/*! ./_set-species */ './node_modules/core-js/modules/_set-species.js');
        const arrayFill = __webpack_require__(/*! ./_array-fill */ './node_modules/core-js/modules/_array-fill.js');
        const arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ './node_modules/core-js/modules/_array-copy-within.js');
        const $DP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
        const $GOPD = __webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js');
        const dP = $DP.f;
        const gOPD = $GOPD.f;
        const { RangeError } = global;
        const { TypeError } = global;
        const { Uint8Array } = global;
        const ARRAY_BUFFER = 'ArrayBuffer';
        const SHARED_BUFFER = `Shared${ARRAY_BUFFER}`;
        const BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
        const PROTOTYPE = 'prototype';
        const ArrayProto = Array[PROTOTYPE];
        const $ArrayBuffer = $buffer.ArrayBuffer;
        const $DataView = $buffer.DataView;
        const arrayForEach = createArrayMethod(0);
        const arrayFilter = createArrayMethod(2);
        const arraySome = createArrayMethod(3);
        const arrayEvery = createArrayMethod(4);
        const arrayFind = createArrayMethod(5);
        const arrayFindIndex = createArrayMethod(6);
        const arrayIncludes = createArrayIncludes(true);
        const arrayIndexOf = createArrayIncludes(false);
        const arrayValues = ArrayIterators.values;
        const arrayKeys = ArrayIterators.keys;
        const arrayEntries = ArrayIterators.entries;
        const arrayLastIndexOf = ArrayProto.lastIndexOf;
        const arrayReduce = ArrayProto.reduce;
        const arrayReduceRight = ArrayProto.reduceRight;
        const arrayJoin = ArrayProto.join;
        const arraySort = ArrayProto.sort;
        const arraySlice = ArrayProto.slice;
        let arrayToString = ArrayProto.toString;
        let arrayToLocaleString = ArrayProto.toLocaleString;
        const ITERATOR = wks('iterator');
        const TAG = wks('toStringTag');
        const TYPED_CONSTRUCTOR = uid('typed_constructor');
        const DEF_CONSTRUCTOR = uid('def_constructor');
        const ALL_CONSTRUCTORS = $typed.CONSTR;
        const TYPED_ARRAY = $typed.TYPED;
        const { VIEW } = $typed;
        const WRONG_LENGTH = 'Wrong length!';

        const $map = createArrayMethod(1, (O, length) => allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length));

        const LITTLE_ENDIAN = fails(() =>
          // eslint-disable-next-line no-undef
          new Uint8Array(new Uint16Array([1]).buffer)[0] === 1);

        const FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(() => {
          new Uint8Array(1).set({});
        });

        const toOffset = function (it, BYTES) {
          const offset = toInteger(it);
          if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
          return offset;
        };

        const validate = function (it) {
          if (isObject(it) && TYPED_ARRAY in it) return it;
          throw TypeError(`${it} is not a typed array!`);
        };

        var allocate = function (C, length) {
          if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
            throw TypeError('It is not a typed array constructor!');
          } return new C(length);
        };

        const speciesFromList = function (O, list) {
          return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
        };

        var fromList = function (C, list) {
          let index = 0;
          const { length } = list;
          const result = allocate(C, length);
          while (length > index) result[index] = list[index++];
          return result;
        };

        const addGetter = function (it, key, internal) {
          dP(it, key, { get() { return this._d[internal]; } });
        };

        const $from = function from(source /* , mapfn, thisArg */) {
          let O = toObject(source);
          const aLen = arguments.length;
          let mapfn = aLen > 1 ? arguments[1] : undefined;
          const mapping = mapfn !== undefined;
          const iterFn = getIterFn(O);
          let i; let length; let values; let result; let step; let
            iterator;
          if (iterFn != undefined && !isArrayIter(iterFn)) {
            for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
              values.push(step.value);
            } O = values;
          }
          if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
          for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
            result[i] = mapping ? mapfn(O[i], i) : O[i];
          }
          return result;
        };

        const $of = function of(/* ...items */) {
          let index = 0;
          const { length } = arguments;
          const result = allocate(this, length);
          while (length > index) result[index] = arguments[index++];
          return result;
        };

        // iOS Safari 6.x fails here
        const TO_LOCALE_BUG = !!Uint8Array && fails(() => { arrayToLocaleString.call(new Uint8Array(1)); });

        const $toLocaleString = function toLocaleString() {
          return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
        };

        const proto = {
          copyWithin: function copyWithin(target, start /* , end */) {
            return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
          },
          every: function every(callbackfn /* , thisArg */) {
            return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          },
          fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
            return arrayFill.apply(validate(this), arguments);
          },
          filter: function filter(callbackfn /* , thisArg */) {
            return speciesFromList(this, arrayFilter(
              validate(this),
              callbackfn,
              arguments.length > 1 ? arguments[1] : undefined,
            ));
          },
          find: function find(predicate /* , thisArg */) {
            return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
          },
          findIndex: function findIndex(predicate /* , thisArg */) {
            return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
          },
          forEach: function forEach(callbackfn /* , thisArg */) {
            arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          },
          indexOf: function indexOf(searchElement /* , fromIndex */) {
            return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
          },
          includes: function includes(searchElement /* , fromIndex */) {
            return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
          },
          join: function join(separator) { // eslint-disable-line no-unused-vars
            return arrayJoin.apply(validate(this), arguments);
          },
          lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
            return arrayLastIndexOf.apply(validate(this), arguments);
          },
          map: function map(mapfn /* , thisArg */) {
            return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
          },
          reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
            return arrayReduce.apply(validate(this), arguments);
          },
          reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
            return arrayReduceRight.apply(validate(this), arguments);
          },
          reverse: function reverse() {
            const that = this;
            let { length } = validate(that);
            const middle = Math.floor(length / 2);
            let index = 0;
            let value;
            while (index < middle) {
              value = that[index];
              that[index++] = that[--length];
              that[length] = value;
            } return that;
          },
          some: function some(callbackfn /* , thisArg */) {
            return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          },
          sort: function sort(comparefn) {
            return arraySort.call(validate(this), comparefn);
          },
          subarray: function subarray(begin, end) {
            const O = validate(this);
            const { length } = O;
            const $begin = toAbsoluteIndex(begin, length);
            return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
              O.buffer,
              O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
              toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin),
            );
          },
        };

        const $slice = function slice(start, end) {
          return speciesFromList(this, arraySlice.call(validate(this), start, end));
        };

        const $set = function set(arrayLike /* , offset */) {
          validate(this);
          const offset = toOffset(arguments[1], 1);
          const { length } = this;
          const src = toObject(arrayLike);
          const len = toLength(src.length);
          let index = 0;
          if (len + offset > length) throw RangeError(WRONG_LENGTH);
          while (index < len) this[offset + index] = src[index++];
        };

        const $iterators = {
          entries: function entries() {
            return arrayEntries.call(validate(this));
          },
          keys: function keys() {
            return arrayKeys.call(validate(this));
          },
          values: function values() {
            return arrayValues.call(validate(this));
          },
        };

        const isTAIndex = function (target, key) {
          return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key !== 'symbol'
      && key in target
      && String(+key) == String(key);
        };
        const $getDesc = function getOwnPropertyDescriptor(target, key) {
          return isTAIndex(target, key = toPrimitive(key, true))
            ? propertyDesc(2, target[key])
            : gOPD(target, key);
        };
        const $setDesc = function defineProperty(target, key, desc) {
          if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
          ) {
            target[key] = desc.value;
            return target;
          } return dP(target, key, desc);
        };

        if (!ALL_CONSTRUCTORS) {
          $GOPD.f = $getDesc;
          $DP.f = $setDesc;
        }

        $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
          getOwnPropertyDescriptor: $getDesc,
          defineProperty: $setDesc,
        });

        if (fails(() => { arrayToString.call({}); })) {
          arrayToString = arrayToLocaleString = function toString() {
            return arrayJoin.call(this);
          };
        }

        const $TypedArrayPrototype$ = redefineAll({}, proto);
        redefineAll($TypedArrayPrototype$, $iterators);
        hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
        redefineAll($TypedArrayPrototype$, {
          slice: $slice,
          set: $set,
          constructor() { /* noop */ },
          toString: arrayToString,
          toLocaleString: $toLocaleString,
        });
        addGetter($TypedArrayPrototype$, 'buffer', 'b');
        addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
        addGetter($TypedArrayPrototype$, 'byteLength', 'l');
        addGetter($TypedArrayPrototype$, 'length', 'e');
        dP($TypedArrayPrototype$, TAG, {
          get() { return this[TYPED_ARRAY]; },
        });

        // eslint-disable-next-line max-statements
        module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
          CLAMPED = !!CLAMPED;
          const NAME = `${KEY + (CLAMPED ? 'Clamped' : '')}Array`;
          const GETTER = `get${KEY}`;
          const SETTER = `set${KEY}`;
          let TypedArray = global[NAME];
          const Base = TypedArray || {};
          const TAC = TypedArray && getPrototypeOf(TypedArray);
          const FORCED = !TypedArray || !$typed.ABV;
          const O = {};
          let TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
          const getter = function (that, index) {
            const data = that._d;
            return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
          };
          const setter = function (that, index, value) {
            const data = that._d;
            if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
            data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
          };
          const addElement = function (that, index) {
            dP(that, index, {
              get() {
                return getter(this, index);
              },
              set(value) {
                return setter(this, index, value);
              },
              enumerable: true,
            });
          };
          if (FORCED) {
            TypedArray = wrapper((that, data, $offset, $length) => {
              anInstance(that, TypedArray, NAME, '_d');
              let index = 0;
              let offset = 0;
              let buffer; let byteLength; let length; let
                klass;
              if (!isObject(data)) {
                length = toIndex(data);
                byteLength = length * BYTES;
                buffer = new $ArrayBuffer(byteLength);
              } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                buffer = data;
                offset = toOffset($offset, BYTES);
                const $len = data.byteLength;
                if ($length === undefined) {
                  if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                  byteLength = $len - offset;
                  if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                } else {
                  byteLength = toLength($length) * BYTES;
                  if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
                }
                length = byteLength / BYTES;
              } else if (TYPED_ARRAY in data) {
                return fromList(TypedArray, data);
              } else {
                return $from.call(TypedArray, data);
              }
              hide(that, '_d', {
                b: buffer,
                o: offset,
                l: byteLength,
                e: length,
                v: new $DataView(buffer),
              });
              while (index < length) addElement(that, index++);
            });
            TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
            hide(TypedArrayPrototype, 'constructor', TypedArray);
          } else if (!fails(() => {
            TypedArray(1);
          }) || !fails(() => {
            new TypedArray(-1); // eslint-disable-line no-new
          }) || !$iterDetect((iter) => {
            new TypedArray(); // eslint-disable-line no-new
            new TypedArray(null); // eslint-disable-line no-new
            new TypedArray(1.5); // eslint-disable-line no-new
            new TypedArray(iter); // eslint-disable-line no-new
          }, true)) {
            TypedArray = wrapper((that, data, $offset, $length) => {
              anInstance(that, TypedArray, NAME);
              let klass;
              // `ws` module bug, temporarily remove validation length for Uint8Array
              // https://github.com/websockets/ws/pull/645
              if (!isObject(data)) return new Base(toIndex(data));
              if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                return $length !== undefined
                  ? new Base(data, toOffset($offset, BYTES), $length)
                  : $offset !== undefined
                    ? new Base(data, toOffset($offset, BYTES))
                    : new Base(data);
              }
              if (TYPED_ARRAY in data) return fromList(TypedArray, data);
              return $from.call(TypedArray, data);
            });
            arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), (key) => {
              if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
            });
            TypedArray[PROTOTYPE] = TypedArrayPrototype;
            if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
          }
          const $nativeIterator = TypedArrayPrototype[ITERATOR];
          const CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
          const $iterator = $iterators.values;
          hide(TypedArray, TYPED_CONSTRUCTOR, true);
          hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
          hide(TypedArrayPrototype, VIEW, true);
          hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

          if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
            dP(TypedArrayPrototype, TAG, {
              get() { return NAME; },
            });
          }

          O[NAME] = TypedArray;

          $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

          $export($export.S, NAME, {
            BYTES_PER_ELEMENT: BYTES,
          });

          $export($export.S + $export.F * fails(() => { Base.of.call(TypedArray, 1); }), NAME, {
            from: $from,
            of: $of,
          });

          if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

          $export($export.P, NAME, proto);

          setSpecies(NAME);

          $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

          $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

          if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

          $export($export.P + $export.F * fails(() => {
            new TypedArray(1).slice();
          }), NAME, { slice: $slice });

          $export($export.P + $export.F * (fails(() => [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()) || !fails(() => {
            TypedArrayPrototype.toLocaleString.call([1, 2]);
          })), NAME, { toLocaleString: $toLocaleString });

          Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
          if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
        };
      } else module.exports = function () { /* empty */ };
      /***/ }),

    /***/ './node_modules/core-js/modules/_typed-buffer.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
      const LIBRARY = __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js');
      const $typed = __webpack_require__(/*! ./_typed */ './node_modules/core-js/modules/_typed.js');
      const hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
      const redefineAll = __webpack_require__(/*! ./_redefine-all */ './node_modules/core-js/modules/_redefine-all.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const anInstance = __webpack_require__(/*! ./_an-instance */ './node_modules/core-js/modules/_an-instance.js');
      const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const toIndex = __webpack_require__(/*! ./_to-index */ './node_modules/core-js/modules/_to-index.js');
      const gOPN = (__webpack_require__(/*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js').f);
      const dP = (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f);
      const arrayFill = __webpack_require__(/*! ./_array-fill */ './node_modules/core-js/modules/_array-fill.js');
      const setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js');
      const ARRAY_BUFFER = 'ArrayBuffer';
      const DATA_VIEW = 'DataView';
      const PROTOTYPE = 'prototype';
      const WRONG_LENGTH = 'Wrong length!';
      const WRONG_INDEX = 'Wrong index!';
      let $ArrayBuffer = global[ARRAY_BUFFER];
      let $DataView = global[DATA_VIEW];
      const { Math } = global;
      const { RangeError } = global;
      // eslint-disable-next-line no-shadow-restricted-names
      const { Infinity } = global;
      const BaseBuffer = $ArrayBuffer;
      const { abs } = Math;
      const { pow } = Math;
      const { floor } = Math;
      const { log } = Math;
      const { LN2 } = Math;
      const BUFFER = 'buffer';
      const BYTE_LENGTH = 'byteLength';
      const BYTE_OFFSET = 'byteOffset';
      const $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
      const $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
      const $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

      // IEEE754 conversions based on https://github.com/feross/ieee754
      function packIEEE754(value, mLen, nBytes) {
        const buffer = new Array(nBytes);
        let eLen = nBytes * 8 - mLen - 1;
        const eMax = (1 << eLen) - 1;
        const eBias = eMax >> 1;
        const rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
        let i = 0;
        const s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        let e; let m; let
          c;
        value = abs(value);
        // eslint-disable-next-line no-self-compare
        if (value != value || value === Infinity) {
          // eslint-disable-next-line no-self-compare
          m = value != value ? 1 : 0;
          e = eMax;
        } else {
          e = floor(log(value) / LN2);
          if (value * (c = pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * pow(2, mLen);
            e += eBias;
          } else {
            m = value * pow(2, eBias - 1) * pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
        buffer[--i] |= s * 128;
        return buffer;
      }
      function unpackIEEE754(buffer, mLen, nBytes) {
        const eLen = nBytes * 8 - mLen - 1;
        const eMax = (1 << eLen) - 1;
        const eBias = eMax >> 1;
        let nBits = eLen - 7;
        let i = nBytes - 1;
        let s = buffer[i--];
        let e = s & 127;
        let m;
        s >>= 7;
        for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : s ? -Infinity : Infinity;
        } else {
          m += pow(2, mLen);
          e -= eBias;
        } return (s ? -1 : 1) * m * pow(2, e - mLen);
      }

      function unpackI32(bytes) {
        return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
      }
      function packI8(it) {
        return [it & 0xff];
      }
      function packI16(it) {
        return [it & 0xff, it >> 8 & 0xff];
      }
      function packI32(it) {
        return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
      }
      function packF64(it) {
        return packIEEE754(it, 52, 8);
      }
      function packF32(it) {
        return packIEEE754(it, 23, 4);
      }

      function addGetter(C, key, internal) {
        dP(C[PROTOTYPE], key, { get() { return this[internal]; } });
      }

      function get(view, bytes, index, isLittleEndian) {
        const numIndex = +index;
        const intIndex = toIndex(numIndex);
        if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
        const store = view[$BUFFER]._b;
        const start = intIndex + view[$OFFSET];
        const pack = store.slice(start, start + bytes);
        return isLittleEndian ? pack : pack.reverse();
      }
      function set(view, bytes, index, conversion, value, isLittleEndian) {
        const numIndex = +index;
        const intIndex = toIndex(numIndex);
        if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
        const store = view[$BUFFER]._b;
        const start = intIndex + view[$OFFSET];
        const pack = conversion(+value);
        for (let i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
      }

      if (!$typed.ABV) {
        $ArrayBuffer = function ArrayBuffer(length) {
          anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
          const byteLength = toIndex(length);
          this._b = arrayFill.call(new Array(byteLength), 0);
          this[$LENGTH] = byteLength;
        };

        $DataView = function DataView(buffer, byteOffset, byteLength) {
          anInstance(this, $DataView, DATA_VIEW);
          anInstance(buffer, $ArrayBuffer, DATA_VIEW);
          const bufferLength = buffer[$LENGTH];
          const offset = toInteger(byteOffset);
          if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
          byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
          if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
          this[$BUFFER] = buffer;
          this[$OFFSET] = offset;
          this[$LENGTH] = byteLength;
        };

        if (DESCRIPTORS) {
          addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
          addGetter($DataView, BUFFER, '_b');
          addGetter($DataView, BYTE_LENGTH, '_l');
          addGetter($DataView, BYTE_OFFSET, '_o');
        }

        redefineAll($DataView[PROTOTYPE], {
          getInt8: function getInt8(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
          },
          getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
          },
          getInt16: function getInt16(byteOffset /* , littleEndian */) {
            const bytes = get(this, 2, byteOffset, arguments[1]);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
          },
          getUint16: function getUint16(byteOffset /* , littleEndian */) {
            const bytes = get(this, 2, byteOffset, arguments[1]);
            return bytes[1] << 8 | bytes[0];
          },
          getInt32: function getInt32(byteOffset /* , littleEndian */) {
            return unpackI32(get(this, 4, byteOffset, arguments[1]));
          },
          getUint32: function getUint32(byteOffset /* , littleEndian */) {
            return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
          },
          getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
          },
          getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
          },
          setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
          },
          setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
          },
          setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
          },
          setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
          },
          setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
          },
          setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
          },
          setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
            set(this, 4, byteOffset, packF32, value, arguments[2]);
          },
          setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
            set(this, 8, byteOffset, packF64, value, arguments[2]);
          },
        });
      } else {
        if (!fails(() => {
          $ArrayBuffer(1);
        }) || !fails(() => {
          new $ArrayBuffer(-1); // eslint-disable-line no-new
        }) || fails(() => {
          new $ArrayBuffer(); // eslint-disable-line no-new
          new $ArrayBuffer(1.5); // eslint-disable-line no-new
          new $ArrayBuffer(NaN); // eslint-disable-line no-new
          return $ArrayBuffer.name != ARRAY_BUFFER;
        })) {
          $ArrayBuffer = function ArrayBuffer(length) {
            anInstance(this, $ArrayBuffer);
            return new BaseBuffer(toIndex(length));
          };
          const ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
          for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
            if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
          }
          if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
        }
        // iOS Safari 7.x bug
        const view = new $DataView(new $ArrayBuffer(2));
        const $setInt8 = $DataView[PROTOTYPE].setInt8;
        view.setInt8(0, 2147483648);
        view.setInt8(1, 2147483649);
        if (view.getInt8(0) || !view.getInt8(1)) {
          redefineAll($DataView[PROTOTYPE], {
            setInt8: function setInt8(byteOffset, value) {
              $setInt8.call(this, byteOffset, value << 24 >> 24);
            },
            setUint8: function setUint8(byteOffset, value) {
              $setInt8.call(this, byteOffset, value << 24 >> 24);
            },
          }, true);
        }
      }
      setToStringTag($ArrayBuffer, ARRAY_BUFFER);
      setToStringTag($DataView, DATA_VIEW);
      hide($DataView[PROTOTYPE], $typed.VIEW, true);
      exports[ARRAY_BUFFER] = $ArrayBuffer;
      exports[DATA_VIEW] = $DataView;
      /***/ }),

    /***/ './node_modules/core-js/modules/_typed.js':
    /*! ************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \*********************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
      const uid = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js');
      const TYPED = uid('typed_array');
      const VIEW = uid('view');
      const ABV = !!(global.ArrayBuffer && global.DataView);
      let CONSTR = ABV;
      let i = 0;
      const l = 9;
      let Typed;

      const TypedArrayConstructors = (
        'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
      ).split(',');

      while (i < l) {
        if (Typed = global[TypedArrayConstructors[i++]]) {
          hide(Typed.prototype, TYPED, true);
          hide(Typed.prototype, VIEW, true);
        } else CONSTR = false;
      }

      module.exports = {
        ABV,
        CONSTR,
        TYPED,
        VIEW,
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_uid.js':
    /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \********************************************* */
    /***/ ((module) => {
      let id = 0;
      const px = Math.random();
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_user-agent.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const { navigator } = global;

      module.exports = navigator && navigator.userAgent || '';
      /***/ }),

    /***/ './node_modules/core-js/modules/_validate-collection.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \************************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      module.exports = function (it, TYPE) {
        if (!isObject(it) || it._t !== TYPE) throw TypeError(`Incompatible receiver, ${TYPE} required!`);
        return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_wks-define.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \**************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const core = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js');
      const LIBRARY = __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js');
      const wksExt = __webpack_require__(/*! ./_wks-ext */ './node_modules/core-js/modules/_wks-ext.js');
      const defineProperty = (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f);
      module.exports = function (name) {
        const $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/_wks-ext.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \************************************************* */
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
      exports.f = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js');
      /***/ }),

    /***/ './node_modules/core-js/modules/_wks.js':
    /*! **********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \********************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const store = __webpack_require__(/*! ./_shared */ './node_modules/core-js/modules/_shared.js')('wks');
      const uid = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js');
      const { Symbol } = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const USE_SYMBOL = typeof Symbol === 'function';

      const $exports = module.exports = function (name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)(`Symbol.${name}`));
      };

      $exports.store = store;
      /***/ }),

    /***/ './node_modules/core-js/modules/core.get-iterator-method.js':
    /*! ******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \***************************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const classof = __webpack_require__(/*! ./_classof */ './node_modules/core-js/modules/_classof.js');
      const ITERATOR = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('iterator');
      const Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
      module.exports = (__webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js').getIteratorMethod) = function (it) {
        if (it != undefined) {
          return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.copy-within.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ './node_modules/core-js/modules/_array-copy-within.js') });

      __webpack_require__(/*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js')('copyWithin');
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.every.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $every = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js')(4);

      $export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')([].every, true), 'Array', {
        // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
        every: function every(callbackfn /* , thisArg */) {
          return $every(this, callbackfn, arguments[1]);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.fill.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ './node_modules/core-js/modules/_array-fill.js') });

      __webpack_require__(/*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js')('fill');
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.filter.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $filter = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js')(2);

      $export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')([].filter, true), 'Array', {
        // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
        filter: function filter(callbackfn /* , thisArg */) {
          return $filter(this, callbackfn, arguments[1]);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.find-index.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $find = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js')(6);
      const KEY = 'findIndex';
      let forced = true;
      // Shouldn't skip holes
      if (KEY in []) Array(1)[KEY](() => { forced = false; });
      $export($export.P + $export.F * forced, 'Array', {
        findIndex: function findIndex(callbackfn /* , that = undefined */) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
      });
      __webpack_require__(/*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js')(KEY);
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.find.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $find = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js')(5);
      const KEY = 'find';
      let forced = true;
      // Shouldn't skip holes
      if (KEY in []) Array(1)[KEY](() => { forced = false; });
      $export($export.P + $export.F * forced, 'Array', {
        find: function find(callbackfn /* , that = undefined */) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
      });
      __webpack_require__(/*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js')(KEY);
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.for-each.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $forEach = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js')(0);
      const STRICT = __webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')([].forEach, true);

      $export($export.P + $export.F * !STRICT, 'Array', {
        // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
        forEach: function forEach(callbackfn /* , thisArg */) {
          return $forEach(this, callbackfn, arguments[1]);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.from.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const call = __webpack_require__(/*! ./_iter-call */ './node_modules/core-js/modules/_iter-call.js');
      const isArrayIter = __webpack_require__(/*! ./_is-array-iter */ './node_modules/core-js/modules/_is-array-iter.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const createProperty = __webpack_require__(/*! ./_create-property */ './node_modules/core-js/modules/_create-property.js');
      const getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ './node_modules/core-js/modules/core.get-iterator-method.js');

      $export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ './node_modules/core-js/modules/_iter-detect.js')((iter) => { Array.from(iter); }), 'Array', {
        // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
        from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
          const O = toObject(arrayLike);
          const C = typeof this === 'function' ? this : Array;
          const aLen = arguments.length;
          let mapfn = aLen > 1 ? arguments[1] : undefined;
          const mapping = mapfn !== undefined;
          let index = 0;
          const iterFn = getIterFn(O);
          let length; let result; let step; let
            iterator;
          if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
          // if object isn't iterable or it's array with default iterator - use simple case
          if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
              createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
            }
          } else {
            length = toLength(O.length);
            for (result = new C(length); length > index; index++) {
              createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
            }
          }
          result.length = index;
          return result;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.index-of.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $indexOf = __webpack_require__(/*! ./_array-includes */ './node_modules/core-js/modules/_array-includes.js')(false);
      const $native = [].indexOf;
      const NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

      $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')($native)), 'Array', {
        // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
        indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
          return NEGATIVE_ZERO
          // convert -0 to +0
            ? $native.apply(this, arguments) || 0
            : $indexOf(this, searchElement, arguments[1]);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.is-array.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ './node_modules/core-js/modules/_is-array.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.iterator.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \*********************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js');
      const step = __webpack_require__(/*! ./_iter-step */ './node_modules/core-js/modules/_iter-step.js');
      const Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');

      // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()
      module.exports = __webpack_require__(/*! ./_iter-define */ './node_modules/core-js/modules/_iter-define.js')(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated); // target
        this._i = 0; // next index
        this._k = kind; // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function () {
        const O = this._t;
        const kind = this._k;
        const index = this._i++;
        if (!O || index >= O.length) {
          this._t = undefined;
          return step(1);
        }
        if (kind == 'keys') return step(0, index);
        if (kind == 'values') return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, 'values');

      // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
      Iterators.Arguments = Iterators.Array;

      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.join.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 22.1.3.13 Array.prototype.join(separator)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const arrayJoin = [].join;

      // fallback for not array-like strings
      $export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ './node_modules/core-js/modules/_iobject.js') != Object || !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')(arrayJoin)), 'Array', {
        join: function join(separator) {
          return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.last-index-of.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \**************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const $native = [].lastIndexOf;
      const NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

      $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')($native)), 'Array', {
        // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
        lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
          // convert -0 to +0
          if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
          const O = toIObject(this);
          const length = toLength(O.length);
          let index = length - 1;
          if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
          if (index < 0) index = length + index;
          for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
          return -1;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.map.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $map = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js')(1);

      $export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')([].map, true), 'Array', {
        // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
        map: function map(callbackfn /* , thisArg */) {
          return $map(this, callbackfn, arguments[1]);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.of.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \***************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const createProperty = __webpack_require__(/*! ./_create-property */ './node_modules/core-js/modules/_create-property.js');

      // WebKit Array.of isn't generic
      $export($export.S + $export.F * __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => {
        function F() { /* empty */ }
        return !(Array.of.call(F) instanceof F);
      }), 'Array', {
        // 22.1.2.3 Array.of( ...items)
        of: function of(/* ...args */) {
          let index = 0;
          const aLen = arguments.length;
          const result = new (typeof this === 'function' ? this : Array)(aLen);
          while (aLen > index) createProperty(result, index, arguments[index++]);
          result.length = aLen;
          return result;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.reduce-right.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \*************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $reduce = __webpack_require__(/*! ./_array-reduce */ './node_modules/core-js/modules/_array-reduce.js');

      $export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')([].reduceRight, true), 'Array', {
        // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
        reduceRight: function reduceRight(callbackfn /* , initialValue */) {
          return $reduce(this, callbackfn, arguments.length, arguments[1], true);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.reduce.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $reduce = __webpack_require__(/*! ./_array-reduce */ './node_modules/core-js/modules/_array-reduce.js');

      $export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')([].reduce, true), 'Array', {
        // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
        reduce: function reduce(callbackfn /* , initialValue */) {
          return $reduce(this, callbackfn, arguments.length, arguments[1], false);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.slice.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const html = __webpack_require__(/*! ./_html */ './node_modules/core-js/modules/_html.js');
      const cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
      const toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const arraySlice = [].slice;

      // fallback for not array-like ES3 strings and DOM objects
      $export($export.P + $export.F * __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => {
        if (html) arraySlice.call(html);
      }), 'Array', {
        slice: function slice(begin, end) {
          const len = toLength(this.length);
          const klass = cof(this);
          end = end === undefined ? len : end;
          if (klass == 'Array') return arraySlice.call(this, begin, end);
          const start = toAbsoluteIndex(begin, len);
          const upTo = toAbsoluteIndex(end, len);
          const size = toLength(upTo - start);
          const cloned = new Array(size);
          let i = 0;
          for (; i < size; i++) {
            cloned[i] = klass == 'String'
              ? this.charAt(start + i)
              : this[start + i];
          }
          return cloned;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.some.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $some = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js')(3);

      $export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')([].some, true), 'Array', {
        // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
        some: function some(callbackfn /* , thisArg */) {
          return $some(this, callbackfn, arguments[1]);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.sort.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const $sort = [].sort;
      const test = [1, 2, 3];

      $export($export.P + $export.F * (fails(() => {
        // IE8-
        test.sort(undefined);
      }) || !fails(() => {
        // V8 bug
        test.sort(null);
        // Old WebKit
      }) || !__webpack_require__(/*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js')($sort)), 'Array', {
        // 22.1.3.25 Array.prototype.sort(comparefn)
        sort: function sort(comparefn) {
          return comparefn === undefined
            ? $sort.call(toObject(this))
            : $sort.call(toObject(this), aFunction(comparefn));
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.array.species.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_set-species */ './node_modules/core-js/modules/_set-species.js')('Array');
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.date.now.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \***************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.3.3.1 / 15.9.4.4 Date.now()
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Date', { now() { return new Date().getTime(); } });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.date.to-iso-string.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \*************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toISOString = __webpack_require__(/*! ./_date-to-iso-string */ './node_modules/core-js/modules/_date-to-iso-string.js');

      // PhantomJS / old WebKit has a broken implementations
      $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
        toISOString,
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.date.to-json.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');

      $export($export.P + $export.F * __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString() { return 1; } }) !== 1), 'Date', {
        // eslint-disable-next-line no-unused-vars
        toJSON: function toJSON(key) {
          const O = toObject(this);
          const pv = toPrimitive(O);
          return typeof pv === 'number' && !isFinite(pv) ? null : O.toISOString();
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.date.to-primitive.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('toPrimitive');
      const proto = Date.prototype;

      if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js')(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ './node_modules/core-js/modules/_date-to-primitive.js'));
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.date.to-string.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const DateProto = Date.prototype;
      const INVALID_DATE = 'Invalid Date';
      const TO_STRING = 'toString';
      const $toString = DateProto[TO_STRING];
      const { getTime } = DateProto;
      if (`${new Date(NaN)}` != INVALID_DATE) {
        __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js')(DateProto, TO_STRING, function toString() {
          const value = getTime.call(this);
          // eslint-disable-next-line no-self-compare
          return value === value ? $toString.call(this) : INVALID_DATE;
        });
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.function.bind.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ './node_modules/core-js/modules/_bind.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.function.has-instance.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \****************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js');
      const HAS_INSTANCE = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('hasInstance');
      const FunctionProto = Function.prototype;
      // 19.2.3.6 Function.prototype[@@hasInstance](V)
      if (!(HAS_INSTANCE in FunctionProto)) {
        (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f)(FunctionProto, HAS_INSTANCE, {
          value(O) {
            if (typeof this !== 'function' || !isObject(O)) return false;
            if (!isObject(this.prototype)) return O instanceof this;
            // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
            while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
            return false;
          },
        });
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.function.name.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const dP = (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f);
      const FProto = Function.prototype;
      const nameRE = /^\s*function ([^ (]*)/;
      const NAME = 'name';

      // 19.2.4.2 name
      NAME in FProto || __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') && dP(FProto, NAME, {
        configurable: true,
        get() {
          try {
            return (`${this}`).match(nameRE)[1];
          } catch (e) {
            return '';
          }
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.map.js':
    /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const strong = __webpack_require__(/*! ./_collection-strong */ './node_modules/core-js/modules/_collection-strong.js');
      const validate = __webpack_require__(/*! ./_validate-collection */ './node_modules/core-js/modules/_validate-collection.js');
      const MAP = 'Map';

      // 23.1 Map Objects
      module.exports = __webpack_require__(/*! ./_collection */ './node_modules/core-js/modules/_collection.js')(MAP, (get) => function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); }, {
        // 23.1.3.6 Map.prototype.get(key)
        get: function get(key) {
          const entry = strong.getEntry(validate(this, MAP), key);
          return entry && entry.v;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function set(key, value) {
          return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
        },
      }, strong, true);
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.acosh.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.3 Math.acosh(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const log1p = __webpack_require__(/*! ./_math-log1p */ './node_modules/core-js/modules/_math-log1p.js');
      const { sqrt } = Math;
      const $acosh = Math.acosh;

      $export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
      ), 'Math', {
        acosh: function acosh(x) {
          return (x = +x) < 1 ? NaN : x > 94906265.62425156
            ? Math.log(x) + Math.LN2
            : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.asinh.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.5 Math.asinh(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $asinh = Math.asinh;

      function asinh(x) {
        return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
      }

      // Tor Browser bug: Math.asinh(0) -> -0
      $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.atanh.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.7 Math.atanh(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $atanh = Math.atanh;

      // Tor Browser bug: Math.atanh(-0) -> 0
      $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
        atanh: function atanh(x) {
          return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.cbrt.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.9 Math.cbrt(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const sign = __webpack_require__(/*! ./_math-sign */ './node_modules/core-js/modules/_math-sign.js');

      $export($export.S, 'Math', {
        cbrt: function cbrt(x) {
          return sign(x = +x) * Math.abs(x) ** (1 / 3);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.clz32.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.11 Math.clz32(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Math', {
        clz32: function clz32(x) {
          return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.cosh.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.12 Math.cosh(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const { exp } = Math;

      $export($export.S, 'Math', {
        cosh: function cosh(x) {
          return (exp(x = +x) + exp(-x)) / 2;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.expm1.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.14 Math.expm1(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $expm1 = __webpack_require__(/*! ./_math-expm1 */ './node_modules/core-js/modules/_math-expm1.js');

      $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.fround.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.16 Math.fround(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ './node_modules/core-js/modules/_math-fround.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.hypot.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const { abs } = Math;

      $export($export.S, 'Math', {
        hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
          let sum = 0;
          let i = 0;
          const aLen = arguments.length;
          let larg = 0;
          let arg; let
            div;
          while (i < aLen) {
            arg = abs(arguments[i++]);
            if (larg < arg) {
              div = larg / arg;
              sum = sum * div * div + 1;
              larg = arg;
            } else if (arg > 0) {
              div = arg / larg;
              sum += div * div;
            } else sum += arg;
          }
          return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.imul.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.18 Math.imul(x, y)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $imul = Math.imul;

      // some WebKit versions fails with big numbers, some has wrong arity
      $export($export.S + $export.F * __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => $imul(0xffffffff, 5) != -5 || $imul.length != 2), 'Math', {
        imul: function imul(x, y) {
          const UINT16 = 0xffff;
          const xn = +x;
          const yn = +y;
          const xl = UINT16 & xn;
          const yl = UINT16 & yn;
          return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.log10.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.21 Math.log10(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Math', {
        log10: function log10(x) {
          return Math.log(x) * Math.LOG10E;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.log1p.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.20 Math.log1p(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ './node_modules/core-js/modules/_math-log1p.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.log2.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.22 Math.log2(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Math', {
        log2: function log2(x) {
          return Math.log(x) / Math.LN2;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.sign.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.28 Math.sign(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ './node_modules/core-js/modules/_math-sign.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.sinh.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.30 Math.sinh(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const expm1 = __webpack_require__(/*! ./_math-expm1 */ './node_modules/core-js/modules/_math-expm1.js');
      const { exp } = Math;

      // V8 near Chromium 38 has a problem with very small numbers
      $export($export.S + $export.F * __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => !Math.sinh(-2e-17) != -2e-17), 'Math', {
        sinh: function sinh(x) {
          return Math.abs(x = +x) < 1
            ? (expm1(x) - expm1(-x)) / 2
            : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.tanh.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.33 Math.tanh(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const expm1 = __webpack_require__(/*! ./_math-expm1 */ './node_modules/core-js/modules/_math-expm1.js');
      const { exp } = Math;

      $export($export.S, 'Math', {
        tanh: function tanh(x) {
          const a = expm1(x = +x);
          const b = expm1(-x);
          return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.math.trunc.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.2.2.34 Math.trunc(x)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Math', {
        trunc: function trunc(it) {
          return (it > 0 ? Math.floor : Math.ceil)(it);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.constructor.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \*************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const cof = __webpack_require__(/*! ./_cof */ './node_modules/core-js/modules/_cof.js');
      const inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ './node_modules/core-js/modules/_inherit-if-required.js');
      const toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const gOPN = (__webpack_require__(/*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js').f);
      const gOPD = (__webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js').f);
      const dP = (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f);
      const $trim = (__webpack_require__(/*! ./_string-trim */ './node_modules/core-js/modules/_string-trim.js').trim);
      const NUMBER = 'Number';
      let $Number = global[NUMBER];
      const Base = $Number;
      const proto = $Number.prototype;
      // Opera ~12 has broken Object#toString
      const BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ './node_modules/core-js/modules/_object-create.js')(proto)) == NUMBER;
      const TRIM = 'trim' in String.prototype;

      // 7.1.3 ToNumber(argument)
      const toNumber = function (argument) {
        let it = toPrimitive(argument, false);
        if (typeof it === 'string' && it.length > 2) {
          it = TRIM ? it.trim() : $trim(it, 3);
          const first = it.charCodeAt(0);
          let third; let radix; let
            maxCode;
          if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
              case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
              default: return +it;
            }
            for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
              code = digits.charCodeAt(i);
              // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols
              if (code < 48 || code > maxCode) return NaN;
            } return parseInt(digits, radix);
          }
        } return +it;
      };

      if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
        $Number = function Number(value) {
          const it = arguments.length < 1 ? 0 : value;
          const that = this;
          return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(() => { proto.valueOf.call(that); }) : cof(that) != NUMBER)
            ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
        };
        for (var keys = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') ? gOPN(Base) : (
          // ES3:
            'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,'
    // ES6 (in case, if modules with ES6 Number statics required before):
    + 'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,'
    + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
          ).split(','), j = 0, key; keys.length > j; j++) {
          if (has(Base, key = keys[j]) && !has($Number, key)) {
            dP($Number, key, gOPD(Base, key));
          }
        }
        $Number.prototype = proto;
        proto.constructor = $Number;
        __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js')(global, NUMBER, $Number);
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.epsilon.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.1.2.1 Number.EPSILON
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Number', { EPSILON: 2 ** -52 });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.is-finite.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.1.2.2 Number.isFinite(number)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const _isFinite = (__webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js').isFinite);

      $export($export.S, 'Number', {
        isFinite: function isFinite(it) {
          return typeof it === 'number' && _isFinite(it);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.is-integer.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.1.2.3 Number.isInteger(number)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ './node_modules/core-js/modules/_is-integer.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.is-nan.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.1.2.4 Number.isNaN(number)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Number', {
        isNaN: function isNaN(number) {
          // eslint-disable-next-line no-self-compare
          return number != number;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.is-safe-integer.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \******************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.1.2.5 Number.isSafeInteger(number)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const isInteger = __webpack_require__(/*! ./_is-integer */ './node_modules/core-js/modules/_is-integer.js');
      const { abs } = Math;

      $export($export.S, 'Number', {
        isSafeInteger: function isSafeInteger(number) {
          return isInteger(number) && abs(number) <= 0x1fffffffffffff;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.max-safe-integer.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \******************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.1.2.6 Number.MAX_SAFE_INTEGER
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.min-safe-integer.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \******************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 20.1.2.10 Number.MIN_SAFE_INTEGER
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.parse-float.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \*************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $parseFloat = __webpack_require__(/*! ./_parse-float */ './node_modules/core-js/modules/_parse-float.js');
      // 20.1.2.12 Number.parseFloat(string)
      $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.parse-int.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $parseInt = __webpack_require__(/*! ./_parse-int */ './node_modules/core-js/modules/_parse-int.js');
      // 20.1.2.13 Number.parseInt(string, radix)
      $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.to-fixed.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \************************************************************ */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
      const aNumberValue = __webpack_require__(/*! ./_a-number-value */ './node_modules/core-js/modules/_a-number-value.js');
      const repeat = __webpack_require__(/*! ./_string-repeat */ './node_modules/core-js/modules/_string-repeat.js');
      const $toFixed = 1.0.toFixed;
      const { floor } = Math;
      const data = [0, 0, 0, 0, 0, 0];
      const ERROR = 'Number.toFixed: incorrect invocation!';
      const ZERO = '0';

      const multiply = function (n, c) {
        let i = -1;
        let c2 = c;
        while (++i < 6) {
          c2 += n * data[i];
          data[i] = c2 % 1e7;
          c2 = floor(c2 / 1e7);
        }
      };
      const divide = function (n) {
        let i = 6;
        let c = 0;
        while (--i >= 0) {
          c += data[i];
          data[i] = floor(c / n);
          c = (c % n) * 1e7;
        }
      };
      const numToString = function () {
        let i = 6;
        let s = '';
        while (--i >= 0) {
          if (s !== '' || i === 0 || data[i] !== 0) {
            const t = String(data[i]);
            s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
          }
        } return s;
      };
      const pow = function (x, n, acc) {
        return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
      };
      const log = function (x) {
        let n = 0;
        let x2 = x;
        while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
        }
        while (x2 >= 2) {
          n += 1;
          x2 /= 2;
        } return n;
      };

      $export($export.P + $export.F * (!!$toFixed && (
        0.00008.toFixed(3) !== '0.000'
  || 0.9.toFixed(0) !== '1'
  || 1.255.toFixed(2) !== '1.25'
  || 1000000000000000128.0.toFixed(0) !== '1000000000000000128'
      ) || !__webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => {
        // V8 ~ Android 4.3-
        $toFixed.call({});
      })), 'Number', {
        toFixed: function toFixed(fractionDigits) {
          let x = aNumberValue(this, ERROR);
          const f = toInteger(fractionDigits);
          let s = '';
          let m = ZERO;
          let e; let z; let j; let
            k;
          if (f < 0 || f > 20) throw RangeError(ERROR);
          // eslint-disable-next-line no-self-compare
          if (x != x) return 'NaN';
          if (x <= -1e21 || x >= 1e21) return String(x);
          if (x < 0) {
            s = '-';
            x = -x;
          }
          if (x > 1e-21) {
            e = log(x * pow(2, 69, 1)) - 69;
            z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
            z *= 0x10000000000000;
            e = 52 - e;
            if (e > 0) {
              multiply(0, z);
              j = f;
              while (j >= 7) {
                multiply(1e7, 0);
                j -= 7;
              }
              multiply(pow(10, j, 1), 0);
              j = e - 1;
              while (j >= 23) {
                divide(1 << 23);
                j -= 23;
              }
              divide(1 << j);
              multiply(1, 1);
              divide(2);
              m = numToString();
            } else {
              multiply(0, z);
              multiply(1 << -e, 0);
              m = numToString() + repeat.call(ZERO, f);
            }
          }
          if (f > 0) {
            k = m.length;
            m = s + (k <= f ? `0.${repeat.call(ZERO, f - k)}${m}` : `${m.slice(0, k - f)}.${m.slice(k - f)}`);
          } else {
            m = s + m;
          } return m;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.number.to-precision.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \**************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const aNumberValue = __webpack_require__(/*! ./_a-number-value */ './node_modules/core-js/modules/_a-number-value.js');
      const $toPrecision = 1.0.toPrecision;

      $export($export.P + $export.F * ($fails(() =>
        // IE7-
        $toPrecision.call(1, undefined) !== '1') || !$fails(() => {
        // V8 ~ Android 4.3-
        $toPrecision.call({});
      })), 'Number', {
        toPrecision: function toPrecision(precision) {
          const that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
          return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.assign.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.3.1 Object.assign(target, source)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ './node_modules/core-js/modules/_object-assign.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.create.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      $export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ './node_modules/core-js/modules/_object-create.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.define-properties.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \********************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
      $export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ './node_modules/core-js/modules/_object-dps.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.define-property.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \******************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
      $export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f) });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.freeze.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.5 Object.freeze(O)
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const meta = (__webpack_require__(/*! ./_meta */ './node_modules/core-js/modules/_meta.js').onFreeze);

      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('freeze', ($freeze) => function freeze(it) {
        return $freeze && isObject(it) ? $freeze(meta(it)) : it;
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.get-own-property-descriptor.js':
    /*! ********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \******************************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js').f);

      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('getOwnPropertyDescriptor', () => function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor(toIObject(it), key);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.get-own-property-names.js':
    /*! ***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \************************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('getOwnPropertyNames', () => (__webpack_require__(/*! ./_object-gopn-ext */ './node_modules/core-js/modules/_object-gopn-ext.js').f));
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.get-prototype-of.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \******************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.9 Object.getPrototypeOf(O)
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js');

      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('getPrototypeOf', () => function getPrototypeOf(it) {
        return $getPrototypeOf(toObject(it));
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.is-extensible.js':
    /*! ******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \***************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.11 Object.isExtensible(O)
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');

      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('isExtensible', ($isExtensible) => function isExtensible(it) {
        return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.is-frozen.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.12 Object.isFrozen(O)
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');

      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('isFrozen', ($isFrozen) => function isFrozen(it) {
        return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.is-sealed.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.13 Object.isSealed(O)
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');

      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('isSealed', ($isSealed) => function isSealed(it) {
        return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.is.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.3.10 Object.is(value1, value2)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      $export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ './node_modules/core-js/modules/_same-value.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.keys.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.14 Object.keys(O)
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const $keys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');

      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('keys', () => function keys(it) {
        return $keys(toObject(it));
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.prevent-extensions.js':
    /*! ***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \********************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.15 Object.preventExtensions(O)
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const meta = (__webpack_require__(/*! ./_meta */ './node_modules/core-js/modules/_meta.js').onFreeze);

      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('preventExtensions', ($preventExtensions) => function preventExtensions(it) {
        return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.seal.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.2.17 Object.seal(O)
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const meta = (__webpack_require__(/*! ./_meta */ './node_modules/core-js/modules/_meta.js').onFreeze);

      __webpack_require__(/*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js')('seal', ($seal) => function seal(it) {
        return $seal && isObject(it) ? $seal(meta(it)) : it;
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.set-prototype-of.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.3.19 Object.setPrototypeOf(O, proto)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      $export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ './node_modules/core-js/modules/_set-proto.js').set) });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.object.to-string.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 19.1.3.6 Object.prototype.toString()
      const classof = __webpack_require__(/*! ./_classof */ './node_modules/core-js/modules/_classof.js');
      const test = {};
      test[__webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('toStringTag')] = 'z';
      if (`${test}` != '[object z]') {
        __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js')(Object.prototype, 'toString', function toString() {
          return `[object ${classof(this)}]`;
        }, true);
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.parse-float.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $parseFloat = __webpack_require__(/*! ./_parse-float */ './node_modules/core-js/modules/_parse-float.js');
      // 18.2.4 parseFloat(string)
      $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.parse-int.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $parseInt = __webpack_require__(/*! ./_parse-int */ './node_modules/core-js/modules/_parse-int.js');
      // 18.2.5 parseInt(string, radix)
      $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.promise.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \**************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const LIBRARY = __webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js');
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const ctx = __webpack_require__(/*! ./_ctx */ './node_modules/core-js/modules/_ctx.js');
      const classof = __webpack_require__(/*! ./_classof */ './node_modules/core-js/modules/_classof.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
      const anInstance = __webpack_require__(/*! ./_an-instance */ './node_modules/core-js/modules/_an-instance.js');
      const forOf = __webpack_require__(/*! ./_for-of */ './node_modules/core-js/modules/_for-of.js');
      const speciesConstructor = __webpack_require__(/*! ./_species-constructor */ './node_modules/core-js/modules/_species-constructor.js');
      const task = (__webpack_require__(/*! ./_task */ './node_modules/core-js/modules/_task.js').set);
      const microtask = __webpack_require__(/*! ./_microtask */ './node_modules/core-js/modules/_microtask.js')();
      const newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ './node_modules/core-js/modules/_new-promise-capability.js');
      const perform = __webpack_require__(/*! ./_perform */ './node_modules/core-js/modules/_perform.js');
      const userAgent = __webpack_require__(/*! ./_user-agent */ './node_modules/core-js/modules/_user-agent.js');
      const promiseResolve = __webpack_require__(/*! ./_promise-resolve */ './node_modules/core-js/modules/_promise-resolve.js');
      const PROMISE = 'Promise';
      const { TypeError } = global;
      const { process } = global;
      const versions = process && process.versions;
      const v8 = versions && versions.v8 || '';
      let $Promise = global[PROMISE];
      const isNode = classof(process) == 'process';
      const empty = function () { /* empty */ };
      let Internal; let newGenericPromiseCapability; let OwnPromiseCapability; let
        Wrapper;
      let newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

      const USE_NATIVE = !!(function () {
        try {
          // correct subclassing with @@species support
          const promise = $Promise.resolve(1);
          const FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('species')] = function (exec) {
            exec(empty, empty);
          };
          // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
          return (isNode || typeof PromiseRejectionEvent === 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
        } catch (e) { /* empty */ }
      }());

      // helpers
      const isThenable = function (it) {
        let then;
        return isObject(it) && typeof (then = it.then) === 'function' ? then : false;
      };
      const notify = function (promise, isReject) {
        if (promise._n) return;
        promise._n = true;
        const chain = promise._c;
        microtask(() => {
          const value = promise._v;
          const ok = promise._s == 1;
          let i = 0;
          const run = function (reaction) {
            const handler = ok ? reaction.ok : reaction.fail;
            const { resolve } = reaction;
            const { reject } = reaction;
            const { domain } = reaction;
            let result; let then; let
              exited;
            try {
              if (handler) {
                if (!ok) {
                  if (promise._h == 2) onHandleUnhandled(promise);
                  promise._h = 1;
                }
                if (handler === true) result = value;
                else {
                  if (domain) domain.enter();
                  result = handler(value); // may throw
                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }
                if (result === reaction.promise) {
                  reject(TypeError('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (e) {
              if (domain && !exited) domain.exit();
              reject(e);
            }
          };
          while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
          promise._c = [];
          promise._n = false;
          if (isReject && !promise._h) onUnhandled(promise);
        });
      };
      var onUnhandled = function (promise) {
        task.call(global, () => {
          const value = promise._v;
          const unhandled = isUnhandled(promise);
          let result; let handler; let
            console;
          if (unhandled) {
            result = perform(() => {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({ promise, reason: value });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
          } promise._a = undefined;
          if (unhandled && result.e) throw result.v;
        });
      };
      var isUnhandled = function (promise) {
        return promise._h !== 1 && (promise._a || promise._c).length === 0;
      };
      var onHandleUnhandled = function (promise) {
        task.call(global, () => {
          let handler;
          if (isNode) {
            process.emit('rejectionHandled', promise);
          } else if (handler = global.onrejectionhandled) {
            handler({ promise, reason: promise._v });
          }
        });
      };
      const $reject = function (value) {
        let promise = this;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise; // unwrap
        promise._v = value;
        promise._s = 2;
        if (!promise._a) promise._a = promise._c.slice();
        notify(promise, true);
      };
      const $resolve = function (value) {
        let promise = this;
        let then;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise; // unwrap
        try {
          if (promise === value) throw TypeError("Promise can't be resolved itself");
          if (then = isThenable(value)) {
            microtask(() => {
              const wrapper = { _w: promise, _d: false }; // wrap
              try {
                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
              } catch (e) {
                $reject.call(wrapper, e);
              }
            });
          } else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
          }
        } catch (e) {
          $reject.call({ _w: promise, _d: false }, e); // wrap
        }
      };

      // constructor polyfill
      if (!USE_NATIVE) {
        // 25.4.3.1 Promise(executor)
        $Promise = function Promise(executor) {
          anInstance(this, $Promise, PROMISE, '_h');
          aFunction(executor);
          Internal.call(this);
          try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
          } catch (err) {
            $reject.call(this, err);
          }
        };
        // eslint-disable-next-line no-unused-vars
        Internal = function Promise(executor) {
          this._c = []; // <- awaiting reactions
          this._a = undefined; // <- checked in isUnhandled reactions
          this._s = 0; // <- state
          this._d = false; // <- done
          this._v = undefined; // <- value
          this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
          this._n = false; // <- notify
        };
        Internal.prototype = __webpack_require__(/*! ./_redefine-all */ './node_modules/core-js/modules/_redefine-all.js')($Promise.prototype, {
          // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
          then: function then(onFulfilled, onRejected) {
            const reaction = newPromiseCapability(speciesConstructor(this, $Promise));
            reaction.ok = typeof onFulfilled === 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected === 'function' && onRejected;
            reaction.domain = isNode ? process.domain : undefined;
            this._c.push(reaction);
            if (this._a) this._a.push(reaction);
            if (this._s) notify(this, false);
            return reaction.promise;
          },
          // 25.4.5.1 Promise.prototype.catch(onRejected)
          catch(onRejected) {
            return this.then(undefined, onRejected);
          },
        });
        OwnPromiseCapability = function () {
          const promise = new Internal();
          this.promise = promise;
          this.resolve = ctx($resolve, promise, 1);
          this.reject = ctx($reject, promise, 1);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
          return C === $Promise || C === Wrapper
            ? new OwnPromiseCapability(C)
            : newGenericPromiseCapability(C);
        };
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
      __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js')($Promise, PROMISE);
      __webpack_require__(/*! ./_set-species */ './node_modules/core-js/modules/_set-species.js')(PROMISE);
      Wrapper = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js')[PROMISE];

      // statics
      $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(r) {
          const capability = newPromiseCapability(this);
          const $$reject = capability.reject;
          $$reject(r);
          return capability.promise;
        },
      });
      $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(x) {
          return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
        },
      });
      $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ './node_modules/core-js/modules/_iter-detect.js')((iter) => {
        $Promise.all(iter).catch(empty);
      })), PROMISE, {
        // 25.4.4.1 Promise.all(iterable)
        all: function all(iterable) {
          const C = this;
          const capability = newPromiseCapability(C);
          const { resolve } = capability;
          const { reject } = capability;
          const result = perform(() => {
            const values = [];
            let index = 0;
            let remaining = 1;
            forOf(iterable, false, (promise) => {
              const $index = index++;
              let alreadyCalled = false;
              values.push(undefined);
              remaining++;
              C.resolve(promise).then((value) => {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[$index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.e) reject(result.v);
          return capability.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function race(iterable) {
          const C = this;
          const capability = newPromiseCapability(C);
          const { reject } = capability;
          const result = perform(() => {
            forOf(iterable, false, (promise) => {
              C.resolve(promise).then(capability.resolve, reject);
            });
          });
          if (result.e) reject(result.v);
          return capability.promise;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.apply.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const rApply = ((__webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js').Reflect) || {}).apply;
      const fApply = Function.apply;
      // MS Edge argumentsList argument is optional
      $export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => {
        rApply(() => { /* empty */ });
      }), 'Reflect', {
        apply: function apply(target, thisArgument, argumentsList) {
          const T = aFunction(target);
          const L = anObject(argumentsList);
          return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.construct.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const create = __webpack_require__(/*! ./_object-create */ './node_modules/core-js/modules/_object-create.js');
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const bind = __webpack_require__(/*! ./_bind */ './node_modules/core-js/modules/_bind.js');
      const rConstruct = ((__webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js').Reflect) || {}).construct;

      // MS Edge supports only 2 arguments and argumentsList argument is optional
      // FF Nightly sets third argument as `new.target`, but does not create `this` from it
      const NEW_TARGET_BUG = fails(() => {
        function F() { /* empty */ }
        return !(rConstruct(() => { /* empty */ }, [], F) instanceof F);
      });
      const ARGS_BUG = !fails(() => {
        rConstruct(() => { /* empty */ });
      });

      $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
        construct: function construct(Target, args /* , newTarget */) {
          aFunction(Target);
          anObject(args);
          const newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
          if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
          if (Target == newTarget) {
            // w/o altered newTarget, optimization for 0-4 arguments
            switch (args.length) {
              case 0: return new Target();
              case 1: return new Target(args[0]);
              case 2: return new Target(args[0], args[1]);
              case 3: return new Target(args[0], args[1], args[2]);
              case 4: return new Target(args[0], args[1], args[2], args[3]);
            }
            // w/o altered newTarget, lot of arguments case
            const $args = [null];
            $args.push.apply($args, args);
            return new (bind.apply(Target, $args))();
          }
          // with altered newTarget, not support built-in constructors
          const proto = newTarget.prototype;
          const instance = create(isObject(proto) ? proto : Object.prototype);
          const result = Function.apply.call(Target, instance, args);
          return isObject(result) ? result : instance;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.define-property.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \******************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
      const dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');

      // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
      $export($export.S + $export.F * __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => {
        // eslint-disable-next-line no-undef
        Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
      }), 'Reflect', {
        defineProperty: function defineProperty(target, propertyKey, attributes) {
          anObject(target);
          propertyKey = toPrimitive(propertyKey, true);
          anObject(attributes);
          try {
            dP.f(target, propertyKey, attributes);
            return true;
          } catch (e) {
            return false;
          }
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.delete-property.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \******************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.4 Reflect.deleteProperty(target, propertyKey)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const gOPD = (__webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js').f);
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');

      $export($export.S, 'Reflect', {
        deleteProperty: function deleteProperty(target, propertyKey) {
          const desc = gOPD(anObject(target), propertyKey);
          return desc && !desc.configurable ? false : delete target[propertyKey];
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.enumerate.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.5 Reflect.enumerate(target)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const Enumerate = function (iterated) {
        this._t = anObject(iterated); // target
        this._i = 0; // next index
        const keys = this._k = []; // keys
        let key;
        for (key in iterated) keys.push(key);
      };
      __webpack_require__(/*! ./_iter-create */ './node_modules/core-js/modules/_iter-create.js')(Enumerate, 'Object', function () {
        const that = this;
        const keys = that._k;
        let key;
        do {
          if (that._i >= keys.length) return { value: undefined, done: true };
        } while (!((key = keys[that._i++]) in that._t));
        return { value: key, done: false };
      });

      $export($export.S, 'Reflect', {
        enumerate: function enumerate(target) {
          return new Enumerate(target);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js':
    /*! *********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \******************************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
      const gOPD = __webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');

      $export($export.S, 'Reflect', {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
          return gOPD.f(anObject(target), propertyKey);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.get-prototype-of.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \********************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.8 Reflect.getPrototypeOf(target)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const getProto = __webpack_require__(/*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');

      $export($export.S, 'Reflect', {
        getPrototypeOf: function getPrototypeOf(target) {
          return getProto(anObject(target));
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.get.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.6 Reflect.get(target, propertyKey [, receiver])
      const gOPD = __webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js');
      const getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js');
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');

      function get(target, propertyKey /* , receiver */) {
        const receiver = arguments.length < 3 ? target : arguments[2];
        let desc; let
          proto;
        if (anObject(target) === receiver) return target[propertyKey];
        if (desc = gOPD.f(target, propertyKey)) {
          return has(desc, 'value')
            ? desc.value
            : desc.get !== undefined
              ? desc.get.call(receiver)
              : undefined;
        }
        if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
      }

      $export($export.S, 'Reflect', { get });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.has.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.9 Reflect.has(target, propertyKey)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Reflect', {
        has: function has(target, propertyKey) {
          return propertyKey in target;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.is-extensible.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \****************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.10 Reflect.isExtensible(target)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const $isExtensible = Object.isExtensible;

      $export($export.S, 'Reflect', {
        isExtensible: function isExtensible(target) {
          anObject(target);
          return $isExtensible ? $isExtensible(target) : true;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.own-keys.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.11 Reflect.ownKeys(target)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ './node_modules/core-js/modules/_own-keys.js') });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.prevent-extensions.js':
    /*! ************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \*********************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.12 Reflect.preventExtensions(target)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const $preventExtensions = Object.preventExtensions;

      $export($export.S, 'Reflect', {
        preventExtensions: function preventExtensions(target) {
          anObject(target);
          try {
            if ($preventExtensions) $preventExtensions(target);
            return true;
          } catch (e) {
            return false;
          }
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.set-prototype-of.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \********************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.14 Reflect.setPrototypeOf(target, proto)
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const setProto = __webpack_require__(/*! ./_set-proto */ './node_modules/core-js/modules/_set-proto.js');

      if (setProto) {
        $export($export.S, 'Reflect', {
          setPrototypeOf: function setPrototypeOf(target, proto) {
            setProto.check(target, proto);
            try {
              setProto.set(target, proto);
              return true;
            } catch (e) {
              return false;
            }
          },
        });
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.reflect.set.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
      const dP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
      const gOPD = __webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js');
      const getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js');
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const createDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');

      function set(target, propertyKey, V /* , receiver */) {
        const receiver = arguments.length < 4 ? target : arguments[3];
        let ownDesc = gOPD.f(anObject(target), propertyKey);
        let existingDescriptor; let
          proto;
        if (!ownDesc) {
          if (isObject(proto = getPrototypeOf(target))) {
            return set(proto, propertyKey, V, receiver);
          }
          ownDesc = createDesc(0);
        }
        if (has(ownDesc, 'value')) {
          if (ownDesc.writable === false || !isObject(receiver)) return false;
          if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
            if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
            existingDescriptor.value = V;
            dP.f(receiver, propertyKey, existingDescriptor);
          } else dP.f(receiver, propertyKey, createDesc(0, V));
          return true;
        }
        return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
      }

      $export($export.S, 'Reflect', { set });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.regexp.constructor.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \*************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ './node_modules/core-js/modules/_inherit-if-required.js');
      const dP = (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f);
      const gOPN = (__webpack_require__(/*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js').f);
      const isRegExp = __webpack_require__(/*! ./_is-regexp */ './node_modules/core-js/modules/_is-regexp.js');
      const $flags = __webpack_require__(/*! ./_flags */ './node_modules/core-js/modules/_flags.js');
      let $RegExp = global.RegExp;
      const Base = $RegExp;
      const proto = $RegExp.prototype;
      const re1 = /a/g;
      const re2 = /a/g;
      // "new" creates a new object, old webkit buggy here
      const CORRECT_NEW = new $RegExp(re1) !== re1;

      if (__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => {
        re2[__webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js')('match')] = false;
        // RegExp constructor can alter flags and IsRegExp works correct with @@match
        return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
      }))) {
        $RegExp = function RegExp(p, f) {
          const tiRE = this instanceof $RegExp;
          let piRE = isRegExp(p);
          const fiU = f === undefined;
          return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
            : inheritIfRequired(
              CORRECT_NEW
                ? new Base(piRE && !fiU ? p.source : p, f)
                : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f),
              tiRE ? this : proto,
              $RegExp,
            );
        };
        const proxy = function (key) {
          key in $RegExp || dP($RegExp, key, {
            configurable: true,
            get() { return Base[key]; },
            set(it) { Base[key] = it; },
          });
        };
        for (let keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
        proto.constructor = $RegExp;
        $RegExp.prototype = proto;
        __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js')(global, 'RegExp', $RegExp);
      }

      __webpack_require__(/*! ./_set-species */ './node_modules/core-js/modules/_set-species.js')('RegExp');
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.regexp.exec.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const regexpExec = __webpack_require__(/*! ./_regexp-exec */ './node_modules/core-js/modules/_regexp-exec.js');
      __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js')({
        target: 'RegExp',
        proto: true,
        forced: regexpExec !== /./.exec,
      }, {
        exec: regexpExec,
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.regexp.flags.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 21.2.5.3 get RegExp.prototype.flags()
      if (__webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js') && /./g.flags != 'g') {
        (__webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js').f)(RegExp.prototype, 'flags', {
          configurable: true,
          get: __webpack_require__(/*! ./_flags */ './node_modules/core-js/modules/_flags.js'),
        });
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.regexp.match.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ './node_modules/core-js/modules/_advance-string-index.js');
      const regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ './node_modules/core-js/modules/_regexp-exec-abstract.js');

      // @@match logic
      __webpack_require__(/*! ./_fix-re-wks */ './node_modules/core-js/modules/_fix-re-wks.js')('match', 1, (defined, MATCH, $match, maybeCallNative) => [
        // `String.prototype.match` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.match
        function match(regexp) {
          const O = defined(this);
          const fn = regexp == undefined ? undefined : regexp[MATCH];
          return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
        function (regexp) {
          const res = maybeCallNative($match, regexp, this);
          if (res.done) return res.value;
          const rx = anObject(regexp);
          const S = String(this);
          if (!rx.global) return regExpExec(rx, S);
          const fullUnicode = rx.unicode;
          rx.lastIndex = 0;
          const A = [];
          let n = 0;
          let result;
          while ((result = regExpExec(rx, S)) !== null) {
            const matchStr = String(result[0]);
            A[n] = matchStr;
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            n++;
          }
          return n === 0 ? null : A;
        },
      ]);
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.regexp.replace.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const toInteger = __webpack_require__(/*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js');
      const advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ './node_modules/core-js/modules/_advance-string-index.js');
      const regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ './node_modules/core-js/modules/_regexp-exec-abstract.js');
      const { max } = Math;
      const { min } = Math;
      const { floor } = Math;
      const SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
      const SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

      const maybeToString = function (it) {
        return it === undefined ? it : String(it);
      };

      // @@replace logic
      __webpack_require__(/*! ./_fix-re-wks */ './node_modules/core-js/modules/_fix-re-wks.js')('replace', 2, (defined, REPLACE, $replace, maybeCallNative) => {
        return [
          // `String.prototype.replace` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            const O = defined(this);
            const fn = searchValue == undefined ? undefined : searchValue[REPLACE];
            return fn !== undefined
              ? fn.call(searchValue, O, replaceValue)
              : $replace.call(String(O), searchValue, replaceValue);
          },
          // `RegExp.prototype[@@replace]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
          function (regexp, replaceValue) {
            const res = maybeCallNative($replace, regexp, this, replaceValue);
            if (res.done) return res.value;

            const rx = anObject(regexp);
            const S = String(this);
            const functionalReplace = typeof replaceValue === 'function';
            if (!functionalReplace) replaceValue = String(replaceValue);
            const { global } = rx;
            if (global) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }
            const results = [];
            while (true) {
              var result = regExpExec(rx, S);
              if (result === null) break;
              results.push(result);
              if (!global) break;
              const matchStr = String(result[0]);
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            let accumulatedResult = '';
            let nextSourcePosition = 0;
            for (let i = 0; i < results.length; i++) {
              result = results[i];
              const matched = String(result[0]);
              const position = max(min(toInteger(result.index), S.length), 0);
              const captures = [];
              // NOTE: This is equivalent to
              //   captures = result.slice(1).map(maybeToString)
              // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
              // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
              // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
              for (let j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
              const namedCaptures = result.groups;
              if (functionalReplace) {
                const replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(undefined, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }
              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
          },
        ];

        // https://tc39.github.io/ecma262/#sec-getsubstitution
        function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
          const tailPos = position + matched.length;
          const m = captures.length;
          let symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
          if (namedCaptures !== undefined) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
          }
          return $replace.call(replacement, symbols, (match, ch) => {
            let capture;
            switch (ch.charAt(0)) {
              case '$': return '$';
              case '&': return matched;
              case '`': return str.slice(0, position);
              case "'": return str.slice(tailPos);
              case '<':
                capture = namedCaptures[ch.slice(1, -1)];
                break;
              default: // \d\d?
                var n = +ch;
                if (n === 0) return match;
                if (n > m) {
                  const f = floor(n / 10);
                  if (f === 0) return match;
                  if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                  return match;
                }
                capture = captures[n - 1];
            }
            return capture === undefined ? '' : capture;
          });
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.regexp.search.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const sameValue = __webpack_require__(/*! ./_same-value */ './node_modules/core-js/modules/_same-value.js');
      const regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ './node_modules/core-js/modules/_regexp-exec-abstract.js');

      // @@search logic
      __webpack_require__(/*! ./_fix-re-wks */ './node_modules/core-js/modules/_fix-re-wks.js')('search', 1, (defined, SEARCH, $search, maybeCallNative) => [
        // `String.prototype.search` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.search
        function search(regexp) {
          const O = defined(this);
          const fn = regexp == undefined ? undefined : regexp[SEARCH];
          return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
        function (regexp) {
          const res = maybeCallNative($search, regexp, this);
          if (res.done) return res.value;
          const rx = anObject(regexp);
          const S = String(this);
          const previousLastIndex = rx.lastIndex;
          if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
          const result = regExpExec(rx, S);
          if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
          return result === null ? -1 : result.index;
        },
      ]);
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.regexp.split.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const isRegExp = __webpack_require__(/*! ./_is-regexp */ './node_modules/core-js/modules/_is-regexp.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const speciesConstructor = __webpack_require__(/*! ./_species-constructor */ './node_modules/core-js/modules/_species-constructor.js');
      const advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ './node_modules/core-js/modules/_advance-string-index.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ './node_modules/core-js/modules/_regexp-exec-abstract.js');
      const regexpExec = __webpack_require__(/*! ./_regexp-exec */ './node_modules/core-js/modules/_regexp-exec.js');
      const fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const $min = Math.min;
      const $push = [].push;
      const $SPLIT = 'split';
      const LENGTH = 'length';
      const LAST_INDEX = 'lastIndex';
      const MAX_UINT32 = 0xffffffff;

      // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
      const SUPPORTS_Y = !fails(() => { RegExp(MAX_UINT32, 'y'); });

      // @@split logic
      __webpack_require__(/*! ./_fix-re-wks */ './node_modules/core-js/modules/_fix-re-wks.js')('split', 2, (defined, SPLIT, $split, maybeCallNative) => {
        let internalSplit;
        if (
          'abbc'[$SPLIT](/(b)*/)[1] == 'c'
    || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4
    || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2
    || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4
    || '.'[$SPLIT](/()()/)[LENGTH] > 1
    || ''[$SPLIT](/.?/)[LENGTH]
        ) {
          // based on es5-shim implementation, need to rework it
          internalSplit = function (separator, limit) {
            const string = String(this);
            if (separator === undefined && limit === 0) return [];
            // If `separator` is not a regex, use native split
            if (!isRegExp(separator)) return $split.call(string, separator, limit);
            const output = [];
            const flags = (separator.ignoreCase ? 'i' : '')
                  + (separator.multiline ? 'm' : '')
                  + (separator.unicode ? 'u' : '')
                  + (separator.sticky ? 'y' : '');
            let lastLastIndex = 0;
            const splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
            // Make `global` and avoid `lastIndex` issues by working with a copy
            const separatorCopy = new RegExp(separator.source, `${flags}g`);
            let match; let lastIndex; let
              lastLength;
            while (match = regexpExec.call(separatorCopy, string)) {
              lastIndex = separatorCopy[LAST_INDEX];
              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                lastLength = match[0][LENGTH];
                lastLastIndex = lastIndex;
                if (output[LENGTH] >= splitLimit) break;
              }
              if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
            }
            if (lastLastIndex === string[LENGTH]) {
              if (lastLength || !separatorCopy.test('')) output.push('');
            } else output.push(string.slice(lastLastIndex));
            return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
          };
          // Chakra, V8
        } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
          internalSplit = function (separator, limit) {
            return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
          };
        } else {
          internalSplit = $split;
        }

        return [
          // `String.prototype.split` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.split
          function split(separator, limit) {
            const O = defined(this);
            const splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined
              ? splitter.call(separator, O, limit)
              : internalSplit.call(String(O), separator, limit);
          },
          // `RegExp.prototype[@@split]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
          //
          // NOTE: This cannot be properly polyfilled in engines that don't support
          // the 'y' flag.
          function (regexp, limit) {
            const res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
            if (res.done) return res.value;

            const rx = anObject(regexp);
            const S = String(this);
            const C = speciesConstructor(rx, RegExp);

            const unicodeMatching = rx.unicode;
            const flags = (rx.ignoreCase ? 'i' : '')
                  + (rx.multiline ? 'm' : '')
                  + (rx.unicode ? 'u' : '')
                  + (SUPPORTS_Y ? 'y' : 'g');

            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            const splitter = new C(SUPPORTS_Y ? rx : `^(?:${rx.source})`, flags);
            const lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
            let p = 0;
            let q = 0;
            const A = [];
            while (q < S.length) {
              splitter.lastIndex = SUPPORTS_Y ? q : 0;
              const z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
              var e;
              if (
                z === null
          || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
              ) {
                q = advanceStringIndex(S, q, unicodeMatching);
              } else {
                A.push(S.slice(p, q));
                if (A.length === lim) return A;
                for (let i = 1; i <= z.length - 1; i++) {
                  A.push(z[i]);
                  if (A.length === lim) return A;
                }
                q = p = e;
              }
            }
            A.push(S.slice(p));
            return A;
          },
        ];
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.regexp.to-string.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./es6.regexp.flags */ './node_modules/core-js/modules/es6.regexp.flags.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const $flags = __webpack_require__(/*! ./_flags */ './node_modules/core-js/modules/_flags.js');
      const DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
      const TO_STRING = 'toString';
      const $toString = /./[TO_STRING];

      const define = function (fn) {
        __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js')(RegExp.prototype, TO_STRING, fn, true);
      };

      // 21.2.5.14 RegExp.prototype.toString()
      if (__webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => $toString.call({ source: 'a', flags: 'b' }) != '/a/b')) {
        define(function toString() {
          const R = anObject(this);
          return '/'.concat(
            R.source,
            '/',
            'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined,
          );
        });
        // FF44- RegExp#toString has a wrong name
      } else if ($toString.name != TO_STRING) {
        define(function toString() {
          return $toString.call(this);
        });
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.set.js':
    /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \************************************************ */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const strong = __webpack_require__(/*! ./_collection-strong */ './node_modules/core-js/modules/_collection-strong.js');
      const validate = __webpack_require__(/*! ./_validate-collection */ './node_modules/core-js/modules/_validate-collection.js');
      const SET = 'Set';

      // 23.2 Set Objects
      module.exports = __webpack_require__(/*! ./_collection */ './node_modules/core-js/modules/_collection.js')(SET, (get) => function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); }, {
        // 23.2.3.1 Set.prototype.add(value)
        add: function add(value) {
          return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
        },
      }, strong);
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.anchor.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.2 String.prototype.anchor(name)
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('anchor', (createHTML) => function anchor(name) {
        return createHTML(this, 'a', 'name', name);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.big.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.3 String.prototype.big()
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('big', (createHTML) => function big() {
        return createHTML(this, 'big', '', '');
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.blink.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.4 String.prototype.blink()
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('blink', (createHTML) => function blink() {
        return createHTML(this, 'blink', '', '');
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.bold.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.5 String.prototype.bold()
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('bold', (createHTML) => function bold() {
        return createHTML(this, 'b', '', '');
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.code-point-at.js':
    /*! ******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \***************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $at = __webpack_require__(/*! ./_string-at */ './node_modules/core-js/modules/_string-at.js')(false);
      $export($export.P, 'String', {
        // 21.1.3.3 String.prototype.codePointAt(pos)
        codePointAt: function codePointAt(pos) {
          return $at(this, pos);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.ends-with.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const context = __webpack_require__(/*! ./_string-context */ './node_modules/core-js/modules/_string-context.js');
      const ENDS_WITH = 'endsWith';
      const $endsWith = ''[ENDS_WITH];

      $export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ './node_modules/core-js/modules/_fails-is-regexp.js')(ENDS_WITH), 'String', {
        endsWith: function endsWith(searchString /* , endPosition = @length */) {
          const that = context(this, searchString, ENDS_WITH);
          const endPosition = arguments.length > 1 ? arguments[1] : undefined;
          const len = toLength(that.length);
          const end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
          const search = String(searchString);
          return $endsWith
            ? $endsWith.call(that, search, end)
            : that.slice(end - search.length, end) === search;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.fixed.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.6 String.prototype.fixed()
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('fixed', (createHTML) => function fixed() {
        return createHTML(this, 'tt', '', '');
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.fontcolor.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.7 String.prototype.fontcolor(color)
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('fontcolor', (createHTML) => function fontcolor(color) {
        return createHTML(this, 'font', 'color', color);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.fontsize.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \************************************************************ */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.8 String.prototype.fontsize(size)
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('fontsize', (createHTML) => function fontsize(size) {
        return createHTML(this, 'font', 'size', size);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.from-code-point.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \******************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js');
      const { fromCharCode } = String;
      const $fromCodePoint = String.fromCodePoint;

      // length should be 1, old FF problem
      $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
        // 21.1.2.2 String.fromCodePoint(...codePoints)
        fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
          const res = [];
          const aLen = arguments.length;
          let i = 0;
          let code;
          while (aLen > i) {
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(`${code} is not a valid code point`);
            res.push(code < 0x10000
              ? fromCharCode(code)
              : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
          } return res.join('');
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.includes.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \************************************************************ */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 21.1.3.7 String.prototype.includes(searchString, position = 0)

      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const context = __webpack_require__(/*! ./_string-context */ './node_modules/core-js/modules/_string-context.js');
      const INCLUDES = 'includes';

      $export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ './node_modules/core-js/modules/_fails-is-regexp.js')(INCLUDES), 'String', {
        includes: function includes(searchString /* , position = 0 */) {
          return !!~context(this, searchString, INCLUDES)
            .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.italics.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.9 String.prototype.italics()
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('italics', (createHTML) => function italics() {
        return createHTML(this, 'i', '', '');
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.iterator.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \************************************************************ */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $at = __webpack_require__(/*! ./_string-at */ './node_modules/core-js/modules/_string-at.js')(true);

      // 21.1.3.27 String.prototype[@@iterator]()
      __webpack_require__(/*! ./_iter-define */ './node_modules/core-js/modules/_iter-define.js')(String, 'String', function (iterated) {
        this._t = String(iterated); // target
        this._i = 0; // next index
        // 21.1.5.2.1 %StringIteratorPrototype%.next()
      }, function () {
        const O = this._t;
        const index = this._i;
        let point;
        if (index >= O.length) return { value: undefined, done: true };
        point = $at(O, index);
        this._i += point.length;
        return { value: point, done: false };
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.link.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.10 String.prototype.link(url)
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('link', (createHTML) => function link(url) {
        return createHTML(this, 'a', 'href', url);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.raw.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');

      $export($export.S, 'String', {
        // 21.1.2.4 String.raw(callSite, ...substitutions)
        raw: function raw(callSite) {
          const tpl = toIObject(callSite.raw);
          const len = toLength(tpl.length);
          const aLen = arguments.length;
          const res = [];
          let i = 0;
          while (len > i) {
            res.push(String(tpl[i++]));
            if (i < aLen) res.push(String(arguments[i]));
          } return res.join('');
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.repeat.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');

      $export($export.P, 'String', {
        // 21.1.3.13 String.prototype.repeat(count)
        repeat: __webpack_require__(/*! ./_string-repeat */ './node_modules/core-js/modules/_string-repeat.js'),
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.small.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.11 String.prototype.small()
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('small', (createHTML) => function small() {
        return createHTML(this, 'small', '', '');
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.starts-with.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \*************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 21.1.3.18 String.prototype.startsWith(searchString [, position ])

      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const context = __webpack_require__(/*! ./_string-context */ './node_modules/core-js/modules/_string-context.js');
      const STARTS_WITH = 'startsWith';
      const $startsWith = ''[STARTS_WITH];

      $export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ './node_modules/core-js/modules/_fails-is-regexp.js')(STARTS_WITH), 'String', {
        startsWith: function startsWith(searchString /* , position = 0 */) {
          const that = context(this, searchString, STARTS_WITH);
          const index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
          const search = String(searchString);
          return $startsWith
            ? $startsWith.call(that, search, index)
            : that.slice(index, index + search.length) === search;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.strike.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.12 String.prototype.strike()
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('strike', (createHTML) => function strike() {
        return createHTML(this, 'strike', '', '');
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.sub.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.13 String.prototype.sub()
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('sub', (createHTML) => function sub() {
        return createHTML(this, 'sub', '', '');
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.sup.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \******************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // B.2.3.14 String.prototype.sup()
      __webpack_require__(/*! ./_string-html */ './node_modules/core-js/modules/_string-html.js')('sup', (createHTML) => function sup() {
        return createHTML(this, 'sup', '', '');
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.string.trim.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \******************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // 21.1.3.25 String.prototype.trim()
      __webpack_require__(/*! ./_string-trim */ './node_modules/core-js/modules/_string-trim.js')('trim', ($trim) => function trim() {
        return $trim(this, 3);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.symbol.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \*************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // ECMAScript 6 symbols shim
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const has = __webpack_require__(/*! ./_has */ './node_modules/core-js/modules/_has.js');
      const DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
      const META = (__webpack_require__(/*! ./_meta */ './node_modules/core-js/modules/_meta.js').KEY);
      const $fails = __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js');
      const shared = __webpack_require__(/*! ./_shared */ './node_modules/core-js/modules/_shared.js');
      const setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js');
      const uid = __webpack_require__(/*! ./_uid */ './node_modules/core-js/modules/_uid.js');
      const wks = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js');
      const wksExt = __webpack_require__(/*! ./_wks-ext */ './node_modules/core-js/modules/_wks-ext.js');
      const wksDefine = __webpack_require__(/*! ./_wks-define */ './node_modules/core-js/modules/_wks-define.js');
      const enumKeys = __webpack_require__(/*! ./_enum-keys */ './node_modules/core-js/modules/_enum-keys.js');
      const isArray = __webpack_require__(/*! ./_is-array */ './node_modules/core-js/modules/_is-array.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const toPrimitive = __webpack_require__(/*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js');
      const createDesc = __webpack_require__(/*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js');
      const _create = __webpack_require__(/*! ./_object-create */ './node_modules/core-js/modules/_object-create.js');
      const gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ './node_modules/core-js/modules/_object-gopn-ext.js');
      const $GOPD = __webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js');
      const $GOPS = __webpack_require__(/*! ./_object-gops */ './node_modules/core-js/modules/_object-gops.js');
      const $DP = __webpack_require__(/*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js');
      const $keys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');
      const gOPD = $GOPD.f;
      const dP = $DP.f;
      const gOPN = gOPNExt.f;
      let $Symbol = global.Symbol;
      const $JSON = global.JSON;
      const _stringify = $JSON && $JSON.stringify;
      const PROTOTYPE = 'prototype';
      const HIDDEN = wks('_hidden');
      const TO_PRIMITIVE = wks('toPrimitive');
      const isEnum = {}.propertyIsEnumerable;
      const SymbolRegistry = shared('symbol-registry');
      const AllSymbols = shared('symbols');
      const OPSymbols = shared('op-symbols');
      const ObjectProto = Object[PROTOTYPE];
      const USE_NATIVE = typeof $Symbol === 'function' && !!$GOPS.f;
      const { QObject } = global;
      // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
      let setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

      // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
      const setSymbolDesc = DESCRIPTORS && $fails(() => _create(dP({}, 'a', {
        get() { return dP(this, 'a', { value: 7 }).a; },
      })).a != 7) ? function (it, key, D) {
          const protoDesc = gOPD(ObjectProto, key);
          if (protoDesc) delete ObjectProto[key];
          dP(it, key, D);
          if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;

      const wrap = function (tag) {
        const sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
        sym._k = tag;
        return sym;
      };

      const isSymbol = USE_NATIVE && typeof $Symbol.iterator === 'symbol' ? function (it) {
        return typeof it === 'symbol';
      } : function (it) {
        return it instanceof $Symbol;
      };

      const $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, { enumerable: createDesc(0, false) });
          } return setSymbolDesc(it, key, D);
        } return dP(it, key, D);
      };
      const $defineProperties = function defineProperties(it, P) {
        anObject(it);
        const keys = enumKeys(P = toIObject(P));
        let i = 0;
        const l = keys.length;
        let key;
        while (l > i) $defineProperty(it, key = keys[i++], P[key]);
        return it;
      };
      const $create = function create(it, P) {
        return P === undefined ? _create(it) : $defineProperties(_create(it), P);
      };
      const $propertyIsEnumerable = function propertyIsEnumerable(key) {
        const E = isEnum.call(this, key = toPrimitive(key, true));
        if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
      };
      const $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
        const D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
        return D;
      };
      const $getOwnPropertyNames = function getOwnPropertyNames(it) {
        const names = gOPN(toIObject(it));
        const result = [];
        let i = 0;
        let key;
        while (names.length > i) {
          if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
        } return result;
      };
      const $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        const IS_OP = it === ObjectProto;
        const names = gOPN(IS_OP ? OPSymbols : toIObject(it));
        const result = [];
        let i = 0;
        let key;
        while (names.length > i) {
          if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
        } return result;
      };

      // 19.4.1.1 Symbol([description])
      if (!USE_NATIVE) {
        $Symbol = function Symbol() {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
          const tag = uid(arguments.length > 0 ? arguments[0] : undefined);
          const $set = function (value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          };
          if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
          return wrap(tag);
        };
        redefine($Symbol[PROTOTYPE], 'toString', function toString() {
          return this._k;
        });

        $GOPD.f = $getOwnPropertyDescriptor;
        $DP.f = $defineProperty;
        (__webpack_require__(/*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js').f) = gOPNExt.f = $getOwnPropertyNames;
        (__webpack_require__(/*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js').f) = $propertyIsEnumerable;
        $GOPS.f = $getOwnPropertySymbols;

        if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ './node_modules/core-js/modules/_library.js')) {
          redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
        }

        wksExt.f = function (name) {
          return wrap(wks(name));
        };
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

      for (let es6Symbols = (
        // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
          'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
        ).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

      for (let wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

      $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
        // 19.4.2.1 Symbol.for(key)
        for(key) {
          return has(SymbolRegistry, key += '')
            ? SymbolRegistry[key]
            : SymbolRegistry[key] = $Symbol(key);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(`${sym} is not a symbol!`);
          for (const key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
        },
        useSetter() { setter = true; },
        useSimple() { setter = false; },
      });

      $export($export.S + $export.F * !USE_NATIVE, 'Object', {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols,
      });

      // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
      // https://bugs.chromium.org/p/v8/issues/detail?id=3443
      const FAILS_ON_PRIMITIVES = $fails(() => { $GOPS.f(1); });

      $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
          return $GOPS.f(toObject(it));
        },
      });

      // 24.3.2 JSON.stringify(value [, replacer [, space]])
      $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(() => {
        const S = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        // WebKit converts symbol values to JSON as null
        // V8 throws on boxed symbols
        return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
      })), 'JSON', {
        stringify: function stringify(it) {
          const args = [it];
          let i = 1;
          let replacer; let
            $replacer;
          while (arguments.length > i) args.push(arguments[i++]);
          $replacer = replacer = args[1];
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
          if (!isArray(replacer)) {
            replacer = function (key, value) {
              if (typeof $replacer === 'function') value = $replacer.call(this, key, value);
              if (!isSymbol(value)) return value;
            };
          }
          args[1] = replacer;
          return _stringify.apply($JSON, args);
        },
      });

      // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
      $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
      // 19.4.3.5 Symbol.prototype[@@toStringTag]
      setToStringTag($Symbol, 'Symbol');
      // 20.2.1.9 Math[@@toStringTag]
      setToStringTag(Math, 'Math', true);
      // 24.3.3 JSON[@@toStringTag]
      setToStringTag(global.JSON, 'JSON', true);
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.array-buffer.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \*************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $typed = __webpack_require__(/*! ./_typed */ './node_modules/core-js/modules/_typed.js');
      const buffer = __webpack_require__(/*! ./_typed-buffer */ './node_modules/core-js/modules/_typed-buffer.js');
      const anObject = __webpack_require__(/*! ./_an-object */ './node_modules/core-js/modules/_an-object.js');
      const toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const { ArrayBuffer } = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const speciesConstructor = __webpack_require__(/*! ./_species-constructor */ './node_modules/core-js/modules/_species-constructor.js');
      const $ArrayBuffer = buffer.ArrayBuffer;
      const $DataView = buffer.DataView;
      const $isView = $typed.ABV && ArrayBuffer.isView;
      const $slice = $ArrayBuffer.prototype.slice;
      const { VIEW } = $typed;
      const ARRAY_BUFFER = 'ArrayBuffer';

      $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

      $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
        // 24.1.3.1 ArrayBuffer.isView(arg)
        isView: function isView(it) {
          return $isView && $isView(it) || isObject(it) && VIEW in it;
        },
      });

      $export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ './node_modules/core-js/modules/_fails.js')(() => !new $ArrayBuffer(2).slice(1, undefined).byteLength), ARRAY_BUFFER, {
        // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
        slice: function slice(start, end) {
          if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
          const len = anObject(this).byteLength;
          let first = toAbsoluteIndex(start, len);
          const fin = toAbsoluteIndex(end === undefined ? len : end, len);
          const result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
          const viewS = new $DataView(this);
          const viewT = new $DataView(result);
          let index = 0;
          while (first < fin) {
            viewT.setUint8(index++, viewS.getUint8(first++));
          } return result;
        },
      });

      __webpack_require__(/*! ./_set-species */ './node_modules/core-js/modules/_set-species.js')(ARRAY_BUFFER);
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.data-view.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \************************************************************ */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      $export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ './node_modules/core-js/modules/_typed.js').ABV), {
        DataView: (__webpack_require__(/*! ./_typed-buffer */ './node_modules/core-js/modules/_typed-buffer.js').DataView),
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.float32-array.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \**************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_typed-array */ './node_modules/core-js/modules/_typed-array.js')('Float32', 4, (init) => function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.float64-array.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \**************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_typed-array */ './node_modules/core-js/modules/_typed-array.js')('Float64', 8, (init) => function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.int16-array.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_typed-array */ './node_modules/core-js/modules/_typed-array.js')('Int16', 2, (init) => function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.int32-array.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_typed-array */ './node_modules/core-js/modules/_typed-array.js')('Int32', 4, (init) => function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.int8-array.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_typed-array */ './node_modules/core-js/modules/_typed-array.js')('Int8', 1, (init) => function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.uint16-array.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \*************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_typed-array */ './node_modules/core-js/modules/_typed-array.js')('Uint16', 2, (init) => function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.uint32-array.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \*************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_typed-array */ './node_modules/core-js/modules/_typed-array.js')('Uint32', 4, (init) => function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.uint8-array.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_typed-array */ './node_modules/core-js/modules/_typed-array.js')('Uint8', 1, (init) => function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.typed.uint8-clamped-array.js':
    /*! ***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \********************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_typed-array */ './node_modules/core-js/modules/_typed-array.js')('Uint8', 1, (init) => function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
      }, true);
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.weak-map.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \***************************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const each = __webpack_require__(/*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js')(0);
      const redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
      const meta = __webpack_require__(/*! ./_meta */ './node_modules/core-js/modules/_meta.js');
      const assign = __webpack_require__(/*! ./_object-assign */ './node_modules/core-js/modules/_object-assign.js');
      const weak = __webpack_require__(/*! ./_collection-weak */ './node_modules/core-js/modules/_collection-weak.js');
      const isObject = __webpack_require__(/*! ./_is-object */ './node_modules/core-js/modules/_is-object.js');
      const validate = __webpack_require__(/*! ./_validate-collection */ './node_modules/core-js/modules/_validate-collection.js');
      const NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ './node_modules/core-js/modules/_validate-collection.js');
      const IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
      const WEAK_MAP = 'WeakMap';
      const { getWeak } = meta;
      const { isExtensible } = Object;
      const uncaughtFrozenStore = weak.ufstore;
      let InternalMap;

      const wrapper = function (get) {
        return function WeakMap() {
          return get(this, arguments.length > 0 ? arguments[0] : undefined);
        };
      };

      const methods = {
        // 23.3.3.3 WeakMap.prototype.get(key)
        get: function get(key) {
          if (isObject(key)) {
            const data = getWeak(key);
            if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
            return data ? data[this._i] : undefined;
          }
        },
        // 23.3.3.5 WeakMap.prototype.set(key, value)
        set: function set(key, value) {
          return weak.def(validate(this, WEAK_MAP), key, value);
        },
      };

      // 23.3 WeakMap Objects
      const $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ './node_modules/core-js/modules/_collection.js')(WEAK_MAP, wrapper, methods, weak, true, true);

      // IE11 WeakMap frozen keys fix
      if (NATIVE_WEAK_MAP && IS_IE11) {
        InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
        assign(InternalMap.prototype, methods);
        meta.NEED = true;
        each(['delete', 'has', 'get', 'set'], (key) => {
          const proto = $WeakMap.prototype;
          const method = proto[key];
          redefine(proto, key, function (a, b) {
            // store frozen objects on internal weakmap shim
            if (isObject(a) && !isExtensible(a)) {
              if (!this._f) this._f = new InternalMap();
              const result = this._f[key](a, b);
              return key == 'set' ? this : result;
              // store all the rest on native weakmap
            } return method.call(this, a, b);
          });
        });
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es6.weak-set.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \***************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const weak = __webpack_require__(/*! ./_collection-weak */ './node_modules/core-js/modules/_collection-weak.js');
      const validate = __webpack_require__(/*! ./_validate-collection */ './node_modules/core-js/modules/_validate-collection.js');
      const WEAK_SET = 'WeakSet';

      // 23.4 WeakSet Objects
      __webpack_require__(/*! ./_collection */ './node_modules/core-js/modules/_collection.js')(WEAK_SET, (get) => function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); }, {
        // 23.4.3.1 WeakSet.prototype.add(value)
        add: function add(value) {
          return weak.def(validate(this, WEAK_SET), value, true);
        },
      }, weak, false, true);
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.array.flat-map.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ './node_modules/core-js/modules/_flatten-into-array.js');
      const toObject = __webpack_require__(/*! ./_to-object */ './node_modules/core-js/modules/_to-object.js');
      const toLength = __webpack_require__(/*! ./_to-length */ './node_modules/core-js/modules/_to-length.js');
      const aFunction = __webpack_require__(/*! ./_a-function */ './node_modules/core-js/modules/_a-function.js');
      const arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ './node_modules/core-js/modules/_array-species-create.js');

      $export($export.P, 'Array', {
        flatMap: function flatMap(callbackfn /* , thisArg */) {
          const O = toObject(this);
          let sourceLen; let
            A;
          aFunction(callbackfn);
          sourceLen = toLength(O.length);
          A = arraySpeciesCreate(O, 0);
          flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
          return A;
        },
      });

      __webpack_require__(/*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js')('flatMap');
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.array.includes.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/tc39/Array.prototype.includes
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $includes = __webpack_require__(/*! ./_array-includes */ './node_modules/core-js/modules/_array-includes.js')(true);

      $export($export.P, 'Array', {
        includes: function includes(el /* , fromIndex = 0 */) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        },
      });

      __webpack_require__(/*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js')('includes');
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.object.entries.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/tc39/proposal-object-values-entries
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $entries = __webpack_require__(/*! ./_object-to-array */ './node_modules/core-js/modules/_object-to-array.js')(true);

      $export($export.S, 'Object', {
        entries: function entries(it) {
          return $entries(it);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.object.get-own-property-descriptors.js':
    /*! *********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \******************************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/tc39/proposal-object-getownpropertydescriptors
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const ownKeys = __webpack_require__(/*! ./_own-keys */ './node_modules/core-js/modules/_own-keys.js');
      const toIObject = __webpack_require__(/*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js');
      const gOPD = __webpack_require__(/*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js');
      const createProperty = __webpack_require__(/*! ./_create-property */ './node_modules/core-js/modules/_create-property.js');

      $export($export.S, 'Object', {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
          const O = toIObject(object);
          const getDesc = gOPD.f;
          const keys = ownKeys(O);
          const result = {};
          let i = 0;
          let key; let
            desc;
          while (keys.length > i) {
            desc = getDesc(O, key = keys[i++]);
            if (desc !== undefined) createProperty(result, key, desc);
          }
          return result;
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.object.values.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/tc39/proposal-object-values-entries
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $values = __webpack_require__(/*! ./_object-to-array */ './node_modules/core-js/modules/_object-to-array.js')(false);

      $export($export.S, 'Object', {
        values: function values(it) {
          return $values(it);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.promise.finally.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \************************************************************ */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/tc39/proposal-promise-finally

      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const core = __webpack_require__(/*! ./_core */ './node_modules/core-js/modules/_core.js');
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const speciesConstructor = __webpack_require__(/*! ./_species-constructor */ './node_modules/core-js/modules/_species-constructor.js');
      const promiseResolve = __webpack_require__(/*! ./_promise-resolve */ './node_modules/core-js/modules/_promise-resolve.js');

      $export($export.P + $export.R, 'Promise', {
        finally(onFinally) {
          const C = speciesConstructor(this, core.Promise || global.Promise);
          const isFunction = typeof onFinally === 'function';
          return this.then(
            isFunction ? (x) => promiseResolve(C, onFinally()).then(() => x) : onFinally,
            isFunction ? (e) => promiseResolve(C, onFinally()).then(() => { throw e; }) : onFinally,
          );
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.string.pad-end.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \*********************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/tc39/proposal-string-pad-start-end
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $pad = __webpack_require__(/*! ./_string-pad */ './node_modules/core-js/modules/_string-pad.js');
      const userAgent = __webpack_require__(/*! ./_user-agent */ './node_modules/core-js/modules/_user-agent.js');

      // https://github.com/zloirock/core-js/issues/280
      const WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

      $export($export.P + $export.F * WEBKIT_BUG, 'String', {
        padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
          return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.string.pad-start.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/tc39/proposal-string-pad-start-end
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $pad = __webpack_require__(/*! ./_string-pad */ './node_modules/core-js/modules/_string-pad.js');
      const userAgent = __webpack_require__(/*! ./_user-agent */ './node_modules/core-js/modules/_user-agent.js');

      // https://github.com/zloirock/core-js/issues/280
      const WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

      $export($export.P + $export.F * WEBKIT_BUG, 'String', {
        padStart: function padStart(maxLength /* , fillString = ' ' */) {
          return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
        },
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.string.trim-left.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \************************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
      __webpack_require__(/*! ./_string-trim */ './node_modules/core-js/modules/_string-trim.js')('trimLeft', ($trim) => function trimLeft() {
        return $trim(this, 1);
      }, 'trimStart');
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.string.trim-right.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
      __webpack_require__(/*! ./_string-trim */ './node_modules/core-js/modules/_string-trim.js')('trimRight', ($trim) => function trimRight() {
        return $trim(this, 2);
      }, 'trimEnd');
      /***/ }),

    /***/ './node_modules/core-js/modules/es7.symbol.async-iterator.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \****************************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ./_wks-define */ './node_modules/core-js/modules/_wks-define.js')('asyncIterator');
      /***/ }),

    /***/ './node_modules/core-js/modules/web.dom.iterable.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \********************************************************* */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $iterators = __webpack_require__(/*! ./es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js');
      const getKeys = __webpack_require__(/*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js');
      const redefine = __webpack_require__(/*! ./_redefine */ './node_modules/core-js/modules/_redefine.js');
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const hide = __webpack_require__(/*! ./_hide */ './node_modules/core-js/modules/_hide.js');
      const Iterators = __webpack_require__(/*! ./_iterators */ './node_modules/core-js/modules/_iterators.js');
      const wks = __webpack_require__(/*! ./_wks */ './node_modules/core-js/modules/_wks.js');
      const ITERATOR = wks('iterator');
      const TO_STRING_TAG = wks('toStringTag');
      const ArrayValues = Iterators.Array;

      const DOMIterables = {
        CSSRuleList: true, // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true, // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true, // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false,
      };

      for (let collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
        const NAME = collections[i];
        const explicit = DOMIterables[NAME];
        const Collection = global[NAME];
        const proto = Collection && Collection.prototype;
        var key;
        if (proto) {
          if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
          if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = ArrayValues;
          if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
        }
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/web.immediate.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \****************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const $task = __webpack_require__(/*! ./_task */ './node_modules/core-js/modules/_task.js');
      $export($export.G + $export.B, {
        setImmediate: $task.set,
        clearImmediate: $task.clear,
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/web.timers.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \*************************************************** */
    /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      // ie9- setTimeout & setInterval additional parameters fix
      const global = __webpack_require__(/*! ./_global */ './node_modules/core-js/modules/_global.js');
      const $export = __webpack_require__(/*! ./_export */ './node_modules/core-js/modules/_export.js');
      const userAgent = __webpack_require__(/*! ./_user-agent */ './node_modules/core-js/modules/_user-agent.js');
      const { slice } = [];
      const MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
      const wrap = function (set) {
        return function (fn, time /* , ...args */) {
          const boundArgs = arguments.length > 2;
          const args = boundArgs ? slice.call(arguments, 2) : false;
          return set(boundArgs ? function () {
            // eslint-disable-next-line no-new-func
            (typeof fn === 'function' ? fn : Function(fn)).apply(this, args);
          } : fn, time);
        };
      };
      $export($export.G + $export.B + $export.F * MSIE, {
        setTimeout: wrap(global.setTimeout),
        setInterval: wrap(global.setInterval),
      });
      /***/ }),

    /***/ './node_modules/core-js/web/index.js':
    /*! *******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \****************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      __webpack_require__(/*! ../modules/web.timers */ './node_modules/core-js/modules/web.timers.js');
      __webpack_require__(/*! ../modules/web.immediate */ './node_modules/core-js/modules/web.immediate.js');
      __webpack_require__(/*! ../modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js');
      module.exports = __webpack_require__(/*! ../modules/_core */ './node_modules/core-js/modules/_core.js');
      /***/ }),

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss':
    /*! ***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \************************************************************************************************************************************************************************** */
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js');
      /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js');
      /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ const _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js');
      /* harmony import */ const _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
      // Imports

      const ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Lato-Regular.woff2 */ './src/assets/fonts/Lato-Regular.woff2'), __webpack_require__.b);
      const ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Lato-Regular.woff */ './src/assets/fonts/Lato-Regular.woff'), __webpack_require__.b);
      const ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Lato-Regular.ttf */ './src/assets/fonts/Lato-Regular.ttf'), __webpack_require__.b);
      const ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/circuit-board.svg */ './src/assets/img/circuit-board.svg'), __webpack_require__.b);
      const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
      const ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
      const ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
      const ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
      const ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
      // Module
      ___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";\n@font-face {\n  font-family: "Lato", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local("Lato"), url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("ttf");\n}\nbody {\n  margin: 0;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) repeat;\n  font-family: "Lato", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 700px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 20px;\n  border: 1px solid #222222;\n}\n.wrapper > * + * {\n  margin-top: 20px;\n}\n\n.h1 {\n  font-size: 30px;\n  color: #6A5ACD;\n}\n\n.textarea {\n  width: 90%;\n  font-size: 24px;\n}\n\n.paragraph + .paragraph {\n  margin-top: 0;\n}\n\n.keyboard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 5px;\n  border: 3px solid #222222;\n  border-radius: 5px;\n  background-color: #888888;\n}\n.keyboard > * + * {\n  margin-top: 8px;\n}\n.keyboard__row {\n  display: flex;\n  width: 100%;\n  height: 40px;\n}\n.keyboard__row > * + * {\n  margin-left: 6px;\n}\n\n.key {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  background: #444444;\n  border-radius: 3px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.5s linear;\n}\n.key:hover {\n  background: #755D9A;\n  transition: all 0.5s linear;\n}\n.keyboard__row .key_active {\n  border-radius: 40px;\n  background: #6A5ACD;\n  transition: all 0.5s linear;\n}\n/* Styles for special buttons */\n.AltLeft, .AltRight, .ArrowUp, .ArrowLeft, .ArrowDown, .ArrowRight, .Backspace, .CapsLock, .ControlLeft, .ControlRight, .Delete, .Enter, .ShiftLeft, .ShiftRight, .Tab, .MetaLeft {\n  background-color: #222222;\n}\n\n.Backspace, .CapsLock, .ShiftLeft {\n  width: 100px;\n}\n\n.Tab {\n  width: 50px;\n}\n\n.Delete {\n  width: 44px;\n}\n\n.Enter, .ShiftRight {\n  width: 86px;\n}\n\n.Space {\n  width: 330px;\n}`, '', {
        version: 3, sources: ['webpack://./src/index.scss', 'webpack://./src/styles/base/_typography.scss', 'webpack://./src/styles/base/_common-styles.scss', 'webpack://./src/styles/abstracts/_variables.scss', 'webpack://./src/styles/components/_keyboard.scss'], names: [], mappings: 'AAAA,gBAAgB;ACAhB;EACE,+BAAA;EACA,gBAAA;EACA,kBAAA;EACA,mDAAA;EACA,0LAAA;ADEF;AEPA;EACE,SAAA;EACA,0DCFgB;EDGhB,+BAAA;AFSF;;AENA;EACE,aAAA;AFSF;;AENA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,sBChBc;EDiBd,mBAAA;EACA,yBAAA;AFQF;AENE;EACE,gBAAA;AFQJ;;AEJA;EACE,eAAA;EACA,cCzBY;AHgCd;;AEJA;EACE,UAAA;EACA,eAAA;AFOF;;AEJA;EACE,aAAA;AFOF;;AI7CA;EAEE,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,yBDJ0B;AHkD5B;AI5CE;EACE,eAAA;AJ8CJ;AI3CE;EAEE,aAAA;EAEA,WAAA;EACA,YAAA;AJ2CJ;AIzCI;EACE,gBAAA;AJ2CN;;AIrCA;EAEE,WAAA;EACA,YAAA;EAEA,iBAAA;EACA,kBAAA;EAEA,WD9Be;EC+Bf,mBD9BqB;EC+BrB,kBAAA;EAEA,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EAEA,2BAAA;AJmCF;AIjCE;EACE,mBDtCyB;ECuCzB,2BAAA;AJmCJ;AI/BE;EACE,mBAAA;EACA,mBD5C0B;EC6C1B,2BAAA;AJiCJ;AIdA,+BAAA;AAEA;EACE,yBDvEsB;AHsFxB;;AIZA;EACE,YAAA;AJeF;;AIZA;EACE,WAAA;AJeF;;AIZA;EACE,WAAA;AJeF;;AIZA;EACE,WAAA;AJeF;;AIZA;EACE,YAAA;AJeF', sourcesContent: ['@charset "UTF-8";\n@font-face {\n  font-family: "Lato", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local("Lato"), url("./assets/fonts/Lato-Regular.woff2") format("woff2"), url("./assets/fonts/Lato-Regular.woff") format("woff"), url("./assets/fonts/Lato-Regular.ttf") format("ttf");\n}\nbody {\n  margin: 0;\n  background: url("./assets/img/circuit-board.svg") repeat;\n  font-family: "Lato", sans-serif;\n}\n\n.hidden {\n  display: none;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 700px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 20px;\n  border: 1px solid #222222;\n}\n.wrapper > * + * {\n  margin-top: 20px;\n}\n\n.h1 {\n  font-size: 30px;\n  color: #6A5ACD;\n}\n\n.textarea {\n  width: 90%;\n  font-size: 24px;\n}\n\n.paragraph + .paragraph {\n  margin-top: 0;\n}\n\n.keyboard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 5px;\n  border: 3px solid #222222;\n  border-radius: 5px;\n  background-color: #888888;\n}\n.keyboard > * + * {\n  margin-top: 8px;\n}\n.keyboard__row {\n  display: flex;\n  width: 100%;\n  height: 40px;\n}\n.keyboard__row > * + * {\n  margin-left: 6px;\n}\n\n.key {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  background: #444444;\n  border-radius: 3px;\n  cursor: pointer;\n  user-select: none;\n  transition: all 0.5s linear;\n}\n.key:hover {\n  background: #755D9A;\n  transition: all 0.5s linear;\n}\n.keyboard__row .key_active {\n  border-radius: 40px;\n  background: #6A5ACD;\n  transition: all 0.5s linear;\n}\n/* Styles for special buttons */\n.AltLeft, .AltRight, .ArrowUp, .ArrowLeft, .ArrowDown, .ArrowRight, .Backspace, .CapsLock, .ControlLeft, .ControlRight, .Delete, .Enter, .ShiftLeft, .ShiftRight, .Tab, .MetaLeft {\n  background-color: #222222;\n}\n\n.Backspace, .CapsLock, .ShiftLeft {\n  width: 100px;\n}\n\n.Tab {\n  width: 50px;\n}\n\n.Delete {\n  width: 44px;\n}\n\n.Enter, .ShiftRight {\n  width: 86px;\n}\n\n.Space {\n  width: 330px;\n}', "@font-face {\n  font-family: 'Lato', sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  /* Браузер сначала попробует найти шрифт локально */\n  src: local(\"Lato\"),\n       /* Если не получилось, загрузит woff2 */\n  url(\"./assets/fonts/Lato-Regular.woff2\") format(\"woff2\"),\n       /* Если браузер не поддерживает woff2, загрузит woff */\n  url(\"./assets/fonts/Lato-Regular.woff\") format(\"woff\"),\n  url(\"./assets/fonts/Lato-Regular.ttf\") format(\"ttf\");\n}", "body {\n  margin:0;\n  background: $body-background;\n  font-family: 'Lato', sans-serif;\n}\n\n.hidden {\n  display:none;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 700px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: $wrapper-color;\n  border-radius: 20px;\n  border: 1px solid $keyboard-border-color;\n\n  & > * + * {\n    margin-top: 20px;\n  }\n}\n\n.h1 {\n  font-size: 30px;\n  color: $title-color;\n}\n\n.textarea {\n  width:90%;\n  font-size: 24px;\n}\n\n.paragraph + .paragraph {\n  margin-top: 0;\n}", "$body-background: url('./assets/img/circuit-board.svg') repeat;\n\n$wrapper-color: #fff;\n\n$title-color: #6A5ACD;\n\n$keyboard-background-color: #888888;\n$keyboard-border-color: #222222;\n$key-text-color: #fff;\n$key-background-color: #444444;\n$key-hover-background-color: #755D9A;\n$key-active-background-color: #6A5ACD;", '.keyboard {\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 100%;\n  padding: 5px;\n  border: 3px solid $keyboard-border-color;\n  border-radius: 5px;\n  background-color: $keyboard-background-color;\n\n  & > * + * {\n    margin-top: 8px;\n  }\n\n  &__row {\n\n    display: flex;\n\n    width: 100%;\n    height: 40px;\n\n    & > * + * {\n      margin-left: 6px;\n    }\n\n  }\n\n}\n.key {\n\n  width: 40px;\n  height: 40px;\n\n  line-height: 40px;\n  text-align: center;\n  \n  color: $key-text-color;\n  background: $key-background-color;\n  border-radius: 3px;\n\n  cursor: pointer;\n  user-select: none;\n\n  transition: all 0.5s linear;\n\n  &:hover {\n    background: $key-hover-background-color;\n    transition: all 0.5s linear;\n  }\n\n  //An extra selector is needed to override special buttons classes, such as a space etc\n  .keyboard__row &_active {\n    border-radius: 40px;\n    background: $key-active-background-color;\n    transition: all 0.5s linear;\n  }\n\n  &__ru {\n  }\n\n  &__en {\n  }\n\n}\n.down {\n}\n.up {\n}\n.caps {\n}\n.shift-caps {\n}\n\n/* Styles for special buttons */\n\n.AltLeft,  .AltRight,  .ArrowUp,  .ArrowLeft,  .ArrowDown,  .ArrowRight,  .Backspace,  .CapsLock,  .ControlLeft,  .ControlRight,  .Delete,  .Enter,  .ShiftLeft,  .ShiftRight,  .Tab,  .MetaLeft {\n  background-color: $keyboard-border-color;\n}\n\n.Backspace, .CapsLock, .ShiftLeft {\n  width: 100px;\n}\n\n.Tab {\n  width: 50px;\n}\n\n.Delete {\n  width: 44px;\n}\n\n.Enter, .ShiftRight {\n  width: 86px;\n}\n\n.Space {\n  width: 330px;\n}\n'], sourceRoot: '',
      }]);
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/api.js':
    /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
    /***/ ((module) => {
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      module.exports = function (cssWithMappingToString) {
        const list = [];

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map((item) => {
            let content = '';
            const needLayer = typeof item[5] !== 'undefined';
            if (item[4]) {
              content += '@supports ('.concat(item[4], ') {');
            }
            if (item[2]) {
              content += '@media '.concat(item[2], ' {');
            }
            if (needLayer) {
              content += '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {');
            }
            content += cssWithMappingToString(item);
            if (needLayer) {
              content += '}';
            }
            if (item[2]) {
              content += '}';
            }
            if (item[4]) {
              content += '}';
            }
            return content;
          }).join('');
        };

        // import a list of modules into the list
        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === 'string') {
            modules = [[null, modules, undefined]];
          }
          const alreadyImportedModules = {};
          if (dedupe) {
            for (let k = 0; k < this.length; k++) {
              const id = this[k][0];
              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }
          for (let _k = 0; _k < modules.length; _k++) {
            const item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) {
              continue;
            }
            if (typeof layer !== 'undefined') {
              if (typeof item[5] === 'undefined') {
                item[5] = layer;
              } else {
                item[1] = '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {').concat(item[1], '}');
                item[5] = layer;
              }
            }
            if (media) {
              if (!item[2]) {
                item[2] = media;
              } else {
                item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}');
                item[2] = media;
              }
            }
            if (supports) {
              if (!item[4]) {
                item[4] = ''.concat(supports);
              } else {
                item[1] = '@supports ('.concat(item[4], ') {').concat(item[1], '}');
                item[4] = supports;
              }
            }
            list.push(item);
          }
        };
        return list;
      };
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/getUrl.js':
    /*! ********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \******************************************************* */
    /***/ ((module) => {
      module.exports = function (url, options) {
        if (!options) {
          options = {};
        }
        if (!url) {
          return url;
        }
        url = String(url.__esModule ? url.default : url);

        // If url is already wrapped in quotes, remove them
        if (/^['"].*['"]$/.test(url)) {
          url = url.slice(1, -1);
        }
        if (options.hash) {
          url += options.hash;
        }

        // Should url be wrapped?
        // See https://drafts.csswg.org/css-values-3/#urls
        if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
          return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"');
        }
        return url;
      };
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
    /*! ************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************** */
    /***/ ((module) => {
      module.exports = function (item) {
        const content = item[1];
        const cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }
        if (typeof btoa === 'function') {
          const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
          const data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64);
          const sourceMapping = '/*# '.concat(data, ' */');
          return [content].concat([sourceMapping]).join('\n');
        }
        return [content].join('\n');
      };
      /***/ }),

    /***/ './src/index.html':
    /*! ************************!*\
  !*** ./src/index.html ***!
  \*********************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ './node_modules/html-loader/dist/runtime/getUrl.js');
      /* harmony import */ const _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
      // Imports

      const ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/favicon.ico */ './src/assets/img/favicon.ico'), __webpack_require__.b);
      // Module
      const ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
      const code = `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Virtual keyboard</title>\n    <link href="${___HTML_LOADER_REPLACEMENT_0___}" rel="icon" type="image/x-icon">\n</head>\n<body>\n</body> \n</html>`;
      // Exports
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);
      /***/ }),

    /***/ './node_modules/html-loader/dist/runtime/getUrl.js':
    /*! *********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \******************************************************** */
    /***/ ((module) => {
      module.exports = function (url, options) {
        if (!options) {
          // eslint-disable-next-line no-param-reassign
          options = {};
        }

        if (!url) {
          return url;
        } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

        url = String(url.__esModule ? url.default : url);

        if (options.hash) {
          // eslint-disable-next-line no-param-reassign
          url += options.hash;
        }

        if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
          return '"'.concat(url, '"');
        }

        return url;
      };
      /***/ }),

    /***/ './node_modules/regenerator-runtime/runtime.js':
    /*! *****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \**************************************************** */
    /***/ ((module) => {
      /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

      const runtime = (function (exports) {
        const Op = Object.prototype;
        const hasOwn = Op.hasOwnProperty;
        const defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
        let undefined; // More compressible than void 0.
        const $Symbol = typeof Symbol === 'function' ? Symbol : {};
        const iteratorSymbol = $Symbol.iterator || '@@iterator';
        const asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
        const toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
          return obj[key];
        }
        try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({}, '');
        } catch (err) {
          define = function (obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          const protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          const generator = Object.create(protoGenerator.prototype);
          const context = new Context(tryLocsList || []);

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          defineProperty(generator, '_invoke', { value: makeInvokeMethod(innerFn, self, context) });

          return generator;
        }
        exports.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
          try {
            return { type: 'normal', arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: 'throw', arg: err };
          }
        }

        const GenStateSuspendedStart = 'suspendedStart';
        const GenStateSuspendedYield = 'suspendedYield';
        const GenStateExecuting = 'executing';
        const GenStateCompleted = 'completed';

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        const ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}

        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        let IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });

        const getProto = Object.getPrototypeOf;
        const NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype
      && NativeIteratorPrototype !== Op
      && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        const Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = GeneratorFunctionPrototype;
        defineProperty(Gp, 'constructor', { value: GeneratorFunctionPrototype, configurable: true });
        defineProperty(
          GeneratorFunctionPrototype,
          'constructor',
          { value: GeneratorFunction, configurable: true },
        );
        GeneratorFunction.displayName = define(
          GeneratorFunctionPrototype,
          toStringTagSymbol,
          'GeneratorFunction',
        );

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
          ['next', 'throw', 'return'].forEach((method) => {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          const ctor = typeof genFun === 'function' && genFun.constructor;
          return ctor
            ? ctor === GeneratorFunction
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        || (ctor.displayName || ctor.name) === 'GeneratorFunction'
            : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, 'GeneratorFunction');
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        exports.awrap = function (arg) {
          return { __await: arg };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            const record = tryCatch(generator[method], generator, arg);
            if (record.type === 'throw') {
              reject(record.arg);
            } else {
              const result = record.arg;
              const { value } = result;
              if (value
            && typeof value === 'object'
            && hasOwn.call(value, '__await')) {
                return PromiseImpl.resolve(value.__await).then((value) => {
                  invoke('next', value, resolve, reject);
                }, (err) => {
                  invoke('throw', err, resolve, reject);
                });
              }

              return PromiseImpl.resolve(value).then((unwrapped) => {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, (error) =>
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                invoke('throw', error, resolve, reject));
            }
          }

          let previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl((resolve, reject) => {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg,
        ) : callInvokeWithMethodAndArg();
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          defineProperty(this, '_invoke', { value: enqueue });
        }

        defineIteratorMethods(AsyncIterator.prototype);
        define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
          return this;
        });
        exports.AsyncIterator = AsyncIterator;

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;

          const iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList),
            PromiseImpl,
          );

          return exports.isGeneratorFunction(outerFn)
            ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then((result) => (result.done ? result.value : iter.next()));
        };

        function makeInvokeMethod(innerFn, self, context) {
          let state = GenStateSuspendedStart;

          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error('Generator is already running');
            }

            if (state === GenStateCompleted) {
              if (method === 'throw') {
                throw arg;
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              const { delegate } = context;
              if (delegate) {
                const delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === 'next') {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === 'throw') {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === 'return') {
                context.abrupt('return', context.arg);
              }

              state = GenStateExecuting;

              const record = tryCatch(innerFn, self, context);
              if (record.type === 'normal') {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done
                  ? GenStateCompleted
                  : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done,
                };
              } if (record.type === 'throw') {
                state = GenStateCompleted;
                // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.
                context.method = 'throw';
                context.arg = record.arg;
              }
            }
          };
        }

        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
          const methodName = context.method;
          const method = delegate.iterator[methodName];
          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;

            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === 'throw' && delegate.iterator.return) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = 'return';
              context.arg = undefined;
              maybeInvokeDelegate(delegate, context);

              if (context.method === 'throw') {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }
            if (methodName !== 'return') {
              context.method = 'throw';
              context.arg = new TypeError(
                `The iterator does not provide a '${methodName}' method`,
              );
            }

            return ContinueSentinel;
          }

          const record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === 'throw') {
            context.method = 'throw';
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          const info = record.arg;

          if (!info) {
            context.method = 'throw';
            context.arg = new TypeError('iterator result is not an object');
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;

            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;

            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== 'return') {
              context.method = 'next';
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          }

          // The delegate iterator is finished, so forget it and continue with
          // the outer generator.
          context.delegate = null;
          return ContinueSentinel;
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        define(Gp, toStringTagSymbol, 'Generator');

        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        define(Gp, iteratorSymbol, function () {
          return this;
        });

        define(Gp, 'toString', () => '[object Generator]');

        function pushTryEntry(locs) {
          const entry = { tryLoc: locs[0] };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          const record = entry.completion || {};
          record.type = 'normal';
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{ tryLoc: 'root' }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (val) {
          const object = Object(val);
          const keys = [];
          for (const key in object) {
            keys.push(key);
          }
          keys.reverse();

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
            while (keys.length) {
              const key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            const iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === 'function') {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              let i = -1; const
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

              return next.next = next;
            }
          }

          // Return an iterator with no values.
          return { next: doneResult };
        }
        exports.values = values;

        function doneResult() {
          return { value: undefined, done: true };
        }

        Context.prototype = {
          constructor: Context,

          reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;

            this.method = 'next';
            this.arg = undefined;

            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (const name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === 't'
              && hasOwn.call(this, name)
              && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },

          stop() {
            this.done = true;

            const rootEntry = this.tryEntries[0];
            const rootRecord = rootEntry.completion;
            if (rootRecord.type === 'throw') {
              throw rootRecord.arg;
            }

            return this.rval;
          },

          dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            const context = this;
            function handle(loc, caught) {
              record.type = 'throw';
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = 'next';
                context.arg = undefined;
              }

              return !!caught;
            }

            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === 'root') {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle('end');
              }

              if (entry.tryLoc <= this.prev) {
                const hasCatch = hasOwn.call(entry, 'catchLoc');
                const hasFinally = hasOwn.call(entry, 'finallyLoc');

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error('try statement without catch or finally');
                }
              }
            }
          },

          abrupt(type, arg) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev
            && hasOwn.call(entry, 'finallyLoc')
            && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry
          && (type === 'break'
           || type === 'continue')
          && finallyEntry.tryLoc <= arg
          && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            const record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = 'next';
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },

          complete(record, afterLoc) {
            if (record.type === 'throw') {
              throw record.arg;
            }

            if (record.type === 'break'
          || record.type === 'continue') {
              this.next = record.arg;
            } else if (record.type === 'return') {
              this.rval = this.arg = record.arg;
              this.method = 'return';
              this.next = 'end';
            } else if (record.type === 'normal' && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },

          finish(finallyLoc) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },

          catch(tryLoc) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                const record = entry.completion;
                if (record.type === 'throw') {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error('illegal catch attempt');
          },

          delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc,
            };

            if (this.method === 'next') {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          },
        };

        // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.
        return exports;
      }(
        // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        true ? module.exports : 0,
      ));

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, in modern engines
        // we can explicitly access globalThis. In older engines we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        if (typeof globalThis === 'object') {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function('r', 'regeneratorRuntime = r')(runtime);
        }
      }
      /***/ }),

    /***/ './src/index.scss':
    /*! ************************!*\
  !*** ./src/index.scss ***!
  \*********************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
        /* harmony export */ });
      /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js');
      /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */ const _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss');

      const options = {};

      options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
      options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, 'head');

      options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
      options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

      const update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
    /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
    /***/ ((module) => {
      const stylesInDOM = [];

      function getIndexByIdentifier(identifier) {
        let result = -1;

        for (let i = 0; i < stylesInDOM.length; i++) {
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        const idCountMap = {};
        const identifiers = [];

        for (let i = 0; i < list.length; i++) {
          const item = list[i];
          const id = options.base ? item[0] + options.base : item[0];
          const count = idCountMap[id] || 0;
          const identifier = ''.concat(id, ' ').concat(count);
          idCountMap[id] = count + 1;
          const indexByIdentifier = getIndexByIdentifier(identifier);
          const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3],
            supports: item[4],
            layer: item[5],
          };

          if (indexByIdentifier !== -1) {
            stylesInDOM[indexByIdentifier].references++;
            stylesInDOM[indexByIdentifier].updater(obj);
          } else {
            const updater = addElementStyle(obj, options);
            options.byIndex = i;
            stylesInDOM.splice(i, 0, {
              identifier,
              updater,
              references: 1,
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function addElementStyle(obj, options) {
        const api = options.domAPI(options);
        api.update(obj);

        const updater = function updater(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
              return;
            }

            api.update(obj = newObj);
          } else {
            api.remove();
          }
        };

        return updater;
      }

      module.exports = function (list, options) {
        options = options || {};
        list = list || [];
        let lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          for (let i = 0; i < lastIdentifiers.length; i++) {
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDOM[index].references--;
          }

          const newLastIdentifiers = modulesToDom(newList, options);

          for (let _i = 0; _i < lastIdentifiers.length; _i++) {
            const _identifier = lastIdentifiers[_i];

            const _index = getIndexByIdentifier(_identifier);

            if (stylesInDOM[_index].references === 0) {
              stylesInDOM[_index].updater();

              stylesInDOM.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
    /***/ ((module) => {
      const memo = {};
      /* istanbul ignore next  */

      function getTarget(target) {
        if (typeof memo[target] === 'undefined') {
          let styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      }
      /* istanbul ignore next  */

      function insertBySelector(insert, style) {
        const target = getTarget(insert);

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      module.exports = insertBySelector;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
    /***/ ((module) => {
      /* istanbul ignore next  */
      function insertStyleElement(options) {
        const element = document.createElement('style');
        options.setAttributes(element, options.attributes);
        options.insert(element, options.options);
        return element;
      }

      module.exports = insertStyleElement;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
    /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      /* istanbul ignore next  */
      function setAttributesWithoutAttributes(styleElement) {
        const nonce = true ? __webpack_require__.nc : 0;

        if (nonce) {
          styleElement.setAttribute('nonce', nonce);
        }
      }

      module.exports = setAttributesWithoutAttributes;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
    /***/ ((module) => {
      /* istanbul ignore next  */
      function apply(styleElement, options, obj) {
        let css = '';

        if (obj.supports) {
          css += '@supports ('.concat(obj.supports, ') {');
        }

        if (obj.media) {
          css += '@media '.concat(obj.media, ' {');
        }

        const needLayer = typeof obj.layer !== 'undefined';

        if (needLayer) {
          css += '@layer'.concat(obj.layer.length > 0 ? ' '.concat(obj.layer) : '', ' {');
        }

        css += obj.css;

        if (needLayer) {
          css += '}';
        }

        if (obj.media) {
          css += '}';
        }

        if (obj.supports) {
          css += '}';
        }

        const { sourceMap } = obj;

        if (sourceMap && typeof btoa !== 'undefined') {
          css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), ' */');
        } // For old IE

        /* istanbul ignore if  */

        options.styleTagTransform(css, styleElement, options.options);
      }

      function removeStyleElement(styleElement) {
        // istanbul ignore if
        if (styleElement.parentNode === null) {
          return false;
        }

        styleElement.parentNode.removeChild(styleElement);
      }
      /* istanbul ignore next  */

      function domAPI(options) {
        const styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            apply(styleElement, options, obj);
          },
          remove: function remove() {
            removeStyleElement(styleElement);
          },
        };
      }

      module.exports = domAPI;
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
    /***/ ((module) => {
      /* istanbul ignore next  */
      function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }

          styleElement.appendChild(document.createTextNode(css));
        }
      }

      module.exports = styleTagTransform;
      /***/ }),

    /***/ './src/assets/img/circuit-board.svg':
    /*! ******************************************!*\
  !*** ./src/assets/img/circuit-board.svg ***!
  \***************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}img/circuit-board.svg`;
      /***/ }),

    /***/ './src/assets/img/favicon.ico':
    /*! ************************************!*\
  !*** ./src/assets/img/favicon.ico ***!
  \*********************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}img/favicon.ico`;
      /***/ }),

    /***/ './src/assets/fonts/Lato-Regular.ttf':
    /*! *******************************************!*\
  !*** ./src/assets/fonts/Lato-Regular.ttf ***!
  \****************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}fonts/Lato-Regular.ttf`;
      /***/ }),

    /***/ './src/assets/fonts/Lato-Regular.woff':
    /*! ********************************************!*\
  !*** ./src/assets/fonts/Lato-Regular.woff ***!
  \******************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}fonts/Lato-Regular.woff`;
      /***/ }),

    /***/ './src/assets/fonts/Lato-Regular.woff2':
    /*! *********************************************!*\
  !*** ./src/assets/fonts/Lato-Regular.woff2 ***!
  \******************************************** */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = `${__webpack_require__.p}fonts/Lato-Regular.woff2`;
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			id: moduleId,
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = __webpack_modules__;
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/compat get default export */
  /** *** */ 	(() => {
    /** *** */ 		// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 		__webpack_require__.n = (module) => {
      /** *** */ 			const getter = module && module.__esModule
      /** *** */ 				? () => (module.default)
      /** *** */ 				: () => (module);
      /** *** */ 			__webpack_require__.d(getter, { a: getter });
      /** *** */ 			return getter;
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/global */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.g = (function () {
      /** *** */ 			if (typeof globalThis === 'object') return globalThis;
      /** *** */ 			try {
        /** *** */ 				return this || new Function('return this')();
        /** *** */ 			} catch (e) {
        /** *** */ 				if (typeof window === 'object') return window;
        /** *** */ 			}
      /** *** */ 		}());
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/publicPath */
  /** *** */ 	(() => {
    /** *** */ 		let scriptUrl;
    /** *** */ 		if (__webpack_require__.g.importScripts) scriptUrl = `${__webpack_require__.g.location}`;
    /** *** */ 		const { document } = __webpack_require__.g;
    /** *** */ 		if (!scriptUrl && document) {
      /** *** */ 			if (document.currentScript)
      /** *** */ 				{ scriptUrl = document.currentScript.src; }
      /** *** */ 			if (!scriptUrl) {
        /** *** */ 				const scripts = document.getElementsByTagName('script');
        /** *** */ 				if (scripts.length) scriptUrl = scripts[scripts.length - 1].src;
        /** *** */ 			}
      /** *** */ 		}
    /** *** */ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /** *** */ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /** *** */ 		if (!scriptUrl) throw new Error('Automatic publicPath is not supported in this browser');
    /** *** */ 		scriptUrl = scriptUrl.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
    /** *** */ 		__webpack_require__.p = scriptUrl;
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/jsonp chunk loading */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.b = document.baseURI || self.location.href;
    /** *** */
    /** *** */ 		// object to store loaded and loading chunks
    /** *** */ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
    /** *** */ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /** *** */ 		const installedChunks = {
      /** *** */ 			main: 0,
      /** *** */ 		};
    /** *** */
    /** *** */ 		// no chunk on demand loading
    /** *** */
    /** *** */ 		// no prefetching
    /** *** */
    /** *** */ 		// no preloaded
    /** *** */
    /** *** */ 		// no HMR
    /** *** */
    /** *** */ 		// no HMR manifest
    /** *** */
    /** *** */ 		// no on chunks loaded
    /** *** */
    /** *** */ 		// no jsonp function
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/nonce */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.nc = undefined;
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    /*! ***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \************************************************** */

    __webpack_require__(/*! ./noConflict */ './node_modules/@babel/polyfill/lib/noConflict.js');

    const _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ './node_modules/core-js/library/fn/global.js'));

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    if (_global.default._babelPolyfill && typeof console !== 'undefined' && console.warn) {
      console.warn('@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended ' + 'and may have consequences if different versions of the polyfills are applied sequentially. ' + 'If you do need to load the polyfill more than once, use @babel/polyfill/noConflict ' + 'instead to bypass the warning.');
    }

    _global.default._babelPolyfill = true;
  })();

  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ './src/index.html');
    /* harmony import */ const _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ './src/index.scss');
    /* harmony import */ const _modules_render_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render-html */ './src/modules/render-html.js');
    /* harmony import */ const _modules_key_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/key-handler */ './src/modules/key-handler.js');

    // Render HTML tags
    _modules_render_html__WEBPACK_IMPORTED_MODULE_2__.default();

    // Real keyboard click handling
    _modules_key_handler__WEBPACK_IMPORTED_MODULE_3__.default();
  })();
/** *** */ })();

// # sourceMappingURL=index.6d6fb78f24a06f98aab6.js.map

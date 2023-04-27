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

export default function highlightKey() {
  window.addEventListener('keydown', keyDownHandler);
  window.addEventListener('keyup', keyUpHandler);

  const keyboardWrapper = document.querySelector('.keyboard');
  keyboardWrapper.addEventListener('mousedown', mouseUpHandler);
  keyboardWrapper.addEventListener('mouseup', mouseDownHandler);
}

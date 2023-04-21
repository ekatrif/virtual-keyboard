const keyDownHandler = (e) => {
  const currentKey = document.querySelector(`.${e.code}`);
  if (e.code === 'CapsLock') {
    currentKey?.classList.toggle('key_active');
  } else {
  currentKey?.classList.add('key_active');
  }
}

const keyUpHandler = (e) => {
  if (e.code && e.code !== 'CapsLock') {
    const currentKey = document.querySelector(`.${e.code}`);
    currentKey?.classList.remove('key_active');
  }
}

const mouseUpHandler = (e) => {
  const currentKey = e.target.closest('.key');
  currentKey?.classList.add('key_active');
}
const mouseDownHandler = (e) => {
  const currentKey = e.target.closest('.key');
  currentKey?.classList.remove('key_active');
}

export default function highlightKey() {
  window.addEventListener('keydown', keyDownHandler);
  window.addEventListener('keyup', keyUpHandler);

  window.addEventListener('mousedown', mouseUpHandler);
  window.addEventListener('mouseup', mouseDownHandler);
}
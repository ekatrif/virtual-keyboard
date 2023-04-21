const keyDownHandler = (e) => {
  const currentKey = document.querySelector(`.${e.code}`);
  currentKey?.classList.add('key_active');
}

const keyUpHandler = (e) => {
  if (e.code) {
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
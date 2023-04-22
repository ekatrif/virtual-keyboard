import * as renderElement from './render-element';

const paragraph = renderElement.default('p', 'paragraph');
paragraph.classList.add('paragraph');
paragraph.innerText = 'To switch language press Left Shift + Left Alt';

export default paragraph;

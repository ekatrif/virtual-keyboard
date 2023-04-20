import * as renderElement from './render-element';

const paragraph = renderElement.default('p', 'paragraph');
paragraph.classList.add('paragraph');
paragraph.innerText = 'To switch language press Shift + Alt';

export default paragraph;

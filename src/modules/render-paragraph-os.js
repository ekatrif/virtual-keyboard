import * as renderElement from './render-element';

const paragraph = renderElement.default('p', 'paragraph');
paragraph.classList.add('paragraph');
paragraph.innerText = 'OS Windows';

export default paragraph;

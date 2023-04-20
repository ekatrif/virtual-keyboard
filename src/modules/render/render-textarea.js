import * as renderElement from './render-element';

const textarea = renderElement.default('textarea', 'textarea');
textarea.name = 'textarea';
textarea.id = 'textarea';
textarea.cols = 30;
textarea.rows = 5;

export default textarea;

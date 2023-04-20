import './index.html';
import './index.scss';

import * as wrapper from './modules/render-wrapper';
import * as title from './modules/render-title';
import * as textarea from './modules/render-textarea';
import * as keyboard from './modules/render-keyboard';
import * as paragraphOs from './modules/render-paragraph-os';
import * as paragraphLanguage from './modules/render-paragraph-lang';

const container = wrapper.default;
document.body.appendChild(container);
container.appendChild(title.default);
container.appendChild(textarea.default);
container.appendChild(keyboard.default);
container.appendChild(paragraphOs.default);
container.appendChild(paragraphLanguage.default);
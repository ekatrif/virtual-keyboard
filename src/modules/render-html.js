import * as wrapper from './render/render-wrapper';
import * as title from './render/render-title';
import * as textarea from './render/render-textarea';
import * as keyboard from './render/render-keyboard';
import * as paragraphOs from './render/render-paragraph-os';
import * as paragraphLanguage from './render/render-paragraph-lang';

export default function renderHtml() {
  const container = wrapper.default;
  document.body.appendChild(container);
  container.appendChild(title.default);
  container.appendChild(textarea.default);
  container.appendChild(keyboard.keyboard);
  container.appendChild(paragraphOs.default);
  container.appendChild(paragraphLanguage.default);
}

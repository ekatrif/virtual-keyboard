import './index.html';
import './index.scss';

import * as renderHtml from './modules/render-html';
import * as keyHandler from './modules/key-handler';

// Render HTML tags
renderHtml.default();

// Real keyboard click handling
keyHandler.default();

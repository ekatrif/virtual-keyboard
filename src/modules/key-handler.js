import * as highlightKey from './highlight-key';
import * as addChar from './add-char-to-textarea';

export default function keyHandler() {
  // Highlight selected key
  highlightKey.default();

  // Add char to texarea
  addChar.default();
}

import * as highlightKey from './highlight-key';
import * as reactKey from './react-key';

export default function keyHandler() {
  // Highlight selected key
  highlightKey.default();

  // Add char to texarea
  reactKey.default();
}

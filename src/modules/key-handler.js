import * as highlightKey from './highlight-key';
import * as reactKey from './react-key';

export default function keyHandler() {
  // Highlight selected key
  highlightKey.default();

  // React on key press & click
  reactKey.default();
}

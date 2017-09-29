import { Node } from 'yoga-layout';

import { StyleAttributes } from '../elements/GtkComponent';
import cssToYogaValue from './cssToYogaValue';

export default function flex(style: StyleAttributes, styleNode: Node) {
  for (const [key, value] of Object.entries(style)) {
    switch (key) {
      case 'flexDirection':
        styleNode.setFlexDirection(cssToYogaValue(key, value));
        break;

      case 'justifyContent':
        styleNode.setJustifyContent(cssToYogaValue(key, value));
        break;

      case 'width':
        styleNode.setWidth(value);
        break;

      case 'height':
        styleNode.setHeight(value);
        break;
    }
  }
}

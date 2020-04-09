import {useEffect, useState} from 'react';
import {
  addEventListener,
  removeEventListener,
} from '@shopify/javascript-utilities/events';

import {Key} from '../../types';

export interface KonamiCodeProps {
  handler(event: KeyboardEvent): void;
}

export function KonamiCode({handler}: KonamiCodeProps) {
  const [position, setPosition] = useState(0);

  const handleKeyEvent = (event: KeyboardEvent) => {
    const konamiCode = [
      Key.UpArrow,
      Key.UpArrow,
      Key.DownArrow,
      Key.DownArrow,
      Key.LeftArrow,
      Key.RightArrow,
      Key.LeftArrow,
      Key.RightArrow,
      Key.KeyB,
      Key.KeyA,
    ];

    const key = event.keyCode;
    const requiredKey = konamiCode[position];

    if (key === requiredKey) {
      if (position === konamiCode.length - 1) {
        handler(event);
        setPosition(0);
      } else {
        setPosition(position + 1);
      }
    } else {
      setPosition(0);
    }
  };

  const keyEvent = 'keydown';

  useEffect(() => {
    addEventListener(document, keyEvent, handleKeyEvent);
    return () => {
      removeEventListener(document, keyEvent, handleKeyEvent);
    };
  });

  return null;
}

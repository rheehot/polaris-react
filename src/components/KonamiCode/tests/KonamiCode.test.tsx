import React from 'react';
import {clock} from '@shopify/jest-dom-mocks';
// eslint-disable-next-line no-restricted-imports
import {mountWithAppProvider} from 'test-utilities/legacy';

import {Key} from '../../../types';
import {KonamiCode} from '../KonamiCode';

interface HandlerMap {
  [eventName: string]: any;
}

const listenerMap: HandlerMap = {};
let warningSpy: jest.SpyInstance;

const simulateKonamiCode = () => {
  [
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
  ].forEach((keyCode) => {
    listenerMap.keydown({keyCode});
    clock.tick(0);
  });
};

describe('<KonamiCode />', () => {
  beforeEach(() => {
    jest.spyOn(document, 'addEventListener').mockImplementation((event, cb) => {
      listenerMap[event] = cb;
    });

    jest.spyOn(document, 'removeEventListener').mockImplementation((event) => {
      listenerMap[event] = noop;
    });

    clock.mock();
  });

  afterEach(() => {
    (document.addEventListener as jest.Mock).mockRestore();
    (document.removeEventListener as jest.Mock).mockRestore();
    clock.restore();
  });

  it('attaches a listener for the given key on mount', () => {
    const warningSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const spy = jest.fn();
    mountWithAppProvider(<KonamiCode handler={spy} />);
    simulateKonamiCode();
    expect(spy).toHaveBeenCalledTimes(1);
    warningSpy.mockRestore();
  });

  it('removes listener for the given key on unmount', () => {
    const spy = jest.fn();
    mountWithAppProvider(<KonamiCode handler={spy} />).unmount();
    simulateKonamiCode();
    expect(spy).not.toHaveBeenCalled();
  });
});

function noop() {}

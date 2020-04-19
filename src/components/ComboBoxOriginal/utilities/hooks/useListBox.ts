import {useContext} from 'react';

import {ListBoxContext} from '../context/list-box';

export function useListBox() {
  const listBox = useContext(ListBoxContext);

  if (!listBox) {
    throw new Error(
      'No ListBox was provided. Option must be wrapped in a Listbox',
    );
  }

  return listBox;
}

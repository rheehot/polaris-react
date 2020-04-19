import React from 'react';

export interface ListBoxContextType {
  keyboardFocusedItem?: string;
  scrollable?: Element | null;
}

export const ListBoxContext = React.createContext<ListBoxContextType>({});

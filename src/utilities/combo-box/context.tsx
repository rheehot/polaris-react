import React from 'react';

export interface ComboBoxContextType {
  // set by list
  setActiveOptionId?(id: string): void;
  // consumed by aria-activedescendant on text field (also on list context when not in combobox)
  activeOptionId?: string;
  // set by list
  setListBoxId?(id: string): void;
  // consumed by div.aria-owns and textField.aria-control
  listBoxId?: string;
  // set by the TextField prop
  setTypeAheadText?(value: string): void;
  // consumed by the List Box to activate the right options
  typeAheadText?: string;
  // set by TextField
  setTextFieldId?(id: string): void;
  // consumed by combobox to set focus (this could maybe be a ref)
  textFieldId?: string;
  // set by the TextField
  setTextFieldLabelId?(id: string): void;
  // consumed by listBox aria-labelledby
  textFieldLabelId?: string;
  onOptionSelected?(value: string): void;
}

export const ComboBoxContext = React.createContext<
  ComboBoxContextType | undefined
>(undefined);

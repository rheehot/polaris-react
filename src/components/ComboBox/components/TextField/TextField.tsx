import React from 'react';

import {useComboBox} from '../../../../utilities/combo-box';
import {TextField as BaseTextField, TextFieldProps} from '../../../TextField';

export function TextField(props: TextFieldProps) {
  const {activeOptionId, comboBoxId} = useComboBox();
  return (

        <BaseTextField
          {...props}
          autoComplete={false}
          ariaAutocomplete="list"
          ariaActiveDescendant={activeOptionId}
          ariaControls={comboBoxId}
        />
      )}
  );
}

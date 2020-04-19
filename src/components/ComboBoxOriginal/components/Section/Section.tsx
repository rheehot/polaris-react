import React from 'react';

import {useUniqueId} from '../../../../utilities/unique-id';
import type {OptionProps} from '../Option';
import {SectionContext} from '../../utilities/context/section';

import styles from './Section.scss';

export interface SectionProps {
  title: string;
  children: React.ReactElement<OptionProps>[];
}

export function Section({title, children}: SectionProps) {
  const id = useUniqueId('ComboBoxOption');
  const contextValue = {
    sectionId: id,
  };
  return (
    <React.Fragment>
      <SectionContext.Provider value={contextValue}>
        <li
          className={styles.Title}
          id={id}
          role="option"
          aria-selected={false}
          aria-label={title}
        >
          {title}
        </li>
        {children}
      </SectionContext.Provider>
    </React.Fragment>
  );
}

import React from 'react';

export interface SectionContextType {
  sectionId: string | undefined;
}

export const SectionContext = React.createContext<SectionContextType>({
  sectionId: undefined,
});

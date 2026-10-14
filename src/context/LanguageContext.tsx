import {
  createContext,
  useContext,
} from 'react';

import type { Language } from '../translations/translations';

import { translations } from '../translations/translations';

type TranslationDictionary = (typeof translations)[Language];

export type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: TranslationDictionary;
};

export const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider',
    );
  }

  return context;
}
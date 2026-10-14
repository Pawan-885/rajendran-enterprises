import {
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { LanguageContext } from './LanguageContext';

import {
  translations,
  type Language,
} from '../translations/translations';

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');

    return savedLanguage === 'ta' ? 'ta' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  function toggleLanguage() {
    setLanguage((currentLanguage) =>
      currentLanguage === 'en' ? 'ta' : 'en',
    );
  }

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
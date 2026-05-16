import { useState, useEffect, useCallback } from 'react';
import { detectLocale, setLocale, translations, Locale, TranslationStrings } from './translations';

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  useEffect(() => {
    setLocale(locale);
  }, [locale]);

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const t: TranslationStrings = translations[locale];

  const interpolate = useCallback((str: string, vars: Record<string, string>) => {
    return Object.entries(vars).reduce((acc, [key, val]) => acc.replace(`{${key}}`, val), str);
  }, []);

  return { locale, changeLocale, t, interpolate };
}

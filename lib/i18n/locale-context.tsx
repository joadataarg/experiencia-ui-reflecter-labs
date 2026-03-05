"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { type Locale, type Dictionary, defaultLocale, getDictionary } from "@/lib/i18n/dictionaries";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [t, setT] = useState<Dictionary>(getDictionary(defaultLocale));

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("locale") as Locale | null : null;
    if (saved && (saved === "es" || saved === "en" || saved === "pt")) {
      setLocaleState(saved);
      setT(getDictionary(saved));
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setT(getDictionary(newLocale));
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
      document.documentElement.lang = newLocale;
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

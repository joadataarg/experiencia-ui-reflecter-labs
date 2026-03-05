"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { type Locale, localeNames } from "@/lib/i18n/dictionaries";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const locales: Locale[] = ["es", "en", "pt"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="uppercase">{locale}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[120px] rounded-lg border border-border bg-background p-1 shadow-lg">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left font-mono text-xs transition-colors hover:bg-muted ${
                locale === l ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <span className="uppercase font-semibold">{l}</span>
              <span>{localeNames[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

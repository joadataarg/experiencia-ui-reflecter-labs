"use client";

import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  const { t } = useLocale();

  return (
    <main className="relative z-10 pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl font-semibold text-foreground lg:text-5xl">
            {t.contact.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t.contact.intro}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.contact.contactInfo}
              </h2>
              <div className="mt-6 flex flex-col gap-5">
                <a
                  href="mailto:contact@reflecterlabs.xyz"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>contact@reflecterlabs.xyz</span>
                </a>
                <a
                  href="tel:+5491173661972"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+54 9 11 7366 1972</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Córdoba, Argentina</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border p-6 bg-background/30 backdrop-blur-sm">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t.contact.hours}
              </h2>
              <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t.contact.monFri}</span>
                  <span className="text-foreground">9:00 - 18:00 ART</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.contact.satSun}</span>
                  <span className="text-foreground">{t.contact.closed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Unified Contact CTA */}
          <div className="lg:col-span-3">
            <div className="flex flex-col items-center justify-center h-full gap-8 rounded-2xl border border-border p-8 lg:p-12 bg-background/20 backdrop-blur-sm shadow-sm text-center">
              <div className="max-w-md">
                <h3 className="font-mono text-2xl font-semibold text-foreground">
                  {t.cta.heading}
                </h3>
              </div>

              <Button
                asChild
                size="lg"
                className="group relative h-14 px-8 font-mono text-base font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                <Link href={t.common.calendarLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  <span>{t.common.bookCall}</span>
                </Link>
              </Button>

              <div className="mt-4 flex flex-col items-center gap-2">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60">
                  Powered by Reflecter Labs
                </p>
                <div className="h-px w-12 bg-border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

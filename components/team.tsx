"use client";

import Image from "next/image";
import { TextEffect } from "./motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/locale-context";

const founders = [
  {
    name: "Ignacio del Corro",
    role: "Co-Founder & CEO",
    image: "/images/founder-1.jpg",
  },
  {
    name: "Henry Rosales",
    role: "Co-Founder & CTO",
    image: "/images/founder-2.jpg",
  },
  {
    name: "Joaquin Cortez",
    role: "Co-Founder & COO",
    image: "/images/founder-3.jpg",
  },
  {
    name: "Alex Rosenfeld",
    role: "Co-Founder & CO",
    image: "/images/founder-4.jpeg",
  },
];

export default function Team() {
  const { t } = useLocale();

  return (
    <section className="py-16 mx-2">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium tracking-wider uppercase rounded-full border border-border bg-muted/50 text-muted-foreground">
            {t.about.teamTitle}
          </div>
          <TextEffect
            triggerOnView
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-4xl font-semibold lg:text-5xl"
          >
            {t.founders.heading}
          </TextEffect>
        </div>

        <AnimatedGroup
          triggerOnView
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            },
            ...transitionVariants,
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {founders.map((founder) => (
            <div
              key={founder.name + founder.role}
              className="group rounded-2xl border border-border bg-card p-4 text-center transition-colors hover:border-foreground/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative mx-auto mb-4 aspect-square w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {founder.role}
              </p>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

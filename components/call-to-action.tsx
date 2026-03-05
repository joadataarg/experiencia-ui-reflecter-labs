import Image from "next/image";
import { TextEffect } from "./motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";

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
    image: "/images/founder-4.jpg",
  },
];

export default function CallToAction() {
  return (
    <section className="py-16 mx-2">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <TextEffect
            triggerOnView
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-4xl font-semibold lg:text-5xl"
          >
            EL EQUIPO DETRAS DE LA VISION
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
              className="group rounded-2xl border border-border bg-card p-4 text-center transition-colors hover:border-foreground/20"
            >
              <div className="relative mx-auto mb-4 aspect-square w-full overflow-hidden rounded-xl">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {founder.role}
              </p>
              <p className="mt-2 text-sm text-muted-foreground/80 leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

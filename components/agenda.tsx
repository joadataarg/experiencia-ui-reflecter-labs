import { TextEffect } from "@/components/motion-primitives/text-effect";
import React from "react";
import { transitionVariants } from "@/lib/utils";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

export default function Agenda() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:grid-cols-[1fr_auto]">
                    <div className="text-center lg:text-left">
                        <TextEffect
                            triggerOnView
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="h2"
                            className="mb-4 text-3xl font-semibold md:text-4xl">
                            HOJA DE RUTA
                        </TextEffect>
                    </div>

                    <AnimatedGroup
                        triggerOnView
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0"
                    >
                        <div className="pb-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Q1</span>
                                <span>Conformación de Sociedad</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Acuerdo pre-societario, alta de sociedad y publicación en boletín oficial.</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Q2</span>
                                <span>Alianzas Estratégicas</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Acuerdos de alianzas estratégicas para impulsar la decentralización y el ecosistema web3 en latioamérica.</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Q3</span>
                                <span>Inversión en poder de computo</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Inyeccion de capital en la ampliacion de poder de computo para el desarrollo eficiente en el laboratorio tecnológico.</p>
                        </div>
                        <div className="py-6">
                            <div className="font-medium space-x-2">
                                <span className='text-muted-foreground font-mono '>Q4</span>
                                <span>Consolidación de Productos Solicitados</span>
                            </div>
                            <p className="text-muted-foreground mt-4">Pre-validación y validación del mercado para la capitalización de cada producto en específico.</p>
                        </div>
                    </AnimatedGroup>
                </div>
            </div>
        </section>
    )
}

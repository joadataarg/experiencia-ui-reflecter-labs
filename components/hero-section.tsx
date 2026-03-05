"use client";

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import GlobantLogoIcon from "@/components/icons/globant-logo-icon";
import DecryptedText from "@/components/DecryptedText";
import { transitionVariants } from "@/lib/utils";
import LanyardWithControls from "@/components/lanyard-with-controls";
import { useLocale } from "@/lib/i18n/locale-context";

export default function HeroSection() {
    const { t } = useLocale();

    return (
        <main className="overflow-x-hidden">
            <section className='lg:h-screen'>
                <div
                    className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44 lg:grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2">
                    <div className="relative mx-auto flex max-w-xl flex-col px-6 lg:block">
                        <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:text-left">
                            <div className='mt-8 lg:mt-16'>
                                <DecryptedText
                                    text={t.hero.subtitle}
                                    animateOn="view"
                                    revealDirection="start"
                                    sequential
                                    useOriginalCharsOnly={false}
                                    speed={70}
                                    className='font-mono text-muted-foreground bg-black rounded-md uppercase'
                                />
                            </div>
                            <h1 className="max-w-2xl text-balance text-6xl font-semibold md:text-7xl xl:text-8xl tracking-tighter">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="span"
                                    className="block">
                                    {t.hero.title1}
                                </TextEffect>
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="span"
                                    className="block">
                                    {t.hero.title2}
                                </TextEffect>
                            </h1>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground bg-black p-1 rounded-md">
                                {t.hero.description}
                            </TextEffect>
                            <AnimatedGroup
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
                                className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="px-5 text-base">
                                    <Link href={t.common.calendarLink} target="_blank" rel="noopener noreferrer">
                                        <span className="text-nowrap">{t.common.bookCall}</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>
                    <LanyardWithControls
                        position={[0, 0, 20]}
                        containerClassName='lg:absolute lg:top-0 lg:right-0 lg:w-1/2 relative w-full h-screen bg-radial lg:from-transparent lg:to-transparent from-muted to-background select-none'
                        defaultName="" />
                </div>
            </section>
            <section className="bg-background pb-16 md:pb-32">
                <AnimatedGroup
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
                    className="group relative m-auto max-w-6xl px-6"
                >

                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:pr-6">
                            <p className="text-end text-sm font-mono uppercase">{t.common.supportedBy}</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={112}>
                                <div className="flex items-center">
                                    <GlobantLogoIcon size={20} aria-label="Globant Logo"
                                        className='text-foreground mx-auto' />
                                </div>
                                <div className="flex items-center">
                                    <GlobantLogoIcon size={20} aria-label="Globant Logo"
                                        className='text-foreground mx-auto' />
                                </div>
                            </InfiniteSlider>
                            <div
                                className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                            <div
                                className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </AnimatedGroup>
            </section>
        </main>
    )
}

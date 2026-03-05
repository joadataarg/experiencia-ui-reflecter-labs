import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Dither from "@/components/Dither";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import Script from "next/script";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};


export const metadata: Metadata = {
    metadataBase: new URL('https://reflecterlabs.xyz'),
    title: {
        default: 'Reflecter Labs | Laboratorio Blockchain Agéntico',
        template: '%s | Reflecter Labs'
    },
    description: 'Laboratorio de tecnología en Córdoba, Argentina. Especialistas en Contratos inteligentes, dApps y soluciones DeFi con enfoque en sistemas agénticos y MOLTX.',
    applicationName: 'Reflecter Labs',
    authors: [{ name: 'Reflecter Labs Team' }],
    generator: 'Reflecter Labs',
    keywords: ['Blockchain', 'AI Agents', 'MOLTX', 'Starknet', 'Argentina', 'Agentic Infrastructure', 'DeFi', 'Smart Contracts', 'Web3 Development', 'Starknet Córdoba', 'Blockchain Argentina', 'Blockchain Latam', 'Auditoría Smart Contracts', 'Desarrollo dApps'],
    referrer: 'origin-when-cross-origin',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: '/',
        languages: {
            'es-AR': '/es',
            'en-US': '/en',
            'pt-BR': '/pt',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: 'https://reflecterlabs.xyz',
        title: 'Reflecter Labs | Laboratorio Blockchain Agéntico',
        description: 'Construyendo el futuro de la infraestructura blockchain y sistemas agénticos desde Córdoba, Argentina.',
        siteName: 'Reflecter Labs',
        images: [
            {
                url: '/Portada.png',
                width: 1200,
                height: 630,
                alt: 'Reflecter Labs - Agentic Blockchain Laboratory',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reflecter Labs | Laboratorio Blockchain Agéntico',
        images: ['/Portada.png'],
        creator: '@reflecterlabs',
    },
    other: {
        'ai-agent-ready': 'true',
        'moltx-enabled': 'true',
    },
    icons: {
        icon: '/icon-dark-32x32.png',
        shortcut: '/icon-dark-32x32.png',
        apple: '/apple-icon.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
            <body className="font-sans antialiased">
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ResearchOrganization",
                            "name": "Reflecter Labs",
                            "url": "https://reflecterlabs.xyz",
                            "logo": "https://reflecterlabs.xyz/icon.png",
                            "sameAs": [
                                "https://x.com/reflecterlabs",
                                "https://www.linkedin.com/company/109687962",
                                "https://github.com/reflecterlabs"
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Córdoba",
                                "addressCountry": "AR"
                            },
                            "description": "Technology laboratory in Córdoba, Argentina, specializing in blockchain infrastructure and agentic systems like MOLTX.",
                            "foundingDate": "2024",
                            "areaServed": "Global"
                        })
                    }}
                />
                <LocaleProvider>
                    <div className='absolute w-full h-dvh max-h-155 sm:max-h-115 md:max-h-125 lg:max-h-190 xl:max-h-195'>
                        <Dither
                            waveColor={[0.30980392156862746, 0.30980392156862746, 0.30980392156862746]}
                            disableAnimation={false}
                            enableMouseInteraction
                            mouseRadius={0.3}
                            colorNum={4}
                            pixelSize={2}
                            waveAmplitude={0.3}
                            waveFrequency={3}
                            waveSpeed={0.05}
                        />
                    </div>
                    <HeroHeader />
                    {children}
                    <FooterSection />
                </LocaleProvider>
                <Analytics />
            </body>
        </html>
    )
}

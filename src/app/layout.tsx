import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import { Header } from './Header'
import { HEADER_HEIGHT } from '@/consts'
import { IBM_Plex_Sans } from 'next/font/google'
import { Arimo } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
    title: 'Sabores da Amazônia',
    description: 'Trabalho semana ubiqua UNAMA',
}

const ibm_plex_sans = IBM_Plex_Sans({
    weight: ["300", "500", "700"],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ibm_plex_sans',
})
const arimo = Arimo({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-arimo',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={ibm_plex_sans.variable + arimo.variable}>
            <body>
                <Header />
                <main
                    className="antialiased bg-background"
                    style={{
                        height: `calc(100vh - ${HEADER_HEIGHT})`,
                    }}
                >
                    {children}
                </main>
                <Toaster />
            </body>
        </html>
    )
}

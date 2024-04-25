import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Header } from './Header'
import { HEADER_HEIGHT } from '@/consts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={inter.className}>
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
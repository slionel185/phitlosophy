import '@/app/globals.css'

import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import Navbar from '@/components/nav/Navbar'
import { Toaster } from '@/components/ui/toaster'
import MainProvider from '@/components/providers/MainProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Phitlosophy',
    description: 'Personal Training'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#2d89ef" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={inter.className}>
                <MainProvider>
                    {children}
                    <Toaster />
                    <Analytics />
                </MainProvider>
            </body>
        </html>
    )
}
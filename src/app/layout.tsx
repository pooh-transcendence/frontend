import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inria_Sans } from 'next/font/google'
import React from 'react'

const Inria = Inria_Sans({ subsets: ["latin", "latin-ext"], weight: ["300", "400", "700"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: 'wa sans',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={Inria.className}>
          {children}
        </body>
    </html>
  )
}


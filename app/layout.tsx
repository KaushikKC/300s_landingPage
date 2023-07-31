'use client'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel='icon' href='/favicon.ico'/>
        <title>300s</title>
      </head>
      <body className='bg-[#303030]'>{children}</body>
    </html>
  )
}

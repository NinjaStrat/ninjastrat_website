import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NinjaStrat - Automate Your Future',
  description: 'Advanced NASDAQ futures trading with our proprietary StratEngine algorithm. Precision, automation, and consistent results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-text-primary min-h-screen flex flex-col`}>
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  )
} 
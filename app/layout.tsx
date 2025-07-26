import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NinjaStrat - Algorithms. Strategy. Consistency.',
  description: 'Advanced NASDAQ futures trading with our proprietary StratEngine algorithm. Precision, automation, and consistent results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-text-primary min-h-screen flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  )
} 
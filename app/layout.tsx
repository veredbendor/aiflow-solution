import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Flow Solution - Transform Your Business with AI',
  description: 'Streamline operations, boost efficiency, and accelerate growth with intelligent automation designed for small and medium businesses. Expert AI implementation with 20+ years experience.',
  keywords: 'AI consulting, business automation, artificial intelligence, SMB solutions, workflow optimization, AI implementation',
  authors: [{ name: 'Vered Ben-Dor' }],
  openGraph: {
    title: 'AI Flow Solution - Transform Your Business with AI',
    description: 'Expert AI consulting for small and medium businesses. Fast implementation, proven results.',
    url: 'https://aiflowsolution.com',
    siteName: 'AI Flow Solution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Flow Solution - Transform Your Business with AI',
    description: 'Expert AI consulting for small and medium businesses. Fast implementation, proven results.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'A1 Sweets | Authentic Indian Vegetarian Restaurant',
    template: '%s | A1 Sweets',
  },

  description:
    'Experience authentic Indian vegetarian cuisine at A1 Sweets in Toronto. Enjoy traditional Indian sweets, vegetarian meals, dine-in, takeout and outdoor catering services.',

  keywords: [
    'A1 Sweets',
    'A1 Sweets Toronto',
    'Indian vegetarian restaurant',
    'Vegetarian restaurant Toronto',
    'Indian sweets Toronto',
    'Pure vegetarian food',
    'Indian cuisine Toronto',
    'Indian takeout',
    'Outdoor catering Toronto',
    'Indian catering services',
    'Vegetarian thali',
    'Indian snacks and sweets',
  ],

  applicationName: 'A1 Sweets',

  authors: [{ name: 'A1 Sweets' }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: 'A1 Sweets | Authentic Indian Vegetarian Restaurant',
    description:
      'Discover authentic Indian vegetarian cuisine, traditional sweets, dine-in, takeout and catering at A1 Sweets in Toronto.',
    siteName: 'A1 Sweets',
    locale: 'en_CA',
    type: 'website',
  },

  twitter: {
    card: 'summary',
    title: 'A1 Sweets | Authentic Indian Vegetarian Restaurant',
    description:
      'Authentic Indian vegetarian cuisine, traditional sweets and catering in Toronto.',
  },

  // Favicon is automatically detected from app/favicon.ico
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  )
}

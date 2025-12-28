import './globals.css'
import Background from '@/components/Background'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://www.gipjazesflowersgallery.com'),
  title: 'Gipjazes Flowers Gallery',
  description: 'Premium Flower Gallery - Download Stunning 4D Digital Flora',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gipjazes Flowers Gallery',
    description: 'Premium Flower Gallery - Download Stunning 4D Digital Flora',
    url: 'https://www.gipjazesflowersgallery.com',
    siteName: 'Gipjazes Flowers',
    images: [
      {
        url: '/og-image.png', // Fallback to a default image if available
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gipjazes Flowers Gallery',
    description: 'Premium Flower Gallery - Download Stunning 4D Digital Flora',
    images: ['/og-image.png'],
  },
  verification: {
    google: '_z7VYmsaDFZMywyEnHEF4b2pNLQVf-e7pAtxgybdlwA',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Manual Placeholder */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2198481548549346"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body style={{ margin: 0, color: 'white' }}>
        <Background />
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', overflowY: 'auto' }}>
          {children}
        </main>
      </body>
    </html>
  )
}

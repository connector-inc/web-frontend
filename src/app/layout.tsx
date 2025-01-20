import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Connector',
  description:
    'Join Connector to share ideas, ask questions, post random thoughts, find your people, and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode & { theme?: string }
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="Connector" />
      </head>
      <body
        className="bg-barcelona-primary-background md:bg-barcelona-secondary-background text-barcelona-primary-text text-system-15-font-size leading-system-15-line-height antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}

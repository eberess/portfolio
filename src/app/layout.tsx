import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ab.wilmoredynamics.com'),
  title: {
    default: 'Amin Beressa | Développeur & Chef de projet',
    template: '%s | Amin Beressa'
  },
  description: 'Portfolio d\'Amin Beressa, développeur full-stack et chef de projet spécialisé en React, TypeScript et technologies web modernes.',
  keywords: ['développeur', 'chef de projet', 'react', 'typescript', 'next.js', 'web development'],
  authors: [{ name: 'Amin Beressa' }],
  creator: 'Amin Beressa',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ab.wilmoredynamics.com',
    title: 'Amin Beressa | Développeur & Chef de projet',
    description: 'Portfolio d\'Amin Beressa, développeur full-stack et chef de projet spécialisé en React, TypeScript et technologies web modernes.',
    siteName: 'Portfolio Amin Beressa',
    images: [{
      url: '/api/og',
      width: 1200,
      height: 630,
      alt: 'A.B. - Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amin Beressa | Développeur & Chef de projet',
    description: 'Portfolio d\'Amin Beressa, développeur full-stack et chef de projet spécialisé en React, TypeScript et technologies web modernes.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

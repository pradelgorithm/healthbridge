import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HealthBridge - Your Complete Health Data Platform",
  description: "Connect all your health devices and data in one place. For patients and healthcare providers.",
  keywords: [
    "health data",
    "wearable devices", 
    "Apple Watch",
    "Fitbit",
    "Garmin", 
    "health monitoring",
    "patient portal",
    "healthcare providers",
    "HIPAA compliant",
    "UCF capstone"
  ],
  authors: [{ name: "HealthBridge Team - UCF Capstone Project" }],
  creator: "HealthBridge Team",
  publisher: "University of Central Florida",
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://healthbridge.my',
    title: 'HealthBridge - Your Complete Health Data Platform',
    description: 'Connect all your health devices and data in one place. For patients and healthcare providers.',
    siteName: 'HealthBridge',
    images: [
      {
        url: '/og-image-clean.svg',
        width: 1200,
        height: 630,
        alt: 'HealthBridge - Connect all your health devices and data in one place',
        type: 'image/svg+xml'
      }
    ]
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@healthbridge',
    creator: '@healthbridge',
    title: 'HealthBridge - Your Complete Health Data Platform',
    description: 'Connect all your health devices and data in one place. For patients and healthcare providers.',
    images: ['/og-image-clean.svg']
  },
  
  // Favicon configuration
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16.svg', type: 'image/svg+xml', sizes: '16x16' },
      { url: '/favicon-32.svg', type: 'image/svg+xml', sizes: '32x32' }
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/favicon.svg', sizes: '180x180', type: 'image/svg+xml' }
    ]
  },
  
  // Additional metadata
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
  
  // Verification and analytics (for future use)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="healthbridge">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

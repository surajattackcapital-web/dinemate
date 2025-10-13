import type { Metadata } from "next";
import { Poppins, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-body'
});

const rethinkSans = Rethink_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-heading'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dinemate.ai'),
  title: {
    default: "DineMate.ai - AI-Powered Restaurant & Hospitality Solutions",
    template: "%s | DineMate.ai"
  },
  description: "Transform your restaurant operations with AI-powered solutions for waitlists, ordering, reservations, and customer feedback. Boost efficiency and enhance guest experiences.",
  keywords: "AI restaurant, hospitality AI, restaurant management, AI ordering, reservation system, waitlist management, restaurant automation, hospitality technology",
  authors: [{ name: "DineMate.ai" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dinemate.ai",
    siteName: "DineMate.ai",
    title: "DineMate.ai - AI-Powered Restaurant & Hospitality Solutions",
    description: "Transform your restaurant operations with AI-powered solutions for waitlists, ordering, reservations, and customer feedback.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DineMate.ai - AI-Powered Hospitality Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DineMate.ai - AI-Powered Restaurant & Hospitality Solutions",
    description: "Transform your restaurant operations with AI-powered solutions for waitlists, ordering, reservations, and customer feedback.",
    images: ["/og-image.png"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable} ${rethinkSans.variable}`}>
        {/* Floating Background Drops */}
        <div className="drops-container">
          <div className="drop drop1"></div>
          <div className="drop drop2"></div>
          <div className="drop drop3"></div>
          <div className="drop drop4"></div>
        </div>
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

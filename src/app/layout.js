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

export const metadata = {
  title: "Katalyx Media | Remodeler Marketing Agency for High-Quality Leads",
  description:
    "Katalyx Media helps remodelers and construction companies consistently book high-quality projects through proven marketing strategies, modern tools, and systems that deliver real results.",
  keywords:
    "remodeler marketing agency, construction marketing, home renovation leads, contractor marketing, lead generation for remodelers, remodeling business growth, Katalyx Media, home improvement marketing, high-quality construction leads, renovation marketing agency",
  authors: [
    { name: "Laksh", role: "Founder & CEO" },
    { name: "Don Agrahari", role: "Head Director" },
  ],
  openGraph: {
    title: "Katalyx Media | Remodeler Marketing Agency for High-Quality Leads",
    description:
      "We connect remodelers and construction businesses with real homeowners ready to move forward. Proven systems, real results.",
    url: "https://yourwebsite.com",
    siteName: "Katalyx Media",
    images: [
      {
        url: "https://yourwebsite.com/Images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Katalyx Media - Marketing Agency for Remodelers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalyx Media | Remodeler Marketing Agency",
    description:
      "Helping remodelers and construction companies consistently book more high-quality projects through proven marketing systems.",
    images: ["https://yourwebsite.com/Images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin />
        <link rel="preconnect" href="https://calendly.com" crossOrigin />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

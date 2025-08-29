import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout-wrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://parineetha.in'),
  title: "Parineetha Institute - Excellence in Technology Education",
  description: "Master coding and full-stack development with expert instructors at Parineetha Institute. Learn React, Node.js, Python, AI/ML and more with hands-on projects and real-world experience.",
  keywords: "coding, programming, full-stack development, React, Node.js, Python, web development, software engineering, AI, ML, data science, Parineetha Institute, technology education",
  authors: [{ name: "Parineetha Institute" }],
  creator: "Parineetha Institute",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/Parineetha-removebg-preview.png", sizes: "192x192", type: "image/png" }
    ],
    apple: "/Parineetha-removebg-preview.png"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parineetha.in",
    title: "Parineetha Institute - Excellence in Technology Education",
    description: "Master coding and full-stack development with expert instructors at Parineetha Institute",
    siteName: "Parineetha Institute",
    images: [
      {
        url: "/Parineetha-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Parineetha Institute Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Parineetha Institute - Excellence in Technology Education",
    description: "Master coding and full-stack development with expert instructors at Parineetha Institute",
    images: ["/Parineetha-removebg-preview.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

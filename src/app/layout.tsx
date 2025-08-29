import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LayoutWrapper } from '@/components/layout-wrapper'
import StructuredData from '@/components/structured-data'
import GoogleAnalytics from '@/components/google-analytics'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://parineetha.in'),
  title: "Parineetha - Best Training Institute in Bengaluru | Full Stack Development Classes",
  description: "Top-rated coding institute in Bengaluru offering best full stack development classes, AI/ML training, and tech courses. 95% placement rate, expert instructors, hands-on projects. Join 500+ successful graduates.",
  keywords: "best training institute Bengaluru, full stack development classes Bengaluru, coding institute Bengaluru, programming courses Bengaluru, web development training Bengaluru, AI ML classes Bengaluru, tech education Bengaluru, software development institute, MERN stack training, placement guarantee Bengaluru, best coding bootcamp Bengaluru, IT training institute Bengaluru, JavaScript classes Bengaluru, React training Bengaluru, Node.js courses Bengaluru",
  authors: [{ name: "Parineetha" }],
  creator: "Parineetha",
  publisher: "Parineetha Institute",
  robots: "index, follow",
  category: "Education",
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
    title: "Parineetha - Best Training Institute in Bengaluru | Full Stack Development Classes",
    description: "Top-rated coding institute in Bengaluru with 95% placement rate. Best full stack development classes, AI/ML training. Expert instructors, hands-on projects. Join 500+ graduates.",
    siteName: "Parineetha",
    images: [
      {
        url: "/Parineetha-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Parineetha - Best Training Institute in Bengaluru"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Parineetha - Best Training Institute in Bengaluru | Full Stack Development Classes",
    description: "Top-rated coding institute in Bengaluru with 95% placement rate. Best full stack development classes, AI/ML training.",
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
        <GoogleAnalytics />
        <StructuredData />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

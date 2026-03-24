// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import BottomNavBar from "@/components/layout/BottomNavBar";

export const metadata: Metadata = {
  title: {
    default: "Ghokante | Nepal's #1 University Resource Platform",
    template: "%s | Ghokante",
  },
  description:
    "Find notes, slides, past questions, and cheatsheets for TU, PU, KU, and PoU. The ultimate scholarly resource for Nepali students.",
  keywords: [
    "Nepal university notes",
    "TU notes",
    "BSc CSIT notes",
    "past questions Nepal",
    "PU notes",
    "KU notes",
  ],
  metadataBase: new URL("https://ghokante.com"),
  openGraph: {
    title: "Ghokante | Nepal's #1 University Resource Platform",
    description: "Find notes, slides, past questions for TU, PU, KU, PoU.",
    url: "https://ghokante.com",
    siteName: "Ghokante",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghokante | Nepal's #1 University Resource Platform",
    description: "Find notes, slides, past questions for TU, PU, KU, PoU.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        {/* Google Fonts — loaded via <link> instead of CSS @import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ghokante",
              url: "https://ghokante.com",
              logo: "https://ghokante.com/logo.png",
              description:
                "Nepal's #1 University Resource Platform for TU, PU, KU, and PoU students.",
            }),
          }}
        />
      </head>
      <body className="bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
        <TopNavBar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <BottomNavBar />
      </body>
    </html>
  );
}

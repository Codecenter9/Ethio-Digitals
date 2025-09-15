// app/layout.tsx
import type { Metadata } from "next";
import "../../styles/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Providers from "@/components/layout/provider";

export const metadata: Metadata = {
  title: {
    default: "Home - EthioDigitals | Software Company in Ethiopia",
    template: "%s - EthioDigitals",
  },
  description:
    "EthioDigitals is a leading software company in Ethiopia providing Web Development, Mobile App Development, AI & Automation, and Enterprise Solutions to empower businesses with digital transformation.",
  keywords: [
    "EthioDigitals",
    "Software Company Ethiopia",
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "Digital Transformation",
    "IT Services Ethiopia",
    "Enterprise Solutions",
  ],
  authors: [{ name: "EthioDigitals Team", url: "https://ethiodigitals.com" }],
  creator: "EthioDigitals",
  publisher: "EthioDigitals",
  metadataBase: new URL("https://ethiodigitals.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethiodigitals.com",
    siteName: "EthioDigitals",
    title: "EthioDigitals | Software Company in Ethiopia",
    description:
      "We provide professional software services including Web Development, Mobile Applications, AI & Automation, and IT solutions tailored for businesses in Ethiopia and beyond.",
    images: [
      {
        url: "/og-image.png", // ensure this exists in /public
        width: 1200,
        height: 630,
        alt: "EthioDigitals Software Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EthioDigitals | Software Company in Ethiopia",
    description:
      "Professional software solutions in Ethiopia: Web Development, Mobile Apps, AI & Automation.",
    images: ["/og-image.png"],
    creator: "@EthioDigitals",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://ethiodigitals.com",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-950 text-white min-h-screen flex flex-col">
        <Navbar />
        <Providers>
          <main className="flex-1">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}

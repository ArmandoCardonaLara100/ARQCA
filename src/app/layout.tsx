import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SITE } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand} — ${SITE.architect} | Estudio de Arquitectura`,
    template: `%s | ${SITE.brand}`,
  },
  description: SITE.description,
  keywords: [
    "arquitectura",
    "arquitecto",
    "diseño residencial",
    "arquitectura comercial",
    "diseño de interiores",
    "Monterrey",
    "México",
    SITE.brand,
    SITE.architect,
  ],
  openGraph: {
    title: `${SITE.brand} — ${SITE.architect}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.brand} — ${SITE.architect}`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#222831",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

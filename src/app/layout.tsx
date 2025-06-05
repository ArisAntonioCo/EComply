import type { Metadata, Viewport } from "next";
import { Inter, Playfair } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ecomply - Filipino E-commerce Compliance",
  description: "Ensure your Filipino e-commerce business complies with RA No. 11967 through AI-powered document analysis",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <html lang="en">      
    <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

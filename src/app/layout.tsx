import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ecomply - Filipino E-commerce Compliance",
  description: "Ensure your Filipino e-commerce business complies with RA No. 11967 through AI-powered document analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased font-mono`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

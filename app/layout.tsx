import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malabar Catering | Authentic Kerala Cuisine",
  description:
    "Premium Kerala catering services for weddings, corporate events, and private celebrations. Authentic Malabar cuisine crafted with love and tradition.",
  keywords: [
    "Kerala catering",
    "Malabar cuisine",
    "wedding catering",
    "corporate catering",
    "Kerala food",
    "biryani",
    "sadya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable} bg-pure-black`}>
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

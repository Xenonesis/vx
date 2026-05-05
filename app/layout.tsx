import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne",
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vixon Consulting | Building Better Business Together",
  description: "Vixon Consulting helps businesses grow through hiring solutions, marketing & lead generation, and real estate advisory. Discover our 3-step growth methodology.",
  icons: {
    icon: "/logo.webp",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} dark`} suppressHydrationWarning>
      <body className="antialiased relative min-h-screen flex flex-col transition-colors duration-300">
        {/* Global noise texture overlay */}
        <div className="fixed inset-0 z-50 noise-bg mix-blend-overlay"></div>
        {children}
      </body>
    </html>
  );
}
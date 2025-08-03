import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

// Font setup
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Metadata (used by Next.js App Router if exported)
export const metadata = {
  title: "Amrutam Pharma",
  description: "Empowering Ayurveda with Amrutam",
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


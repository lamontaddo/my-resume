import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://lamontaddo.com"),
  title: "Lamont Addo | Software Engineer & Founder",
  description:
    "Software Engineer, AWS Solutions Architect, and founder of MonTech, IndiVerse, and CuddleBuddy.",
  openGraph: {
    title: "Lamont Addo | Software Engineer & Founder",
    description:
      "Explore Lamont Addo's digital worlds: IndiVerse, CuddleBuddy, MonTech, and Engineering.",
    url: "https://lamontaddo.com",
    siteName: "Lamont Addo",
    images: [
      {
        url: "/lamont-app-icon.jpg",
        width: 1200,
        height: 1200,
        alt: "Lamont Addo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamont Addo | Software Engineer & Founder",
    description:
      "Software Engineer, AWS Solutions Architect, and founder of MonTech, IndiVerse, and CuddleBuddy.",
    images: ["/lamont-app-icon.jpg"],
  },
  icons: {
    icon: "/lamont-app-icon.jpg",
    apple: "/lamont-app-icon.jpg",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Lamont Addo",
    statusBarStyle: "black-translucent",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
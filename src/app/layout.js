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
  title: "Better Life Gender Care",
  description: "Empowering women, advancing equality, and advocating for rights.",
      url: "https://www.betterlifegendercare.org",
    siteName: "Better Life Gender Care",
    type: "website",

  icons: {
    icon: [
      {
        url: "../../public/Images/photo_2026-04-10_22-41-29.jpg",
        type: "image/png",
        sizes: "32x32",
      },
      // You can add more icons here
    ],
  },

};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import { Sen } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const getSen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Akshar Patel | MERN Stack Developer",
  description:
    "MERN Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB. Experienced in building scalable, secure, and high-performance web applications.",
  icons: {
    icon: "/images/icon.ico",
  },
  keywords: [
    "Akshar Patel",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Full Stack Developer",
  ],
  authors: [{ name: "Akshar Patel" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${getSen.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

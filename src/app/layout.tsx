// LIBRARIES
import { ReactNode } from 'react';
import type { Metadata } from "next";

// COMPONENTS
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// STYLES
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

export const metadata: Metadata = {
  title: "Next.js App Router with TypeScript & Mongoose Template",
  description: "This project serves as a boilerplate for building modern web applications using the Next.js App Router, TypeScript**, and Mongoose for MongoDB integration.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body         
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main
            className="flex-grow container mx-auto"
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

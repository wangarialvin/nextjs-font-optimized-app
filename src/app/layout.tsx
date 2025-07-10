"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-black">
      <head>
        <title>Agricultural SaaS Platform</title>
        <meta name="description" content="Connecting farmers, market sellers, and logistics" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <header className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold">AgriConnect</h1>
        </header>
        <main className="flex-grow container mx-auto p-6">{children}</main>
        <footer className="p-6 border-t border-gray-200 text-center text-sm text-gray-600">
          &copy; 2024 AgriConnect. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

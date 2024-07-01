import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Hayya Taw",
  description:
    "Hayya Taw is a leading taxi service dedicated to providing fast, reliable, and affordable rides. We understand the importance of getting you to your destination on time and in comfort. Whether you need a ride to the airport, a quick trip across town, or a safe way to get home, we've got you covered.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

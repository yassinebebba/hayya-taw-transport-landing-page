"use client";

import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    console.log(
      `%c This website is created by Mohamed Bebba %c https://mohamedbebba.de/ `,
      "background: #333; color: #fff; padding: 5px;",
      "background: #007bff; color: #fff; padding: 5px;"
    );
  }, []);

  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}

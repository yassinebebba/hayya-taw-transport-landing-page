"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="flexBetween max-container padding-container relative z-30 py-5"
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Link href="/">
        <span className="text-xl font-bold">Hayya </span>
        <span className="text-xl font-bold text-green-500">Taw</span>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <span
            key={link.key}
            onClick={() => handleClick(link.key)}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </span>
        ))}
      </ul>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMobileMenu}
      />

      {isMobileMenuOpen && (
        <ul className="absolute left-0 top-full w-full bg-white border-t border-gray-300 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              onClick={() => {
                handleClick(link.key);
                setIsMobileMenuOpen(false);
              }}
              className="regular-16 text-gray-700 flexCenter cursor-pointer py-2 px-4 hover:font-bold hover:bg-gray-100 transition-all"
            >
              {link.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

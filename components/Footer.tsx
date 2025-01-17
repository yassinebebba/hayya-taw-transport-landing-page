import {FOOTER_CONTACT_INFO, FOOTER_LINKS, FOOTER_USEFUL_LINKS, SOCIALS} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact_us" className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <div className="flex gap-3">
              <h1 className="bold-40 lg:bold-52">Hayya</h1>
              <h1 className="bold-40 lg:bold-52 text-green-500"> Taw</h1>
            </div>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                        href={
                          link.label === "Email Officer"
                              ? `mailto:${link.value}`
                              : `tel:${link.value}`
                        }
                        key={link.label}
                        className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">{link.label}:</p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_USEFUL_LINKS.title}>
                {FOOTER_USEFUL_LINKS.links.map((link) => (
                    <Link
                        href={link.value}
                        key={link.label}
                        className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">{link.label}</p>
                    </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                      <Link href="/" key={link}>
                        <Image src={link} alt="logo" width={24} height={24}/>
                      </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20"/>
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Hayya Taw | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({title, children}: FooterColumnProps) => {
  return (
      <div className="flex flex-col gap-5">
        <h4 className="bold-18 whitespace-nowrap">{title}</h4>
        {children}
      </div>
  );
};

export default Footer;

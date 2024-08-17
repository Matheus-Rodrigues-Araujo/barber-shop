import Link from "next/link";
import { Brand } from "@/components/brand";
import { ContentHeading } from "@/components/content-heading";

import { footerContactLinks } from "../footer/constants";
import { socialLinks } from "@/constants/socials-links";
import { ContentText } from "@/components/content-text";

import "./styles.css"

export const Footer = () => {
  return (
    <footer className="footer w-full bg-black">
      <div className="footer-wrapper grid gap-3 p-10 md:grid-cols-3">
        <div className="flex flex-col text-center justify-between items-center md:items-start md:text-justify">
          <Brand testId="footer-brand" />
          <ContentText>
            Copyright © 2024 BarberXYZ
          </ContentText>
          <p className="text-white text-sm font-light">All rights reserved</p>

          <div className="flex gap-3 justify-center md:justify-start">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.route} title={link.name}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col text-center items-center">
          <ContentHeading>Contact</ContentHeading>
          {footerContactLinks.map((item) => (
            <ContentText key={item.name}>
              {item.data}
            </ContentText>
          ))}
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <Link
            className="bg-yellow-400 text-center flex justify-center items-center font-bold w-32 h-12 transiton duration-300 ease-in-out text-gray-950 hover:bg-yellow-500 text-3xl rounded-md"
            href="/sign-up"
          >
            <span>Join us</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

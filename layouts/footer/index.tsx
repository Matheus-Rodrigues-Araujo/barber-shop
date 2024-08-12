import Link from "next/link";
import { Brand } from "@/components/brand";
import { SubSectionTitle } from "@/components/subsection-title";

import { BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";

import { footerContactLinks } from "../footer/constants";

export const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 w-full bg-black">
      <div className="footer-wrapper grid gap-10 p-10 md:grid-cols-3">
        <div className="flex flex-col text-center justify-between md:text-justify">
          <Brand testId="footer-brand"/>
          <p className="text-white text-sm font-light">
            Copyright © 2024 BarberXYZ
          </p>
          <p className="text-white text-sm font-light">All rights reserved</p>

          <div className="flex gap-3 justify-center md:justify-start">
            <Link href="#" title="Instagram">
              <BiLogoInstagram
                className="cursor-pointer transition duration-300 ease-in-out hover:fill-yellow-400"
                color="white"
                size="1.8em"
              />
            </Link>

            <Link href="#" title="Whatsapp">
              <BiLogoWhatsapp
                className="cursor-pointer transition duration-300 ease-in-out hover:fill-yellow-400"
                color="white"
                size="1.8em"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col text-center justify-">
          <SubSectionTitle>Contact</SubSectionTitle>
          {footerContactLinks.map((item) => (
            <p className="text-white text-sm font-light" key={item.name}>
              {item.data}
            </p>
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

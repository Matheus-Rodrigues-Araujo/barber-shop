import { Brand } from "@/components/brand";
import { SubSectionTitle } from "@/components/subsection-title";
import { footerContactLinks, navigationLinks } from "@/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 w-full bg-black">
      <div className="footer-wrapper grid gap-10 p-10 md:grid-cols-3">
        <div className="flex flex-col text-center md:text-justify">
          <Brand />
          {navigationLinks.map((item) => (
            <Link
              className="text-white font-light text-md transition duration-300 ease-in-out hover:text-yellow-400"
              key={item.name}
              href={item.route}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col text-center justify-center">
          <SubSectionTitle>Contact</SubSectionTitle>
          {footerContactLinks.map((item) => (
            <p className="text-white text-md font-light" key={item.name}>
              {item.data}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <Link
            className="bg-yellow-400 text-center flex justify-center items-center font-bold w-32 h-12  text-gray-950 text-3xl rounded-md"
            href="/sign-up"
          >
            <span>Join us</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

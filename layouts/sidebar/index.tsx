import { Brand } from "@/components/brand";
import { NavigationLink } from "@/components/navigation-link";
import { Overlay } from "@/components/overlay";
import { socialLinks } from "@/constants/socials-links";
import Link from "next/link";

export const Sidebar = ({
  navigationLinks,
  isSidebarOpen,
}: {
  navigationLinks: any;
  isSidebarOpen: boolean;
}) => {
  return (
    <>
      <div
        data-testid="sidebar"
        className={`sidebar flex flex-col ${
          !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
        } transition-transform duration-300 ease-in-out w-[220px] fixed top-0 left-0 items-center min-h-screen z-20 pt-2 bg-black md:hidden`}
      >
        <ul className="flex flex-col gap-6 mt-5 flex-grow">
          <Brand testId="sidebar-brand" />
          <div className="flex flex-col gap-5">
            {navigationLinks.map((link: any) => (
              <li key={link.name} className="w-24">
                <NavigationLink
                  key={link.name}
                  route={link.route}
                  name={link.name}
                />
              </li>
            ))}
          </div>
        </ul>
        <div className="flex gap-6 mr-auto mb-20 ml-10">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.route} title={link.name}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      {isSidebarOpen && <Overlay data-testid="overlay" />}
    </>
  );
};

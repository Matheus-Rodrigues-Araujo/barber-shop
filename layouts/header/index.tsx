"use client";
import { navigationLinks } from "./constants";
import { Sidebar } from "../sidebar";
import { useEffect, useState } from "react";
import { TfiAlignRight } from "react-icons/tfi";
import { Brand } from "@/components/brand";
import { NavigationLink } from "@/components/navigation-link";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    if (e.target.closest(".overlay")) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const bodyStyle = document.body.style;
    isSidebarOpen ? bodyStyle.overflowY = "hidden" : "auto";

    return () => {
      bodyStyle.overflowY = "auto";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header h-24 px-10 bg-black flex">
        <div className="header-wrapper w-full flex justify-between items-center">
          <Brand testId="header-brand" />
          <nav data-testid="header-nav" className="hidden md:flex gap-3 ">
            {navigationLinks.map((link) => (
              <NavigationLink
                key={link.name}
                route={link.route}
                name={link.name}
              />
            ))}
          </nav>
          <TfiAlignRight
            className="cursor-pointer transition duration-300 ease-in-out hover:fill-yellow-400 md:hidden"
            color="white"
            size="1.8em"
            onClick={handleSidebar}
            data-testid="toggle-sidebar"
          />
        </div>
      </header>
      <Sidebar
        navigationLinks={navigationLinks}
        isSidebarOpen={isSidebarOpen}
      />
    </>
  );
};

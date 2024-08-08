"use client";
import { navigationLinks } from "../../constants";
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
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return (
    <header className="header  h-16 bg-gray-950">
      <div className="relative" >
        <div className="flex fixed top-4 w-full justify-between items-center px-10">
          <Brand />
          <nav className="hidden md:flex gap-3 ">
            {navigationLinks.map((link) => (
              <NavigationLink
                key={link.name}
                route={link.route}
                name={link.name}
              />
            ))}
          </nav>
          <TfiAlignRight
            className="cursor-pointer md:hidden"
            color="yellow"
            size="1.8em"
            onClick={handleSidebar}
          />
        </div>

        <Sidebar
          navigationLinks={navigationLinks}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </header>
  );
};

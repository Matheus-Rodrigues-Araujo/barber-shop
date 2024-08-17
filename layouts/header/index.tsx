"use client";
import { navigationLinks } from "./constants";
import { Sidebar } from "../sidebar";
import { useEffect, useState } from "react";
import { TfiAlignRight } from "react-icons/tfi";
import { Brand } from "@/components/brand";
import { NavigationLink } from "@/components/navigation-link";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState<
    "bg-yellow-400" | "bg-transparent"
  >("bg-transparent");

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
    isSidebarOpen ? (bodyStyle.overflowY = "hidden") : "auto";

    return () => {
      bodyStyle.overflowY = "auto";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (isSidebarOpen && width >= 728) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleHeaderColor = () => {
      const heroSection = document.querySelector(".hero-text");
      const rect = heroSection?.getBoundingClientRect();

      rect && rect.top < 0
        ? setHeaderColor("bg-yellow-400")
        : setHeaderColor("bg-transparent");
    };

    document.addEventListener("scroll", handleHeaderColor);
    return () => document.removeEventListener("scroll", handleHeaderColor);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`header ${headerColor} h-24 px-10 flex fixed top- left-0 w-full z-20`}
      >
        <div className="header-wrapper w-full flex justify-between items-center">
          <Brand
            testId="header-brand"
            isHeaderYellow={headerColor === "bg-yellow-400"}
          />
          <nav data-testid="header-nav" className="hidden md:flex gap-3 ">
            {navigationLinks.map((link) => (
              <NavigationLink
                key={link.name}
                route={link.route}
                name={link.name}
                isHeaderYellow={headerColor === "bg-yellow-400"}
              />
            ))}
          </nav>
          <TfiAlignRight
            className="cursor-pointer transition duration-300 ease-in-out hover:fill-yellow-400 md:hidden"
            color={headerColor === "bg-yellow-400" ? "black" : "white"}
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

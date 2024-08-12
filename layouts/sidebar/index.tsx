import { Brand } from "@/components/brand";
import { NavigationLink } from "@/components/navigation-link";
import { Overlay } from "@/components/overlay";

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
        } transition-transform duration-300 ease-in-out w-[220px] fixed top-0 left-0 items-center min-h-svh z-20 pt-2 bg-black md:hidden`}
      >
        <ul className="flex flex-col gap-3 mt-2">
          <Brand  testId="sidebar-brand"/>
          {navigationLinks.map((link: any) => (
            <li key={link.name} className="w-full ">
              <NavigationLink
                key={link.name}
                route={link.route}
                name={link.name}
              />
            </li>
          ))}
        </ul>
      </div>
      {isSidebarOpen && <Overlay data-testid="overlay" />}
    </>
  );
};

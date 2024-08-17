import { ReactNode } from "react";

export const HeroHeading = ({ children }: { children: ReactNode }) => {
  return <h1 className="font-[font-playfair] text-5xl text-yellow-400 md:text-6xl">{children}</h1>;
};

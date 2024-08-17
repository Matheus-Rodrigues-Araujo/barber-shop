import { ReactNode } from "react";

export const ContentText = ({ children }: { children: ReactNode }) => {
  return <p className="text-xl text-justify text-white font-light">{children}</p>;
};

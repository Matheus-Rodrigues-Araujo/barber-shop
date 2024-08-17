import { ReactNode } from "react";

export const ContentText = ({ children }: { children: ReactNode }) => {
  return <p className="text-xl text-white font-light">{children}</p>;
};

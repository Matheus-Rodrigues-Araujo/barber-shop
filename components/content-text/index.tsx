import { ReactNode } from "react";

export const ContentText = ({ children }: { children: ReactNode }) => {
  return <p className="text-lg text-white font-semibold">{children}</p>;
};

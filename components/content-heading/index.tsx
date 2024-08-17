import { ReactNode } from "react";

export const ContentHeading = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-yellow-400 text-3xl font-bold">{children}</h3>;
};

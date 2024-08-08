import { ReactNode } from "react";

export const SubSectionTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-yellow-400 text-xl font-bold">{children}</h3>;
};

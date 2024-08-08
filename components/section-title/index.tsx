import { ReactNode } from "react";

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-yellow-400 text-2xl font-bold" >{children}</h2>;
};

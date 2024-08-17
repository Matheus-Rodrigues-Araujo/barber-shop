import { ReactNode } from "react";

export const ContentText = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-lg text-justify text-white p-1 bg-gray-500 md:bg-transparent">
      {children}
    </p>
  );
};

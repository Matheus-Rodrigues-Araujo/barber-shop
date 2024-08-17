import Link from "next/link";
import { MdContentCut } from "react-icons/md";

export const Brand = ({
  testId,
  isHeaderYellow = false,
}: {
  testId: string;
  isHeaderYellow?: boolean;
}) => {
  return (
    <Link
      data-testid={testId}
      href="/"
      title="Logo"
      className={`flex items-center ${
        isHeaderYellow ? "text-black" : "text-yellow-400"
      } transition duration-200 ease-in text-3xl font-bold md:text-4xl`}
    >
      <MdContentCut
        size="2rem"
        color={isHeaderYellow ? "black" : "#facc15"}
        className="transition duration-200 ease-in"
      />
      BarberXYZ
    </Link>
  );
};

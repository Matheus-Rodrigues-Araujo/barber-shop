import Link from "next/link";

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
      className={`${
        isHeaderYellow ? "text-black" : "text-yellow-400"
      } transition duration-300 ease-in text-3xl font-bold md:text-4xl`}
    >
      BarberXYZ
    </Link>
  );
};

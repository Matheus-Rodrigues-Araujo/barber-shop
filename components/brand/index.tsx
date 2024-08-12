import Link from "next/link";

export const Brand = ({testId}: {testId: string}) => {
  return (
    <Link data-testid={testId} href="/" title="Logo" className="text-yellow-400 text-xl font-bold">
      BarberXYZ
    </Link>
  );
};

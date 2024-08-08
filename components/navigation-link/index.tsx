import Link from "next/link";

export const NavigationLink = ({
  route,
  name,
}: {
  route: string;
  name: string;
}) => {
  return (
    <Link
      href={route}
      title={name}
      className="text-white transition duration-300 ease-in-out hover:text-yellow-400"
    >
      {name}
    </Link>
  );
};

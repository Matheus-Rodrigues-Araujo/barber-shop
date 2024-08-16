import Link from "next/link";
import "./styles.css";
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
      className="nav-link text-white text-lg font-bold transition duration-300 p-1 ease-in-out "
    >
      {name}
      <div className="bg-yellow-400"></div>
    </Link>
  );
};

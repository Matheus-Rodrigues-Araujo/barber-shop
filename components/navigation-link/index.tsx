import Link from "next/link";
import "./styles.css";
export const NavigationLink = ({
  route,
  name,
  isHeaderYellow = false,
}: {
  route: string;
  name: string;
  isHeaderYellow?: boolean;
}) => {
  return (
    <Link
      href={route}
      title={name}
      className={`nav-link ${
        name === "Sign Up" && isHeaderYellow
          ? "bg-black text-yellow-400 rounded-sm"
          : name === "Sign Up" && !isHeaderYellow
          ? "bg-yellow-400 text-black rounded-sm"
          : isHeaderYellow
          ? "text-black"
          : "text-white"
      } px-2 py-1 text-xl font-bold transition duration-200 ease-in`}
    >
      {name}
      {name !== "Sign Up" && (
        <div className={isHeaderYellow ? "bg-black" : "bg-yellow-400"}></div>
      )}
    </Link>
  );
};

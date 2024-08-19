import Link from "next/link";
import "./styles.css";

import { ContentText } from "../content-text";

import { FaCheck } from "react-icons/fa";
import { Plan } from "@/constants/plans";

export const PriceCard = ({ name, price, description, benefits }: Plan) => {
  return (
    <div
      className={`price-card ${
        name === "Pro" ? "bg-black scale-110" : "bg-[#040404e4]"
      } flex flex-col justify-center gap-3 w-full max-w-[350px] h-[450px] rounded-lg mx-auto px-3`}
    >
      <h4 className="text-left text-white text-2xl font-semibold">{name}</h4>
      <span className="price text-white text-4xl font-bold">{price}</span>
      <ContentText>{description}</ContentText>
      <Link
        href="#"
        className="w-full p-3 text-center rounded-md bg-[#f5e6201d] border border-white text-white"
      >
        Sign Up with {name}
      </Link>

      <ul>
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-1 text-white">
            <FaCheck size="14px" color="#facc15" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

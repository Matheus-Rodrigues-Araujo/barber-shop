import { BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";

export const socialLinks = [
  {
    name: "Instagram",
    route: "#",
    icon: (
      <BiLogoInstagram
        className="cursor-pointer transition duration-300 ease-in-out hover:fill-yellow-400"
        color="white"
        size="1.8em"
      />
    ),
  },
  {
    name: "Whatsapp",
    route: "#",
    icon: (
      <BiLogoWhatsapp
        className="cursor-pointer transition duration-300 ease-in-out hover:fill-yellow-400"
        color="white"
        size="1.8em"
      />
    ),
  },
];

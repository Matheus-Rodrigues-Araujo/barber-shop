"use server";

import { Overlay } from "@/components/overlay";
import Image from "next/image";

const RootPage = () => {
  return (
    <div className="bg-gray-900">
      <div className="relative min-h-screen flex justify-start items-center">
        <Image
          src="/haircut-img.jpg"
          fill
          objectFit="cover"
          objectPosition="center"
          priority={true}
          alt="haircut image"
          className="fixed top-0 left-0 w-full h-full"
        />
        <div className="text-white font-bold z-10 px-10">
          <h1 className="text-4xl text-yellow-400 md:text-6xl">
            Lorem ipsum dolor
          </h1>
          <h2 className="text-3xl md:text-5xl">
            Duis tempor nunc sed mollis facilisis
          </h2>
          <p className="text-xl font-light">
            Aliquam porta mauris arcu, non viverra mauris venenatis nec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RootPage;

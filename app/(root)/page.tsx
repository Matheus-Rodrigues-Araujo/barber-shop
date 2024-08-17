"use server";

import Image from "next/image";
import Link from "next/link";

import { ContentText } from "@/components/content-text";
import { HeroHeading } from "@/components/hero-heading";
import { SubHeading } from "@/components/sub-heading";

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
          className="fixed top-0 left-0 w-full h-full mix-blend-luminosity"
        />
        <div className="text-white font-bold z-10 px-10">
          <HeroHeading>Lorem ipsum dolor</HeroHeading>
          <SubHeading>Duis tempor nunc sed mollis facilisis</SubHeading>
          <ContentText>
            Aliquam porta mauris arcu, non viverra mauris venenatis nec.
          </ContentText>
          <Link
            className="bg-yellow-400 text-center flex justify-center items-center 
            w-32 h-12 transiton duration-300 ease-in-out 
            text-black font-bold text-3xl rounded-md mt-5"
            href="/sign-up"
          >
            <span>Join us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RootPage;

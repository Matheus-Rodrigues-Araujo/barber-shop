"use server";

import Image from "next/image";
import Link from "next/link";

import { ContentText } from "@/components/content-text";
import { HeroHeading } from "@/components/hero-heading";
import { SubHeading } from "@/components/sub-heading";
import { ContentHeading } from "@/components/content-heading";

const RootPage = () => {
  return (
    <>
      <div className="relative min-h-[75vh] md:min-h-screen flex justify-start items-center px-10">
        <Image
          src="/haircut-img.jpg"
          fill
          objectFit="cover"
          objectPosition="center"
          priority={true}
          alt="haircut image"
          className="fixed top-0 left-0 w-full h-full"
        />
        <div className="text-white font-bold z-10 mt-6 md:mt-0">
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

      <div className="min-h-screen flex bg-yellow-400 md:items-center md:p-10">
        <div className="bg-black flex items-center gap-3 flex-col p-10 md:p-0 md:flex-row md:rounded-xl">
          <div className="relative h-[500px] w-[300px] lg:h-[700px] lg:w-[500px]">
            <Image
              src="/barber_and_customer.jpg"
              fill
              objectFit="cover"
              className="rounded-md"
              alt="barber cutting the customer's hair"
            />
          </div>

          <div className="bg-black flex-1 flex flex-col justify-center items-center gap-3 lg:p-10">
            <ContentHeading>About us</ContentHeading>
            <ContentText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mattis vehicula ultrices. Nulla eros dolor, convallis eget
              facilisis eu, faucibus eu purus. Phasellus ac faucibus lorem, ut
              tempus nibh. In in lorem a justo pharetra aliquet at ac nibh. Duis
              diam arcu, volutpat et viverra non, tempor non magna. Maecenas
              tempor condimentum euismod. Curabitur imperdiet risus nunc, et
              efficitur augue sollicitudin nec. Etiam consectetur
            </ContentText>
          </div>
        </div>
      </div>
    </>
  );
};

export default RootPage;

"use server";

import Image from "next/image";
import Link from "next/link";

import "./styles.css";

import { ContentText } from "@/components/content-text";
import { HeroHeading } from "@/components/hero-heading";
import { SubHeading } from "@/components/sub-heading";
import { ContentHeading } from "@/components/content-heading";
import { PriceCard } from "@/components/price-card";

import { plans } from "../../constants/plans";

const RootPage = () => {
  return (
    <>
      <section
        className="relative min-h-[75vh] md:min-h-screen flex justify-start items-center p-10"
        id="home"
      >
        <Image
          src="/haircut-img.jpg"
          fill
          objectFit="cover"
          objectPosition="center"
          priority={true}
          alt="haircut image"
          className="fixed top-0 left-0 w-full h-full mix-blend-luminosity"
        />
        <div className="hero-text text-white font-bold z-10 my-5 md:mt-0">
          <HeroHeading>Experience the Perfect Cut</HeroHeading>
          <SubHeading>Transform Your Look with Style and Precision</SubHeading>
          <ContentText>
            Book your appointment now and discover the unique experience our
            barbershop has to offer. <br className="hidden md:block" />
            Our team is dedicated to bringing out the best in you.
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
      </section>

      <section className="about-section flex" id="about">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="relative mx-auto h-[60vh] w-full md:h-[600px] md:w-[400px] lg:h-[900px] lg:w-[700px]">
            <Image
              src="/barber_and_customer.jpg"
              fill
              objectFit="cover"
              className="w-full h-full"
              alt="barber cutting the customer's hair"
            />
          </div>

          <div className="bg-white flex-1 flex flex-col justify-center items-center gap-3 p-10">
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
      </section>
      <section
        className="services-section flex flex-col items-center justify-center bg-yellow-400 pt-10 pb-20"
        id="services"
      >
        <div className="flex flex-col justify-center items-center gap-3 p-10">
          <ContentHeading>Plans that match your needs</ContentHeading>
          <ContentText>
            Our pricing plans are designed to be affordable, flexibe, and
            tailored to your unique needs.
          </ContentText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {plans.map(({ name, price, description, benefits }) => (
            <PriceCard
              key={name}
              name={name}
              price={price}
              description={description}
              benefits={benefits}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default RootPage;

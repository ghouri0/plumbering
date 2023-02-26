import React from "react";
import Image from "next/image";
import sink from "@/assets/sink.png";
import plumber from "@/assets/plumber.png";
import Location from "@/assets/icons/Location";
import Email from "@/assets/icons/Email";
import Phone from "@/assets/icons/Phone";

const Hero = () => {
  return (
    <section className="container mx-auto overflow-hidden mb-20">
      <div className="flex p-10 gap-x-5">
        <div className="w-1/2 self-center space-y-10">
          <div className="space-y-5">
            <span className="uppercase text-xl font-semibold text-sky-500">
              PLUMBERS
            </span>
            <h3 className="font-bold text-6xl text-[#182944]">
              Best plumbing & repair solutions with quality work
            </h3>
            <p className="text-lg font-medium text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
          </div>
          <div className="flex gap-x-5 items-center flex-start">
            <button className="rounded-lg px-8 py-6 text-lg text-white font-medium bg-sky-600 hover:bg-sky-700 hover:-translate-y-[2px] transition-transform duration-300">
              Get a Quote
            </button>
            <button className="rounded-lg px-8 py-6 text-lg text-sky-600 hover:text-white font-medium bg-none border border-sky-600 hover:bg-sky-600 hover:-translate-y-[2px] transition-transform duration-300">
              Browse Our Services
            </button>
          </div>
        </div>
        <div className="w-1/2 self-center">
          <div className="relative">
            <Image
              src={sink}
              height={600}
              width={750}
              alt="sink"
              className="object-cover"
            />
            <Image
              src={plumber}
              height={500}
              width={650}
              alt="plumber"
              className="object-contain absolute top-10 right-0"
            />
          </div>
        </div>
      </div>
      <div className="mt-32 p-20 columns-3 bg-white divide-x-2 divide-gray-200 border-2 rounded-lg drop-shadow-lg">
        <Extra
          icon={<Location className="w-10 h-10" />}
          title="Visit Our Office"
          para="149W 70th St, 9000 Los Angeles, CA"
        />
        <Extra
          icon={<Email className="w-10 h-10" />}
          title="Email:"
          para="info@plumbing.com"
        />
        <Extra
          icon={<Phone className="w-10 h-10" />}
          title="Phone:"
          para="(234) 231 - 2123"
        />
      </div>
    </section>
  );
};

export default Hero;

const Extra = ({ icon, title, para }) => {
  return (
    <div className="flex gap-x-3 items-center pl-3">
      <span className="bg-sky-100 text-blue-500 rounded-full p-3">{icon}</span>
      <div className="w-44">
        <h6 className="text-xl font-medium">{title}</h6>
        <p className=" text-blue-500 text-lg font-medium text-truncate">
          {para}
        </p>
      </div>
    </div>
  );
};

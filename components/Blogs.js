import React from "react";
import Image from "next/image";
import image1 from "@/assets/blog1.jpg";
import image2 from "@/assets/blog2.jpg";
import image3 from "@/assets/blog3.jpg";

const Blogs = () => {
  return (
    <section className="py-[10%] container mx-auto space-y-10">
      <div className="flex justify-between">
        <div className="space-y-4">
          <span className="uppercase text-xl font-bold text-sky-500">BLOG</span>
          <h3 className="font-bold text-5xl text-[#182944]">
            Check our lastest articles
          </h3>
          <p className="w-1/2 text-lg font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id
            volutpat imperdiet quis at pellentesque nunc commodo nunc purus.
          </p>
        </div>
        <button className="self-end rounded-lg border-2 border-blue-500 w-56 py-6 text-lg text-blue-500 font-medium hover:bg-blue-600 hover:text-white hover:-translate-y-[2px] transition-transform duration-300">
          Browse our services
        </button>
      </div>
      <div className="flex gap-x-5">
        <Card
          image={image1}
          title="How to clean grease out of sink drains"
          date="Dec 13, 2022"
        />
        <Card
          image={image2}
          title="When you should replace plumbing pipes?"
          date="Dec 13, 2022"
        />
        <Card
          image={image3}
          title="Why you should replace your water heater"
          date="Dec 13, 2022"
        />
      </div>
    </section>
  );
};

export default Blogs;

const Card = ({ image, title, date }) => {
  return (
    <div className="group shadow-md hover:translate-y-2 duration-300 relative h-[400px] w-[400px] border-2 rounded-2xl">
      <div className="h-1/2 relative rounded-t-2xl overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover group-hover:scale-110"
        />
      </div>
      <div className="relative text-left h-1/2 p-5">
        <h3 className="font-bold text-2xl text-neutral-800 group-hover:text-sky-500">
          {title}
        </h3>
        <span className="font-semibold text-lg text-gray-500 absolute bottom-12 left-8">
          {date}
        </span>
      </div>
      <button className="absolute top-5 right-5 bg-white rounded-lg border-2 border-blue-500 px-4 py-2 text-lg text-blue-500 font-medium hover:bg-blue-600 hover:text-white hover:-translate-y-[2px] transition-transform duration-300">
        Articles
      </button>
    </div>
  );
};

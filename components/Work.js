import React from "react";
import Image from "next/image";
import video from "@/assets/video.jpg";
import Play from "@/assets/icons/Play";

const Work = () => {
  return (
    <section className="py-[5%] bg-[#182944]">
      <div className="container mx-auto flex p-10 gap-x-5">
        <div className="w-1/2 self-center space-y-10">
          <div className="space-y-4">
            <span className="uppercase text-xl font-semibold text-amber-500">
              OUR EXPERIENCE
            </span>
            <h3 className="font-bold text-5xl text-white">
              We focus on customer satisfaction and quality
            </h3>
          </div>
          <p className="text-lg font-medium text-white">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semperole
            dalaracc lacus vel facilisis volutpat est velitolm.
          </p>
          <button className="rounded-lg px-8 py-6 text-lg text-white font-medium bg-sky-600 hover:bg-sky-700 hover:-translate-y-[2px] transition-transform duration-300">
            Get a Quote
          </button>
        </div>
        <div className="w-1/2 self-center">
          <div className="group relative overflow-hidden cursor-pointer rounded-3xl">
            <Image
              src={video}
              height={600}
              width={750}
              alt="sink"
              className="object-cover rounded-3xl group-hover:scale-110 duration-300 transition-transform delay-75"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/10">
              <span className="h-full flex items-center justify-center">
                <Play className="group-hover:scale-90 duration-300 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

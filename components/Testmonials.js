import Image from "next/image";
import user1 from "@/assets/user1.png";
import { useRef } from "react";

const Testmonials = () => {
  const ref = useRef(null);
  return (
    <section className="container mx-auto py-[10%] space-y-5 grid place-content-center">
      <div className="space-y-5 text-center">
        <span className="uppercase text-xl font-bold text-sky-500">
          TESTIMONIALS
        </span>
        <h3 className="font-bold text-5xl text-[#182944]">
          What our clients say
        </h3>
        <p className="w-1/2 mx-auto text-lg text-gray-500">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </p>
      </div>
      <div className="w-full py-5 flex items-center overflow-hidden gap-x-7">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="place-self-center rounded-lg w-fit px-8 py-6 text-lg text-white font-medium bg-sky-600 hover:bg-sky-700 hover:-translate-y-[2px] transition-transform duration-300">
        Browse our services
      </button>
    </section>
  );
};

export default Testmonials;

const Card = () => {
  return (
    <figure className="flex p-14 min-w-[48%] border rounded-xl shadow-sm">
      <div className="text-left space-y-6">
        <blockquote>
          <h4 className="text-xl font-bold">
            “A true team of expert plumbers”
          </h4>
          <p className="text-lg font-medium text-gray-600">
            Convallis posuere morbi leo urna molestie at elementum eu facilisis
            sapien pellentesque habitant morbi tristique senectus et netus et
            uteu sem integer vitae.
          </p>
        </blockquote>
        <figcaption className="font-medium flex items-center gap-x-3">
          <Image
            src={user1}
            width={50}
            height={50}
            className="object-cover w-16 h-16 rounded-full bg-blue-500"
          />
          <div>
            <div className="text-sky-500 text-lg">Sarah Dayan</div>
            <div className="text-slate-700">Staff Engineer, Algolia</div>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

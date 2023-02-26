import Image from "next/image";
import image1 from "@/assets/tap.jpg";
import Tap from "@/assets/icons/Tap";
import Service from "@/assets/icons/Service";
import image2 from "@/assets/piping.jpg";
import image3 from "@/assets/cleaning.jpg";
import Drain from "@/assets/icons/Drain";
const Services = () => {
  return (
    <section className="container mx-auto py-[10%] space-y-5 grid place-content-center">
      <div className="space-y-5 text-center">
        <span className="uppercase text-xl font-bold text-sky-500">
          Our services
        </span>
        <h3 className="font-bold text-5xl text-[#182944]">
          A wide range of services
        </h3>
        <p className="w-1/2 mx-auto text-lg text-gray-500">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </p>
      </div>
      <div className="py-5 flex items-center overflow-x-auto gap-x-7">
        <Card
          image={image1}
          icon={<Tap />}
          title="Faucet & Leak repairs"
          para="Tur adipiscing elit ametectela dalaracc lorem ipsum dolor sit ametectelacus vel facilisis semper volutpat"
        />
        <Card
          image={image2}
          title="Remodeling service"
          icon={<Service />}
          para="Tur adipiscing elit ametectela dalaracc lorem ipsum dolor sit ametectelacus vel facilisis semper volutpat"
        />
        <Card
          image={image3}
          icon={<Drain />}
          title="Drain cleaning & repairs"
          para="Tur adipiscing elit ametectela dalaracc lorem ipsum dolor sit ametectelacus vel facilisis semper volutpat"
        />
      </div>
      <button className="place-self-center rounded-lg w-fit px-8 py-6 text-lg text-white font-medium bg-sky-600 hover:bg-sky-700 hover:-translate-y-[2px] transition-transform duration-300">
        Browse our services
      </button>
    </section>
  );
};

export default Services;

const Card = ({ image, icon, title, para }) => {
  return (
    <div className="group hover:translate-y-2 duration-300 relative h-[600px] w-[430px] border-2 rounded-2xl">
      <div className="h-1/2 relative rounded-t-2xl overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover group-hover:scale-110"
        />
      </div>
      <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {icon}
      </div>
      <div className="grid place-content-center gap-y-4 text-center h-1/2 px-7">
        <h3 className="font-bold text-2xl text-neutral-800 group-hover:text-sky-500">
          {title}
        </h3>
        <p className="text-lg text-gray-700">{para}</p>
        <a
          href={"https://plumbingtemplate.webflow.io/home/services"}
          className="font-bold text-sky-500 text-xl"
        >
          View Services
        </a>
      </div>
    </div>
  );
};

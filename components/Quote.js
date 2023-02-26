import cta from "@/assets/cta.png";
import Image from "next/image";
import Phone from "@/assets/icons/Phone";
import Pipe from "@/assets/icons/Pipe";

const Quote = () => {
  return (
    <section className="text-white flex gap-x-14 items-center pt-20 relative  justify-center  bg-blue-500">
      <span className="absolute top-0 left-0">
        <Pipe className="w-10 h-10" />
      </span>
      <div>
        <Image
          src={cta}
          height={550}
          width={550}
          priority
          className="object-cover rounded-2xl drop-shadow-md"
        />
      </div>
      <div className="w-[600px] space-y-6">
        <div className="space-y-4">
          <h3 className="font-bold text-6xl">
            Having a problem?
            <br />
            We’ll fixed it today!
          </h3>
        </div>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semperole
          dalaracc lacus vel facilisis volutpat est velitolm.
        </p>
        <div className="flex gap-x-7 items-center ">
          <div className="inline-flex gap-x-3 hover:text-gray-800 cursor-pointer duration-300 transition-colors">
            <Phone className="h-14 w-14" />
            <span className="text-3xl font-bold">(234) 231 - 2123</span>
          </div>
          <span className="text-lg font-medium">or</span>
          <button className="rounded-lg px-8 h-16 text-lg hover:text-white text-blue-500 font-medium bg-white hover:bg-neutral-700 hover:-translate-y-[2px] transition-transform duration-300">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quote;

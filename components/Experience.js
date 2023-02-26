import Image from "next/image";
import experience from "@/assets/experience.jpg";

const Experience = () => {
  return (
    <section className="text-white flex gap-x-14 items-center justify-center py-[10%] min-h-screen max-h-[900px] bg-[#182944]">
      <div>
        <Image
          src={experience}
          height={550}
          width={550}
          priority
          className="object-cover rounded-2xl drop-shadow-md"
        />
      </div>
      <div className="w-[550px] space-y-6">
        <div className="space-y-4">
          <span className="uppercase text-xl font-semibold text-amber-500">
            OUR EXPERIENCE
          </span>
          <h3 className="font-bold text-5xl">
            We focus on customer satisfaction and quality
          </h3>
        </div>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semperole
          dalaracc lacus vel facilisis volutpat est velitolm.
        </p>
        <div className="flex gap-x-7">
          <div>
            <div className="font-black text-7xl">
              25<span className="text-amber-500">+</span>
            </div>
            <span className="font-medium text-lg">Years Experience</span>
          </div>
          <div>
            <div className="font-black text-7xl">
              500<span className="text-sky-500">+</span>
            </div>
            <span className="font-medium text-lg">Happy Clients</span>
          </div>
          <div>
            <div className="font-black text-7xl">
              20<span className="text-amber-500">+</span>
            </div>
            <span className="font-medium text-lg">Qualified Experts</span>
          </div>
        </div>
        <button className="rounded-lg px-8 py-6 text-lg font-medium bg-sky-600 hover:bg-sky-700 hover:-translate-y-[2px] transition-transform duration-300">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default Experience;

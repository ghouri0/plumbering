import { Facebook, Insta, Twitter } from "@/assets/icons/Social";
import Location from "@/assets/icons/Location";
import Email from "@/assets/icons/Email";
import Phone from "@/assets/icons/Phone";

const Header = () => {
  return (
    <div className="container mx-auto border-b py-7 flex items-center justify-between">
      <div className="flex gap-x-5 divide-x">
        <div className="group flex gap-x-3 items-center pl-3 hover:cursor-pointer">
          <span className="group-hover:-translate-y-[2px] transition-transform duration-300 bg-sky-100 text-blue-500 rounded-full p-2">
            <Email className="w-6 h-6" />
          </span>
          <p className="group-hover:text-blue-500 text-lg transition-colors">
            contact@plumbing.com
          </p>
        </div>
        <div className="group flex gap-x-3 items-center pl-3 hover:cursor-pointer">
          <span className="group-hover:-translate-y-[2px] transition-transform duration-300 bg-sky-100 text-blue-500 rounded-full p-2">
            <Phone className="w-6 h-6" />
          </span>
          <p className="group-hover:text-blue-500 text-lg transition-colors">
            (234) 231 - 2123
          </p>
        </div>
        <div className="flex gap-x-3 items-center pl-3">
          <span className="bg-sky-100 text-blue-500 rounded-full p-2">
            <Location className="w-6 h-6" />
          </span>
          <p className="text-lg">149W 70th St, 9000 Los Angeles, CA</p>
        </div>
      </div>
      <ul className="inline-flex gap-x-4">
        <li>
          <Facebook className="w-6 h-6 hover:stroke-blue-500 hover:cursor-pointer" />
        </li>
        <li>
          <Insta className="w-6 h-6 hover:stroke-blue-500 hover:cursor-pointer" />
        </li>
        <li>
          <Twitter className="w-6 h-6 hover:stroke-blue-500 hover:cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};

export default Header;

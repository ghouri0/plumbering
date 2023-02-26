import Logo from "@/assets/icons/Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-6">
      <div>
        <Logo />
      </div>
      <ul className="inline-flex gap-x-6 text-lg">
        <li className="hover:text-blue-500 duration-100 cursor-pointer font-medium text-neutral-800">
          Home
        </li>
        <li className="hover:text-blue-500 duration-100 cursor-pointer font-medium text-neutral-800">
          About
        </li>
        <li className="hover:text-blue-500 duration-100 cursor-pointer font-medium text-neutral-800">
          Services
        </li>
        <li className="hover:text-blue-500 duration-100 cursor-pointer font-medium text-neutral-800">
          Pages
        </li>
        <li className="hover:text-blue-500 duration-100 cursor-pointer font-medium text-neutral-800">
          Cart(0)
        </li>
      </ul>
      <button className="rounded-lg w-fit px-5 py-4 text-lg text-white font-medium bg-sky-600 hover:bg-sky-700 hover:-translate-y-[2px] transition-transform duration-300">
        Get a Quote
      </button>
    </nav>
  );
};

export default Navbar;

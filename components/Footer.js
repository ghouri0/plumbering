import Logo from "@/assets/icons/Logo";
import { Facebook, Insta, Twitter } from "@/assets/icons/Social";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex items-start container mx-auto py-14">
        <div className="w-1/4 space-y-6">
          <Logo />
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
          <div className="inline-flex gap-x-5">
            <span className="group hover:-translate-y-[2px] transition-all duration-300 border-2 p-2 border-blue-500 rounded-md hover:bg-blue-500">
              <Facebook className="w-5 h-5 stroke-blue-500 group-hover:stroke-white" />
            </span>
            <span className="group hover:-translate-y-[2px] transition-all duration-300 border-2 p-2 border-blue-500 rounded-md hover:bg-blue-500">
              <Insta className="w-5 h-5 stroke-blue-500 group-hover:stroke-white" />
            </span>
            <span className="group hover:-translate-y-[2px] transition-all duration-300 border-2 p-2 border-blue-500 rounded-md hover:bg-blue-500">
              <Twitter className="w-5 h-5 stroke-blue-500 group-hover:stroke-white" />
            </span>
          </div>
        </div>
        <div className="w-1/4">
          <h5 className="text-xl mb-10 font-bold text-blue-500">
            Utility pages
          </h5>
          <ul className="space-y-2 text-gray-600 text-lg font-medium columns-2">
            <li className="cursor-pointer hover:text-blue-500">Home (Sales)</li>
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">About</li>
            <li className="cursor-pointer hover:text-blue-500">Services</li>
            <li className="cursor-pointer hover:text-blue-500">
              Service Single
            </li>
            <li className="cursor-pointer hover:text-blue-500">Blog</li>
            <li className="cursor-pointer hover:text-blue-500">Blog Post</li>
            <li className="cursor-pointer hover:text-blue-500">Package</li>
            <li className="cursor-pointer hover:text-blue-500">
              Package Single
            </li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
            <li className="cursor-pointer hover:text-blue-500">Coming soon</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h5 className="text-xl mb-10 font-bold text-blue-500">
            Utility pages
          </h5>
          <ul className="space-y-2 text-gray-600 text-lg font-medium">
            <li className="cursor-pointer hover:text-blue-500">Style guide</li>
            <li className="cursor-pointer hover:text-blue-500"> Start here</li>
            <li className="cursor-pointer hover:text-blue-500">
              404 not found
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              Password protected
            </li>
            <li className="cursor-pointer hover:text-blue-500"> Licenses</li>
            <li className="cursor-pointer hover:text-blue-500">Changelog</li>
            <li className="text-xl font-bold text-blue-500">
              More Webflow Templates
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h5 className="text-xl mb-10 font-bold text-blue-500">
            Subscribe to our newsletter
          </h5>
          <input
            placeholder="Enter your email"
            className="rounded-lg w-full drop-shadow-md py-5 px-4 placeholder:text-lg font-medium focus:outline-blue-500"
          />
          <button className="mt-4 rounded-lg px-5 h-14 text-lg text-white font-medium bg-blue-500 hover:bg-blue-600 hover:-translate-y-[2px] transition-transform duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mx-auto container font-medium text-center text-lg py-10 border-t">
        Copyright © 2023 | Developed by{" "}
        <span className="text-blue-500 font-semibold text-xl">Ali Ghouri</span>{" "}
        - Powered by{" "}
        <span className="text-blue-500 font-semibold text-xl">Vercel</span>
      </div>
    </footer>
  );
};

export default Footer;

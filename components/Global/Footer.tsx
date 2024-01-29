import SubscribeSearch from "@/components/Home/SubscribeSearch";
import classNames from "classnames";
import React from "react";
import { FaChevronRight, FaFacebook } from "react-icons/fa";
import InputSearch from "../Home/InputSearch";

export default function Footer() {
  return (
    <div className="bg-[#EAEEF5] mt-40 py-16 px-16">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className=" flex-1 flex flex-col space-y-1">
          <h1 className="font-black md:mb-4 lg:mb-8">COMPANY</h1>
          <a
            href="#hero"
            className="hover:text-black hover:ml-2 transition-all"
          >
            Home
          </a>
          <a
            href="#hero"
            className="hover:text-black hover:ml-2 transition-all"
          >
            Pricing
          </a>
          <a
            href="#hero"
            className="hover:text-black hover:ml-2 transition-all"
          >
            Our licence
          </a>
        </div>

        <div className=" flex-1 flex flex-col space-y-1">
          <h1 className="font-black md:mb-4 lg:mb-8">HELP</h1>
          <a
            href="#hero"
            className="hover:text-black hover:ml-2 transition-all"
          >
            Support
          </a>
          <a
            href="#hero"
            className="hover:text-black hover:ml-2 transition-all"
          >
            FAQs
          </a>
          <a
            href="#hero"
            className="hover:text-black hover:ml-2 transition-all"
          >
            Contact us
          </a>
        </div>
        <div className=" flex-1 flex flex-col space-y-1">
          <h1 className="font-black md:mb-4 lg:mb-8">PRODUCTS</h1>
          <a
            href="#hero"
            className="hover:text-black hover:ml-2 transition-all"
          >
            magicoon Library
          </a>
          <a
            href="#hero"
            className="hover:text-black hover:ml-2 transition-all"
          >
            magicoon Search
          </a>
        </div>
        <div className="flex-1 flex flex-col space-y-4">
          <h1 className="font-black md:mb-4 lg:mb-8">NEWSLETTER</h1>
          <h3 className="">
            Stay close and subscribe to Newsletter to receive new updates.
          </h3>
          <InputSearch fullWidth isPrimary isWhiteBg placeholder="Your Email" />
          <h3 className="mb-8">
            <span className="font-bold">Email:</span> Support@magicoon.com
          </h3>
          <div className="flex space-x-2">
            <button className="btn btn-circle btn-sm btn-primary">
              <FaFacebook size={18} color="white" />
            </button>
            <button className="btn btn-circle btn-sm btn-primary">
              <FaFacebook size={18} color="white" />
            </button>
            <button className="btn btn-circle btn-sm btn-primary">
              <FaFacebook size={18} color="white" />
            </button>
            <button className="btn btn-circle btn-sm btn-primary">
              <FaFacebook size={18} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

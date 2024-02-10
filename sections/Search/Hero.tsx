import HeroSeach from "@/components/Search/HeroSeach";
import Image from "next/image";
import React from "react";
import { LinearGradient } from "react-text-gradients";

type Props = {};
export default function Hero({}: Props) {
  return (
    <div className="px-6 max-w-[1224px] md:max-w-[1240px] md:px-8 mx-auto flex flex-col text-primary-content">
      <div className="flex flex-col justify-center space-x-8 items-center md:flex-row md:items-start md:justify-start mb-12">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="font-extrabold text-4xl text-[40px] mb-6 uppercase">
            <p>Find your</p>
            <p>
              <LinearGradient
                gradient={["to right", "#F5D5E3 0%, #AE99FF 28.78%"]}
                className=""
              >
                UI icons
              </LinearGradient>{" "}
              right now!
            </p>
          </div>
          <p className="text-lg font-medium">
            <span className="font-extrabold">1080 FREE </span>high-quality UI
            icons that provide multiple styles, made for designers and
            developers.
          </p>
        </div>
        <div className="flex flex-1 justify-end items-center">
          <div className="flex bg-white text-primary rounded-lg">
            <Image
              className="rounded-tl-lg rounded-bl-lg"
              alt="hero-search"
              src="/hero-search.jpeg"
              width={172}
              height={132}
            />
            <div className="flex flex-col justify-center items-center p-4 space-y-[10px] font-medium text-sm">
              <p className="md:max-w-[188px]">
                high-quality essential UI icons, modernly designed, featuring
                multiple styles, and categories.
              </p>
              <p className="self-end">Read more</p>
            </div>
          </div>
        </div>
      </div>
      <HeroSeach />
    </div>
  );
}
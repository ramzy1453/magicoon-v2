import HeroSeach from "@/components/Search/HeroSearch";
import { useSearchStore } from "@/store/zustand";
import Image from "next/image";
import { LinearGradient } from "react-text-gradients";

export default function Hero() {
  const { heroRef } = useSearchStore();
  return (
    <div
      ref={heroRef}
      className="px-6 max-w-[1224px] md:max-w-[1240px] md:px-8 mx-auto flex flex-col text-primary-content"
    >
      <div className="flex flex-col justify-center space-x-0 md:space-x-8 md:flex-row md:items-start md:justify-start mb-12">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="font-extrabold text-4xl text-[40px] mb-6 uppercase text-center md:text-left">
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
          <p className="text-lg font-medium text-center md:text-left">
            <span className="font-extrabold">1080 FREE </span>high-quality UI
            icons that provide multiple styles, made for designers and
            developers.
          </p>
        </div>
        <div className="flex flex-1 justify-center md:justify-end items-center">
          <div className="flex flex-col md:flex-row  bg-white text-primary rounded-lg min-h-[132px]">
            <Image
              className="rounded-tl-lg rounded-bl-lg"
              alt="hero-search"
              src="/hero-search.jpeg"
              width={172}
              height={132}
            />
            <div className="flex flex-col w-[204px] justify-center items-center p-4 space-y-[10px] font-medium text-sm">
              <p className="">
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

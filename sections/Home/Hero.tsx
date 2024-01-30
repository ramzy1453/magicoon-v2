import React from "react";
import { LinearGradient } from "react-text-gradients";
import { HiLightningBolt } from "react-icons/hi";
import InputSearch from "@/components/Home/InputSearch";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Hero() {
  const { isSm, is2xl, isMd } = useMediaQuery();
  return (
    <>
      <LinearGradient
        gradient={[
          "to right",
          "rgba(199,110,196,1) 0%, rgba(255,144,152,1) 49%, rgba(57,108,232,1) 100%",
        ]}
        className="text-5xl md:text-6xl font-black text-center"
      >
        5,400+ ICONS
      </LinearGradient>

      <h1 className="text-5xl md:text-6xl lg:text-6xl font-black text-center">
        Ready For Your Next Project!
      </h1>
      <p className="text-lg md:w-3/4 lg:w-1/2 text-center text-primary text-medium">
        Free and premium high-quality vector icons library, that provides
        multiple formats and styles, made for designers and developers.
      </p>

      <InputSearch fullWidth={!isMd} />

      <div className="flex space-x-4">
        <button className="btn h-14 text-lg btn-primary btn-outline rounded-full px-6">
          <div>LIVE PREVIEW</div>
        </button>
        <button className="btn h-14 text-lg btn-info hover:bg-[#0c48d3] rounded-full px-6">
          <HiLightningBolt size={18} /> <div>BUY NOW!</div>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center space-y-1">
        <div>You want to write a review?</div>
        <a href="http:localhost:8000/" className="underline">
          Click here!
        </a>
      </div>
    </>
  );
}

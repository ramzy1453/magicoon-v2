import React from "react";
import { LinearGradient } from "react-text-gradients";
import { HiLightningBolt } from "react-icons/hi";
import InputSearch from "@/components/Home/InputSearch";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Hero() {
  const { isMd } = useMediaQuery();
  return (
    <>
      <h1 className="text-center">
        <LinearGradient
          gradient={[
            "to right",
            "rgba(199,110,196,1) 0%, rgba(255,144,152,1) 49%, rgba(57,108,232,1) 100%",
          ]}
          className="text-5xl md:text-6xl font-black"
        >
          5,400+ ICONS
        </LinearGradient>

        <p className="text-5xl md:text-6xl font-black">
          Ready For Your Next Project!
        </p>
      </h1>
      <p className="text-lg text-primary text-center md:w-3/4 lg:w-1/2">
        Free and premium high-quality vector icons library, that provides
        multiple formats and styles, made for designers and developers.
      </p>

      <InputSearch fullWidth={!isMd} />

      <div className="flex space-x-6">
        <button className="btn text-lg btn-primary btn-outline rounded-full px-6">
          <div>LIVE PREVIEW</div>
        </button>
        <button className="btn text-lg btn-info hover:bg-[#0c48d3] rounded-full px-6">
          <HiLightningBolt size={18} /> <div>BUY NOW!</div>
        </button>
      </div>
    </>
  );
}

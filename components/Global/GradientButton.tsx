import React from "react";
import { FaSitemap } from "react-icons/fa";
import { PiCaretDownFill } from "react-icons/pi";

import styles from "../../styles/navbar.module.css";
import classNames from "classnames";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import GradientButtonMobile from "./GradientButtonMobile";
type Props = {};

export default function GradientButton({}: Props) {
  const { isMd } = useMediaQuery();
  if (!isMd)
    return <GradientButtonMobile magicoonWebsites={magicoonWebsites} />;

  return (
    <div className="dropdown dropdown-end p-0">
      <button
        tabIndex={0}
        role="button"
        className={classNames(
          "h-12 px-4 space-x-4 rounded-full",
          styles["gradient-button"]
        )}
      >
        <FaSitemap size={16} />
        <div>Our Products</div>
        <div className="relative">
          <div className="rounded-full w-6 h-6 bg-white flex items-center justify-center opacity-10" />
          <PiCaretDownFill
            color="white"
            size={16}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </button>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-0 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-[676px]"
      >
        <div className="flex items-center p-6">
          <Image alt="star" src="/star.png" width={48} height={48} />
          <p className="font-medium text-lg ml-8">
            Discover the only digital marketplace for selling and downloading
            icons.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 bg-[#EAEEF5]">
          {magicoonWebsites.map((mgc) => (
            <div
              key={mgc.id}
              className="bg-white rounded-lg p-4 space-y-4 cursor-pointer hover:scale-[1.02] transition-all"
            >
              <Image alt="mgc" src={mgc.src} width={176} height={25} />
              <p className="text-primary text-lg">{mgc.description}</p>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

const magicoonWebsites = [
  {
    id: 0,
    src: "/mgc-library.png",
    description: "One place to buy icons",
  },
  {
    id: 1,
    src: "/mgc-search.png",
    description: "Carefully crafted Icon Packs",
  },
  {
    id: 2,
    src: "/mgc-freebies.png",
    description: "Carefully crafted Icon Packs",
  },
  {
    id: 3,
    src: "/mgc-market.png",
    description: "One place to buy icons",
  },
];

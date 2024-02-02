import { useState, useRef, RefObject } from "react";
import { FaSitemap } from "react-icons/fa";
import { PiCaretDownFill } from "react-icons/pi";

import styles from "../../styles/navbar.module.css";
import classNames from "classnames";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import GradientButtonMobile from "./GradientButtonMobile";
import { useOnClickOutside } from "usehooks-ts";
type Props = {};

export default function GradientButton({}: Props) {
  const { isMd } = useMediaQuery();

  const [open, setOpen] = useState<boolean>();

  //close the dropdown when clicking outside the referenced element
  const ref = useRef() as RefObject<HTMLElement>;

  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  //onclick handler when clicking a menu item
  const handleClick = () => {
    setOpen(false);
  };

  if (!isMd)
    return <GradientButtonMobile magicoonWebsites={magicoonWebsites} />;

  return (
    <div
      className={classNames("dropdown dropdown-end", {
        "dropdown-open": open,
      })}
      ref={ref as RefObject<HTMLDivElement>}
    >
      <button
        tabIndex={0}
        role="button"
        onClick={() => setOpen((prev) => !prev)}
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
        className={classNames(
          "mt-3 z-[1] p-0 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-[676px]",
          {
            hidden: !open,
          }
        )}
      >
        <div className="flex items-center p-8 text-primary">
          <Image alt="star" src="/star.png" width={48} height={48} />
          <p className="font-medium text-[16px] ml-8 w-2/3">
            Discover the only digital marketplace for selling and downloading
            icons.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 p-8 bg-[#EAEEF5]">
          {magicoonWebsites.map((mgc) => (
            <div
              key={mgc.id}
              className="bg-white rounded-lg p-4 space-y-4 cursor-pointer hover:scale-[1.02] transition-all"
            >
              <Image alt="mgc" src={mgc.src} width={176} height={25} />
              <p className="text-primary text-sm font-medium">
                {mgc.description}
              </p>
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

import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { PiCaretDownFill } from "react-icons/pi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { SlGrid } from "react-icons/sl";
import classes from "../../styles/navbar.module.css";
import { useOnClickOutside } from "usehooks-ts";

export default function NavbarMobile() {
  const [openLinks, setOpenLinks] = useState<boolean>(false);
  const [openGradient, setOpenGradient] = useState<boolean>(false);
  const ref = useRef() as RefObject<HTMLElement>;

  const toggleLinks = () => {
    setOpenLinks((prev) => !prev);
    setOpenGradient(false);
  };
  const closeLinks = () => {
    setOpenLinks(false);
  };
  const toggleGradient = () => {
    setOpenGradient((prev) => !prev);
    setOpenLinks(false);
  };
  const closeGradient = () => {
    setOpenGradient(false);
  };

  useOnClickOutside(ref, () => {
    setOpenLinks(false);
  });

  const HamburgerIcon = openLinks ? RxCross1 : RxHamburgerMenu;
  return (
    <>
      <div className="px-6 flex items-center justify-between border-b border-[#DDE2EB] bg-[#F8F9FB] sticky top-0 z-10 h-24">
        <div className="space-x-6 flex items-center justify-center">
          <HamburgerIcon
            size={24}
            className="cursor-pointer"
            onClick={toggleLinks}
          />
          <Link href="/">
            <Image
              src="/magicoonLogo.svg"
              alt="Magicoon Logo"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <button
          tabIndex={0}
          role="button"
          onClick={toggleGradient}
          className={classNames(
            "h-12 px-4 space-x-4 rounded-full text-primary-content",
            classes["gradient-button"]
          )}
        >
          <SlGrid size={16} />
          <div className="relative">
            <div className="rounded-full w-6 h-6 bg-white flex items-center justify-center opacity-10" />
            <PiCaretDownFill
              color="white"
              size={16}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </button>
      </div>
      {openLinks && (
        <>
          <div className="fixed top-24 left-0 w-screen h-screen bg-black bg-opacity-[0.32] z-50" />
          <ul
            ref={ref as RefObject<HTMLUListElement>}
            className={`fixed left-0 flex flex-col w-full bg-[#EAEEF5] ${
              openLinks ? "z-50" : "z-0"
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeLinks}
                className="py-4 px-6 border-b border-[#DCE3ED] font-bold hover:bg-[#DCE3ED]"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </>
      )}
      {openGradient && (
        <div className="fixed flex flex-col top-24 left-0 w-screen h-[calc(100vh-96px)] bg-white z-[999]">
          <div className="flex items-center p-8 text-primary">
            <Image alt="star" src="/star.png" width={48} height={48} />
            <p className="font-medium text-[16px] ml-8 w-2/3">
              Discover the only digital marketplace for selling and downloading
              icons.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-8 bg-[#EAEEF5]">
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
        </div>
      )}
    </>
  );
}

const links = [
  { name: "Start", href: "/#start" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact", href: "/contact" },
];

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

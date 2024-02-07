import { RefObject, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/navbar.module.css";
import classNames from "classnames";
import { SlGrid } from "react-icons/sl";
import { PiCaretDownFill } from "react-icons/pi";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>();

  const ref = useRef() as RefObject<HTMLElement>;

  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <nav className="border-b border-[#DDE2EB] bg-[#F8F9FB] sticky top-0 z-10 px-8">
      <div className="text-medium h-24 flex items-center justify-between mx-auto max-w-[1176px]">
        <Link href="/">
          <Image
            src="/magicoonLogo.svg"
            alt="Magicoon Logo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>
        <div className="flex space-x-8 items-center justify-center">
          <ul className="flex justify-center items-center space-x-8 transition-all">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="font-bold hover:text-info"
              >
                {link.name}
              </Link>
            ))}
          </ul>
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
                "h-12 px-4 space-x-4 rounded-full text-primary-content",
                classes["gradient-button"]
              )}
            >
              <SlGrid size={16} />
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
                  Discover the only digital marketplace for selling and
                  downloading icons.
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
          </div>{" "}
        </div>
      </div>
    </nav>
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

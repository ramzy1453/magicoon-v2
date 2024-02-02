import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/navbar.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";
import cn from "classnames";
import GradientButton from "./GradientButton";
import GradientButtonMobile from "./GradientButtonMobile";

export default function Navbar() {
  return (
    <nav className="border-b border-[#DDE2EB] bg-[#F8F9FB] sticky top-0 z-10">
      <div className="text-medium h-24 flex items-center justify-between mx-auto max-w-[1176px]">
        <Link href="/">
          <Image
            src="/magicoonLogo.svg"
            alt="Magicoon Logo"
            width={150}
            height={150}
            className="cursor-pointer min-w-[80px]"
          />
        </Link>
        <div className="flex space-x-4 items-center justify-center">
          <ul className="flex justify-center items-center space-x-0 transition-all">
            {links.map((link) => (
              <li key={link.name} className={classes["nav-li"]}>
                <a href={`#${link.href}`} className={classes["nav-a"]}>
                  {link.name}
                </a>
              </li>
            ))}
            <Link
              href="/contact"
              className={cn(classes["nav-li"], classes["nav-a"])}
            >
              Contact
            </Link>
          </ul>
          <GradientButton />
        </div>
      </div>
    </nav>
  );
}

type Links = {
  name: string;
  href: string;
}[];

const links: Links = [
  { name: "Start", href: "start" },
  { name: "Pricing", href: "pricing" },
];

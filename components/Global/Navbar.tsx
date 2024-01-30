import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/navbar.module.css";
import { CiMenuBurger } from "react-icons/ci";
import useMediaQuery from "@/hooks/useMediaQuery";
import cn from "classnames";
import { motion, useScroll, Variants } from "framer-motion";
import GradientButton from "./GradientButton";
import GradientButtonMobile from "./GradientButtonMobile";

export default function Navbar() {
  const { isLg } = useMediaQuery();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest < scrollY.getPrevious()) {
        setHidden(false);
      } else if (latest > 100 && latest > scrollY.getPrevious()) {
        setHidden(true);
      }
    });
  });

  return (
    <motion.nav
      className="border-b border-[#DDE2EB] bg-white sticky top-0 z-10"
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <div className="text-medium h-24 flex items-center justify-between mx-auto max-w-[1176px]">
        <Link href="/">
          <Image
            src="/magicoonLogo.svg"
            alt="Magicoon Logo"
            width={150}
            height={150}
            className="cursor-pointer hover:scale-105 transition-all min-w-[80px]"
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
    </motion.nav>
  );
}

const variants: Variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -25 },
};

type Links = {
  name: string;
  href: string;
}[];

const links: Links = [
  { name: "Start", href: "start" },
  { name: "Pricing", href: "pricing" },
];

import { ReactNode } from "react";
import { FaChevronRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaDribbble } from "react-icons/fa6";

import InputSearch from "../Home/InputSearch";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#EAEEF5] mt-40 pt-16 pb-8 px-16">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(links).map(([category, values]) => {
          return (
            <div key={category} className="flex-1 flex flex-col space-y-1">
              <p className="font-black md:mb-4 lg:mb-8">
                {category.toUpperCase()}
              </p>

              {values.map(({ name, href }) => {
                return (
                  <NextLink
                    key={name}
                    href={href}
                    className="hover:text-black relative transition-all group"
                  >
                    <FaChevronRight
                      size={10}
                      className="absolute -left-6 top-1/2 -translate-y-1/2 group-hover:-left-4 transition-all"
                    />
                    <span className="group-hover:font-bold">{name}</span>
                  </NextLink>
                );
              })}
            </div>
          );
        })}
        <div className="flex-1 flex flex-col space-y-4">
          <p className="font-black md:mb-4">NEWSLETTER</p>
          <p className="">
            Stay close and subscribe to Newsletter to receive new updates.
          </p>
          <InputSearch fullWidth isPrimary isWhiteBg placeholder="Your Email" />
          <p className="mb-8">
            <span className="font-bold">Email:</span> Support@magicoon.com
          </p>
          <div className="flex space-x-2">
            {socialMedias.map((social) => (
              <a
                href={social.href}
                className="btn btn-circle btn-sm btn-info hover:bg-[#0c48d3]"
              >
                <social.icon size={18} color="white" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#DCE3ED] flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between text-primary pt-6 mt-[72px]">
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8">
            <Link href="https://www.magicoon.com" className="font-extrabold">
              LICENSE
            </Link>
            <Link href="https://www.magicoon.com" className="font-extrabold">
              UPDATES
            </Link>
          </div>
          <p className="font-medium">
            Copyright © 2024 magicoon. All Rights Reserved.
          </p>
        </div>
        <div className="space-y-3">
          <p>
            MADE IN <span className="font-extrabold">ALGERIA</span>
          </p>
          <p>
            <span className="font-extrabold">BY:</span> Seyfeddine B.
          </p>
        </div>
      </div>
    </div>
  );
}

const socialMedias = [
  {
    icon: FaXTwitter,
    href: "https://react-icons.github.io/react-icons/search/#q=Dribbble",
  },
  {
    icon: FaInstagram,
    href: "https://react-icons.github.io/react-icons/search/#q=Dribbble",
  },
  {
    icon: FaDribbble,
    href: "https://react-icons.github.io/react-icons/search/#q=Dribbble",
  },
  {
    icon: FaFacebook,
    href: "https://react-icons.github.io/react-icons/search/#q=Dribbble",
  },
];

const links = {
  company: [
    { name: "Home", href: "#hero" },
    { name: "Pricing", href: "#pricing" },
    { name: "Our licence", href: "/terms-of-use" },
  ],
  help: [
    { name: "Support", href: "#hero" },
    { name: "FAQs", href: "#hero" },
    { name: "Contact us", href: "/contact" },
  ],
  products: [
    { name: "magicoon Library", href: "/contact" },
    { name: "magicoon Search", href: "/contact" },
  ],
};

function NextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
}

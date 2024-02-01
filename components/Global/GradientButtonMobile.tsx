import { PiCaretDownFill } from "react-icons/pi";
import styles from "../../styles/navbar.module.css";
import classNames from "classnames";
import Image from "next/image";

type Props = {
  magicoonWebsites: {
    id: number;
    src: string;
    description: string;
  }[];
};

export default function GradientButtonMobile({ magicoonWebsites }: Props) {
  return (
    <div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className={classNames(
            "btn-circle cursor-pointer",
            styles["gradient-button"]
          )}
        >
          <div className="relative">
            <div className="rounded-full w-6 h-6 bg-white flex items-center justify-center opacity-10" />
            <PiCaretDownFill
              color="white"
              size={16}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          tabIndex={0}
          className="menu p-4 w-[85%] min-h-full bg-base-100 text-base-content"
        >
          <div className="flex items-center p-6">
            <Image alt="star" src="/star.png" width={48} height={48} />
            <p className="font-medium text-lg ml-8">
              Discover the only digital marketplace for selling and downloading
              icons.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 bg-[#EAEEF5]">
            {magicoonWebsites.map((mgc) => (
              <div
                key={mgc.id}
                className="bg-white rounded-2xl p-4 space-y-4 cursor-pointer hover:scale-[1.02] transition-all"
              >
                <Image alt="mgc" src={mgc.src} width={176} height={25} />
                <p className="text-primary text-lg">{mgc.description}</p>
              </div>
            ))}
          </div>
        </ul>
      </div>
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

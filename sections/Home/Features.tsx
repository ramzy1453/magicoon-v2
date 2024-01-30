import FeatureItem from "@/components/Home/FeatureItem";
import Image from "next/image";
import classNames from "classnames";

export default function Features() {
  return (
    <>
      <div
        className={classNames(
          "flex flex-col px-4 lg:px-12 py-8 space-x-0 space-y-8 bg-[#EAEEF5]",
          "lg:flex-row lg:justify-between lg:space-x-14 lg:space-y-0 rounded-xl"
        )}
      >
        <div className="flex flex-col justify-evenly flex-1">
          <div className="divider font-bold text-2xl">FEATURES</div>
          <div className="space-y-8">
            <h1 className="text-2xl text-center font-black md:text-4xl md:leading-[60px]">
              Different Formats & Features at your Disposal
            </h1>
            <div className="flex flex-col space-y-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center text-md font-bold space-x-2"
                >
                  <Image
                    className="mr-2 border"
                    width={16}
                    height={16}
                    alt="check_circle_filled"
                    src="check_circle_filled.svg"
                  />
                  <div>{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4 lg:gap-8">
          {Array(8)
            .fill(0)
            .map((i, k) => (
              <FeatureItem
                title="FIGMA"
                subtitle="Format"
                icon="figma_icon.svg"
              />
            ))}
        </div>
      </div>
      <div
        className="p-8 md:p-12 text-white rounded-br-lg rounded-bl-lg relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(199,110,196,1) 11%, rgba(57,108,232,1) 100%)",
        }}
      >
        <div className="grid grid-cols-2 xl:grid-cols-5 gap-8">
          <div className="space-y-2 flex flex-col justify-center col-span-2 xl:col-span-1">
            <h1 className="font-black text-3xl">Great Variety</h1>
            <h2 className="text-md">
              Huge set of icons, categories and formats all at your fingertips.
            </h2>
          </div>

          {iconsDescriptions.map(([n, title, subtitle]) => (
            <div className="flex flex-col space-y-2" key={title}>
              <span className="font-black text-3xl">{n}</span>
              <h2 className="text-md">{title}</h2>
              <h2 className="text-md">{subtitle}</h2>
            </div>
          ))}
        </div>
        <div
          className="absolute right-0 top-0 h-full w-1/2"
          style={{
            backgroundImage: "url(bg-icons.png)",
            backgroundSize: "cover",
            backgroundPosition: "inherit",
            color: "black",
          }}
        ></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:grid-cols-4 xl:gap-10 my-16">
        <div className="flex flex-col space-y-3">
          <h1 className="font-black text-2xl">Perfect for</h1>
          <h3 className="text-sm font-regular">
            Can be used for all types of devices and interfaces.
          </h3>
        </div>
        {perfectFor.map(([icon, title]) => (
          <div
            key={title}
            className="rounded-xl bg-[#EAEEF5] flex px-4 py-6 items-center"
          >
            <div className="flex h-12 w-12 place-content-center bg-white rounded-full">
              <Image alt="figma-icon" src={icon} width={18} height={18} />
            </div>
            <h1 className="text-lg font-semibold ml-5">{title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

const features = [
  "Free and Premium Icons.",
  "5,400+ Icons (1,350+ icons × 4 styles).",
  "4 Styles - Light, Regular, Filled, Duotone.",
  "29 Popular Categories.",
  "Support - Fig, Xd, IconJar, AI, EPS, SVG, PNG.",
  "24 x 24px Grid Size.",
  "Perfect for Big or Small Projects.",
];

const iconsFeatures = [];

const iconsDescriptions = [
  [5400, "ICONS", "1350+ Icons x 4 Styles"],
  [29, "CATEGORIES", "For each style"],
  [4, "STYLES", "For all icons"],
  [7, "FORMATS", "For each style"],
];

const perfectFor = [
  ["figma_icon.svg", "Websites"],
  ["figma_icon.svg", "Applications"],
  ["figma_icon.svg", "Dashboard"],
];

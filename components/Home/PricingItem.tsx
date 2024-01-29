import classNames from "classnames";
import Image from "next/image";
import React from "react";

type Props = {
  pricingItem: IPricingItem;
  isMobile?: boolean;
};

export default function PricingItem({ pricingItem, isMobile }: Props) {
  return (
    <div
      className={classNames("border rounded-xl overflow-hidden", {
        "px-5 lg:px-10 py-8 lg:py-14": !isMobile,
        "border-info relative": pricingItem.isPopular,
        "px-10 py-14": isMobile,
      })}
    >
      {pricingItem.isPopular && (
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(199,110,196,1) 11%, rgba(57,108,232,1) 100%)",
          }}
          className="absolute cursor-pointer hover:scale-105 transition-all text-white top-0 right-0 bg-info rounded-bl-xl text-lg px-8 py-2"
        >
          Popular
        </div>
      )}
      <div id="header" className="flex flex-col space-y-4 mb-6">
        <div>
          <h1 className="text-primary text-md font-black">SOLO USER</h1>
          <h2>For solo work as a designer or developer.</h2>
        </div>
        <div className="flex items-center space-x-4">
          <h1
            className={classNames("font-black", {
              "text-3xl lg:text-5xl": !isMobile,
              "text-5xl": isMobile,
            })}
          >
            ${pricingItem.price}
          </h1>
          <span className="font-bold text-lg">/One time</span>
        </div>
      </div>
      <div className="flex items-center justify-center mb-8">
        <button
          className={classNames(
            "btn btn-info rounded-full btn-block hover:bg-[#124AD5]",
            {
              "btn-md": isMobile,
              "btn-sm lg:btn-md": !isMobile,
            }
          )}
        >
          CHOOSE PLAN
        </button>
      </div>
      <div id="details-container" className="flex flex-col space-y-4">
        {pricingItem.content.map((detail) => {
          if (detail.link) {
            const [before, after] = detail.title?.split(detail.link.split);
            return (
              <div className="pl-0">
                <div className="flex">
                  <Image
                    alt="icon"
                    src={`check-circle-${detail.approved ? "blue" : "red"}.svg`}
                    width={16}
                    height={16}
                    className="mr-3"
                  />

                  <h4 className="font-bold">
                    {before}
                    <a
                      href={detail.link.to}
                      className="text-blue-600 dark:text-blue-500 underline"
                    >
                      {detail.link.split}
                    </a>
                    {after}
                  </h4>
                </div>
                {detail.subtitle && (
                  <div className="flex">
                    <div className="w-4 h-4 mr-3" />
                    <h6 className="text-sm text-[#25314C]">
                      {detail.subtitle}
                    </h6>
                  </div>
                )}
              </div>
            );
          }
          return (
            <div className="pl-0">
              <div className="flex">
                <Image
                  alt="icon"
                  src={`check-circle-${detail.approved ? "blue" : "red"}.svg`}
                  width={16}
                  height={16}
                  className="mr-3"
                />
                <h4 className="font-bold">{detail.title}</h4>
              </div>
              {detail.subtitle && (
                <div className="flex">
                  <div className="w-4 h-4 mr-3" />
                  <h6 className="text-sm text-[#25314C]">{detail.subtitle}</h6>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export type IPricingDetails = {
  title: string;
  subtitle?: string;
  approved: boolean;
  link?: {
    split: string;
    to: string;
  };
};

export type IPricingItem = {
  title: string;
  description: string;
  price: number;
  isPopular?: boolean;
  content: IPricingDetails[];
};

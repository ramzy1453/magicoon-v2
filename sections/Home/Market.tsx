import React from "react";
import { LinearGradient } from "react-text-gradients";
import styles from "../../styles/navbar.module.css";

import "swiper/css";
import "swiper/css/pagination";
import MarketItem from "@/components/Home/MarketItem";
import classNames from "classnames";
export default function Market() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-12">
        <h1 className="text-5xl font-extrabold">
          magicoon{" "}
          <LinearGradient gradient={["to right", "#396CE8 0%, #C76EC4 100%"]}>
            Market
          </LinearGradient>
        </h1>
        <div>
          <h4 className="text-lg text-center font-medium">
            We'd like you to be able to use magicoon in the best way.
          </h4>
          <h4 className="text-lg text-center">
            The section below will tell you how.{" "}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(4)
            .fill(0)
            .map((e, i) => i * 10 + 21)
            .map((e) => (
              <MarketItem price={e} />
            ))}
        </div>
        <button
          className={classNames(
            "h-12 px-6 rounded-full font-bold",
            styles["gradient-button"]
          )}
        >
          GO TO MARKET!
        </button>
      </div>

      <div className="mt-40 flex flex-col lg:flex-row justify-around bg-[#EAEEF5] rounded-xl py-12 px-12 space-y-8 space-x-0 lg:space-x-8 lg:space-y-0 items-center lg:items-start">
        <div className="flex-1 flex flex-col items-center space-y-8 justify-center lg:items-start">
          <h1 className="text-5xl font-extrabold">magicoon</h1>
          <LinearGradient
            gradient={[
              "to right",
              "rgba(199,110,196,1) 0%, rgba(255,144,152,1) 49%, rgba(57,108,232,1) 100%",
            ]}
            className="text-5xl font-extrabold"
          >
            Market
          </LinearGradient>
          <h1 className="text-lg font-medium text-center lg:text-left">
            We'd like you to be able to use magicoon in the best way. The
            section below will tell you how.
          </h1>
          <button className="btn btn-primary px-6 text-lg rounded-full">
            START NOW!
          </button>
        </div>
        <div className="w-fit h-fit flex-1">
          <MarketItem />
        </div>
        <div className="w-fit h-fit flex-1">
          <MarketItem />
        </div>
      </div>
    </>
  );
}

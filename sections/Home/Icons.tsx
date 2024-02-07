import IconItem, { Props as Icon } from "@/components/Home/IconItem";
import classNames from "classnames";
import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";

export default function Icons() {
  return (
    <>
      <p className="text-5xl text-[44px] font-black text-center text-primary mb-8">
        1,350 ICONS X 4 STYLES
      </p>
      <div className="font font-medium text-center text-lg mb-10">
        <p>
          The set contains 1,350 icons with 4 different styles for each, which
          makes them +5,400 icons in total.
        </p>
        <p>Neat and clear shapes, at your fingertips!</p>
      </div>
      <div
        className={classNames(
          "grid grid-cols-2 gap-x-24 gap-y-8",
          "sm:grid-cols-4 sm:gap-8",
          "xl:gap-20"
        )}
      >
        {icons.map((icon) => {
          return <IconItem key={icon.border} {...icon} />;
        })}
      </div>
    </>
  );
}

const icons: Icon[] = [
  {
    Icon: FaAccessibleIcon,
    style: "1 px",
    border: "Light",
  },
  {
    Icon: FaAccessibleIcon,
    style: "1.5 px",
    border: "Regular",
  },
  {
    Icon: FaAccessibleIcon,
    style: "Solid",
    border: "Filled",
  },
  {
    Icon: FaAccessibleIcon,
    style: "Two Tone",
    border: "Duotone",
  },
];

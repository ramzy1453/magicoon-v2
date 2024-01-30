import IconItem, { Icon } from "@/components/Home/IconItem";
import classNames from "classnames";
import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";

export default function Icons() {
  return (
    <>
      <div className="divide-y-8" />
      <h1 className="text-3xl font-black text-center">
        1,350 ICONS X 4 STYLES
      </h1>
      <div className="space-y-1">
        <p className="text-center text-sm">
          The set contains 1,350 icons with 4 different styles for each, which
          makes them +5,400 icons in total.
        </p>
        <p className="text-center text-sm">
          Neat and clear shapes, at your fingertips!
        </p>
      </div>
      <div
        className={classNames(
          "grid grid-cols-2 gap-x-24 gap-y-8",
          "sm:grid-cols-4 sm:gap-8",
          "xl:gap-16"
        )}
      >
        {icons.map((icon) => {
          return <IconItem {...icon} />;
        })}
      </div>
    </>
  );
}

const icons: Icon[] = [
  {
    Icon: FaAccessibleIcon,
    style: "Solid",
    border: "Filled",
  },
  {
    Icon: FaAccessibleIcon,
    style: "Solid",
    border: "Filled",
  },
  {
    Icon: FaAccessibleIcon,
    style: "Solid",
    border: "Filled",
  },
  {
    Icon: FaAccessibleIcon,
    style: "Solid",
    border: "Filled",
  },
];

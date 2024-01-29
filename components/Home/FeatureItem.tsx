import cn from "classnames";
import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
};

export default function FeatureItem(props: Props) {
  return (
    <div
      className={cn(
        "col-span-1 row-span-6 p-6 rounded-2xl bg-white bg-opacity-100",
        "flex flex-col lg:p-4 lg:flex-row items-center justify-center gap-5"
      )}
    >
      <div className="flex btn btn-circle place-content-center rounded-full bg-[#EAEEF5]">
        <Image alt="figma-icon" src={props.icon} width={18} height={18} />
      </div>
      <div className="flex flex-col items-center">
        <h1 className={cn("text-lg text-primary font-bold mb-1")}>
          {props.title}
        </h1>
        <h3 className="text-sm text-secondary font-semibold">
          {props.subtitle}
        </h3>
      </div>
    </div>
  );
}

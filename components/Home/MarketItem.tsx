import Image from "next/image";
import React from "react";

type Props = {
  price?: number;
};

export default function MarketItem(props: Props) {
  return (
    <div className="card card-compact bg-base-100 shadow flex-1">
      <Image
        src="/1 - Detail Images - magicoon - Modern icons library 1800-1360.png"
        alt="Shoes"
        className="rounded-tr-xl rounded-tl-xl w-full"
        width={376}
        height={278}
      />
      <div className="card-body">
        <div className="flex justify-between items-center">
          <p className="text-md font-medium">magicoon - 288 UI icons library</p>
          {props.price ? (
            <p className="font-bold text-lg">${props.price}</p>
          ) : (
            <button className="btn btn-primary btn-xs">FREE</button>
          )}
        </div>
        <p className="text-sm font-bold">
          <span className="text-[#8594B4]">By </span>
          magicoon Library
        </p>
      </div>
    </div>
  );
}

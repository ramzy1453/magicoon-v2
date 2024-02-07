import classNames from "classnames";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  width?: string | "full";
  isPrimary?: boolean;
  placeholder?: string;
  isWhiteBg?: boolean;
  height?: string;
  bottomIcon?: string;
};

export default function InputSearch({
  width,
  isPrimary,
  placeholder,
  isWhiteBg,
  height = "h-14",
  bottomIcon = "bottom-2.5",
}: Props) {
  return (
    <div
      className={classNames(
        "relative",
        {
          "w-1/2": width !== "full",
          "w-full": width === "full",
        },
        height
      )}
    >
      <input
        type="search"
        id="default-search"
        className={classNames(
          "text-black block border-2 focus:border-black outline-none border-[#DDE2EB] w-full p-4 text-sm rounded-full placeholder-gray-400",
          {
            "bg-transparent hover:bg-[#EAEEF5]": !isWhiteBg,
            "bg-white": isWhiteBg,
          },
          height
        )}
        placeholder={placeholder || "Search icons …"}
        required
      />
      <button
        type="submit"
        className={classNames(
          "transition-all text-white absolute end-2.5 font-medium rounded-full text-sm p-2",
          bottomIcon,
          {
            "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300":
              !isPrimary,
            "btn-primary": isPrimary,
          }
        )}
      >
        <FaArrowRight size={18} />
      </button>
    </div>
  );
}
